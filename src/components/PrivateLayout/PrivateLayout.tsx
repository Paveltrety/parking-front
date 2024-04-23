import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../constants/auth";
import { routesLink } from "../../constants/routes";

interface IPrivateLayoutProps {
  children: ReactNode;
}

export const PrivateLayout: FC<IPrivateLayoutProps> = ({ children }) => {
  const isAuth = localStorage.getItem(LOCAL_STORAGE_KEY);

  return isAuth ? children : <Navigate to={routesLink.login} />;
};
