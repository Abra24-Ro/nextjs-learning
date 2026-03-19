import { CartCounter } from "@/app/components/shopping-cart";

export const metadata = {
  title: "Counter",
  description:
    "A simple counter page to demonstrate state management in Next.js +13.",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
      {/* Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #ddd8cc",
          borderRadius: "2px",
          padding: "56px 72px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "340px",
          boxShadow: "0 1px 4px rgba(28,43,30,0.06)",
        }}
      >
        {/* Label */}
        <p
          style={{
            color: "#7a8c7d",
            fontSize: "10px",
            letterSpacing: "0.18em",
            fontFamily: "Georgia, serif",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          Products of the Day
        </p>

        {/* Divider top */}
        <div
          style={{
            width: "32px",
            height: "1px",
            backgroundColor: "#c8bfa0",
            marginBottom: "28px",
          }}
        />

       
        <CartCounter />

       
      </div>

      
      <p
        style={{
          marginTop: "24px",
          color: "#b0a890",
          fontSize: "10px",
          letterSpacing: "0.1em",
          fontFamily: "Georgia, serif",
        }}
      >
        State managed via useState · Next.js 13+
      </p>
    </div>
  );
}