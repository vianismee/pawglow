import { Instagram } from "lucide-react";

interface SocialMedia {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export const socialMedia: SocialMedia[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/pawglow.id",
    icon: <Instagram />,
  },
];
