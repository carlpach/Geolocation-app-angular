export interface LocationsI extends Record<string, any> {
    id: number,
    location_name: string,
    country: string,
    region: string,
    position: {
        lat: number,
        lng: number
    },
    image: string   
}