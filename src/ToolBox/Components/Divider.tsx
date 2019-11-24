import React, { forwardRef } from "react";
import FormItem from "antd/es/form/FormItem";
import Divider from "antd/es/divider/index";

export default forwardRef(() => {
  return (
    <FormItem colon={false}>
      <Divider />
    </FormItem>
  );
});
