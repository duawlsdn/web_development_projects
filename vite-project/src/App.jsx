import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import DrinkDetail from "./components/DrinkDetail";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/drinkName" element={<DrinkDetail />} />
      </Routes>
    </Router>
  )
}

export default App
