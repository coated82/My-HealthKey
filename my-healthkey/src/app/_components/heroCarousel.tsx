"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface ButtonProps {
  enabled: boolean;
  onClick: () => void;
}

interface DotButtonProps {
  selected: boolean;
  onClick: () => void;
}

function PrevButton({ enabled, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all disabled:opacity-50"
      style={{ width: "40px", height: "40px" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
}

function NextButton({ enabled, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all disabled:opacity-50"
      style={{ width: "40px", height: "40px" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

function DotButton({ selected, onClick }: DotButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-3 h-3 rounded-full transition-all mx-1 ${
        selected ? "bg-[#D32F2F] w-6" : "bg-gray-400 hover:bg-gray-500"
      }`}
    />
  );
}

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]); // ← CORRIGIDO

  const banners = [
    {
      id: 1,
      title: "20% OFF",
      description: "Em toda linha de medicamentos",
      bgColor: "#C62828",
    },
    {
      id: 2,
      title: "Frete Grátis",
      description: "Nas compras acima de R$ 99",
      bgColor: "#2E7D32",
    },
    {
      id: 3,
      title: "Clube de Benefícios",
      description: "Acumule pontos e troque por produtos",
      bgColor: "#1565C0",
    },
    {
      id: 4,
      title: "Até 3x sem juros",
      description: "No cartão de crédito",
      bgColor: "#E65100",
    },
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group mt-6">
      <div className="overflow-hidden rounded-xl mx-16" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner) => (
            <div key={banner.id} className="flex-[0_0_100%] min-w-0 relative">
              <div
                style={{ backgroundColor: banner.bgColor }}
                className="h-70 md:h-87.5 lg:h-80 w-full flex items-center justify-between px-8 md:px-16"
              >
                <div className="text-white max-w-md text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-4 md:mb-6">
                    {banner.description}
                  </p>
                  <button className="bg-white text-[#D32F2F] px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition text-sm md:text-base">
                    Aproveitar
                  </button>
                </div>

                <div className="hidden md:block">
                  <Image
                    src="/Paracetamol.png"
                    alt="Paracetamol"
                    width={180}
                    height={180}
                    className="drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PrevButton
        onClick={() => emblaApi?.scrollPrev()}
        enabled={prevBtnEnabled}
      />
      <NextButton
        onClick={() => emblaApi?.scrollNext()}
        enabled={nextBtnEnabled}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
