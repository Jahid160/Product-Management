import { useState, useEffect } from "react";
import { getAllProducts } from "../services/api";
import type { Product } from "../types/product";

interface ProductsState {
  data: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;
}

export const useProducts = () => {
  const [state, setState] = useState<ProductsState>({
    data: [],
    categories: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const productsData = await getAllProducts();

        const uniqueCategories = [
          "all",
          ...Array.from(new Set(productsData.map((p) => p.category))),
        ];

        setState({
          data: productsData,
          categories: uniqueCategories,
          loading: false,
          error: null,
        });
      } catch (err: any) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err.message || "Failed to load products.",
        }));
      }
    };

    loadData();
  }, []);

  return {
    products: state.data,
    categories: state.categories,
    loading: state.loading,
    error: state.error,
  };
};
