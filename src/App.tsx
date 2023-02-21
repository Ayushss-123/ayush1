import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Typography from "./pages/Typography";
import HowItWorks from "./pages/HowItWorks";
import Educators from "./pages/Educators";
import FAQ from "./pages/FAQ";
import MobileMenu from "./pages/MobileMenu";
import About from "./pages/About";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/typography":
        title = "";
        metaDescription = "";
        break;
      case "/howitworks":
        title = "";
        metaDescription = "";
        break;
      case "/educators":
        title = "";
        metaDescription = "";
        break;
      case "/faq":
        title = "";
        metaDescription = "";
        break;
      case "/mobile-menu":
        title = "";
        metaDescription = "";
        break;
      case "/about1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/typography" element={<Typography />} />

      <Route path="/howitworks" element={<HowItWorks />} />

      <Route path="/educators" element={<Educators />} />

      <Route path="/faq" element={<FAQ />} />

      <Route path="/mobile-menu" element={<MobileMenu />} />

      <Route path="/about1" element={<About />} />
    </Routes>
  );
}
export default App;
