import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: "Active" | "Inactive";
}

interface ContactsState {
  list: Contact[];
}

const initialState: ContactsState = {
  list: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Omit<Contact, "id">>) => {
      const newContact: Contact = {
        ...action.payload,
        id: Date.now(),
      };
      state.list.push(newContact);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.list.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
