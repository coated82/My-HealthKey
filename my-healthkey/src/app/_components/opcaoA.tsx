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
            className={`w-3 h-3 rounded-full transition-all mx-1 ${selected ? "bg-[#D32F2F] w-6" : "bg-gray-400 hover:bg-gray-500"
                }`}
        />
    );
}

export function OpcaoA() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]); // ← CORRIGIDO

    const produto = [
        {
            id: 1,
            name: "Paracetamol1",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 2,
            name: "Paracetamol2",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 3,
            name: "Paracetamol3",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 4,
            name: "Paracetamol4",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 5,
            name: "Paracetamol6",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 6,
            name: "Paracetamol5",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 7,
            name: "Paracetamol7",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 8,
            name: "Paracetamol8",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 9,
            name: "Paracetamol9",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
        },
        {
            id: 0,
            name: "Paracetamol10",
            description: "750mg - 20 Comprimidos",
            price: "R$ 12,90",
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
            <div className="ml-16 mt-4 mb-2">
                <h1 className="text-3xl font-bold text-gray-800 font-mono">
                    Produto Top
                </h1>
            </div>
            <div className="overflow-hidden rounded-xl mx-16" ref={emblaRef}>
                <div className="flex">
                    {produto.map((produto) => (
                        <div key={produto.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_20%] min-w-0 px-2">
                            <div
                                className="bg-white rounded-2xl p-6 h-52 w-full flex items-center justify-center gap-4 shadow-sm"
                            >
                                <div className="shrink-0 w-24 h-24 relative">
                                    <Image
                                        src="/Paracetamol.png"
                                        alt="Paracetamol"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-black flex-1 flex flex-col justify-center">
                                    <h3 className="text-base font-bold font-mono text-gray-900 truncate">
                                        {produto.name}
                                    </h3>
                                    <p className="text-xs font-mono text-gray-500 mt-1 leading-tight line-clamp-2">
                                        {produto.description}
                                    </p>
                                    <span className="text-lg font-bold font-mono text-[#D32F2F] mt-2 block">
                                        {produto.price}
                                    </span>
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


        </div>
    );
}
