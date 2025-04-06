'use client'

import { PublicUserPage } from "@/layers/public/userPage/PublicUserPage";
import { useParams } from "next/navigation";
import { string } from "zod";

export default function UserPage(){
  return (<>
    <PublicUserPage/>
  </>)
}