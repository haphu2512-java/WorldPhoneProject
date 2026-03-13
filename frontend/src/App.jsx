import { useState, useEffect } from 'react'
import './App.css'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

function App() {
  const [message, setMessage] = useState('Đang tải...')

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/hello`)
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => {
        console.error(err)
        setMessage('Không thể kết nối Backend')
      })
  }, [])

  return (
    <>
      <div className="card">
        <h1>Website Bán Điện Thoại</h1>
        <p>Kết nối Spring Boot: <b>{message}</b></p>
      </div>
      <p className="read-the-docs">
        Template: ReactJS (Vite) + Spring Boot (Java 17, Maven) + MySQL + Docker
      </p>
    </>
  )
}

export default App
