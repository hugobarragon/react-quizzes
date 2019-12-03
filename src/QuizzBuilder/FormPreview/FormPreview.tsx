import React, { useContext } from "react";
import Empty from "antd/es/empty/index";
import Form from "antd/es/form/index";
import BuilderContext from "../BuilderContext";
import ElementWrapper from "./ElementWrapper/ElementWrapper";

function PreviewForm(props: any) {
  const { state, toolBox, language } = useContext(BuilderContext),
    { form } = props,
    form_data = state.get("data");

  // shows the inputs from the toolbox that are added to the current builder state
  return (
    <Form>
      {form_data.map((item: any) => {
        const current_key = item.element;
        // searchs for the current input on the toolbox to get the component
        const found_toolbox_input = toolBox.find(
          (toolBoxInput: any) => current_key === toolBoxInput.key
        ) as any;
        // finds input and wrapps it with delete and edit button
        const Component = found_toolbox_input
          ? found_toolbox_input.Component
          : Empty;

        return (
          <ElementWrapper
            // render the input wrapper with delete and edit button
            toolboxData={found_toolbox_input}
            inputData={item}
            key={item.id}
          >
            <Component
              // render the toolbox component
              form={form}
              toolboxData={found_toolbox_input}
              inputData={item}
              language={language}
            />
          </ElementWrapper>
        );
      })}
    </Form>
  );
}

export default Form.create()(PreviewForm);
