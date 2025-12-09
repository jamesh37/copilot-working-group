import { useQuery } from '@tanstack/react-query';
import { productService } from '../services';

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => productService.getProduct(id),
    enabled: !!id,
  });
};
