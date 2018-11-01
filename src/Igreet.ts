export interface IUserList {
    department: "HR" | "ICT" | "EXP";
    users: Array<IUser>;
}

export interface IUser {
    name: string;
    age: number;
    sex: "MALE" | "FEMALE" | "OTHER" | "NOT TODAY";
}