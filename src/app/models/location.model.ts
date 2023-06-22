export interface LocationsI {
    id: number,
    location_name: string,
    country: string,
    region: string,
    geolocation: {
        latitude: number,
        longitude: number
    },
    image: string   
}