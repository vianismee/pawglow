import supabase from "../../../../../lib/db";
import MitraCard from "../components/MitraCards";
import MitraNotFound from "../components/MitraNotFound";

interface MitraPageProps {
  params: { verifycode: string };
}

export default async function Mitra({ params }: MitraPageProps) {
  const { verifycode } = params;
  const { data: mitra } = await supabase
    .from("mitra")
    .select("*")
    .match({ verifycode })
    .single();

  if (!mitra) {
    return <MitraNotFound verifycode={verifycode}></MitraNotFound>;
  }
  return <MitraCard mitra={mitra}></MitraCard>;
}
