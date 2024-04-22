import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../constants/auth";

interface PublicLayoutProps {
  children: ReactNode;
}

export const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  const isAuth = localStorage.getItem(LOCAL_STORAGE_KEY);

  return isAuth ? <Navigate to={"/parking-front"} /> : children;
};
