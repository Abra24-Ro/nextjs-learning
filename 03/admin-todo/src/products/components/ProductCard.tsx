"use client";

import Image from "next/image";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Star } from "./Star";
import { addProductToCart, removeProductFromCart } from "@/src/shoppingCart";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  stock: number;
  discount?: number;
  cartQuantity: number;
}

export const ProductCard = ({
  id,
  name,
  price,
  rating,
  image,
  cartQuantity,
}: ProductCardProps) => {
  const router = useRouter();
  const btndisabled = true;
  const onAddToCart = () => {
    addProductToCart(id);
    router.refresh();
  };

  const onRemoveFromCart = () => {
    removeProductFromCart(id);
    router.refresh();
  };

  return (
    <div className="bg-white rounded-2xl border border-border max-w-sm overflow-hidden">
      {/* Product Image */}
      <div className="relative p-3 bg-bg">
        <Image
          width={500}
          height={500}
          className="rounded-xl w-full object-cover aspect-square"
          src={`${image || "/images/products/1623735-00-A_0_2000.jpg"}`}
          alt="product image"
        />
        {cartQuantity > 0 && (
          <span
            className="
      absolute top-5 right-5
      min-w-6 h-6 px-1.5
      rounded-full
      bg-primary text-white
      text-[11px] font-medium
      flex items-center justify-center
    "
          >
            x{cartQuantity}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-5 py-4 space-y-3">
        {/* Title */}
        <h3 className="text-text font-medium text-base leading-snug">{name}</h3>

        {/* Stars + rating */}

        <Star rating={rating} />

        {/* Price + actions */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-2xl font-medium text-text">
            ${price.toFixed(2)}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onAddToCart}
              className="
              cursor-pointer
              flex items-center justify-center w-9 h-9 rounded-xl
              bg-primary text-white
              hover:bg-primary-hover active:scale-95
              transition-all duration-200
            "
            >
              <IoAddCircleOutline size={18} />
            </button>
            <button
              disabled={btndisabled}
              onClick={onRemoveFromCart}
              className={`${btndisabled ? "cursor-not-allowed opacity-50 flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-border text-text-muted" : "cursor-pointer flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-border text-text-muted hover:border-red-300 hover:text-red-500 hover:bg-red-50  active:scale-95 transition-all duration-200"}`}
            >
              <IoTrashOutline size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
