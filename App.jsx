
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// - pages
import Secret from './pages/Secret';

// - components
import PrivateRoutes from './components/PrivateRoutes';



function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          // protected routes
          <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route path="" element={<Dashboard />} /> 
            <Route path="secret" element={<Secret/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
