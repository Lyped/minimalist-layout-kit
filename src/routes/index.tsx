import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";

const images = {
  logo: "https://heifers.lv/images/logo.png",
  heroDairy: "https://heifers.lv/images/slider/b9ca82c4-a3df-47b0-85c6-f812c42ca43a.jpeg",
  heroBeef: "https://heifers.lv/images/slider/51a6eff9-751a-405a-9b9d-427c3c668708.jpeg",
  company: [
    "https://heifers.lv/images/slider/5.jpeg",
    "https://heifers.lv/images/slider/1.jpeg",
    "https://heifers.lv/images/slider/c012b114-ff79-4544-8c55-3526fab9c014.jpeg",
  ],
  dairy: "https://heifers.lv/images/tab-1.jpeg",
  beef: "https://heifers.lv/images/tab-2.jpeg",
  transport: "https://heifers.lv/images/background/2.jpg",
  news: [
    "https://heifers.lv/images/haber/a301d53f-34f6-4eaf-9fa6-8911b5e41f51.jpeg",
    "https://heifers.lv/images/haber/87ae33df-dba0-441a-a83d-a22b767ec5bb.jpeg",
    "https://heifers.lv/images/haber/bc458942-c538-433f-b1cb-c98e0db76d71.jpeg",
  ],
  gallery: [
    "https://heifers.lv/images/galeri/616fd772-018f-46a2-bba0-446fdcd18ed3.jpeg",
    "https://heifers.lv/images/galeri/360afbe3-12b2-4383-abbe-8063d651e849.jpeg",
    "https://heifers.lv/images/galeri/b128e925-b9b6-49d5-8376-120be3ed9e82.jpeg",
    "https://heifers.lv/images/galeri/2500c753-1c8b-47cb-9590-7ed9ae9f9dad.jpeg",
  ],
};

const navItems = [
  ["Corporate", "about"],
  ["Breeding heifers", "breeds"],
  ["Livestock transport", "transport"],
  ["News", "news"],
  ["Gallery", "gallery"],
  ["Contact", "contact"],
] as const;

