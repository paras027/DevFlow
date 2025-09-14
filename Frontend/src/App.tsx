
import './App.css'
import { LoginPage } from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'

import Layout from './Layout'

import ProjectsPage from './Pages/ProjectsPage'
import TasksPage from './Pages/TasksPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
