import Image from "next/image";
import Link from "next/link";
import { beers } from "@/data/beers";
import { galleryImages } from "@/data/gallery";
import { Beers } from "@/components/Beers";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal text-cream">
      {/* Hero */}
      <section className="relative flex min-h-[55vh] flex-col items-center justify-center px-6 py-16 md:min-h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-[#2a2219] to-charcoal" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <Image
            src="/odu_logo.svg"
            alt="ODU Brewery"
            width={280}
            height={280}
            priority
            className="h-48 w-auto md:h-64 lg:h-72 [filter:brightness(0)_invert(1)]"
          />
          <p
            className="font-heading mt-6 text-2xl uppercase tracking-[0.3em] text-cream/90 md:text-5xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Brewery
          </p>
          <p className="mt-6 max-w-md text-lg text-cream/80">
            Craft beer brewed with passion. <br/> Small batch, big flavor.
          </p>
          <Link
            href="#beers"
            className="mt-10 inline-flex items-center justify-center rounded border-2 border-copper px-8 py-3 font-heading text-sm uppercase tracking-widest text-copper transition-colors hover:bg-copper hover:text-charcoal"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Explore Beers
          </Link>
        </div>
      </section>

      {/* Gallery - bento grid */}
      <section className="border-t border-copper/30 bg-charcoal px-4 py-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Latest Beers */}
      <section id="beers" className="border-t border-copper/30 bg-charcoal py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <h2
            className="font-display mb-4 text-4xl text-amber md:text-5xl"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            Latest Beers
          </h2>
          <div className="mb-16 h-px w-24 bg-amber" />
          <Beers beers={beers} limit={3} />
        </div>
      </section>

      {/* Our Story */}
      <section className="border-t border-copper/30 py-24 px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-charcoal/80">
              <Image
                src="/odu-story.webp"
                alt="ODU Brewery story"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2
              className="font-display text-4xl text-amber md:text-5xl"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Our Story
            </h2>
            <div className="mb-6 mt-4 h-px w-24 bg-amber" />
            <p className="text-lg leading-relaxed text-cream/90">
              ODU Brewery started with a simple idea: brew beer we want to
              drink. What began as a hobby in a kitchen has grown into a small
              project to bring interesting products to local and international markets.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-cream/90">
              We believe in traditional methods, quality ingredients, and bold tastes.
              Every batch is brewed with care and attention to detail to create something unique and interesting.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-copper/30 bg-charcoal/50 py-24 px-6"
      >
        <div className="mx-auto max-w-2xl">
          <h2
            className="font-display text-4xl text-amber md:text-5xl"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            Contact Us
          </h2>
          <p className="mt-4 text-cream/80">
            Distributors and clients: get in touch for wholesale inquiries and
            partnerships.
          </p>
          <div className="mb-10 mt-4 h-px w-24 bg-amber" />
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-copper/30 py-12 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <p
            className="font-display text-2xl text-amber"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            ODU Brewery
          </p>
          <nav className="flex gap-8">
            <Link
              href="#beers"
              className="text-sm text-cream/80 transition-colors hover:text-amber"
            >
              Beers
            </Link>
            <Link
              href="#contact"
              className="text-sm text-cream/80 transition-colors hover:text-amber"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="mx-auto mt-8 max-w-6xl text-center text-sm text-cream/50">
          © {new Date().getFullYear()} ODU Brewery. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
