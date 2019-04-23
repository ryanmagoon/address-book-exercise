import React from 'react'
import styled from 'styled-components'

const Row = styled.button`
  background: transparent;
  border: none;
  padding-left: 10px;
  transition: background 250ms ease-in-out, transform 150ms ease;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: #eef;
  }
  &:active {
    transform: scale(0.99);
  }
`

const ContactListItem = ({ name, onClick }) => (
  <Row onClick={onClick}>{name}</Row>
)

export default ContactListItem
