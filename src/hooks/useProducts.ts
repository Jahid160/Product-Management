import { useState, useEffect } from "react";
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
    const controller = new AbortController();
    const { signal } = controller;

    const fetchProducts = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const response = await fetch("https://fakestoreapi.com/products", {
          signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Product[] = await response.json();

        const uniqueCategories = [
          "all",
          ...Array.from(new Set(data.map((p) => p.category))),
        ];

        setState({
          data,
          categories: uniqueCategories,
          loading: false,
          error: null,
        });
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted safely");
          return;
        }
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err.message || "Failed to fetch products.",
        }));
      }
    };

    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return state;
};
