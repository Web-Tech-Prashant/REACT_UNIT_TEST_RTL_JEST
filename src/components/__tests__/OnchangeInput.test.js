import {fireEvent, render,screen} from "@testing-library/react";
import {expect, jest, test,describe} from '@jest/globals';
import InputComponent from "../OnchangeInput";

describe("Input Group Testing",()=>{
    render(<InputComponent/>)
    test("First Input onChange Event test case",()=>{
        const inputElement = screen.getByRole("textbox");
        fireEvent.change(inputElement,{target:{value:'a'}});
        expect(inputElement.value).toBe("a");
    })
})