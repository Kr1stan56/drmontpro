export type Lang = "sl" | "en"

export type TranslationKeys = {
  nav: {
    domov: string
    storitve: string
    oNas: string
    zakajMi: string
    galerija: string
    kontakt: string
  }
  hero: {
    badge: string
    company: string
    titleBefore: string
    titleGradient: string
    titleAfter: string
    subtitle: string
    cta: string
    secondaryCta: string
    statYears: string
    statProjects: string
    statSatisfaction: string
  }
  services: {
    heading: string
    subtitle: string
    regions: string[]
    items: { title: string; desc: string; tags: string[] }[]
    galleryCta: string
  }
  about: {
    heading: string
    p1: string
    p2: string
    highlights: { title: string; desc: string }[]
  }
  whyUs: {
    heading: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  contact: {
    heading: string
    subtitle: string
    address: string
    addressValue: string
    phone: string
    email: string
    instagram: string
    formName: string
    formNamePlaceholder: string
    formEmailPlaceholder: string
    formPhone: string
    formPhonePlaceholder: string
    formMessage: string
    formMessagePlaceholder: string
    formSubmit: string
  }
  footer: {
    company: string
    description: string
    linksHeading: string
    contactHeading: string
    rights: string
    toTop: string
  }
  gallery: {
    title: string
    back: string
  }
}

const translations: Record<Lang, TranslationKeys> = {
  sl: {
    nav: {
      domov: "Domov",
      storitve: "Storitve",
      oNas: "O nas",
      zakajMi: "Zakaj mi",
      galerija: "Galerija",
      kontakt: "Kontakt",
    },
    hero: {
      badge: "Montaža sončnih elektrarn in gradbenih storitev",
      company: "DR MontPro, montaže in storitve, d.o.o.",
      titleBefore: "Montaža sončnih",
      titleGradient: "elektrarn",
      titleAfter: "in gradbenih storitev",
      subtitle:
        "Specializirani za montažo samooskrbnih sončnih elektrarn, gradbenih konstrukcij in zaključnih gradbenih del. Zanesljivost, kakovost in strokovnost na vsakem koraku.",
      cta: "Pridobite ponudbo",
      secondaryCta: "Naše storitve",
      statYears: "Let izkušenj",
      statProjects: "Projektov",
      statSatisfaction: "Zadovoljnih strank",
    },
    services: {
      heading: "Naše storitve",
      subtitle:
        "Specializirani smo za montaže na štirih ključnih področjih. Z našimi tremi specializiranimi ekipami delujemo na območju Slovenije, Italije, Hrvaške in Avstrije.",
      regions: ["Slovenija", "Italija", "Hrvaška", "Avstrija"],
      items: [
        {
          title: "Montaža sončnih elektrarn",
          desc: "Celovita montaža samooskrbnih sončnih elektrarn za gospodinjstva in podjetja. Načrtovanje, namestitev in priklop.",
          tags: ["Samooskrba", "Strešne", "Zemeljske"],
        },
        {
          title: "Montaža montažnih hiš",
          desc: "Strokovna montaža montažnih hiš po sistemu ključ v roke. Hitra in zanesljiva izvedba.",
          tags: ["Montažne hiše", "Ključ v roke", "Hitra gradnja"],
        },
        {
          title: "Montaža kovinskih konstrukcij",
          desc: "Montaža jeklenih nosilcev, hal, nadstreškov in drugih kovinskih konstrukcij po meri.",
          tags: ["Jeklene konstrukcije", "Hale", "Nadstreški"],
        },
        {
          title: "Montaža lesenih konstrukcij",
          desc: "Montaža lesenih nosilnih konstrukcij, brunaric, strešnih kritin in lesenih objektov.",
          tags: ["Lesene konstrukcije", "Brunarice", "Strehe"],
        },
      ],
      galleryCta: "Ogled galerije projektov",
    },
    about: {
      heading: "O nas",
      p1: 'DR MontPro je podjetje d.o.o., ki sta ga ustanovila dva izkušena poslovna partnerja z istim imenom – <strong>Denis Ramšak</strong> in <strong>Denis Rojc</strong>. Združujeva znanje, natančnost in učinkovitost v vseh fazah montaže.',
      p2: "Oba imava več kot tri leta podjetniških izkušenj kot samostojna podjetnika (s.p.). S poudarkom na strokovnosti, kakovosti in spoštovanju rokov zagotavljamo zanesljive rešitve tako za individualne kot poslovne stranke.",
      highlights: [
        { title: "Ustanovitelja", desc: "Denis Ramšak in Denis Rojc – dva izkušena poslovna partnerja z več kot 3 leti podjetniških izkušenj." },
        { title: "Specializirane ekipe", desc: "Tri specializirane ekipe za montaže sončnih elektrarn, montažnih hiš ter kovinskih in lesenih konstrukcij." },
        { title: "Štiri tržišča", desc: "Delujemo v Sloveniji, Italiji, Hrvaški in Avstriji – vedno pravočasno in strokovno." },
        { title: "Kakovost in roki", desc: "S poudarkom na strokovnosti, kakovosti in spoštovanju rokov zagotavljamo zanesljive rešitve." },
      ],
    },
    whyUs: {
      heading: "Zakaj izbrati nas?",
      subtitle: "Izberite partnerja, ki mu lahko zaupate. Tukaj je nekaj razlogov, zakaj so stranke zadovoljne z nami.",
      items: [
        { title: "Kakovost brez kompromisov", desc: "Vsak projekt izvedemo v skladu z najvišjimi standardi in s certificiranimi materiali." },
        { title: "Hitra in zanesljiva izvedba", desc: "Držimo se dogovorjenih rokov in zagotavljamo pravočasno dokončanje projektov." },
        { title: "Oseben pristop", desc: "Vsaki stranki prisluhnemo in najdemo rešitev, ki ustreza njenim potrebam in proračunu." },
        { title: "Celovite storitve", desc: "Od ideje do izvedbe — svetovanje, projektiranje, montaža in vzdrževanje na enem mestu." },
        { title: "Ugoden cenovni razred", desc: "Konkurenčne cene brez skritih stroškov. Pripravimo natančen predračun pred začetkom del." },
        { title: "Zelena prihodnost", desc: "Z montažo sončnih elektrarn prispevamo k čistejšemu okolju in nižjim stroškom energije." },
      ],
    },
    contact: {
      heading: "Kontaktirajte nas",
      subtitle: "Ste pripravljeni na svoj projekt? Pošljite nam sporočilo in pripravili vam bomo ponudbo.",
      address: "Naslov",
      addressValue: "Se bo dodalo",
      phone: "Telefon",
      email: "Email",
      instagram: "Instagram",
      formName: "Ime in priimek",
      formNamePlaceholder: "Janez Novak",
      formEmailPlaceholder: "janez@example.com",
      formPhone: "Telefon",
      formPhonePlaceholder: "041 234 567",
      formMessage: "Sporočilo",
      formMessagePlaceholder: "Povejte nam kaj več o vašem projektu...",
      formSubmit: "Pošlji sporočilo",
    },
    footer: {
      company: "DR MontPro,\nmontaže in storitve, d.o.o.",
      description:
        "Specializirani za montažo sončnih elektrarn in gradbene storitve. Zanesljiv partner za vaše projekte po vsej Sloveniji.",
      linksHeading: "Povezave",
      contactHeading: "Kontakt",
      rights: "DR MontPro, montaže in storitve, d.o.o. Vse pravice pridržane.",
      toTop: "Na vrh",
    },
    gallery: {
      title: "Galerija projektov",
      back: "Nazaj na domov",
    },
  },
  en: {
    nav: {
      domov: "Home",
      storitve: "Services",
      oNas: "About Us",
      zakajMi: "Why Us",
      galerija: "Gallery",
      kontakt: "Contact",
    },
    hero: {
      badge: "Solar & Construction Installation Experts",
      company: "DR MontPro, installations and services, Ltd.",
      titleBefore: "Solar Power",
      titleGradient: "Plants",
      titleAfter: "& Construction Services",
      subtitle:
        "Specialized in self-sufficient solar power plant installation, steel structures and finishing construction works. Reliability, quality and expertise at every step.",
      cta: "Get a Quote",
      secondaryCta: "Our Services",
      statYears: "Years of experience",
      statProjects: "Projects",
      statSatisfaction: "Satisfied clients",
    },
    services: {
      heading: "Our Services",
      subtitle:
        "We specialize in installations across four key areas. With our three specialized teams we operate in Slovenia, Italy, Croatia and Austria.",
      regions: ["Slovenia", "Italy", "Croatia", "Austria"],
      items: [
        {
          title: "Solar Power Plants",
          desc: "Complete installation of self-sufficient solar power plants for households and businesses. Planning, installation and grid connection.",
          tags: ["Self-supply", "Roof-mounted", "Ground-mounted"],
        },
        {
          title: "Prefab Houses",
          desc: "Professional turnkey prefab house installation. Fast and reliable execution.",
          tags: ["Prefab houses", "Turnkey", "Fast construction"],
        },
        {
          title: "Steel Structures",
          desc: "Installation of steel beams, halls, canopies and other custom metal structures.",
          tags: ["Steel structures", "Halls", "Canopies"],
        },
        {
          title: "Wood Structures",
          desc: "Installation of timber load-bearing structures, log cabins, roofing and wooden buildings.",
          tags: ["Wood structures", "Log cabins", "Roofs"],
        },
      ],
      galleryCta: "View Project Gallery",
    },
    about: {
      heading: "About Us",
      p1: 'DR MontPro is a limited company founded by two experienced business partners with the same name – <strong>Denis Ramšak</strong> and <strong>Denis Rojc</strong>. We combine knowledge, precision and efficiency in all phases of installation.',
      p2: "Both of us have over three years of entrepreneurial experience as sole traders (s.p.). With an emphasis on professionalism, quality and respect for deadlines, we provide reliable solutions for both individual and business clients.",
      highlights: [
        { title: "Founders", desc: "Denis Ramšak and Denis Rojc – two experienced business partners with over 3 years of entrepreneurial experience." },
        { title: "Specialized Teams", desc: "Three specialized teams for solar installations, prefab houses, and metal/wood structures." },
        { title: "Four Markets", desc: "We operate in Slovenia, Italy, Croatia and Austria – always on time and professional." },
        { title: "Quality & Deadlines", desc: "With focus on expertise, quality and deadline adherence we provide reliable solutions." },
      ],
    },
    whyUs: {
      heading: "Why Choose Us?",
      subtitle: "Choose a partner you can trust. Here are some reasons why clients are satisfied with us.",
      items: [
        { title: "Quality Without Compromise", desc: "Every project is executed to the highest standards with certified materials." },
        { title: "Fast & Reliable Execution", desc: "We stick to agreed deadlines and ensure timely project completion." },
        { title: "Personal Approach", desc: "We listen to each client and find a solution that fits their needs and budget." },
        { title: "Complete Services", desc: "From idea to execution — consulting, design, installation and maintenance in one place." },
        { title: "Affordable Pricing", desc: "Competitive prices with no hidden costs. We provide a detailed quote before work begins." },
        { title: "Green Future", desc: "By installing solar power plants we contribute to a cleaner environment and lower energy costs." },
      ],
    },
    contact: {
      heading: "Contact Us",
      subtitle: "Ready for your project? Send us a message and we will prepare a quote for you.",
      address: "Address",
      addressValue: "To be added",
      phone: "Phone",
      email: "Email",
      instagram: "Instagram",
      formName: "Full name",
      formNamePlaceholder: "John Doe",
      formEmailPlaceholder: "john@example.com",
      formPhone: "Phone",
      formPhonePlaceholder: "+386 41 234 567",
      formMessage: "Message",
      formMessagePlaceholder: "Tell us more about your project...",
      formSubmit: "Send Message",
    },
    footer: {
      company: "DR MontPro,\ninstallations and services, Ltd.",
      description:
        "Specialized in solar power plant installation and construction services. A reliable partner for your projects across Slovenia.",
      linksHeading: "Quick Links",
      contactHeading: "Contact",
      rights: "DR MontPro, installations and services, Ltd. All rights reserved.",
      toTop: "Back to top",
    },
    gallery: {
      title: "Project Gallery",
      back: "Back to home",
    },
  },
}

export function getTranslations(lang: Lang): TranslationKeys {
  return translations[lang]
}
