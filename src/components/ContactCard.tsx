import React from "react";
import { Contact } from "../store/contactsSlice";

interface ContactCardProps {
  contact: Contact;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-lg font-semibold">
          {contact.firstName} {contact.lastName}
        </div>
        <div
          className={`px-2 py-1 rounded ${
            contact.status === "Active"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {contact.status}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(contact.id)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-4 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(contact.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
