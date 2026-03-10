export interface Design {
  id: number;
  title: string;
  thumbnail: string;
}

export const mockDesigns: Design[] = [
  { id: 1, title: "Summer Poster", thumbnail: "/assets/images/design1.png" },
  { id: 2, title: "Event Flyer", thumbnail: "/assets/images/design2.png" },
  { id: 3, title: "Social Media Post", thumbnail: "/assets/images/design3.png" },
];