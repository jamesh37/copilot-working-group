import type { ReactNode } from 'react';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  children: ReactNode;
}

export const ProductGrid = ({ children }: ProductGridProps) => {
  return <div className={styles.grid}>{children}</div>;
};
