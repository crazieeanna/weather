export interface AirQualityModel {
    city_name: string
    country_code: string
    data: Daum[]
    lat: string
    lon: string
    state_code: string
    timezone: string
}
  
export interface Daum {
    aqi: number
    co: number
    mold_level: number
    no2: number
    o3: number
    pm10: number
    pm25: number
    pollen_level_grass: number
    pollen_level_tree: number
    pollen_level_weed: number
    predominant_pollen_type: string
    so2: number
}
  