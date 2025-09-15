import './App.css'
import { LoginPage } from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Layout from './Layout'
import ProjectsPage from './Pages/ProjectsPage'
import TasksPage from './Pages/TasksPage'
import Cookies from 'js-cookie'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));


  return (
    <BrowserRouter>
      <Routes>
        {!token && (
          <>
            <Route path="/signup" element={<SignupPage />} />
             <Route path="/login" element={<LoginPage setToken={setToken} />} />
          </>
        )}

        {token ? (
          <Route path="/" element={<Layout />}>
            <Route index element={<ProjectsPage />} />
            <Route path="/tasks" element={<TasksPage />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
