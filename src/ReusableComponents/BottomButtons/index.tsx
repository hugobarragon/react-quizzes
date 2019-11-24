import React from "react";
import { Button } from "antd";
import TranslatedText from "../../translations/TranslatedText";

// applies delete and edit capabilities
export default (props: any) => {
  const { onClose, onSubmit } = props;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "100%",
        borderTop: "1px solid #e9e9e9",
        padding: "10px 16px",
        background: "#fff",
        textAlign: "right"
      }}
    >
      <Button onClick={onClose} style={{ marginRight: 8 }}>
        <TranslatedText id="btn.cancel" />
      </Button>
      <Button onClick={onSubmit} type="primary">
        <TranslatedText id="btn.save" />
      </Button>
    </div>
  );
};
