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

import { ShieldUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const jabatan = ["Owner", "Manager", "Staff"];

const RegisterPage = () => {
  const [namaPetshop, setNamaPetshop] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nomorWhatsApp, setNomorWhatsApp] = useState("");
  const [isChecked, setIsChacked] = useState(false);
  const [jabatanSelct, setJabatanSelect] = useState("");

  const checked = () => {
    setIsChacked(!isChecked);
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
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Nama Petshop {namaPetshop}</h1>
            <Input
              placeholder="Nama Petshop"
              onChange={(e) => setNamaPetshop(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Nama Lengkap {namaLengkap}</h1>
            <Input
              placeholder="Nama Lengkap"
              onChange={(e) => setNamaLengkap(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Jabatan {jabatanSelct}</h1>
            <Select value={jabatanSelct} onValueChange={setJabatanSelect}>
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
            <h1 className="font-bold">Alamat Petshop {alamat}</h1>
            <Input
              placeholder="Alamat Petshop"
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">Nomor WhatsApp {nomorWhatsApp} </h1>
            <Input
              placeholder="Nomor WhatsApp petshop"
              type="number"
              onChange={(e) => setNomorWhatsApp(e.target.value.toString())}
            />
          </div>
          <div className="flex gap-4 items-center mt-3">
            <input
              onClick={checked}
              type="checkbox"
              className="w-[18px] h-[18px] cursor-pointer"
            />
            <p className="text-[12pt]">Saya setuju dengan Syarat & Ketentuan</p>
          </div>
          <div className="flex mt-7 items-center gap-4">
            <Link href={"/mitra"}>
              <button className=" rounded-full py-2 px-6 font-semibold cursor-pointer">
                Kembali
              </button>
            </Link>
            <button
              className={`${
                isChecked
                  ? "bg-orange-primary border-2 border-orange-primary rounded-full py-2 px-6 font-semibold cursor-pointer text-white"
                  : "bg-white border-2 border-orange-primary rounded-full py-2 px-6 font-semibold cursor-not-allowed text-black"
              }`}
            >
              Ajukan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
