import { ReactNode } from 'react';
import styles from './styles.module.scss';

const { nav } = styles;

interface AsideNavProps {
  children: ReactNode;
}

export const AsideNav = ({ children }: AsideNavProps) => {
  return (
    <aside>
      <nav className={nav}>{children}</nav>
    </aside>
  );
};
