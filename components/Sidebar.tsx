"use client";
import React from "react";
import { Home, Eye } from "lucide-react";

export default function Sidebar({ onOpen3D }: { onOpen3D?: () => void }) {
  return (
    <aside className="w-80 bg-[#1F1918] text-[#FDFBF7] flex flex-col justify-between border-r border-[#4A3E3D]/30 shrink-0 relative z-20 shadow-2xl">
      <div className="p-6 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-gradient-to-br from-amber-800 to-amber-950 shadow-inner">
            <span className="text-xl font-serif text-[#D4AF37] font-bold">
              LR
            </span>
          </div>
          <div>
            <h1 className="text-xl font-bold font-serif tracking-wider text-[#D4AF37]">
              LEGACY ROOTS
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-[#F9F6F0]/50">
              Bảo tàng Ký ức Gia đình
            </p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <button className="w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all text-white/70 hover:bg-white/5 hover:text-white">
            <Home className="w-5 h-5" />
            <span>Sảnh Bảo Tàng</span>
          </button>
          <button
            onClick={onOpen3D}
            className="w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all text-white/70 hover:bg-white/5 hover:text-white"
          >
            <Eye className="w-5 h-5" />
            <span>Tham Quan 3D</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
