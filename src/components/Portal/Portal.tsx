import { FC, ReactElement, ReactNode, RefObject } from "react";
import { createPortal } from "react-dom";
import { usePortalContainer } from "./usePortalContainer";

export interface PortalProps {
  container?: RefObject<HTMLElement>;
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({
  children,
  container,
}): ReactElement => {
  const portalContainer = usePortalContainer(container);

  return createPortal(children, portalContainer);
};
