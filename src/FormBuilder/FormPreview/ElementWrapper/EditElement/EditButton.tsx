import React from "react";
import Button, { ButtonProps } from "antd/es/button/index";

// applies delete and edit capabilities
export default (props: ButtonProps) => {
  return <Button type="primary" icon="edit" shape="circle" {...props} />;
};
