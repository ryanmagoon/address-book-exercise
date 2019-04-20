import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import ContactCard from './modules/ContactCard'
import ContactList from './modules/ContactList'

const Container = styled.main`
  display: flex;
  flex-direction: row;
`

const App = () => {
  const [data, setData] = useState({ people: [] })
  const [currentUserId, setCurrentUserId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get(
        'http://localhost:8080/api/people'
      )

      setData(response)
    }

    fetchData()
  }, [])

  return (
    <Container className="App">
      <ContactList
        contacts={data.people}
        onSelectContact={({ id }) => setCurrentUserId(id)}
      />
      {currentUserId && (
        <ContactCard {...data.people.find(({ id }) => id === currentUserId)} />
      )}
    </Container>
  )
}

export default App
