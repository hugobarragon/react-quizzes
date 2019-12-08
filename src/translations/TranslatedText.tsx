import React, { useContext, memo } from "react";
import QuizzContext from "../QuizzContext";
import LocaleCode from "locale-code";
import en_US from "./messages/en-US.json";

interface IdMessage {
  [key: string]: string;
}
export interface MessagesRecord {
  [key: string]: IdMessage;
}

export const defaultMessages: MessagesRecord = {
  "en-US": en_US
};

function TranslatedText(props: { id: string }) {
  const { id } = props,
    { messages, language } = useContext(QuizzContext),
    { validateLanguageCode } = LocaleCode;

  // checks valid language
  if (typeof language !== "string" || !validateLanguageCode(language)) {
    const no_language_error =
      "language supplied not string or not complience with ISO";
    console.error(no_language_error);
    throw no_language_error;
  }

  // checks valid messages
  if (typeof messages !== "object" || !messages.hasOwnProperty(language)) {
    const no_language_in_messages_error =
      "messages not object or does not include current language";
    console.error(no_language_in_messages_error);
    throw no_language_in_messages_error;
  }
  let translated_message = "";
  // checks valid id
  if (!messages[language].hasOwnProperty(id)) {
    const no_id = "id not found in current language messages";
    console.error(no_id);
    translated_message = id;
    // throw no_id;
  } else {
    translated_message = messages[language][id];
  }

  return <span className="translated">{translated_message}</span>;
}

export default memo(TranslatedText);
