import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext.jsx";
import { AuthProvider } from "./context/AuthContext";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </AuthProvider>
  </BrowserRouter>
);
