import { IActions } from "./actions";
import clonedeep from "lodash.clonedeep";

type Maptype = Map<string, any>;

function mapClone(map: Maptype) {
  return clonedeep(map);
}

export const initialState = (initialValue: any) =>
  new Map<string, any>([["data", initialValue || []]]);

export type IState = ReturnType<typeof initialState>;

export function reducer(state: IState, action: IActions) {
  switch (action.type) {
    case "ADD_ELEMENT": {
      const new_state = mapClone(state),
        new_data = new_state.get("data");
      const { item } = action;
      new_data.push(item);

      return new_state.set("data", new_data);
    }

    case "DELETE_ELEMENT": {
      const new_state = mapClone(state),
        new_data = new_state.get("data"),
        { id } = action;

      for (let index = 0; index < new_data.length; index++) {
        const element = new_data[index];
        if (element["id"] === id) {
          // if it finds equal id on list deletes it
          new_data.splice(index, 1);
        }
      }

      return new_state.set("data", new_data);
    }

    case "PATCH_ELEMENT": {
      const new_state = mapClone(state),
        new_data = new_state.get("data"),
        { id, newitem } = action;

      for (let index = 0; index < new_data.length; index++) {
        const element = new_data[index];
        if (element["id"] === id) {
          // if it finds equal id on list updates it
          new_data[index] = Object.assign(element, newitem);
          break;
        }
      }

      return new_state.set("data", new_data);
    }

    case "MOVE_ELEMENT": {
      const new_state = mapClone(state);
      const new_data = new_state.get("data");
      const { newIndex, oldIndex } = action;

      if (newIndex >= new_data.length) {
        var k = newIndex - new_data.length + 1;
        while (k--) {
          new_data.push(undefined);
        }
      }
      new_data.splice(newIndex, 0, new_data.splice(oldIndex, 1)[0]);

      return new_state.set("data", new_data);
    }

    default:
      throw new Error("unkown reducer action type");
  }
}
