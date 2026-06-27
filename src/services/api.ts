// import type { Product } from "../types/product";
// const BASE_URL = "https://fakestoreapi.com";
// export const getAllProducts = async (): Promise<Product[]> => {
//   try {
//     const response = await fetch(`${BASE_URL}/products`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     console.log(response);
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
// export const getSingleProduct = async (id: number): Promise<Product[]> => {
//   try {
//     const response = await fetch(`${BASE_URL}/products/${id}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
// export const getCategories = async (): Promise<Product[]> => {
//   try {
//     const response = await fetch(`${BASE_URL}/products/categories`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
