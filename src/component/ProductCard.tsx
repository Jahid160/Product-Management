import React from "react";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full transition duration-300">
      {/* Product Image */}
      <div
        className="relative pt-[100%] bg-white p-4 flex items-center justify-center group cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-4 left-4 right-4 bottom-4 max-w-[85%] max-h-[85%] margin-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded capitalize font-medium">
          {product.category}
        </span>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {product.rating?.rate || 0}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Title */}
        <h3
          onClick={() => onViewDetails(product)}
          className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer mb-2 flex-grow"
        >
          {product.title}
        </h3>

        {/* Price & Action Button */}
        <div className="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>

          <button
            onClick={() => onViewDetails(product)}
            className="text-xs font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-3 py-1.5 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-200"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
