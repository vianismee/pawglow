"use client";
import { useState } from "react";

interface MitraNotFoundProps {
  verifycode: string;
}

export default function MitraNotFound({ verifycode }: MitraNotFoundProps) {
  const [mitra] = useState(verifycode);
  return (
    <section className="flex justify-center items-center">
      <h1>Mitra dengan Kode {mitra} Belum ditemukan</h1>
    </section>
  );
}
