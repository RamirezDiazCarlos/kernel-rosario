"use client";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookShowcase() {
  return (
    <div className="w-full">
      <MacbookScroll
        src="/tuNegocio2.webp"
        showGradient={false}
        title={
          <span style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            No es una maqueta.<br />
            <span style={{ color: "var(--accent)" }}>Es tu próxima web.</span>
          </span>
        }
      />
    </div>
  );
}
