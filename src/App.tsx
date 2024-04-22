import { Route, Routes } from "react-router-dom";
import { MapPage } from "./pages/MapPage/MapPage";
import { PrivateLayout } from "./components/PrivateLayout";
import { LoginPage } from "./pages/LoginPage/LoginPage";

import "@/styles/style.scss";
import { PublicLayout } from "./components/PublicLayout";

function App() {
  return (
    <Routes>
      <Route
        path="/parking-front"
        element={
          <PrivateLayout>
            <MapPage />
          </PrivateLayout>
        }
      />

      <Route
        path="/parking-front/login"
        element={
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
        }
      />
    </Routes>
  );
}

export default App;
