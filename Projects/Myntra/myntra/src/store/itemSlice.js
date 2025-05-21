import { createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

const itemsSlice = createSlice({
  name: 'items',
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItems: (store, action) => {

    }
  }
});

export const itemActions = itemsSlice.actions;
 export default itemsSlice;

 