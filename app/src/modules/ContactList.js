import React from 'react'

import ContactListItem from './ContactListItem'

const ContactList = ({ contacts }) => (
  <aside>
    {contacts.map(contact => (
      <ContactListItem key={contact.id} {...contact} />
    ))}
  </aside>
)

export default ContactList
