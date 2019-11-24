import React, { forwardRef } from "react";
import DatePicker from "antd/es/date-picker/index";
import FormItem from "antd/es/form/FormItem";

export default forwardRef((props: any, ref: any) => {
  const { form, inputData, language } = props,
    { required, questions, id, defaultValue } = inputData,
    { getFieldDecorator } = form;

  return (
    <FormItem
      colon={false}
      label={
        <label
          dangerouslySetInnerHTML={{
            __html: questions[language] || "no question for selected language"
          }}
        />
      }
    >
      {getFieldDecorator(id, {
        initialValue: defaultValue,
        rules: [
          {
            required,
            message: "Required Field"
          }
        ]
      })(<DatePicker /* ref={ref} isClearable */ />)}
    </FormItem>
  );
});
