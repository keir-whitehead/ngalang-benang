export interface ProjectCarouselProps {
  id: number;
  name: string;
  src: string[];
}

export interface ProjectsArrayProps {
  projects: ProjectCarouselProps[];
}

export const projects = [
  {
    id: 1,
    src: [
      "/yre7.webp",
      "/yre1.webp",
      "/yre2.webp",
      "/yre3.webp",
      "/yre4.webp",
      "/yre5.webp",
      "/yre7.webp",
      "/yre8.webp",
      "/yre9.webp",
      "/yre10.webp",
    ],
    name: "NEWest Alliance - Yanchep Rail Extension (YRE)",
  },
  {
    id: 2,
    src: [
      "/tonkin.webp",
      "/tonkin_underpass.webp",
      "/tonkin_footbridge.webp",
      "/tonkin_barrier_panels.webp",
    ],
    name: "Tonkin Gap",
  },
  {
    id: 3,
    src: [
      "/brucerock_blask_paint2.webp",
      "/brucerock_blask_paint1.webp",
      "/brucerock_blask_paint3.webp",
    ],
    name: "Bruce Rock Engineering",
  },
  {
    id: 4,
    src: ["/western_power.webp"],
    name: "Western Power",
  },
  {
    id: 5,
    src: ["/roe_street1.webp", "/roe_street2.webp"],
    name: "Roe Street",
  },
  {
    id: 6,
    src: ["/laverton2.webp"],
    name: "Laverton",
  },
  {
    id: 7,
    src: ["/canningdam.webp"],
    name: "Canning Dam",
  },
  {
    id: 8,
    src: [
      "/belmontpark1.webp",
      "/belmontpark2.webp",
      "/belmontpark3.webp",
      "/belmontpark4.webp",
    ],
    name: "Belmont Park",
  },
  {
    id: 9,
    src: ["/portnelson1.webp", "/portnelson2.webp", "/portnelson3.webp"],
    name: "Nelson Point",
  },
  {
    id: 10,
    src: ["/northstar.webp", "/northstar_jagcor1.webp", "/northstar_jagcor2.webp"],
    name: "NorthStar",
  },
  {
    id: 11,
    src: ["/mlc1.webp", "/mlc2.webp"],
    name: "MLC Swimming Pool",
  },
  {
    id: 12,
    src: ["/cloudbreak.webp", "/cloudbreakFMG.webp", "/cloudbreakFMG2.webp"],
    name: "Cloudbreak",
  },
  {
    id: 13,
    src: ["/raffa.webp"],
    name: "Raffa",
  },
  {
    id: 14,
    src: ["/canningtondam.webp"],
    name: "Cannington Drainage Structures",
  },
  {
    id: 15,
    src: ["/aloha.webp"],
    name: "Aloha Surfhouse",
  },
];
