export interface Comment {
    id: number;
    name: string;
    email: string;
    password: string;
    message: string;
    inclusionDate: Date | string;
    loggedIn: false;    
}