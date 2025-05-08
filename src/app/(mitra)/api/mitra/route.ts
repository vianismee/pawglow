import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient(); // Instantiate Prisma Client correctly

export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    // Validasi input data jika diperlukan
    if (
      !body.namaPetshop ||
      !body.namaLengkap ||
      !body.jabatan ||
      !body.alamatPetshop ||
      !body.nomorWhatsapp
    ) {
      return NextResponse.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    const mitra = await prisma.mitra.create({
      data: {
        namaPetshop: body.namaPetshop,
        namaLengkap: body.namaLengkap,
        jabatan: body.jabatan,
        alamatPetshop: body.alamatPetshop,
        nomorWhatsapp: body.nomorWhatsapp,
      },
    });

    return NextResponse.json(mitra, { status: 201 });
  } catch (error) {
    console.error("Error creating mitra:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat membuat mitra" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const mitraList = await prisma.mitra.findMany();
    return NextResponse.json(mitraList);
  } catch (error) {
    console.error("Error fetching mitra list:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengambil data mitra" },
      { status: 500 }
    );
  }
};
