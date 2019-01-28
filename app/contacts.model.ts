export interface IUsers {
    id: number;
    name: string;
    username: string;
    address: City;
    email: string;
    website: string;
}

export class City {
    city: string;
}
