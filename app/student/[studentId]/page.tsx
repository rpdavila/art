import { data } from "@/app/data/data";
import Image from "next/image";
export default async function Student({ params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = await params;
  const students = data.find((student) => student.students.some((student) => student.studentId === studentId));
  const student = students?.students.find((student) => student.studentId === studentId);
  if (!student) {
    return <div>Student not found</div>
  }
  return (
    <section className="flex flex-col items-center min-h-screen sm:content-center">
      <div key={student.studentId} className="flex flex-col justify-center items-center min-h-screen">
        <Image className="rounded-lg" src={student.artPiece} alt="student art" width={500} height={500} />
        <h1 className="text-2xl font-bold">{student.name}</h1>
      </div>
    </section>
  )
}