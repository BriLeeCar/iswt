
import { db } from "~/db.server"


//!DISTRICTS
export const getAllDistricts = async () =>{
  return await db.districts.findMany()
}

export const getDistrictDetails = async (districtID: number) =>{
  return await db.districts.findUnique({
    where: {
      id: districtID
    },
  })
}

export const getMeetings = async (districtID: number) =>{
  return await db.meetings.findMany({
    where: {
      districtID,
    },
  })
}

//!Counties
export const getAllCounties = async () =>{
  return await db.districts.findMany({
    distinct: ['county']
  })
}

export const getDistricts = async (countyName: string) =>{
  return await db.districts.findMany({
    where: {
      county: countyName
    }
  })
}