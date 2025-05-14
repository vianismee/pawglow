import { NextResponse, type NextRequest } from "next/server";

function generateRandomCode(length: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Karakter yang digunakan
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    return result;
  }

  export function middleware(request: NextRequest) {
    // Ambil URL asal
    const url = new URL(request.url);
  
    // Buat angka dan huruf acak untuk parameter 'code'
    const randomCode = generateRandomCode(10); // Bisa disesuaikan panjangnya
  
    // Tentukan path baru dengan menambahkan query parameter 'code'
    url.pathname = '/link/verify';
    url.searchParams.set('certificate-item', randomCode); // Tambahkan parameter 'code'
  
    // Redirect ke URL baru dengan parameter acak
    return NextResponse.redirect(url);
  }

export const config = {
    matcher: "/link",
  };