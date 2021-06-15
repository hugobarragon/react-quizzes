import DnDWrapper from "./DnDWrapper";
import React, { useContext } from "react";
import Empty from "antd/es/empty/index";
import Form from "antd/es/form/index";
import QuizzContext, { IQuizzBuilderContext } from "../../QuizzContext";
import ElementWrapper from "./ElementWrapper/ElementWrapper";
import { moveElement } from "../reducer/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function PreviewForm(props: any) {
  const { state, toolBox, language, dispatch } = useContext(
    QuizzContext
  ) as IQuizzBuilderContext;
  const { form } = props;
  const form_data = state.get("data");

  function moveCard(dragIndex: number, hoverIndex: number) {
    dispatch(moveElement(dragIndex, hoverIndex));
  }

  // shows the inputs from the toolbox that are added to the current builder state
  return (
    <Form>
      <DndProvider backend={HTML5Backend}>
        {form_data.map((item: any, i: number) => {
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
            <DnDWrapper
              key={item.id}
              index={i}
              id={item.id}
              moveCard={moveCard}
            >
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
            </DnDWrapper>
          );
        })}
      </DndProvider>
    </Form>
  );
}

export default Form.create()(PreviewForm);
