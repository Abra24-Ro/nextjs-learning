"use client";

import Image from "next/image";
import { IoAddCircleOutline, IoRemove } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Product } from "@/src/products/data/Products";
import { addProductToCart, removeSingleItemFromCart } from "../actions/actions";

interface Props {
  product: Product;
  quantity: number;
}

export const ItemCard = ({ product, quantity }: Props) => {
  const router = useRouter();

  function onAddToCart() {
    addProductToCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    removeSingleItemFromCart(product.id);
    router.refresh();
  }

  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl border border-border p-3 w-full">
      {/* Imagen */}
      <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden bg-bg">
        <Image
          width={200}
          height={200}
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 space-y-1">
        <h3 className="text-sm font-medium text-text leading-snug truncate">
          {product.name}
        </h3>
        <p className="text-xs text-text-muted">
          ${product.price.toFixed(2)} por unidad
        </p>
        <p className="text-sm font-medium text-primary">
          Total: ${(product.price * quantity).toFixed(2)}
        </p>
      </div>

      {/* Controles de cantidad */}
      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onRemoveItem}
          className="
            cursor-pointer
            flex items-center justify-center w-8 h-8 rounded-xl
            bg-white border border-border text-text-muted
            hover:border-red-300 hover:text-red-500 hover:bg-red-50
            active:scale-95 transition-all duration-200
          "
        >
          <IoRemove size={15} />
        </button>

        <span
          className="
          min-w-8 text-center
          text-sm font-medium text-text
        "
        >
          {quantity}
        </span>

        <button
          onClick={onAddToCart}
          className="
            cursor-pointer
            flex items-center justify-center w-8 h-8 rounded-xl
            bg-primary text-white
            hover:bg-primary-hover active:scale-95
            transition-all duration-200
          "
        >
          <IoAddCircleOutline size={16} />
        </button>
      </div>
    </div>
  );
};
