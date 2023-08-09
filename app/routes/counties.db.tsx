export type DistrictDetails = {
  id: number
  county: string
  district: string
  members: boolean
}

export type AllDistricts = {
  id: number
  county: string
  name: string
  members: boolean
}

export type AllCounties = {
  county: string
}

export type CountyDetails = {
  id: number
  county: string
  name: string
  members: boolean
}

export type Meetings = {
  id: number
  districtID: number
  meeting: string
}
