import Image from "next/image";
import type { Beer } from "@/data/beers";

interface BeersProps {
  beers: Beer[];
  limit?: number;
}

export function Beers({ beers, limit = 3 }: BeersProps) {
  const latestBeers = beers.slice(0, limit);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {latestBeers.map((beer) => (
        <article
          key={beer.id}
          className="group flex flex-col overflow-hidden rounded-lg border border-copper/20 bg-charcoal/50 transition-colors hover:border-amber/50"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-charcoal/80">
            {beer.image ? (
              <Image
                src={beer.image}
                alt={beer.name}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-copper/30 bg-charcoal/50 text-cream/40">
                <span className="text-sm">Image placeholder</span>
              </div>
            )}
            {beer.untappdRating && (
              <div className="absolute right-2 top-2 flex items-center gap-1 rounded bg-charcoal/90 px-2 py-1 text-amber">
                <span className="text-sm font-medium">
                  {beer.untappdRating}
                </span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3
              className="font-heading text-xl uppercase tracking-wider text-cream"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              {beer.name}
            </h3>
            <p className="mt-1 text-sm text-amber">{beer.style}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/80">
              {beer.description}
            </p>
            {beer.untappdUrl && (
              <a
                href={beer.untappdUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-amber transition-colors hover:text-amber/80"
              >
                View on Untappd
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
