import Image from "next/image";

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  if (images.length === 0) return null;

  const [first, second, third, fourth, ...more] = images;

  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-3">
      {first && (
        <div className="relative row-span-2 aspect-[1/2] overflow-hidden rounded-lg border border-copper/20 md:aspect-auto md:min-h-[280px]">
          <Image
            src={first}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      )}
      {second && (
        <div className="relative aspect-square overflow-hidden rounded-lg border border-copper/20">
          <Image
            src={second}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      )}
      {third && (
        <div className="relative aspect-square overflow-hidden rounded-lg border border-copper/20">
          <Image
            src={third}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      )}
      {fourth && (
        <div className="relative aspect-square overflow-hidden rounded-lg border border-copper/20">
          <Image
            src={fourth}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      )}
      {more.slice(0, 2).map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="relative aspect-square overflow-hidden rounded-lg border border-copper/20"
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
