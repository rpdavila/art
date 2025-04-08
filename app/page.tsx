import { data } from "./data/data"
import ClassGrid from "./components/classGrid/classGrid"
export default function ClassRoomList() {
  return (
    <section className="flex flex-row row-span-3 justify-center items-center gap-4 min-h-screen">
      {data.map((classData) => {
        return (
          <ClassGrid key={classData.class} classId={classData.class} />
        )
      })}
    </section>
  )
}