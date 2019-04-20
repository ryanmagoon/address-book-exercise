import React from 'react'
import styled from 'styled-components'

import avatar from './avatar.png'

const Container = styled.section`
  display: flex;
  margin-top: 10px;
`

const Photo = styled.img`
  height: 125px;
  width: 125px;
  border: 2px solid blue;
  border-radius: 62.5px;
  overflow: hidden;
  background-size: contain;
  margin-right: 20px;
`

const Info = styled.section`
  display: flex;
  flex-direction: column;
`

const ContactInfo = ({ email, name, title, phone, ...props }) => {
  console.log(props)
  return (
    <Container>
      <Photo src={avatar} alt="default profile pic" />
      <Info>
        <h2>{name}</h2>
        <span>{title}</span>
        <span>{phone}</span>
        <a href={`mailto:${email}`}>{email}</a>
      </Info>
    </Container>
  )
}

export default ContactInfo
