import React, { useEffect } from "react";
import type { Product } from "../types/product";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
      {/* Backdrop Click Handler */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl flex flex-col md:flex-row gap-6 p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 z-20 p-1 bg-gray-100 dark:bg-gray-700 rounded-full transition"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Product Left Side: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-white dark:bg-gray-700/30 rounded-xl min-h-[250px]">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[280px] object-contain"
          />
        </div>

        {/* Product Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider mb-2">
              {product.category}
            </span>

            <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug mb-2">
              {product.title}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-yellow-400 text-base">★</span>
              <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                {product.rating?.rate}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({product.rating?.count} reviews)
              </span>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {product.description}
            </p>
          </div>

          {/* Footer of Modal: Price & Add/Close */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                Total Price
              </p>
              <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 px-6 py-2.5 rounded-xl font-semibold text-sm transition shadow-sm shadow-blue-200 dark:shadow-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