const dairyBreeds = ["Holstein", "Fleckvieh", "Swiss Brown", "Danish Red", "Jersey", "Norwegian Red", "Montbéliarde"];
const beefBreeds = ["Charolais", "Limousin", "Simmental", "Aberdeen Angus", "Belgian Blue", "Hereford"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eurasia Livestock | Breeding Heifers" },
      { name: "description", content: "Eurasia Livestock supplies quality dairy and beef breeding heifers across Europe." },
      { property: "og:title", content: "Eurasia Livestock | Breeding Heifers" },
      { property: "og:description", content: "Quality breeding heifers and livestock transport from Latvia across Europe." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: images.heroDairy },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.heroDairy },
    ],
  }),
  component: HomePage,
});

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="site-wrap flex h-20 items-center justify-between gap-6">
          <a href="#top" aria-label="Eurasia Livestock home" className="shrink-0">
            <img src={images.logo} alt="Eurasia Livestock" className="h-9 w-auto" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
          </nav>
          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <div className="flex text-xs text-muted-foreground" aria-label="Languages">
              <a href="#" className="px-2 py-1">TR</a><a href="#" className="rounded-full bg-secondary px-2 py-1 font-semibold text-foreground">EN</a><a href="#" className="px-2 py-1">RU</a>
            </div>
          </div>
          <button className="menu-button lg:hidden" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span />
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-6 py-4 lg:hidden">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm">{label}</a>)}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="site-wrap grid gap-8 py-10 lg:grid-cols-12 lg:items-end lg:py-16">
          <div className="lg:col-span-4 lg:pb-4">
            <p className="eyebrow">Breeding heifers</p>
            <h1 className="mt-4 max-w-[11ch] font-serif text-5xl leading-[1.02] sm:text-6xl">Cattle you can trace, breed by breed.</h1>
            <p className="mt-6 max-w-sm text-[15px] leading-7 text-muted-foreground">Pure race, pregnant and non-pregnant dairy and beef heifers, sourced by one of Europe’s leading livestock exporters.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#breeds" className="pill-button bg-primary text-primary-foreground">View heifers <Arrow /></a>
              <a href="#about" className="pill-button border border-border">Our story</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-8">
            <figure className="group relative overflow-hidden rounded-xl"><img src={images.heroDairy} alt="Dairy breeding heifers" className="hero-image" /><figcaption className="image-label">Dairy</figcaption></figure>
            <figure className="group relative overflow-hidden rounded-xl"><img src={images.heroBeef} alt="Beef breeding heifers" className="hero-image" /><figcaption className="image-label">Beef</figcaption></figure>
          </div>
        </section>

        <section id="about" className="site-wrap scroll-mt-24 pb-20 pt-8 lg:pb-28">
          <div className="section-heading"><div><p className="eyebrow">Corporate</p><h2 className="section-title">The company</h2></div><p>Established in Latvia with a trusted network of partner farms throughout Europe.</p></div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              ["Who we are", "Eurasia Livestock is a Latvia-based company and one of the biggest livestock exporters in Europe.", "Holstein cows grazing in an open field"],
              ["What we do", "We supply selected breeding heifers and manage every stage, from sourcing and veterinary checks to delivery.", "Heifers feeding in a barn"],
              ["Why us", "If you earn and are pleased, we will continue to exist.", "A veterinarian inspecting heifers"],
            ].map(([title, copy, alt], index) => (
              <article key={title} className={index === 1 ? "md:pt-16" : ""}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg"><img src={images.company[index]} alt={alt} loading="lazy" className="content-image" /></div>
                <h3 className="mt-5 font-serif text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="breeds" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
          <div className="site-wrap">
            <div className="section-heading"><div><p className="eyebrow">Our breeds</p><h2 className="section-title">Dairy & beef lines</h2></div><p>Dairy and beef breeds sourced and delivered from our network of partner farms.</p></div>
            <div className="grid gap-6 lg:grid-cols-2">
              <BreedPanel image={images.dairy} title="Dairy breed heifers" text="Pure race, pregnant and non-pregnant heifers bred for consistent milk yield and fat content." breeds={dairyBreeds} />
              <BreedPanel image={images.beef} title="Beef breed heifers" text="Brood stock selected for strong conformation and reliable herd growth." breeds={beefBreeds} />
            </div>
          </div>
        </section>

        <section id="transport" className="site-wrap grid scroll-mt-20 gap-10 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="overflow-hidden rounded-xl lg:col-span-7"><img src={images.transport} alt="Livestock transport lorries ready to depart" loading="lazy" className="aspect-[16/10] w-full object-cover" /></div>
          <div className="lg:col-span-4 lg:col-start-9"><p className="eyebrow">Across Europe</p><h2 className="section-title mt-3">Livestock transport</h2><p className="mt-5 leading-7 text-muted-foreground">Our strategic plan is to meet the individual needs of each customer, with high-quality delivery that adapts to the changing livestock market. The journey of your breeding heifers matters as much as the animals themselves.</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 border-b border-border pb-1 text-sm font-semibold">Request a quote <Arrow /></a></div>
        </section>

        <section id="news" className="scroll-mt-20 border-y border-border bg-card py-20 lg:py-28">
          <div className="site-wrap grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7"><p className="eyebrow">Updates</p><h2 className="section-title mt-3 mb-8">News from us</h2><div className="divide-y divide-border">{["News 3", "News 2", "News 1"].map((title, index) => <article key={title} className="grid grid-cols-[112px_1fr] gap-5 py-5 first:pt-0"><img src={images.news[index]} alt="" loading="lazy" className="aspect-square w-28 rounded-md object-cover" /><div><time className="text-xs uppercase text-muted-foreground">21 Nov 2018</time><h3 className="mt-2 font-serif text-2xl">{title}</h3><a href="#contact" className="mt-3 inline-block text-xs font-semibold text-accent">Read story →</a></div></article>)}</div></div>
            <div id="gallery" className="scroll-mt-24 lg:col-span-5"><p className="eyebrow">In the field</p><h2 className="section-title mt-3 mb-8">Gallery</h2><div className="grid grid-cols-2 gap-3">{["Holstein", "Fleckvieh", "Swiss Brown", "Danish Red"].map((breed, index) => <figure key={breed} className="group relative overflow-hidden rounded-md"><img src={images.gallery[index]} alt={breed} loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.03]" /><figcaption className="absolute inset-x-3 bottom-3 text-xs font-semibold text-primary-foreground drop-shadow">{breed}</figcaption></figure>)}</div></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-accent py-20 text-accent-foreground lg:py-24">
          <div className="site-wrap grid gap-12 lg:grid-cols-2">
            <div><p className="text-xs uppercase text-accent-foreground/65">Contact</p><h2 className="mt-3 max-w-md font-serif text-4xl sm:text-5xl">Stay up to date with Eurasia Livestock</h2><address className="mt-7 not-italic leading-7 text-accent-foreground/70">Kr. Barona iela 30-2, LV1011, Riga, Latvia<br /><a href="tel:+37126800900">+(371) 26 800 900</a><br /><a href="mailto:eurasia@eurasia.lv">eurasia@eurasia.lv</a></address></div>
            <form onSubmit={submitForm} className="grid gap-5 sm:grid-cols-2"><label className="field"><span>Full name</span><input name="name" required placeholder="Your full name" /></label><label className="field"><span>Phone</span><input name="phone" type="tel" required placeholder="Your phone number" /></label><label className="field sm:col-span-2"><span>E-mail</span><input name="email" type="email" required placeholder="Your email address" /></label><div className="sm:col-span-2"><button type="submit" className="pill-button bg-background text-foreground">Subscribe <Arrow /></button>{submitted && <p role="status" className="mt-4 text-sm">Thank you — your details have been received.</p>}</div></form>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-primary-foreground/65"><div className="site-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><img src={images.logo} alt="Eurasia Livestock" className="h-8 w-auto brightness-0 invert" /><p className="text-xs">Copyright © 2018 Eurasia Livestock — All rights reserved.</p><div className="flex gap-5 text-xs"><a href="#">TR</a><a href="#" className="text-primary-foreground">EN</a><a href="#">RU</a></div></div></footer>
    </div>
  );
}

function BreedPanel({ image, title, text, breeds }: { image: string; title: string; text: string; breeds: string[] }) {
  return <article className="rounded-lg bg-background p-5 sm:p-7"><img src={image} alt={title} loading="lazy" className="aspect-[16/10] w-full rounded-md object-cover" /><h3 className="mt-6 font-serif text-3xl">{title}</h3><p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">{text}</p><div className="mt-6 grid grid-cols-2 border-t border-border">{breeds.map((breed) => <span key={breed} className="border-b border-border py-3 text-sm">{breed}</span>)}</div></article>;
}