🛠️ Key Features
Product Grid: Displays all products in a beautiful, responsive grid layout.

Product Modal: Clicking the "View Details" button pops up a modal containing full product information.

Search & Filter: Allows real-time product filtering using the search bar and category dropdown.

Client-side Pagination: Displays 8 products per page with Next/Previous navigation buttons at the bottom.

Debounced Search: The search executes 300ms after typing stops, significantly improving site speed and performance.

Skeleton Loader: Displays animated grey blank cards (Shimmer effect) while the data is loading.

Error State: Shows a clean warning message along with a refresh button if a network or API error occurs.

Light/Dark Theme: Clicking the button in the navbar toggles the entire app between light and dark modes (saved automatically in Local Storage).

⚡ Optimization & Architecture (Code Quality)
Custom Hooks: Used separate custom hooks for state management (useProducts) and input debouncing (useDebounce).

AbortController: Cancels previous pending API requests when rapidly changing pages or categories to prevent memory leaks and race conditions.

TypeScript: Ensures strict type safety (React.FC, Promise) across every data structure and component in the project.

Tailwind v4: Handles dark mode using the modern @variant approach without requiring any extra configuration files.

📂 File Structure
src/component/ — Navbar, Footer, ProductCard, ProductModal, ProductSkeleton

src/hooks/ — useDebounce.ts, useProducts.ts

src/layouts/ — MainLayout.tsx

src/pages/ — ProductListing.tsx

src/types/ — product.ts

src/index.css — Tailwind v4 directives and global body styles
