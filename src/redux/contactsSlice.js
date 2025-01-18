import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
  },
  reducers: {
    addContact: (state, action) => {
      const match = state.items.some(
        (item) =>
          (item.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()) &
          (item.number === action.payload.number)
      );
      if (!match) {
        state.items.push(action.payload);
      } else {
        toast.error("Duplicate contact detected", {
          position: "bottom-right",
        });
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsSliceReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const { selectContacts } = contactsSlice.selectors;
