import React from "react";

export const ContactPicker = ({ contacts, changeHandler }) => {
  return (
    <select onChange={changeHandler} name="contact">
      <option key={-1} value="0">
        Select a Contact
      </option>
      {contacts.map((contact) => {
        return (
          <option key={contact.name} value={contact.name}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
