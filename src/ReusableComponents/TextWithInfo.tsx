import React from "react";
import Icon from "antd/es/icon";
import Tooltip from "antd/es/tooltip";

export default ({ children, title }: any) => {
  return (
    <Tooltip title={title || "empty"}>
      <Icon type="info-circle" theme="twoTone" />
      &nbsp;
      <span>{children}</span>
    </Tooltip>
  );
};
