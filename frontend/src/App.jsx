import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Đang tải...')

  useEffect(() => {
    fetch('http://localhost:8080/api/hello')
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
        Template: ReactJS (Vite) + Spring Boot (Java 17+, MySQL)
      </p>
    </>
  )
}

export default App
