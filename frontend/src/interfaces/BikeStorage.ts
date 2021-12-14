import Bike from './Bike'
import Prices from './Prices'

export default interface BikeStorage {
    id: number
    city: string
    street: string
    houseNumber: number
    prices: Prices
    bikesAvailable: number
    bikes: Array<Bike>
}
