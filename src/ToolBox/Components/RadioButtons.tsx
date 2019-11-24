import React, { forwardRef } from "react";
import RadioGroup from "antd/es/radio/group";
import Radio from "antd/es/radio/radio";
import FormItem from "antd/es/form/FormItem";

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
        <RadioGroup>
          {options.map((option: any) => (
            <Radio
              key={option.value}
              value={option.value}
              style={{
                // on long answers makes breakline so it does not overflow
                whiteSpace: "normal"
              }}
            >
              {option.text[language]}
            </Radio>
          ))}
        </RadioGroup>
      )}
    </FormItem>
  );
});
