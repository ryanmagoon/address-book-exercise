import React from 'react'
import styled from 'styled-components'

import ContactListItem from './ContactListItem'

const Container = styled.aside`
  border-right: 1px solid black;
  height: 100vh;
  width: 150px;
`

const ContactList = ({ contacts, onSelectContact }) => {
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

  return (
    <Container>
      {Object.keys(SortedContactList).map(letter => (
        <section key={letter}>
          <h2>{letter}</h2>
          {SortedContactList[letter].map(contact => (
            <ContactListItem
              key={contact.id}
              onClick={() => onSelectContact(contact)}
              {...contact}
            />
          ))}
        </section>
      ))}
    </Container>
  )
}
export default ContactList
