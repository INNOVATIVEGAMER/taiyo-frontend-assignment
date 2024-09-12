import React from "react";

const NoContactsMessage: React.FC = () => (
  <div className="mt-8 bg-gray-200 p-4 rounded flex items-center">
    <span className="text-3xl mr-4">✕</span>
    <div>
      <p className="font-bold">No Contact Found</p>
      <p>Please add contact from Create Contact Button</p>
    </div>
  </div>
);

export default NoContactsMessage;
