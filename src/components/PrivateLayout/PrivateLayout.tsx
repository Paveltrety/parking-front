import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../constants/auth";

interface IPrivateLayoutProps {
  children: ReactNode;
}

export const PrivateLayout: FC<IPrivateLayoutProps> = ({ children }) => {
  const isAuth = localStorage.getItem(LOCAL_STORAGE_KEY);

  return isAuth ? children : <Navigate to={"/parking-front/login"} />;
};
