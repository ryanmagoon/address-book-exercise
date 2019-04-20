import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ContactList from './modules/ContactList'

const App = () => {
  const [data, setData] = useState({ people: [] })
  useEffect(() => {
    const fetchData = async () => {
      const { data: response } = await axios.get(
        'http://localhost:8080/api/people'
      )

      console.log(response)
      setData(response)
    }

    fetchData()
  }, [])

  return (
    <main className="App">
      <ContactList contacts={data.people} />
    </main>
  )
}

export default App
