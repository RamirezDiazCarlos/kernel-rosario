"use client";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export default function MacbookShowcase() {
  return (
    <div className="w-full">
      <MacbookScroll
        src="/tuNegocio2.webp"
        showGradient={false}
        title={
          <span className="text-white">
            Tu negocio, online y profesional.
          </span>
        }
      />
    </div>
  );
}
