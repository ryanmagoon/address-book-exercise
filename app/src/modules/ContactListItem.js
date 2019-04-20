import React from 'react'

const ContactListItem = ({ name, onClick }) => (
  <section>
    <button onClick={onClick}>
      <h3>{name}</h3>
    </button>
  </section>
)

export default ContactListItem
