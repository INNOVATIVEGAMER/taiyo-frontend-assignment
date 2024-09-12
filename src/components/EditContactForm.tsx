import React, { useState, useEffect } from "react";
import { Contact } from "../store/contactsSlice";

interface EditContactFormProps {
  contact: Contact;
  onSave: (updatedContact: Contact) => void;
  onCancel: () => void;
}

const EditContactForm: React.FC<EditContactFormProps> = ({
  contact,
  onSave,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Contact>(contact);

  useEffect(() => {
    setFormData(contact);
  }, [contact]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value.trim(),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Contact Screen</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <span className="block mb-2">Status:</span>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="status"
              value="Active"
              checked={formData.status === "Active"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Active
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="status"
              value="Inactive"
              checked={formData.status === "Inactive"}
              onChange={handleInputChange}
              className="mr-2"
            />
            Inactive
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Edited Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
