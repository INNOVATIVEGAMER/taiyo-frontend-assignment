import React from "react";

interface CreateContactButtonProps {
  onClick: () => void;
}

const CreateContactButton: React.FC<CreateContactButtonProps> = ({
  onClick,
}) => (
  <button
    onClick={onClick}
    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mb-4"
  >
    Create Contact
  </button>
);

export default CreateContactButton;
