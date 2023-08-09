import { useLoaderData } from "@remix-run/react"
import type { LoaderArgs } from "@remix-run/node"
import type { DistrictDetails } from "./counties.db"
import { getDistrictDetails } from "prisma/counties"

export const loader = async ({ params }: LoaderArgs) => {
  console.log("Params: ")
  console.log(params)
  const data = await getDistrictDetails(Number(params.id))
  return data
}

export const loader2 = async (districtID: number) => {
  const query = await getDistrictDetails(districtID)
  return query
}

export default function CountyBlock(id: any) {
  const districts = useLoaderData()

  const districts2 = loader2(Number(Object.values(id).toString()))
  console.log(districts2)



  console.log("districts: ")
  console.log(districts)
  return districts.map((info: DistrictDetails) => {
    if (info.id == id.id) {
      console.log("info: ")
      console.log(info)
      return (
        <div key={info.id}>
          <h1 key={info.id} id={info.id.toString()}>
            {info.name}
          </h1>
        </div>
      )
    }
  })
}
