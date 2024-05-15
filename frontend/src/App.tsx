import Login from "./components/Login"
import Layout from "./layouts/Layout"
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
              <p>Home Page</p>
          </Layout>
        }/>
         <Route path="/search" element={
          <Layout>
              <p>Search Page</p>
          </Layout>
        }/>
         <Route path="/login" element={
          <Layout>
              <Login />
          </Layout>
        }/>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </Router>
  )
}

export default App
