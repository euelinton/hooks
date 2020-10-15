import React, { useState, useEffect } from 'react'

const AppEffect: React.FC = () => {
  const [repositories, setRepositories] = useState()
  
  useEffect(() => {
    async function loadData() {
      const response = await fetch('htpps://api.github.com/users/euelinton/repos')
      const data = await response.json()
  
      setRepositories(data)
    }
  }, [])

  return (
    <ul>
      {repositories.map(repo => (
        <li>{repo}</li>
      ))}
    </ul>
  )
}

export default AppEffect
