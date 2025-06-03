import supabase from "../../../../../lib/db";
import MitraCard from "../components/MitraCards";

export default async function Mitra({
  params: { verifycode },
}: {
  params: { verifycode: string };
}) {
  const { data: mitra } = await supabase
    .from("mitra")
    .select("*")
    .match({ verifycode })
    .single();

  return <MitraCard MitraData={mitra}></MitraCard>;
}
