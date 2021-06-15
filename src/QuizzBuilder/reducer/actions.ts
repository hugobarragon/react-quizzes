export const addElement = (item: object) => {
  return {
    type: "ADD_ELEMENT",
    item,
  } as const;
};

export const patchElement = (id: string, newitem: Object) => {
  return {
    type: "PATCH_ELEMENT",
    id,
    newitem,
  } as const;
};

export const deleteElement = (id: string) => {
  return {
    type: "DELETE_ELEMENT",
    id,
  } as const;
};

export const moveElement = (oldIndex: number, newIndex: number) => {
  return {
    type: "MOVE_ELEMENT",
    oldIndex,
    newIndex,
  } as const;
};

export type IActions = ReturnType<
  | typeof addElement
  | typeof deleteElement
  | typeof patchElement
  | typeof moveElement
>;
