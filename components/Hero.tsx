"use client";
import React from "react";

type HeroProps = {
  title: string;
  description: string;
  onOpen3D?: () => void;
};

export default function Hero({ title, description, onOpen3D }: HeroProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2B2321] to-[#453735] text-[#FDFBF7] p-10 shadow-2xl border border-[#D4AF37]/20">
      <div className="max-w-2xl space-y-4 relative z-10">
        <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
          Bản Giao Diện Mẫu
        </span>
        <h2 className="text-3.5xl font-bold font-serif leading-tight">
          {title}
        </h2>
        <p className="text-xs text-[#FAF6F0]/80 leading-relaxed font-sans">
          {description}
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <button className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold text-xs uppercase tracking-widest rounded-lg">
            Phát Album Ảnh Trực Quan
          </button>
          <button
            onClick={onOpen3D}
            className="px-6 py-3 bg-[#D4AF37] text-[#1F1918] font-bold text-xs uppercase tracking-widest rounded-lg"
          >
            Mở Tham Quan 3D
          </button>
        </div>
      </div>
    </div>
  );
}
