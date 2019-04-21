import React from 'react'
import styled from 'styled-components'

import ContactInfo from './ContactInfo'
import Education from './Education'
import Experience from './Experience'

const Container = styled.article`
  height: 100vh;
  overflow-y: scroll;
`

const ContactCard = ({ education, workExperience, ...info }) => (
  <Container>
    <ContactInfo {...info} />
    <Education {...education} />
    <Experience {...workExperience} />
  </Container>
)

export default ContactCard
