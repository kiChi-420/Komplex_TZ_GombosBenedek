import { useState } from 'react'
import { useEffect } from 'react'
import './felveteli.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import Index from './components/Index.jsx'
import Felvettek from './components/Felvettek.jsx'

import {Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:5000/diakok")
        .then(res => {
            if (!res.ok) {
                throw new Error("Nem helyes a válasz a hálózattól");
            }
            return res.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => console.error("Hiba:", error));
}, []);

return (
  <>
    <BrowserRouter>
        <Routes>
          <Route index element={<Index />}/>
          <Route path="/felvettek/:agazat" element={<Felvettek />}/>
          <Route Component={Error}></Route>
        </Routes>
    </BrowserRouter>
  </>
)
}

export default App
