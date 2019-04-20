import React from 'react'

import ContactListItem from './ContactListItem'

const ContactList = ({ contacts }) => {
  const lettersForSortedContactList = [
    ...new Set(contacts.map(({ name }) => name.charAt(0)))
  ]
    .sort()
    .reduce(
      (letters, nextLetter) => ({
        ...letters,
        [nextLetter]: []
      }),
      {}
    )

  return (
    <aside>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </aside>
  )
}
export default ContactList
