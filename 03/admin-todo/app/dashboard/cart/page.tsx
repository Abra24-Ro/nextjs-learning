import { WidgetItem } from "@/src";
import { Product, products } from "@/src/products/data/Products";
import { ItemCard } from "@/src/shoppingCart";
import { cookies } from "next/headers";

export const metadata = {
  title: "Carrito de Compras",
  description: "Revisa los productos que has agregado a tu carrito de compras.",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = async (cart: {
  [id: string]: number;
}): Promise<ProductInCart[]> => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find((prod) => prod.id === id);
    if (product) {
      productsInCart.push({ product, quantity: cart[id] });
    }
  }
  return productsInCart;
};

export default async function CartPage() {
  const cokieStore = await cookies();
  const cart = JSON.parse(cokieStore.get("cart")?.value || "{}") as {
    [id: string]: number;
  };
  const productInCart = await getProductsInCart(cart);
  const subtotal = productInCart.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0,
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium text-text">Carrito de compras</h2>
        <p className="text-sm text-text-muted">
          {productInCart.length === 0
            ? "No tenés productos en el carrito."
            : `${productInCart.length} producto${productInCart.length > 1 ? "s" : ""} agregado${productInCart.length > 1 ? "s" : ""}.`}
        </p>
      </div>

      {productInCart.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-12 h-12 rounded-full bg-[#F5F5F4] flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-text-hint"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16 10a4 4 0 01-8 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-text">Tu carrito está vacío</p>
          <p className="text-sm text-text-muted mt-1">
            Agregá productos desde el catálogo.
          </p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lista */}
          <div className="flex-1 space-y-3">
            {productInCart.map(({ product, quantity }) => (
              <ItemCard
                key={product.id}
                product={product}
                quantity={quantity}
              />
            ))}
          </div>

          {/* Resumen */}

          <WidgetItem title="Resumen">

  <div className="space-y-2">
    {productInCart.map(({ product, quantity }) => (
      <div key={product.id} className="flex justify-between text-sm">
        <span className="text-text-muted truncate max-w-40">
          {product.name} x {quantity}
        </span>
        <span className="text-text font-medium shrink-0">
          ${(product.price * quantity).toFixed(2)}
        </span>
      </div>
    ))}
  </div>

  <div className="border-t border-border pt-3 mt-3 flex justify-between items-center">
    <span className="text-sm font-medium text-text">Total</span>
    <span className="text-lg font-medium text-primary">
      ${subtotal.toFixed(2)}
    </span>
  </div>

  <button className="
    mt-3 w-full py-2.5 rounded-xl
    bg-primary text-white text-sm font-medium
    hover:bg-primary-hover active:scale-95
    transition-all duration-200 cursor-pointer
  ">
    Confirmar pedido
  </button>

</WidgetItem>
        </div>
      )}
    </div>
  );
}
