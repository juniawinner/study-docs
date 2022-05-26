import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from "pages/Homepage";
import Lesson from "pages/Lesson";
import Footer from "pages/Footer";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/modulos">
          <Route path=":moduleId" element={<Lesson />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
