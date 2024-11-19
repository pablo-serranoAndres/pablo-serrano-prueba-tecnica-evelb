import { MouseEventHandler, ReactNode } from "react";
import styles from "./Drawer.module.css";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement> | undefined;
}

const Drawer = ({ children, isOpen, onClose }: DrawerProps) => {
  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onClose}
      ></div>

      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        {children}
      </div>
    </>
  );
};

export { Drawer };
