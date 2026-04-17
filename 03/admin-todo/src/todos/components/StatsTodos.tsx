import React from "react";


interface Props {
    total: number;
    completed: number;
    pending: number;
}
export const StatsTodos = ({ total, completed, pending }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-white rounded-xl border border-border px-4 py-3 text-center">
        <p className="text-2xl font-medium text-text">{total}</p>
        <p className="text-xs text-text-muted mt-0.5">Total</p>
      </div>
      <div className="bg-primary-muted rounded-xl border border-[#BBF7D0] px-4 py-3 text-center">
        <p className="text-2xl font-medium text-primary">{completed}</p>
        <p className="text-xs text-primary-hover mt-0.5">Completadas</p>
      </div>
      <div className="bg-accent-light rounded-xl border border-[#FDE68A] px-4 py-3 text-center">
        <p className="text-2xl font-medium text-accent">{pending}</p>
        <p className="text-xs text-[#92400E] mt-0.5">Pendientes</p>
      </div>
    </div>
  );
};
