import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return <Suspense>{JSON.stringify(instruments, null, 2)}</Suspense>;
}
