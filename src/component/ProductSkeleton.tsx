import React from "react";

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col h-full p-4 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full pt-[100%] bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />

      {/* Category Tag Skeleton */}
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3" />

      {/* Title Skeleton Lines */}
      <div className="space-y-2 mb-4 flex-grow">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
      </div>

      {/* Price & Button Skeleton */}
      <div className="pt-4 border-t border-gray-50 dark:border-gray-700 flex items-center justify-between mt-auto">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-1/4" />
      </div>
    </div>
  );
};
