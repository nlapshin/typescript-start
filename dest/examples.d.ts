declare let a: string;
declare const b = "test";
declare let d: boolean[];
declare const d1: boolean[];
declare const d2: readonly [true];
declare const e: {
    [p: string]: string;
};
interface IUser {
    name: string;
    email: string;
}
type User = {
    name?: string;
    email?: string;
};
declare const user: IUser;
declare const user2: IUser;
declare const user4: Record<string, string>;
type Keys = 'red' | 'green' | 'blue';
declare const colorObj: Record<Keys, string>;
type UserKeys = keyof IUser;
type Colors = {
    [K in Keys]: string;
};
interface IPublicUser {
    name: string;
    email: string;
}
interface IPrivateUser extends IPublicUser {
    password: string;
}
type PublicUser = Omit<IPrivateUser, 'password'>;
