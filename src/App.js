import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./page/BlogList";
import BlogPost from "./page/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
