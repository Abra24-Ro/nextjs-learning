import { ProductCard, products } from "@/src/products";

import { cookies } from "next/headers";

export default async function ProductsPage() {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value || "{}") as { [id: string]: number };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium text-text">Productos</h2>
        <p className="text-sm text-text-muted">Administrá tu catálogo de productos.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            cartQuantity={cart[product.id] ?? 0}  // 👈
          />
        ))}
      </div>
    </div>
  );
}