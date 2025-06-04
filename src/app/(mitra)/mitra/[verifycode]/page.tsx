import supabase from "../../../../../lib/db";
import MitraCard from "../components/MitraCards";
import MitraNotFound from "../components/MitraNotFound";

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

  if (!mitra) {
    return <MitraNotFound verifycode={verifycode}></MitraNotFound>;
  }
  return <MitraCard MitraData={mitra}></MitraCard>;
}
