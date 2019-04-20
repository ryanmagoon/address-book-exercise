import React from 'react'
import styled from 'styled-components'

import ContactListItem from './ContactListItem'

const Container = styled.aside`
  border-right: 1px solid black;
  margin-right: 10px;
  height: 100vh;
  width: 150px;
  overflow-y: scroll;
  padding-bottom: 20px;
`

const Letter = styled.h3`
  color: blue;
  margin-bottom: none;
  margin-top: 5;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-left: 10px;
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
          <Letter>{letter}</Letter>
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
