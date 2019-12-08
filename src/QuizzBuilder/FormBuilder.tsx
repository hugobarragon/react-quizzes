import React, { useReducer, memo, useEffect } from "react";
import { reducer, initialState } from "./reducer/reducer";
import Row from "antd/es/row/index";
import Col from "antd/es/col/index";
import ToolBox from "./ToolBoxContainer";
import FormPreview from "./FormPreview/FormPreview";
import QuizzContext, { getDefaultContext } from "../QuizzContext";
import { usePrevious } from "../customHooks";
import isEqual from "lodash.isequal";
import "../assets/FormBuilder.css";

export default memo(function(props: any) {
  const { onChange, initialValue, ...rest } = props,
    [state, dispatch] = useReducer(reducer, initialState(initialValue)),
    contextValue = {
      ...getDefaultContext(rest),
      state,
      dispatch
    },
    formData = state.get("data");
  const previousFormData = usePrevious(formData);

  // effect to set
  useEffect(() => {
    // effect to notify parent that form data had a diff
    if (
      typeof onChange === "function" &&
      previousFormData &&
      !isEqual(previousFormData, formData)
    ) {
      onChange(formData);
    }
  }, [onChange, formData, previousFormData]);

  // creates two colons 1 with toolbox and the other with the added inputs
  return (
    <div className="react-quizzes-builder">
      <QuizzContext.Provider value={contextValue}>
        <Row style={{ height: "100%" }}>
          <Col sm={6} xs={24} order={0}>
            <ToolBox />
          </Col>
          <Col xs={24} sm={18} order={1} style={{ height: "100%" }}>
            <FormPreview />
          </Col>
        </Row>
      </QuizzContext.Provider>
    </div>
  );
});
