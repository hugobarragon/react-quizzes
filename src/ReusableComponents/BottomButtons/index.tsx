import React from "react";
import { Button, Col } from "antd";
import TranslatedText from "../../translations/TranslatedText";

// applies delete and edit capabilities
export default (props: any) => {
  const { onClose, onSubmit } = props;

  return (
    <Col
      span={24}
      style={{
        textAlign: "right"
      }}
    >
      <Button onClick={onClose} style={{ marginRight: 8 }}>
        <TranslatedText id="btn.cancel" />
      </Button>
      <Button onClick={onSubmit} type="primary">
        <TranslatedText id="btn.save" />
      </Button>
    </Col>
  );
};
