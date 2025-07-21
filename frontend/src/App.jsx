import { useEffect, useState } from 'react'
import axios from 'axios'

function App () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/users').then(res => {
      setUsers(res.data);
    })
  }, [])

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-4xl font-bold'>
          Here the user details will be shown
        </h1>
        <br />
        {users.map(user => (
          <div key={user.id} className='m-4 p-4 border rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold'>{user.name}</h2>
            <p className='text-lg'>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
