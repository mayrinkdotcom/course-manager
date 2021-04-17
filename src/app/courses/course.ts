export default class Course {
    id: number | undefined;
    name: string | undefined;
    imageUrl: string | undefined;
    price: number | undefined;
    code: string | undefined;
    duration: number | undefined;
    rating: number = 0;
    releaseDate: string | undefined;
    description: string | undefined;
}