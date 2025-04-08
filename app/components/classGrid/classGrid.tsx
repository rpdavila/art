"use client";

import { useRouter } from "next/navigation";
export default function ClassGrid({ classId }: { classId: string }) {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`/classroom/${id}`);
  }
  return (

    <div
      className="container flex flex-col items-center justify-evenly w-50 h-50  bg-amber-500 bg-gradient-to-tr rounded-lg sm:content-center cursor-pointer"
      onClick={() => handleClick(classId)}
    >
      <h1 className="text-2xl text-center">Classroom {classId} </h1>
    </div>

  )
}