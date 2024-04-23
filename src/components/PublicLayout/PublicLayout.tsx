import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../constants/auth";
import { routesLink } from "../../constants/routes";

interface PublicLayoutProps {
  children: ReactNode;
}

export const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  const isAuth = localStorage.getItem(LOCAL_STORAGE_KEY);

  return isAuth ? <Navigate to={routesLink.home} /> : children;
};
