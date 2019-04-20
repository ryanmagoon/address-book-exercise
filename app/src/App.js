import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ContactCard from './modules/ContactCard'
import ContactList from './modules/ContactList'

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
    <main className="App">
      <ContactList
        contacts={data.people}
        onSelectContact={({ id }) => setCurrentUserId(id)}
      />
      {currentUserId && (
        <ContactCard {...data.people.find(({ id }) => id === currentUserId)} />
      )}
    </main>
  )
}

export default App
