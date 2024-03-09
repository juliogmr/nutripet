import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import FormDieta from "./pages/FormDieta/FormDieta";
import FormEnviado from "./pages/FormDieta/FormEnviado";
import ArticlesListPage from "./pages/ArticlesListPage/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import VeterinariosListPage from "./pages/VeterinariosListPage/VeterinariosListPage";
import ProdutosListPage from "./pages/ProdutosListPage/ProdutosListPage";


import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/form_dieta" element={<FormDieta />} />
        <Route path="/form_enviado" element={<FormEnviado />} />
        <Route path="/dicas" element={<ArticlesListPage />} />
        <Route path="/dicas/:articleId" element={<ArticlePage />} />
        <Route path="/veterinarios" element={<VeterinariosListPage />} />
        <Route path="/produtos" element={<ProdutosListPage />} />
      </Routes>
    </div>
  );
}

export default App;
