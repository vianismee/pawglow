"use client";
import { IMitra } from "@/types/mitra";
import { useState } from "react";

interface MitraCardProps {
  MitraData: IMitra;
}

export default function MitraCard({ MitraData }: MitraCardProps) {
  const [isMitra] = useState<IMitra>(MitraData);
  return (
    <section className="flex w-screen h-screen items-center justify-center">
      <div>
        <h1>{isMitra.namapetshop}</h1>
      </div>
    </section>
  );
}
