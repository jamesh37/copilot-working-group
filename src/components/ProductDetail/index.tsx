import { Link } from '@tanstack/react-router';
import type { Product } from '../../types/product';
import { Button } from '../ui/Button';
import { useCartContext } from '../../contexts/CartContext';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addToCart } = useCartContext();

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.backLink}>
        ← Back to Products
      </Link>

      <div className={styles.product}>
        <div className={styles.imageSection}>
          <img
            src={product.images[0] || product.thumbnail}
            alt={product.title}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Brand</span>
              <span className={styles.metaValue}>{product.brand || 'N/A'}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Category</span>
              <span className={styles.metaValue}>{product.category}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Stock</span>
              <span className={styles.metaValue}>{product.stock}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Rating</span>
              <span className={styles.metaValue}>
                ⭐ {product.rating.toFixed(1)}
              </span>
            </div>
          </div>

          <div className={styles.actions}>
            <Button fullWidth onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
