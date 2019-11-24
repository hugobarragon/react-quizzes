import React, { forwardRef } from "react";
import Select from "antd/es/select/index";
import FormItem from "antd/es/form/FormItem";

const SelectOption = Select.Option;

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
        <Select mode="tags" >
          {options.map((option: any) => {
            return (
              <SelectOption value={option.value} key={option.value}>
                {option.text[language]}
              </SelectOption>
            );
          })}
        </Select>
      )}
    </FormItem>
  );
});
