import React from 'react'

import ContactInfo from './ContactInfo'
const Education = () => null
const Experience = () => null

const ContactCard = ({ education, experience, ...info }) => (
  <article>
    <ContactInfo {...info} />
    <Education {...education} />
    <Experience {...experience} />
  </article>
)

export default ContactCard
