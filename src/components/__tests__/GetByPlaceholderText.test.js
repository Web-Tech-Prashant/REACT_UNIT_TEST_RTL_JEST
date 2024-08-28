import{render,screen} from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import GetByPlaceholderText from "../GetByPlaceholderText";


describe("GetByPlaceholderText",()=>{
    beforeEach(()=>{
        render(<GetByPlaceholderText/>)
    })
    // test("Input with single placeholder testing",()=>{
    //     const inputElem = screen.getByPlaceholderText("Enter Username");
    //     expect(inputElem).toBeInTheDocument();
    //     expect(inputElem).toHaveValue("PK");
    // })
    test("Input with Multiple placeholder testing",()=>{
        const inputElem = screen.getAllByPlaceholderText("Enter Username");
        for(let i=0;i<inputElem.length;i++){
        expect(inputElem[i]).toBeInTheDocument();
        expect(inputElem[i]).toHaveValue("PK");
        }
    })
})