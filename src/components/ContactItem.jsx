
import React from 'react';

export const ContactItem = ({ contact, onDelete }) => (
  <li>
    {contact.name}: {contact.number}
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </li>
);

 
