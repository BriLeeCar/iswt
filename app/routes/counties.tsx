/* eslint-disable @typescript-eslint/no-extra-semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { getAllCounties } from "prisma/counties"
import type { AllCounties } from "./counties.db"
import { useLoaderData } from "@remix-run/react"

export const loader = async () => {
  const countyList = await getAllCounties()
  return countyList
}

export default function Counties() {
  //!STATES
  const [districtState, setDistrict] = useState(0)
  const [countyState, setCounty] = useState("")

  function handleOption(e: any) {
    setCounty(e)
  }

  const data = useLoaderData()
  return (
    <div>
      <form>
        <select
          onChange={(x) => {
            handleOption(x.target.value)
            console.log(x.target.value)
          }}
        >
          <option value="">---SELECT COUNTY---</option>
          {data.map((info: AllCounties) => {
            return (
              <option key={info.county} value={info.county}>
                {info.county}
              </option>
            )
          })}
        </select>
      </form>
      <span></span>
    </div>
  )
}
