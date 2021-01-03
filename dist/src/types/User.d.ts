export interface UserSchema_I {
    _id: string;
    username: string;
    password: string;
    name: string;
    roleId: string;
}
export declare type User_I = Pick<UserSchema_I, "_id" | "username" | "name"> & {
    isAdmin: boolean;
};
