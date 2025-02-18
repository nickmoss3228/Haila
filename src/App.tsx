import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar.tsx";
import Tenses from "./pages/Tenses.tsx";
import Irregulars from "./pages/Irregulars.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./pages/List.tsx";
import Sounds from "./pages/Sounds.tsx";
import ScrollToTheTop from "./components/ScrollToTheTop.tsx";
import Phrasals from "./pages/Phrasals.tsx";
import GerundInfinitive from "./pages/GerundInfinitive.tsx";
import Player from "./pages/Player.tsx";
import { Provider } from "react-redux";
import { store } from "./features/store.ts";
import Levels from "./pages/Levels.tsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <ScrollToTheTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/list/sounds" element={<Sounds />} />
            <Route path="/list/levels" element={<Levels />} />
            <Route path="/list/tenses" element={<Tenses />} />
            <Route path="/list/irregulars" element={<Irregulars />} />
            <Route path="/list/phrasals" element={<Phrasals />} />
            <Route
              path="/list/gerundinfinitive"
              element={<GerundInfinitive />}
            />
            <Route path="/list/player" element={<Player />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
export default App;
