"use client";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { addOne, initCounterState } from "@/app/store/counter/counterSlice";

import { useEffect } from "react";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method:string;
  count:number
}




const getApiCounter = async ():Promise<CounterResponse> => {
  const data = await fetch("/api/counter");
  const response = await data.json();
  return response;
};

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({count}) => {
      dispatch(initCounterState(count));
    });
  }, [dispatch]);


  

  return (
    <>
      {/* Number */}
      <span
        style={{
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: "96px",
          fontWeight: 400,
          color: "#1c2b1e",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "28px",
          minWidth: "160px",
          textAlign: "center",
          transition: "color 0.2s ease",
        }}
      >
        {count}
      </span>

      {/* Divider */}
      <div
        style={{
          width: "32px",
          height: "1px",
          backgroundColor: "#c8bfa0",
          marginBottom: "32px",
        }}
      />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => dispatch(addOne())}
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "#1c2b1e",
            color: "#d4c9a8",
            border: "none",
            borderRadius: "2px",
            fontSize: "22px",
            fontFamily: "Georgia, serif",
            fontWeight: 300,
            cursor: "pointer",
            transition: "background-color 0.15s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#2e4a33")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#1c2b1e")
          }
        >
          +
        </button>
        <button
          // onClick={removeEntry}
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "transparent",
            color: "#4a6350",
            border: "1px solid #c8bfa0",
            borderRadius: "2px",
            fontSize: "22px",
            fontFamily: "Georgia, serif",
            fontWeight: 300,
            cursor: "pointer",
            transition: "all 0.15s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f5f1e8";
            e.currentTarget.style.borderColor = "#7aaa8a";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.borderColor = "#c8bfa0";
          }}
        >
          −
        </button>
      </div>

      {/* Reset */}
      <button
        // onClick={resetEntry}
        style={{
          marginTop: "20px",
          background: "none",
          border: "none",
          color: "#a09880",
          fontSize: "10px",
          letterSpacing: "0.12em",
          cursor: "pointer",
          fontFamily: "Georgia, serif",
          textTransform: "uppercase",
          padding: "4px 0",
          transition: "color 0.15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#1c2b1e")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#a09880")}
      >
        Reset
      </button>
    </>
  );
};
