export interface ServicesMapProps {
  name: string;
  description: string;
  imageSrc: string;
}

export interface ServicesArrayProps {
  services: ServicesMapProps[];
}

export const services = [
  {
    name: "Steel Reinforcement",
    description:
      "Placement and securing of steel reinforcement bars and mesh sheets, ensuring strength and durability. Through expertise and attention to detail, we consistently achieve outstanding quality in reinforcing steel installations.",
    imageSrc: "/yre6.jpg",
  },
  {
    name: "Concrete",
    description:
      "Pouring, leveling, and finishing of concrete, crucial for creating stable foundations and structures. We specialise in: concrete placement, structural concrete, suspended concrete, footings and slabs, in-situ walls and slabs, tilt panel walls, and bridge construction.",
    imageSrc: "/concrete.jpg",
  },
  {
    name: "Formwork",
    description:
      "Construction of molds or forms to hold wet concrete in the desired shape. We deliver superior formwork solutions, thanks to our teams expertise and precision.",
    imageSrc: "/formwork.jpg",
  },
  {
    name: "Earthworks",
    description:
      "Manipulation of the earth's surface, including excavation, grading, and land clearing, to prepare sites for construction. We are a trusted partner in shaping the foundations of projects with care and caution.",
    imageSrc: "/earthworks.jpg",
  },
  {
    name: "Noise Walls",
    description:
      "Construction of wall panels, installation of support structures, placement of wall panels, connection and sealing. We excel in delivering high-quality installations for our clients.",
    imageSrc: "/noisewalls.jpg",
  },
  {
    name: "Labour Hire",
    description:
      "We currently have the capacity to provide a skilled workforce of up to 100 individuals, comprising experienced Tradesmen, Supervisors, Leading Hands,  Crane Operators, Riggers, Scaffolders, Formwork Carpenters, Formworkers, Steel Fixers, Concreters, Drainers, Machine Operators, and more, depending on the specific trade requirements.",
    imageSrc: "/laborhire.jpg",
  },
];
