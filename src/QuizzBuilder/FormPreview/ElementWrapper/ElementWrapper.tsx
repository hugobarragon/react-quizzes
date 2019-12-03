import React from "react";
import Row from "antd/es/row/index";
import Col from "antd/es/col/index";
import DeleteButton from "./DeleteButton";
import EditElement from "./EditElement/index";
import TranslatedText from "../../../translations/TranslatedText";

// applies delete and edit capabilities
export default (props: any) => {
  const { toolboxData, inputData } = props;
  return (
    <div className="ElementWrapper">
      <Row>
        <Col xs={24} sm={18}>
          <TranslatedText id={toolboxData.name} />
        </Col>
        <Col xs={24} sm={6} style={{ textAlign: "right" }}>
          <EditElement {...props} />
          &nbsp;
          <DeleteButton id={inputData.id} />
        </Col>
      </Row>
      <Row>{props.children}</Row>
    </div>
  );
};
