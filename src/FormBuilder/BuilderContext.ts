import { createContext } from "react";
import { MessagesRecord } from "../translations/TranslatedText";
import { IState } from "./reducer/reducer";
import { IActions } from "./reducer/actions";

interface IContextProps {
  toolBox: Array<Object>;
  language: string;
  messages: MessagesRecord;
  state: IState;
  dispatch: (arg: IActions) => void;
}

/* Form Builder reducer context */
const BuilderContext = createContext({} as IContextProps);

export default BuilderContext;
