import "./App.css";
import LoginPage from "./LoginPage/LoginPage";
import MainPage from "./MainPage/MainPage";
import FormDieta from "./FormDieta/FormDieta";
import ArticlesListPage from "./ArticlesListPage/ArticlesListPage";
import ArticlePage from "./ArticlePage/ArticlePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="form_dieta" element={<FormDieta />} />
        <Route path="/dicas" element={<ArticlesListPage />} />
        <Route path="/dicas/:articleId" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
