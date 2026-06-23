import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Produtos from "./pages/Produtos";
import MercadoLivre from "./pages/MercadoLivre";
import Shopee from "./pages/Shopee";
import TikTok from "./pages/TikTok";

import logo from "./assets/logo.png";
import mlLogo from "./assets/mercadolivre.png";
import shopeeLogo from "./assets/Shopee.png";
import tiktokLogo from "./assets/Tiktok.png";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <aside style={sidebarStyle}>
          <div style={brandStyle}>
            <img src={logo} alt="Loja Sigh" style={brandLogoStyle} />
            <h2 style={titleStyle}>Loja Sigh</h2>
          </div>

          <nav style={navStyle}>
            <Link to="/" style={linkStyle}>
              <span>📊</span>
              Dashboard
            </Link>

            <Link to="/produtos" style={linkStyle}>
              <span>📦</span>
              Produtos
            </Link>

            <Link to="/mercadolivre" style={linkStyle}>
              <img src={mlLogo} alt="Mercado Livre" style={logoStyle} />
              Mercado Livre
            </Link>

            <Link to="/shopee" style={linkStyle}>
              <img src={shopeeLogo} alt="Shopee" style={logoStyle} />
              Shopee
            </Link>

            <Link to="/tiktok" style={linkStyle}>
              <img src={tiktokLogo} alt="TikTok" style={logoStyle} />
              TikTok Shop
            </Link>
          </nav>
        </aside>

        <main style={mainStyle}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/mercadolivre" element={<MercadoLivre />} />
            <Route path="/shopee" element={<Shopee />} />
            <Route path="/tiktok" element={<TikTok />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const sidebarStyle = {
  width: "260px",
  background: "linear-gradient(180deg, #0f172a, #020617)",
  color: "white",
  padding: "20px",
};

const brandStyle = {
  textAlign: "center",
  marginBottom: "30px",
};

const brandLogoStyle = {
  width: "120px",
  maxWidth: "100%",
  marginBottom: "12px",
};

const titleStyle = {
  color: "white",
  margin: 0,
  fontSize: "24px",
};

const navStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const mainStyle = {
  flex: 1,
  padding: "30px",
  background: "#F3F4F6",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "14px",
  borderRadius: "10px",
  background: "#1F2937",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  fontWeight: "500",
};

const logoStyle = {
  width: "24px",
  height: "24px",
  objectFit: "contain",
};