import { Link } from '@tanstack/react-router';
import type { Product } from '../../types/product';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useCartContext } from '../../contexts/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartContext();
  const discount = product.discountPercentage;
  const hasDiscount = discount > 0;
  const originalPrice = hasDiscount
    ? product.price / (1 - discount / 100)
    : null;
  const isLowStock = product.stock < 10;

  return (
    <Card>
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
        className={styles.cardLink}
      >
        <div className={styles.imageWrapper}>
          {hasDiscount && (
            <div className={styles.badge}>{Math.round(discount)}% OFF</div>
          )}
          <Card.Image src={product.thumbnail} alt={product.title} />
        </div>
      </Link>

      <div className={styles.content}>
        <Link
          to="/products/$productId"
          params={{ productId: String(product.id) }}
          className={styles.titleLink}
        >
          <Card.Title>{product.title}</Card.Title>
        </Link>

        <div className={styles.rating}>
          <span className={styles.stars}>
            {'⭐'.repeat(Math.round(product.rating))}
          </span>
          <span className={styles.ratingCount}>
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <div className={styles.priceSection}>
          <Card.Price>${product.price.toFixed(2)}</Card.Price>
          {hasDiscount && originalPrice && (
            <>
              <span className={styles.originalPrice}>
                ${originalPrice.toFixed(2)}
              </span>
              <span className={styles.savings}>
                Save ${(originalPrice - product.price).toFixed(2)}
              </span>
            </>
          )}
        </div>

        <div className={isLowStock ? styles.lowStock : styles.stock}>
          {isLowStock ? `Only ${product.stock} left!` : 'In Stock'}
        </div>
      </div>

      <Card.Actions>
        <Button fullWidth onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Actions>
    </Card>
  );
};
