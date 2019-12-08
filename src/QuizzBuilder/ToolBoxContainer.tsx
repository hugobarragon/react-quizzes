import React, { useContext } from "react";
import QuizzContext, { IQuizzBuilderContext } from "../QuizzContext";
import List from "antd/es/list/index";
import { addElement } from "./reducer/actions";
import uuidV4 from "uuid/v4";
import TranslatedText from "../translations/TranslatedText";

const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;

interface IinputData {
  id: string;
  element: string;
  required: boolean;
  questions: { [key: string]: any }; // @TODO CHANGE TO QUESTIONS TYPE
  options?: { [key: string]: any }; // @TODO CHANGE TO OTIONS TYPE
}

export default (/* props */) => {
  const { dispatch, toolBox } = useContext(
    QuizzContext
  ) as IQuizzBuilderContext;

  function onClickHandler(item: any) {
    const elementOptions: IinputData = {
      id: uuidV4(),
      element: item.key,
      required: false,
      questions: item.questions
    };

    if (item.options) {
      elementOptions["options"] = item.options;
    }

    dispatch(addElement(elementOptions));
  }

  return (
    <List
      itemLayout="horizontal"
      style={{ margin: "5px" }}
      dataSource={toolBox}
      renderItem={(item: any) => (
        <ListItem onClick={() => onClickHandler(item)}>
          <ListItemMeta
            avatar={item.icon}
            title={<TranslatedText id={item.name} />}
            description={
              item.description ? <TranslatedText id={item.description} /> : null
            }
          />
        </ListItem>
      )}
    />
  );
};
