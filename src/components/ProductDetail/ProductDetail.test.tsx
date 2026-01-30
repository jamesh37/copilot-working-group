import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductDetail } from './index';

// Mock child components to isolate ProductDetail testing
vi.mock('../ProductNavigation', () => ({
  ProductNavigation: () => <div data-testid="product-navigation">ProductNavigation</div>,
}));

vi.mock('../ProductImage', () => ({
  ProductImage: () => <div data-testid="product-image">ProductImage</div>,
}));

vi.mock('../ProductInfo', () => ({
  ProductInfo: () => <div data-testid="product-info">ProductInfo</div>,
}));

vi.mock('../ProductMeta', () => ({
  ProductMeta: () => <div data-testid="product-meta">ProductMeta</div>,
}));

vi.mock('../ProductActions', () => ({
  ProductActions: () => <div data-testid="product-actions">ProductActions</div>,
}));

describe('ProductDetail', () => {

  it('should render without crashing', () => {
    render(<ProductDetail />);
    expect(screen.getByTestId('product-navigation')).toBeInTheDocument();
  });

  it('should render all child components', () => {
    render(<ProductDetail />);

    // Check that all child components are rendered
    expect(screen.getByTestId('product-navigation')).toBeInTheDocument();
    expect(screen.getByTestId('product-image')).toBeInTheDocument();
    expect(screen.getByTestId('product-info')).toBeInTheDocument();
    expect(screen.getByTestId('product-meta')).toBeInTheDocument();
    expect(screen.getByTestId('product-actions')).toBeInTheDocument();
  });

  it('should have the correct CSS class structure', () => {
    const { container } = render(<ProductDetail />);

    // Check for container class
    const containerDiv = container.querySelector('[class*="container"]');
    expect(containerDiv).toBeInTheDocument();

    // Check for product class
    const productDiv = container.querySelector('[class*="product"]');
    expect(productDiv).toBeInTheDocument();

    // Check for infoSection class
    const infoSection = container.querySelector('[class*="infoSection"]');
    expect(infoSection).toBeInTheDocument();
  });

  it('should render ProductNavigation outside the product section', () => {
    render(<ProductDetail />);

    const navigation = screen.getByTestId('product-navigation');
    const productImage = screen.getByTestId('product-image');

    // ProductNavigation should be rendered before ProductImage
    expect(navigation.compareDocumentPosition(productImage)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    );
  });

  it('should render ProductImage and info section as siblings', () => {
    render(<ProductDetail />);

    const productImage = screen.getByTestId('product-image');
    const productInfo = screen.getByTestId('product-info');

    // Both should exist in the DOM
    expect(productImage).toBeInTheDocument();
    expect(productInfo).toBeInTheDocument();
  });

  it('should group ProductInfo, ProductMeta, and ProductActions in infoSection', () => {
    const { container } = render(<ProductDetail />);

    const infoSection = container.querySelector('[class*="infoSection"]');
    expect(infoSection).toBeInTheDocument();

    // Check that all three components are within the infoSection
    const productInfo = screen.getByTestId('product-info');
    const productMeta = screen.getByTestId('product-meta');
    const productActions = screen.getByTestId('product-actions');

    expect(infoSection).toContainElement(productInfo);
    expect(infoSection).toContainElement(productMeta);
    expect(infoSection).toContainElement(productActions);
  });

  it('should maintain correct component rendering order', () => {
    render(<ProductDetail />);

    const navigation = screen.getByTestId('product-navigation');
    const image = screen.getByTestId('product-image');
    const info = screen.getByTestId('product-info');
    const meta = screen.getByTestId('product-meta');
    const actions = screen.getByTestId('product-actions');

    // Verify order: navigation -> image -> info -> meta -> actions
    expect(navigation.compareDocumentPosition(image)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(image.compareDocumentPosition(info)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(info.compareDocumentPosition(meta)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    expect(meta.compareDocumentPosition(actions)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
  });
});
