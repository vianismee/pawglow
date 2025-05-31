"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IMitra } from "@/types/mitra";

import { ShieldUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import supabase from "../../../../../lib/db";

const jabatan = ["Owner", "Manager", "Staff"];

const RegisterPage = () => {
  const [isChecked, setIsChacked] = useState(false);
  const [isMitra, setIsMitra] = useState<IMitra[]>([]);

  const checked = () => {
    setIsChacked(!isChecked);
  };

  const handleInputMitra = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const { data, error } = await supabase
        .from("mitra")
        .insert(Object.fromEntries(formData))
        .select();

      if (error) console.log("error: ", error);
      else {
        if (data) {
          setIsMitra(data);
          console.log("data: ", isMitra);
        }
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <section className="flex justify-center mt-10">
      <div className="flex flex-col items-center w-[40%] gap-10">
        <Link href={"/"}>
          <div>
            <Image
              src="/asset/bl-mainlogo.svg"
              height={200}
              width={200}
              alt="Black Logo"
              className="scale-125"
            />
          </div>
        </Link>
        <div className="bg-white px-6 py-5 rounded-2xl flex flex-col gap-3">
          {" "}
          <h1 className="text-[18pt] font-bold">Data Usaha Petshop</h1>
          <p>Silahkan isi data usaha petshop kamu!</p>
          <div className="w-full py-2 px-4 bg-green-300 border-2 border-green-500 rounded-[5px] flex items-center gap-6">
            {" "}
            <ShieldUser height={40} width={40} className="text-green-800" />
            <h1>
              Kami menjamin bahwa semua data anda bersifat rahasia dan tidak
              disalahgunakan
            </h1>
          </div>
          <form onSubmit={handleInputMitra} className="gap-3 flex flex-col">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Nama Petshop</h1>
              <Input
                id="namapetshop"
                name="namapetshop"
                required
                placeholder="Nama Petshop"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Nama Lengkap</h1>
              <Input
                id="namalengkap"
                name="namalengkap"
                required
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Jabatan</h1>
              <Select name="jabatan" required>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pilih Jabatan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {jabatan.map((jabatan, index) => (
                      <SelectItem key={index} value={jabatan}>
                        {jabatan}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Alamat Petshop</h1>
              <Input
                id="alamat"
                name="alamat"
                required
                placeholder="Alamat Petshop"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Nomor WhatsApp</h1>
              <Input
                id="nomorwhatsapp"
                name="nomorwhatsapp"
                required
                placeholder="Nomor WhatsApp petshop"
                type="number"
              />
            </div>
            <div className="flex gap-4 items-center mt-3">
              <input
                onClick={checked}
                type="checkbox"
                className="w-[18px] h-[18px] cursor-pointer"
              />
              <p className="text-[12pt]">
                Saya setuju dengan Syarat & Ketentuan
              </p>
            </div>
            <div className="flex mt-7 items-center gap-4">
              <Link href={"/mitra"}>
                <button className=" rounded-full py-2 px-6 font-semibold cursor-pointer">
                  Kembali
                </button>
              </Link>
              <button
                type="submit"
                className={`${
                  isChecked
                    ? "bg-orange-primary border-2 border-orange-primary rounded-full py-2 px-6 font-semibold cursor-pointer text-white"
                    : "bg-white border-2 border-orange-primary rounded-full py-2 px-6 font-semibold cursor-not-allowed text-black"
                }`}
              >
                Ajukan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
