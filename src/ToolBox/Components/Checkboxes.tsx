import React, { forwardRef } from "react";
import Checkbox from "antd/es/checkbox/index";
import FormItem from "antd/es/form/FormItem";

const CheckboxGroup = Checkbox.Group;

export default forwardRef((props: any, ref: any) => {
  const { form, inputData, language } = props,
    { required, questions, defaultValue, id, options } = inputData,
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
      })(
        <CheckboxGroup>
          {options.map((option: any) => (
            <Checkbox value={option.value} key={option.value}>
              {option.text[language]}
            </Checkbox>
          ))}
        </CheckboxGroup>
      )}
    </FormItem>
  );
});
