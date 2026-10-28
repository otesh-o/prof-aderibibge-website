export type GalleryCategory = "Portrait" | "Event" | "Lecture" | "Award" | "Certificate";

export interface GalleryItem {
  id: string;
  /** File in /public, for example "/images/gallery/accra-2026.jpg". */
  src: string;
  /** Describe what is in the photo, for people using a screen reader. */
  alt: string;
  caption?: string;
  category: GalleryCategory;
  year?: number;
  /** Pixel size of the file. Used to reserve space so the grid does not jump while loading. */
  width: number;
  height: number;
  /** Photographer or source, if it should be credited. */
  credit?: string;
  /** true = shown in the photo strip on the home page (the first one is the large tile). */
  home?: boolean;
  /** false = not cleared for publishing yet (for example other people appear in it); hidden on the site. */
  confirmed?: boolean;
}

/**
 * Photos from the photoshoot and from events. Add one object per photo and put the file in
 * public/images/gallery/. The page, its filters and its viewer update by themselves.
 *
 *   {
 *     id: "accra-2026-1",
 *     src: "/images/gallery/accra-2026-1.jpg",
 *     alt: "Prof. Aderibigbe receiving the Africa Leadership Award on stage in Accra",
 *     caption: "Africa Leadership Award, Accra",
 *     category: "Award",
 *     year: 2026,
 *     width: 1600,
 *     height: 1067,
 *   }
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "portrait-blue-native",
    src: "/images/gallery/portrait-blue-native.webp",
    alt: "Prof. Aderibigbe smiling in a blue native outfit and cap with a lanyard, standing beside a robot sculpture and a 3D Printing & Fabrication Centre sign",
    caption: "At a 3D printing and fabrication centre",
    category: "Portrait",
    width: 769,
    height: 1280,
  },

  {
    id: "ekiti-2026-presenting-hall",
    src: "/images/gallery/ekiti-2026-presenting-hall.webp",
    alt: "Prof. Aderibigbe presenting at the front of a yellow hall to journalists and stakeholders seated at tables, beneath the Ekiti governorship dialogue banner",
    caption: "Presenting at the Ekiti State Governorship Media-Led Stakeholders' Dialogue on Credible Election, Ado-Ekiti",
    category: "Event",
    year: 2026,
    width: 1280,
    height: 853,
  },
  {
    id: "ekiti-2026-speaking",
    src: "/images/gallery/ekiti-2026-speaking.webp",
    alt: "Prof. Aderibigbe in a white outfit and orange striped cap, speaking into a microphone with notes in his hand",
    caption: "Facilitating at the Ekiti State Governorship Media-Led Stakeholders' Dialogue on Credible Election",
    category: "Event",
    year: 2026,
    width: 1280,
    height: 853,
  },
  {
    id: "ekiti-2026-addressing-participants",
    src: "/images/gallery/ekiti-2026-addressing-participants.webp",
    alt: "Prof. Aderibigbe standing at the front, seen from behind, addressing participants seated at white-clothed tables",
    caption: "Engaging participants at the Ekiti State Governorship Media-Led Stakeholders' Dialogue on Credible Election",
    category: "Event",
    year: 2026,
    width: 1280,
    height: 853,
  },
  {
    id: "ekiti-2026-group-1",
    src: "/images/gallery/ekiti-2026-group-1.webp",
    alt: "Group photograph of participants and organisers standing in front of the Ekiti governorship dialogue banner",
    caption: "Participants and organisers, Ekiti State Governorship Media-Led Stakeholders' Dialogue on Credible Election",
    category: "Event",
    year: 2026,
    width: 1280,
    height: 853,
    confirmed: false, // group photo: hold back until the people in it are cleared
  },
  {
    id: "ekiti-2026-group-2",
    src: "/images/gallery/ekiti-2026-group-2.webp",
    alt: "A second group photograph of participants and organisers in front of the Ekiti governorship dialogue banner",
    caption: "Participants and organisers, Ekiti State Governorship Media-Led Stakeholders' Dialogue on Credible Election",
    category: "Event",
    year: 2026,
    width: 1280,
    height: 853,
    confirmed: false, // group photo: hold back until the people in it are cleared
  },
  {
    id: "aes4-2026-seated-tablet",
    src: "/images/gallery/aes4-2026-seated-tablet.webp",
    alt: "Prof. Aderibigbe smiling as he looks at a tablet while seated in the audience at the 4th Africa Education Summit",
    caption: "In the audience, 4th Africa Education Summit, Accra",
    category: "Event",
    year: 2026,
    width: 1333,
    height: 2000,
  },
  {
    id: "aes4-2026-on-stage",
    src: "/images/gallery/aes4-2026-on-stage.webp",
    alt: "Prof. Aderibigbe on stage beside another man who is holding a framed certificate, in front of the 4th Africa Education Summit, Ghana 2026 backdrop",
    caption: "On stage at the 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 1600,
    height: 1066,
  },
  {
    id: "aes4-2026-panel-portrait",
    src: "/images/gallery/aes4-2026-panel-portrait.webp",
    alt: "Prof. Aderibigbe seated in a white armchair on stage, holding a microphone",
    caption: "Panel session, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 1066,
    height: 1600,
  },
  {
    id: "aes4-2026-panel-speaking-1",
    home: true,
    src: "/images/gallery/aes4-2026-panel-speaking-1.webp",
    alt: "Prof. Aderibigbe seated on the panel with his legs crossed, speaking into a microphone",
    caption: "Speaking on the panel, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 2000,
    height: 1333,
  },
  {
    id: "aes4-2026-panel-speaking-2",
    src: "/images/gallery/aes4-2026-panel-speaking-2.webp",
    alt: "Prof. Aderibigbe seated on the panel, speaking into a microphone while a staff member adjusts a microphone beside him",
    caption: "Speaking on the panel, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 2000,
    height: 1333,
  },
  {
    id: "aes4-2026-panel-pair-1",
    home: true,
    src: "/images/gallery/aes4-2026-panel-pair-1.webp",
    alt: "Prof. Aderibigbe seated on stage next to a fellow panellist in a bright patterned outfit",
    caption: "On the panel, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 2000,
    height: 1333,
  },
  {
    id: "aes4-2026-panel-pair-2",
    src: "/images/gallery/aes4-2026-panel-pair-2.webp",
    alt: "Prof. Aderibigbe holding a microphone on stage while a fellow panellist beside him reads from her phone",
    caption: "On the panel, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 2000,
    height: 1333,
  },
  {
    id: "aes4-2026-panel-wide",
    home: true,
    src: "/images/gallery/aes4-2026-panel-wide.webp",
    alt: "Wide view of the panel on stage at the 4th Africa Education Summit, with the audience in the foreground",
    caption: "The panel, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 2000,
    height: 1333,
  },
  {
    id: "aes4-2026-panel-seats",
    src: "/images/gallery/aes4-2026-panel-seats.webp",
    alt: "Prof. Aderibigbe and a fellow panellist seated either side of an empty armchair on stage",
    caption: "On the panel, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 1600,
    height: 1066,
  },
  {
    id: "aes4-2026-from-the-floor",
    home: true,
    src: "/images/gallery/aes4-2026-from-the-floor.webp",
    alt: "Prof. Aderibigbe standing in the audience, holding a microphone and pointing as he makes a point",
    caption: "Contributing from the floor, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 1600,
    height: 1066,
  },
  {
    id: "aes4-2026-listening",
    home: true,
    src: "/images/gallery/aes4-2026-listening.webp",
    alt: "Prof. Aderibigbe seated in the audience with his hand to his face, listening to a session, with a vase of yellow flowers in front of him",
    caption: "Listening to a session, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 1600,
    height: 1066,
  },
  {
    id: "aes4-2026-from-the-floor-2",
    src: "/images/gallery/aes4-2026-from-the-floor-2.webp",
    alt: "Prof. Aderibigbe standing in the audience with a microphone, raising a finger as he speaks",
    caption: "Contributing from the floor, 4th Africa Education Summit",
    category: "Event",
    year: 2026,
    width: 1600,
    height: 1066,
  },
  {
    id: "aes4-2026-certificate",
    src: "/images/gallery/aes4-2026-certificate.webp",
    alt: "Certificate of participation and completion awarded to Prof. Adebola Adewunmi Aderibigbe by Global Skills Hub United Kingdom for the 4th Africa Education Summit",
    caption: "Certificate of participation and completion, 19 to 21 March 2026",
    category: "Certificate",
    year: 2026,
    width: 990,
    height: 692,
  },
];
