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
      "/yre7.jpg",
      "/yre1.jpg",
      "/yre2.jpg",
      "/yre3.jpg",
      "/yre4.jpg",
      "/yre5.jpg",
      "/yre7.jpg",
      "/yre8.jpg",
      "/yre9.jpg",
      "/yre10.jpg",
    ],
    name: "NEWest Alliance - Yanchep Rail Extension (YRE)",
  },
  {
    id: 2,
    src: [
      "/tonkin.jpg",
      "/tonkin_underpass.jpg",
      "/tonkin_footbridge.jpg",
      "/tonkin_barrier_panels.jpg",
    ],
    name: "Tonkin Gap",
  },
  {
    id: 3,
    src: [
      "/brucerock_blask_paint2.jpg",
      "/brucerock_blask_paint1.jpg",
      "/brucerock_blask_paint3.jpg",
    ],
    name: "Bruce Rock Engineering",
  },
  {
    id: 4,
    src: ["/western_power.jpg"],
    name: "Western Power",
  },
  {
    id: 5,
    src: ["/roe_street1.jpg", "/roe_street2.jpg"],
    name: "Roe Street",
  },
  {
    id: 6,
    src: ["/laverton2.jpg"],
    name: "Laverton",
  },
  {
    id: 7,
    src: ["/canningdam.jpg"],
    name: "Canning Dam",
  },
  {
    id: 8,
    src: [
      "/belmontpark1.jpg",
      "/belmontpark2.jpg",
      "/belmontpark3.jpg",
      "/belmontpark4.jpg",
    ],
    name: "Belmont Park",
  },
  {
    id: 9,
    src: ["/portnelson1.jpg", "/portnelson2.jpg", "/portnelson3.jpg"],
    name: "Nelson Point",
  },
  {
    id: 10,
    src: ["/northstar.jpg", "/northstar_jagcor1.jpg", "northstar_jagcor2.jpg"],
    name: "NorthStar",
  },
  {
    id: 11,
    src: ["/mlc1.jpg", "/mlc2.jpg"],
    name: "MLC Swimming Pool",
  },
  {
    id: 12,
    src: ["/cloudbreak.jpg", "/cloudbreakFMG.jpg", "/cloudbreakFMG2.jpg"],
    name: "Cloudbreak",
  },
  {
    id: 13,
    src: ["/raffa.jpg"],
    name: "Raffa",
  },
  {
    id: 14,
    src: ["/canningtondam.jpg"],
    name: "Cannington Drainage Structures",
  },
  {
    id: 15,
    src: ["/aloha.jpg"],
    name: "Aloha Surfhouse",
  },
];
