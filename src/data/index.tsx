import { Instagram } from "lucide-react";

interface SocialMedia {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface ListMitra {
  nama: string;
  alamat: string;
  whatsapp: string;
  mapLink: string;
}

export const socialMedia: SocialMedia[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/pawglow.id",
    icon: <Instagram />,
  },
];

export const listMitra: ListMitra[] = [
  {
    nama: "Toko Pakan Burung Bandulan",
    alamat: "Jl. Raya Bandulan No 73, Bandulan, Sukun, Kota Malang",
    whatsapp: "085159446361",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.149933697913!2d112.60526311054066!3d-7.983447579572319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882bd549dce79%3A0x7d092d8950442347!2sPakan%20Burung%20bandulan%20pakan%20kucing!5e0!3m2!1sid!2sid!4v1746533854780!5m2!1sid!2sid",
  },
];
