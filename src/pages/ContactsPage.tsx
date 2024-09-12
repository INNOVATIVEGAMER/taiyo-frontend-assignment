import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import {
  addContact,
  updateContact,
  deleteContact,
  Contact,
} from "../store/contactsSlice";
import Sidebar from "../components/Sidebar";
import CreateContactForm from "../components/CreateContactForm";
import EditContactForm from "../components/EditContactForm";
import CreateContactButton from "../components/CreateContactButton";
import NoContactsMessage from "../components/NoContactsMessage";
import ContactList from "../components/ContactList";

const ContactsPage: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const contacts = useSelector((state: RootState) => state.contacts.list);
  const dispatch = useDispatch();

  const handleCreateContact = () => {
    setShowCreateForm(true);
    setEditingContact(null);
  };

  const handleSaveContact = (contactData: Omit<Contact, "id">) => {
    dispatch(addContact(contactData));
    setShowCreateForm(false);
  };

  const handleEditContact = (id: number) => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    if (contactToEdit) {
      setEditingContact(contactToEdit);
      setShowCreateForm(false);
    }
  };

  const handleSaveEditedContact = (updatedContact: Contact) => {
    dispatch(updateContact(updatedContact));
    setEditingContact(null);
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id));
  };

  // Constants for conditional rendering
  const isCreatingOrEditing = showCreateForm || editingContact;
  const hasContacts = contacts.length > 0;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-blue-600 text-white p-4 pl-16 lg:pl-4">
          <h1 className="text-2xl font-bold">Contact Page</h1>
        </header>
        <main className="flex-1 p-4">
          {!isCreatingOrEditing && (
            <CreateContactButton onClick={handleCreateContact} />
          )}
          {showCreateForm && (
            <CreateContactForm
              onSave={handleSaveContact}
              onCancel={() => setShowCreateForm(false)}
            />
          )}
          {editingContact && (
            <EditContactForm
              contact={editingContact}
              onSave={handleSaveEditedContact}
              onCancel={handleCancelEdit}
            />
          )}
          {!isCreatingOrEditing &&
            (hasContacts ? (
              <ContactList
                contacts={contacts}
                onEdit={handleEditContact}
                onDelete={handleDeleteContact}
              />
            ) : (
              <NoContactsMessage />
            ))}
        </main>
      </div>
    </div>
  );
};

export default ContactsPage;
