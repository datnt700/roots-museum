"use client";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#4A3E3D] font-sans flex overflow-hidden">
      {children}
    </div>
  );
}
