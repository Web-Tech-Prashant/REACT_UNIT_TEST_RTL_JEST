
import { Sum } from "../Sum";

test("testing sum function",()=>{
expect(Sum(2,3)).toBe(5);
});


test("testing sum function with more standard way",()=>{
let a = 2;
let b =3;
let output = a +b;

expect(Sum(a,b)).toBe(output);
})
