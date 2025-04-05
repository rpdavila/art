
import { data } from "@/app/data/data"
//components
import ArtGrid from "@/app/components/artGrid/artGrid";
export default async function ClassRoom({
  params
}: {
  params: Promise<{ classId: string }>
}) {

  const { classId } = await params
  const classData = data.find((classData) => classData.class === classId)
  if (!classData?.class) {
    return (
      <section className="flex flex-col items-center min-h-screen sm:content-center">
        <h1 className="text-2xl text-center">Class not found</h1>
      </section>
    )
  }
  return (
    <>
      <ArtGrid classData={classData} />
    </>

  )
}