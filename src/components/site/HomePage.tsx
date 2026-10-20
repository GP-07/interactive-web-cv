import type { Locale } from "@/types/cv";
import { cv } from "@/data/cv";
import { siteUrl } from "@/lib/site";
import { localePath } from "@/lib/i18n";
import { Header } from "@/components/site/Header/Header";
import { Hero } from "@/components/site/Hero/Hero";
import { Timeline } from "@/components/site/Timeline/Timeline";
import { Reasoning } from "@/components/site/Reasoning/Reasoning";
import { Now } from "@/components/site/Now/Now";
import { Contact } from "@/components/site/Contact/Contact";
import { Footer } from "@/components/site/Footer/Footer";

/** Perfil en formato schema.org: lo que Google y las herramientas de búsqueda de candidatos entienden. */
function PersonJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: cv.name,
    url: new URL(localePath[locale], siteUrl).toString(),
    email: `mailto:${cv.email}`,
    jobTitle: cv.profile.jobTitle,
    description: cv.content[locale].meta.description,
    worksFor: { "@type": "Organization", name: cv.profile.worksFor },
    alumniOf: { "@type": "CollegeOrUniversity", name: cv.profile.alumniOf },
    knowsLanguage: ["es", "en"],
    knowsAbout: cv.profile.knowsAbout,
    sameAs: cv.links.map((link) => link.url),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <PersonJsonLd locale={locale} />
      <Header locale={locale} />
      <main id="top">
        <Hero locale={locale} />
        <Timeline locale={locale} />
        <Reasoning locale={locale} />
        <Now locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
