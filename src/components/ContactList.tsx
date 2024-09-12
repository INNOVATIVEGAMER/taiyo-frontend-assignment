import React from "react";
import { Contact } from "../store/contactsSlice";
import ContactCard from "./ContactCard";

interface ContactListProps {
  contacts: Contact[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onEdit,
  onDelete,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {contacts.map((contact) => (
      <ContactCard
        key={contact.id}
        contact={contact}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default ContactList;
