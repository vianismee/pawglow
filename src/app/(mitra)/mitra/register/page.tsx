import { ShieldUser } from "lucide-react";
import React from "react";

const RegisterPage = () => {
  return (
    <section className="flex justify-center mt-10">
      <div className="bg-white w-[40%] px-6 py-5 rounded-2xl flex flex-col gap-3">
        {" "}
        <h1 className="text-[18pt] font-bold">Data Usaha Petshop</h1>
        <p>Silahkan isi data usaha petshop kamu!</p>
        <div className="w-full py-2 px-4 bg-green-300 border-2 border-green-500 rounded-[5px] flex items-center gap-6">
          {" "}
          <ShieldUser height={25} className="text-green-800" />
          <h1>
            Kami menjamin bahwa semua data anda bersifat rahasia dan tidak
            disalahgunakan
          </h1>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
