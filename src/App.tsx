import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Group from "./pages/Group";
import Group1 from "./pages/Group1";
import Group2 from "./pages/Group2";
import Group3 from "./pages/Group3";
import Frame from "./pages/Frame";
import Mobile from "./pages/Mobile";
import Mobile1 from "./pages/Mobile1";
import Mobile2 from "./pages/Mobile2";
import Mobile3 from "./pages/Mobile3";
import EditTask from "./pages/EditTask";
import AddTask from "./pages/AddTask";
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
      case "/group-7":
        title = "";
        metaDescription = "";
        break;
      case "/group-6":
        title = "";
        metaDescription = "";
        break;
      case "/group-5":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1321316342":
        title = "";
        metaDescription = "";
        break;
      case "/mobile1":
        title = "";
        metaDescription = "";
        break;
      case "/mobile":
        title = "";
        metaDescription = "";
        break;
      case "/mobile2":
        title = "";
        metaDescription = "";
        break;
      case "/mobile3":
        title = "";
        metaDescription = "";
        break;
      case "/edit-task":
        title = "";
        metaDescription = "";
        break;
      case "/add-task":
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
      <Route path="/" element={<Group />} />
      <Route path="/group-7" element={<Group1 />} />
      <Route path="/group-6" element={<Group2 />} />
      <Route path="/group-5" element={<Group3 />} />
      <Route path="/frame-1321316342" element={<Frame />} />
      <Route path="/mobile1" element={<Mobile />} />
      <Route path="/mobile" element={<Mobile1 />} />
      <Route path="/mobile2" element={<Mobile2 />} />
      <Route path="/mobile3" element={<Mobile3 />} />
      <Route path="/edit-task" element={<EditTask />} />
      <Route path="/add-task" element={<AddTask />} />
    </Routes>
  );
}
export default App;
