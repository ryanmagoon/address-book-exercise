import React from 'react'

import ContactListItem from './ContactListItem'

const ContactList = ({ contacts }) => {
  const SortedContactList = [
    ...new Set(contacts.map(({ name }) => name.charAt(0)))
  ]
    .sort()
    .reduce(
      (letters, nextLetter) => ({
        ...letters,
        [nextLetter]: contacts
          .filter(({ name }) => name.charAt(0) === nextLetter)
          .sort((a, b) => (a.name < b.name ? -1 : 1))
      }),
      {}
    )

  console.log(SortedContactList)

  return (
    <aside>
      {Object.keys(SortedContactList).map(letter => (
        <section key={letter}>
          <h2>{letter}</h2>
          {SortedContactList[letter].map(contact => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </section>
      ))}
    </aside>
  )
}
export default ContactList
