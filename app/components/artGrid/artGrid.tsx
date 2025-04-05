"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
type Students = {
  name: string;
  studentId: string;
  artPiece: StaticImageData;
  audio: string;
}

type ArtGridProps = {
  classData: {
    class: string;
    students: Array<Students>;
  }
}

export default function ArtGrid({ classData }: ArtGridProps) {
  const router = useRouter();
  const handleClick = (studentId: string) => {
    router.push(`/student/${studentId}`);
  }
  return (
    <section className="flex flex-col justify-center sm:grid grid-rows-3 grid-cols-3 gap-4 p-4 rounded-lg min-h-screen ">
      {classData?.students.map((student) => (
        <section
          key={student.studentId}
          className="flex flex-col items-center rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
          onClick={() => handleClick(student.studentId)}
        >
          <Image
            src={student.artPiece}
            width={100}
            height={100}
            alt='art piece'
            className='object-cover w-full h-48 rounded-lg mb-2'
          />
          <h2 className="flex text-2xl justify-center">{student.name}</h2>
        </section>
      ))}
    </section>
  )
}