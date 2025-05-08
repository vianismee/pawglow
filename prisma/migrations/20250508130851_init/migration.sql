-- CreateTable
CREATE TABLE "Mitra" (
    "id" SERIAL NOT NULL,
    "namaPetshop" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "alamatPetshop" TEXT NOT NULL,
    "nomorWhatsapp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mitra_pkey" PRIMARY KEY ("id")
);
