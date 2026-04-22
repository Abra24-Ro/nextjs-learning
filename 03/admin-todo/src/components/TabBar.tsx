"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const tabsOptions = [
  { id: "1", label: "Todas" },
  { id: "2", label: "Activas" },
  { id: "3", label: "Hechas" },
  { id: "4", label: "Hoy" },
];

interface Props {
  currentTab?: number;
}

export const TabBar = ({ currentTab = 1 }: Props) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(currentTab);

  if (!tabsOptions.some((tab) => Number(tab.id) === currentTab)) {
    setSelectedTab(1);
    return null;
  }

  const onTabSelected = (tabId: number) => {
    setSelectedTab(tabId);
    setCookie("selectedTab", tabId, { path: "/" });
    router.refresh();
  };

  return (
    <div className="grid w-full grid-cols-4 gap-1 rounded-2xl bg-[#E8E0D0] p-1.5">
      {tabsOptions.map((tab) => (
        <div key={tab.id}>
          <input
            type="radio"
            name="tabs"
            id={tab.id}
            className="peer hidden"
            checked={selectedTab === Number(tab.id)}
            onChange={() => {}}
          />

          <label
            onClick={() => onTabSelected(Number(tab.id))}
            htmlFor={tab.id}
            className="
            block cursor-pointer select-none
            rounded-xl px-3 py-2
            text-center text-sm font-medium text-text-muted
            transition-all duration-200
            hover:text-text
            peer-checked:bg-white
            peer-checked:text-primary
            peer-checked:font-medium
            peer-checked:shadow-sm
        "
          >
            <span className="block">{tab.label}</span>
            <span className="block text-xs text-text-hint mt-0.5">
              id: {tab.id}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};
