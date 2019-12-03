import React, { useReducer, memo, useEffect } from "react";
import { reducer, initialState } from "./reducer/reducer";
import Row from "antd/es/row/index";
import Col from "antd/es/col/index";
import ToolBox from "./ToolBoxContainer";
import FormPreview from "./FormPreview/FormPreview";
import { defaultMessages } from "../translations/TranslatedText";
import BuilderContext from "./BuilderContext";
import defaulttoolBox from "../ToolBox/index";
import { usePrevious } from "../customHooks";
import isEqual from "lodash.isequal";
import "../FormBuilder.css";

export default memo(function (props: any) {
  const { toolBox, language, messages, onChange, initialValue } = props,
    [state, dispatch] = useReducer(reducer, initialState(initialValue)),
    contextValue = {
      messages: messages || defaultMessages,
      language: language || "en-US",
      toolBox: toolBox || defaulttoolBox(),
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
      <BuilderContext.Provider value={contextValue}>
        <Row style={{ height: "100%" }}>
          <Col sm={6} xs={24} order={0}>
            <ToolBox />
          </Col>
          <Col xs={24} sm={18} order={1} style={{ height: "100%" }}>
            <FormPreview />
          </Col>
        </Row>
      </BuilderContext.Provider>
    </div>
  );
});
