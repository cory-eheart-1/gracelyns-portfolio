// import libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages & components
import Home from "./pages/home/home.page";
import NavigationMobile from "./components/navigation/navigation.mobile.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationMobile />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
