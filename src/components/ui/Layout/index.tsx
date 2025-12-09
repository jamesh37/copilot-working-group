import type { ReactNode } from 'react';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

interface LayoutHeaderProps {
  children: ReactNode;
}

interface LayoutMainProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};

Layout.Header = ({ children }: LayoutHeaderProps) => {
  return <header className={styles.header}>{children}</header>;
};

Layout.Main = ({ children }: LayoutMainProps) => {
  return <main className={styles.main}>{children}</main>;
};
