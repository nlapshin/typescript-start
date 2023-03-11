declare let anyVar: any;
declare let unknownVar: unknown;
declare let a: number;
declare let b: string;
declare const c = "pineapples";
declare let d: boolean[];
declare let e: {
    type: string;
};
declare let f: (number | boolean)[];
declare const g: number[];
declare let h: any;
declare let role: 'admin' | 'user' | 'anon';
type Role = 'admin' | 'user';
type Log = (n: string, m: string) => void;
interface ILogger {
    info: (msg: string) => void;
}
declare class Logger implements ILogger {
    constructor();
    info(): void;
    protected protectedMethod(): void;
    private flush;
}
declare class NewLogger extends Logger {
    publicMethod(): void;
}
declare const logger: Logger;
type IUser = {
    name: string;
    email: string;
};
type IPartialUser = Partial<IUser>;
interface IFullUser {
    name: string;
    email: string;
    password: string;
}
type IPublicUser = Omit<IFullUser, 'password'>;
type UserKeys = keyof IFullUser;
declare let userKey: UserKeys;
declare const obj: {
    name: string;
};
type ObjKeys = keyof typeof obj;
declare let objKey: ObjKeys;
