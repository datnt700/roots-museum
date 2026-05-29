"use client";

import React, { useEffect, useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  FolderHeart,
  Home,
  Lock,
  Search,
  ShieldCheck,
  UserPlus,
  Volume2,
  X,
} from "lucide-react";

const navItems = [
  { key: "home", label: "Home", icon: Home },
  { key: "timeline", label: "Timeline", icon: Clock },
  { key: "collections", label: "Collections", icon: FolderHeart },
  { key: "vault", label: "Private Vault", icon: Lock },
];

const markers = [
  { left: "26%", top: "77%" },
  { left: "43%", top: "71%" },
  { left: "61%", top: "75%" },
  { left: "47%", top: "58%" },
];

function TreeLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="w-12 h-12 shrink-0"
    >
      <path
        d="M50,15 C45,15 40,18 40,23 C40,25 41,27 42,28 C38,29 35,32 35,36 C35,38 36,40 37,42 C32,43 28,47 28,52 C28,57 32,61 37,62 L37,68 L42,68 L42,75 L45,75 L45,85 L55,85 L55,75 L58,75 L58,68 L63,68 L63,62 C68,61 72,57 72,52 C72,47 68,43 63,42 C64,40 65,38 65,36 C65,32 62,29 58,28 C59,27 60,25 60,23 C60,18 55,15 50,15 Z"
        fill="none"
        stroke="var(--museum-accent)"
        strokeWidth="2"
      />
      <path
        d="M45,85 C42,87 35,88 30,88 M55,85 C58,87 65,88 70,88"
        fill="none"
        stroke="var(--museum-accent)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Page() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Playfair+Display:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen flex overflow-hidden bg-[var(--museum-base)] text-[var(--museum-text)]">
      <aside className="w-[290px] shrink-0 bg-[var(--museum-sidebar)] border-r border-[#C5A059]/10 px-5 py-6 flex flex-col justify-between shadow-[0_0_40px_rgba(0,0,0,0.35)]">
        <div className="space-y-7">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <TreeLogo />
              <div>
                <h1 className="font-serif text-[28px] leading-none tracking-[0.14em] text-[#F4E5C9]">
                  ROOTS
                </h1>
                <p className="font-serif text-[12px] tracking-[0.22em] uppercase text-[#D7BE8A] mt-1">
                  Your family. Your legacy.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-white/5 px-2 py-2 w-fit">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=160"
                alt="Aarav Sharma"
                className="w-10 h-10 rounded-full object-cover border border-[#C5A059]/25"
              />
              <div>
                <p className="text-[11px] text-[#DCCCB1]">Welcome back,</p>
                <div className="flex items-center gap-2 text-sm text-[#F6EBDD]">
                  <span className="font-medium">Aarav Sharma</span>
                  <ChevronRight className="w-3.5 h-3.5 rotate-90 text-[#DCCCB1]" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C5A059] mb-3">
              Discover
            </p>
            <nav className="space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveNav(item.key)}
                    className={`w-full flex items-center gap-3 rounded-[18px] px-4 py-3 text-sm tracking-wide transition-all border ${isActive ? "bg-[#9A7B42]/28 border-[#C5A059]/25 text-[#F5EBD2] shadow-[0_10px_30px_rgba(197,160,89,0.16)]" : "bg-transparent border-transparent text-[#D8C8AF] hover:bg-white/5 hover:border-white/5"}`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isActive ? "text-[#D4AF37]" : "text-[#D8C8AF]"}`}
                    />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="rounded-[18px] border border-[#C5A059]/20 bg-[#0F0B09] px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full border border-[#C5A059]/40 p-2 text-[#D4AF37] bg-[#C5A059]/10">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#C5A059] mb-1">
                  Legacy Guardian
                </p>
                <p className="text-[11px] leading-5 text-[#D8C8AF]">
                  AI is watching over your family heritage
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[18px] overflow-hidden border border-[#C5A059]/20 bg-[#181410] p-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
            <div className="h-32 rounded-[14px] border border-dashed border-[#C5A059]/45 relative overflow-hidden bg-[#0F0B09]">
              <div
                className="absolute inset-0 opacity-80"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(197,160,89,0.35), transparent 14%), radial-gradient(circle at 20% 30%, rgba(197,160,89,0.18), transparent 4%), radial-gradient(circle at 78% 24%, rgba(197,160,89,0.18), transparent 4%), linear-gradient(90deg, transparent 0 20%, rgba(197,160,89,0.45) 20% 20.5%, transparent 20.5% 39%, rgba(197,160,89,0.45) 39% 39.5%, transparent 39.5% 60%, rgba(197,160,89,0.45) 60% 60.5%, transparent 60.5% 80%, rgba(197,160,89,0.45) 80% 80.5%, transparent 80.5% 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#FFF2D4] shadow-[0_0_24px_rgba(255,242,212,0.95)]" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-[#D7BE8A]">
              <div>
                <p className="text-sm font-serif">Hall of Memories</p>
                <p className="text-[11px] mt-1 text-[#9E8C69]">
                  Section 1 of 8
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-[#C5A059]" />
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 relative min-w-0 overflow-hidden bg-[#110D0B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,242,212,0.08),transparent_24%),linear-gradient(180deg,rgba(17,13,11,0.4),rgba(17,13,11,0.86))]" />

        <div className="relative z-10 h-full flex flex-col">
          <header className="px-8 pt-6 flex items-start justify-between gap-6">
            <div className="max-w-xl pt-2">
              <p className="font-serif text-[30px] leading-none text-[#F7EAD7]">
                Hall of Memories
              </p>
              <p className="mt-2 text-sm text-[#E7D8C0] max-w-md leading-6">
                Walk through your family's precious moments.
              </p>
            </div>

            <div className="flex items-center gap-3 text-[#E7D8C0]">
              <button className="h-11 rounded-full border border-[#C5A059]/25 bg-[#1A140F]/60 px-5 text-sm flex items-center gap-2 hover:bg-[#1F1913] transition-colors">
                <UserPlus className="w-4 h-4 text-[#D4AF37]" />
                <span>Invite Family</span>
              </button>
              <button className="w-11 h-11 rounded-full border border-[#C5A059]/20 bg-[#1A140F]/50 flex items-center justify-center hover:bg-[#201911] transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="w-11 h-11 rounded-full border border-[#C5A059]/20 bg-[#1A140F]/50 flex items-center justify-center hover:bg-[#201911] transition-colors">
                <Bell className="w-4 h-4" />
              </button>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=160"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border border-[#C5A059]/25"
              />
            </div>
          </header>

          <section className="relative flex-1 px-6 pb-6 pt-5">
            <div className="relative h-full rounded-[32px] overflow-hidden border border-[#C5A059]/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] bg-[#120E0C]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(10,7,5,0.8) 0%, rgba(10,7,5,0.35) 24%, rgba(10,7,5,0.12) 40%, rgba(10,7,5,0.14) 68%, rgba(10,7,5,0.78) 100%), url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1600')",
                }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_36%,rgba(255,242,212,0.12),transparent_14%),radial-gradient(circle_at_50%_52%,rgba(255,242,212,0.06),transparent_12%),linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.2))]" />

              <div className="absolute inset-0 px-8 py-8 pointer-events-none">
                <div className="absolute left-[10%] top-[16%] max-w-[350px] pointer-events-auto">
                  <div className="text-[#F4E5C9] font-serif text-3xl leading-[1.1]">
                    Hall of Memories
                  </div>
                  <p className="mt-2 text-sm text-[#F6EBDD]/90 max-w-[220px] leading-6">
                    Walk through your family's precious moments.
                  </p>
                </div>

                {markers.map((marker, index) => (
                  <div
                    key={index}
                    className="absolute w-24 h-24 rounded-full border border-[#FFF2D4]/90 shadow-[0_0_30px_rgba(255,242,212,0.55)] flex items-center justify-center"
                    style={{ left: marker.left, top: marker.top }}
                  >
                    <ChevronUp className="w-9 h-9 text-[#FFF2D4]" />
                  </div>
                ))}

                <div className="absolute right-[6%] top-[15%] w-[430px] h-[560px]">
                  <div className="absolute inset-0 rounded-t-[10px] rounded-b-[6px] border border-[#C5A059]/22 bg-[#110D0B]/5 backdrop-blur-[1px] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_25px_80px_rgba(0,0,0,0.35)]" />
                  <div className="absolute inset-x-[14px] top-[14px] bottom-[110px] rounded-[6px] overflow-hidden border border-white/5 bg-[#1b1410]">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_18%,transparent_82%,rgba(0,0,0,0.2))]" />
                    <div className="absolute inset-x-[16px] top-6 h-10 bg-[radial-gradient(circle_at_top,rgba(255,242,212,0.98),rgba(255,242,212,0.28),transparent_70%)] blur-[1px]" />
                    <div className="absolute inset-x-[46px] top-[78px] bottom-[26px] flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img
                          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1100"
                          alt="Wedding portrait"
                          className="max-h-full max-w-full object-contain grayscale contrast-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] rotate-[-1deg]"
                        />
                        <div className="absolute bottom-[-6px] left-1/2 h-[14px] w-28 -translate-x-1/2 rounded-[50%] bg-[#5B4330] blur-[1px]" />
                        <div className="absolute left-1/2 top-[72%] h-28 w-3 -translate-x-1/2 bg-[#674D37] rounded-sm rotate-[-3deg] shadow-[0_8px_14px_rgba(0,0,0,0.3)]" />
                        <div className="absolute left-1/2 top-[57%] w-48 h-48 -translate-x-1/2 -translate-y-1/2 border border-[#C5A059]/18 rounded-sm rotate-[-4deg] shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-[128px] rounded-b-[6px] bg-[#1b120e] border border-[#201812] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] flex items-end">
                    <div className="w-full px-5 pb-5 text-[#E7D8C0]">
                      <div className="font-serif text-[28px] leading-none">
                        Meera &amp; Ramesh
                      </div>
                      <div className="mt-2 text-[13px] text-[#D8C8AF]">
                        Wedding Day, 1984
                      </div>
                      <div className="mt-1 text-[12px] text-[#BCA77B]">
                        A beautiful beginning...
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[11px] text-[#BCA77B] uppercase tracking-[0.2em]">
                          All Restored Photo
                        </span>
                        <div className="w-6 h-6 rounded-full border border-[#C5A059]/60 text-[#C5A059] flex items-center justify-center text-[11px]">
                          i
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-8 bottom-8 w-[280px] rounded-[18px] bg-black/40 backdrop-blur-md border border-[#C5A059]/12 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                  <div className="h-24 rounded-[14px] bg-[#0F0B09] border border-[#C5A059]/30 relative overflow-hidden">
                    <div className="absolute inset-3 border border-dashed border-[#C5A059]/60 rounded-[10px]" />
                    <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFF2D4] shadow-[0_0_18px_rgba(255,242,212,0.8)]" />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-4 text-[#E7D8C0]">
                    <div>
                      <div className="text-sm font-serif text-[#F4E5C9]">
                        You are here
                      </div>
                      <div className="text-[12px] mt-1 text-[#D8C8AF]">
                        Hall of Memories
                      </div>
                      <div className="text-[11px] mt-0.5 text-[#BCA77B]">
                        Section 1 of 8
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C5A059] mt-1" />
                  </div>
                </div>

                <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center gap-0 rounded-full bg-[#2A2017]/70 backdrop-blur-md border border-[#C5A059]/14 shadow-[0_18px_40px_rgba(0,0,0,0.38)] overflow-hidden">
                  <button className="w-14 h-10 flex items-center justify-center text-[#E9D7B3] hover:bg-white/5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-16 h-16 mx-1 my-1 rounded-full bg-[#F0D7A2] flex items-center justify-center shadow-[0_0_0_4px_rgba(197,160,89,0.12),0_10px_20px_rgba(0,0,0,0.25)] text-[#1C140F]">
                    <ChevronUp className="w-7 h-7" />
                  </button>
                  <button className="w-14 h-10 flex items-center justify-center text-[#E9D7B3] hover:bg-white/5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 text-[#D8C8AF]">
                  <button className="w-11 h-11 rounded-full border border-[#C5A059]/18 bg-[#1A140F]/55 flex items-center justify-center hover:bg-[#201912] transition-colors">
                    <X className="w-4 h-4 rotate-45" />
                  </button>
                  <button className="w-11 h-11 rounded-full border border-[#C5A059]/18 bg-[#1A140F]/55 flex items-center justify-center hover:bg-[#201912] transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button className="w-11 h-11 rounded-full border border-[#C5A059]/18 bg-[#1A140F]/55 flex items-center justify-center hover:bg-[#201912] transition-colors">
                    <UserPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
