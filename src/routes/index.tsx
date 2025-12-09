import { createFileRoute } from '@tanstack/react-router';
import { useProducts } from '../hooks/useProducts';
import { Layout } from '../components/ui/Layout';
import { Header } from '../components/Header';
import { ProductGrid } from '../components/ProductGrid';
import { ProductCard } from '../components/ProductCard';

const IndexPage = () => {
  const { data, isLoading, error } = useProducts();

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Main>
        <h1>Featured Products</h1>

        {isLoading && <p>Loading products...</p>}

        {error && <p>Error loading products: {error.message}</p>}

        {data && (
          <ProductGrid>
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        )}
      </Layout.Main>
    </Layout>
  );
};

export const Route = createFileRoute('/')({
  component: IndexPage,
});
