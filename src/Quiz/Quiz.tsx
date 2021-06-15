import React from "react";
import QuizzContext, {
  getDefaultContext,
  IQuizzContext,
} from "../QuizzContext";
import TranslatedText from "../translations/TranslatedText";
import { Empty, Button, Form } from "antd";

const { Item: FormItem, useForm } = Form;

function Quizz(props: any) {
  const { data, submitButton = true, ...rest } = props;
  const [form] = useForm();
  const contextValue = getDefaultContext(rest as IQuizzContext);

  // submit handler
  function handleSubmit(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    const { onSubmit } = props;

    form.validateFields().then((values: any) => {
      if (typeof onSubmit === "function") {
        // sends values to parent if has onSubmit
        onSubmit(values);
      }
    });
  }

  return (
    <div className="react-quizzes-quizz">
      <QuizzContext.Provider value={contextValue}>
        <Form className="react-quizzes-quizz" form={form}>
          {data.map((item: any) => {
            const current_key = item.element;
            // searchs for the current input on the toolbox to get the component
            const found_toolbox_input = contextValue["toolBox"].find(
              (toolBoxInput: any) => current_key === toolBoxInput.key
            ) as any;
            // finds input and wrapps it with delete and edit button
            const Component = found_toolbox_input
              ? found_toolbox_input.Component
              : Empty;

            return (
              <Component
                // render the toolbox component
                key={item.id}
                form={form}
                toolboxData={found_toolbox_input}
                inputData={item}
                language={contextValue["language"]}
              />
            );
          })}
          {submitButton ? (
            <FormItem>
              <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                <TranslatedText id="btn.submit" />
              </Button>
            </FormItem>
          ) : null}
        </Form>
      </QuizzContext.Provider>
    </div>
  );
}

export default Quizz;
