import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Projects from "./pages/Projects"
import Notes from "./pages/Notes.tsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  )
}
