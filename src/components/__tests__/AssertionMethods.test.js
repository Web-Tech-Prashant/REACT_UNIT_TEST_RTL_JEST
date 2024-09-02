import {render,screen} from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import { AssertionMethods } from "../AssertionMethods";


describe("Assertion Methods Testing",()=>{
    beforeEach(()=>{
        render(<AssertionMethods/>);
       
    })

    test("Method1 Testing",()=>{
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeInTheDocument();
      
        
    })
    test("Method2 Testing",()=>{
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveValue();
        expect(inputElement).toHaveValue("PK");
    })
    test("Method3 Testing",()=>{
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeEnabled();
        // expect(inputElement).toBeDisabled();
    })
    test("Method4 Testing",()=>{
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveAttribute("id")
    })
    test("Method5 Testing",()=>{
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toHaveClass("test-style");
    })

    // test("Method6 Testing",()=>{
    //     const btnElement = screen.getByTestId("btntestid");
    //     expect(btnElement).toBeInTheDocument();
    //     expect(btnElement).toHaveClass("btn");
       
    // })

    describe("Button Elment with Assertion Method testing",()=>{

    test("Test1",()=>{
        const btnElement = screen.getByTestId("btntestid");
        expect(btnElement).toBeInTheDocument();
        expect(btnElement).toHaveClass("btn");
        expect(btnElement).not.toHaveAttribute("id")
        // expect(btnElement).toBeEnabled();
        expect(btnElement).not.toBeEnabled();
       
    })
})
   
})

