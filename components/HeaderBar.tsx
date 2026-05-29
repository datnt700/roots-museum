"use client";
import React from "react";
import { Search, UserPlus } from "lucide-react";

export default function HeaderBar({ searchQuery, setSearchQuery }: any) {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF6F0]/95 backdrop-blur-md px-10 py-5 flex items-center justify-between border-b border-[#4A3E3D]/10">
      <div className="relative w-80">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#4A3E3D]/40" />
        <input
          type="text"
          placeholder="Tìm kiếm hiện vật, năm..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/80 border border-[#4A3E3D]/10 rounded-full py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
        />
      </div>
      <div className="flex items-center gap-6 text-xs font-medium">
        <button className="flex items-center gap-2 hover:text-[#D4AF37] transition-all">
          <UserPlus className="w-4 h-4" />
          <span>Mời Gia Đình</span>
        </button>
      </div>
    </header>
  );
}
