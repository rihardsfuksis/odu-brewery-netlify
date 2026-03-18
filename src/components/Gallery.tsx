"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    if (expandedImage) {
      document.body.style.overflow = "hidden";
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setExpandedImage(null);
      };
      window.addEventListener("keydown", handleEscape);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEscape);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [expandedImage]);

  if (images.length === 0) return null;

  const [first, second, third, fourth, ...more] = images;

  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-3">
        {first && (
          <button
            type="button"
            onClick={() => setExpandedImage(first)}
            className="relative row-span-2 aspect-[1/2] overflow-hidden rounded-lg border border-copper/20 md:aspect-auto md:min-h-[280px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber/50 focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            <Image
              src={first}
              alt=""
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        )}
        {second && (
          <button
            type="button"
            onClick={() => setExpandedImage(second)}
            className="relative aspect-square overflow-hidden rounded-lg border border-copper/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber/50 focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            <Image
              src={second}
              alt=""
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        )}
        {third && (
          <button
            type="button"
            onClick={() => setExpandedImage(third)}
            className="relative aspect-square overflow-hidden rounded-lg border border-copper/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber/50 focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            <Image
              src={third}
              alt=""
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        )}
        {fourth && (
          <button
            type="button"
            onClick={() => setExpandedImage(fourth)}
            className="relative aspect-square overflow-hidden rounded-lg border border-copper/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber/50 focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            <Image
              src={fourth}
              alt=""
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        )}
        {more.slice(0, 2).map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => setExpandedImage(src)}
            className="relative aspect-square overflow-hidden rounded-lg border border-copper/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber/50 focus:ring-offset-2 focus:ring-offset-charcoal"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox overlay - image spans full width or height depending on viewport */}
      {expandedImage && (
        <button
          type="button"
          onClick={() => setExpandedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 focus:outline-none"
          aria-label="Close image"
        >
          <div className="relative h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)]">
            <Image
              src={expandedImage}
              alt=""
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </button>
      )}
    </>
  );
}
