declare enum Color {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE"
}
declare const color: 'red' | 'green' | 'blue';
type MyObject = {
    [key: string]: string | number;
};
declare const obj: Record<string, string | number>;
declare function sum(a: unknown, b: unknown): string | number | undefined;
declare function voidFn(): void;
