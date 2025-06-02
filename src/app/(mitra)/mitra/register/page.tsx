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
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import supabase from "../../../../../lib/db";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { customAlphabet } from "nanoid";
const jabatan = ["Owner", "Manager", "Staff"];

const RegisterPage = () => {
  const router = useRouter();
  const [isChecked, setIsChacked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMitra, setIsMitra] = useState<IMitra[]>([]);

  const [verifyCode] = useState(() => {
    const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 7);
    return nanoid();
  });

  const checked = () => {
    setIsChacked(!isChecked);
  };

  const handleInputMitra = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValue = Object.fromEntries(formData);

    const dataToSubmit = {
      ...formValue,
      verifycode: verifyCode.toString(),
    };
    try {
      const { data, error } = await supabase
        .from("mitra")
        .insert(dataToSubmit)
        .select("*");

      if (error) console.log("error: ", error);
      else {
        if (data) {
          setIsMitra(data);
          console.log("data: ", isMitra);
          // Refresh page after successful submission
          router.refresh();
        }
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <section className="flex justify-center mt-10">
      <div className="flex flex-col items-center lg:w-[40%] w-full gap-10">
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
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger disabled={!isChecked}>
                  <button
                    className={`bg-white border-2 border-orange-primary rounded-full py-2 px-6 font-semibold ${
                      !isChecked
                        ? "cursor-not-allowed opacity-50"
                        : "cursor-pointer"
                    } text-black`}
                  >
                    Ajukan
                  </button>
                </DialogTrigger>
                <DialogContent className="flex items-center flex-col">
                  <DialogHeader>
                    <DialogTitle>Kode Registrasi</DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="w-full text-center px-6">
                    <div className="flex flex-col justify-center items-center gap-3">
                      <h1 className="font-bold text-3xl text-black">
                        {verifyCode}
                      </h1>
                      <p className="text-[12pt]">
                        Kami akan melakukan peninjauan pengajuan maksimal 3 hari
                        kerja. Kode ini juga digunakan sebagai kode mitra.
                      </p>
                      <button
                        id="verifycode"
                        name="verifycode"
                        value={verifyCode}
                        onClick={() => {
                          setIsDialogOpen(false);
                          router.push("/mitra");
                        }}
                        className="px-2 py-3 flex justify-center bg-orange-primary w-full text-white rounded-[4px] font-bold"
                      >
                        KONFIRMASI
                      </button>
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
