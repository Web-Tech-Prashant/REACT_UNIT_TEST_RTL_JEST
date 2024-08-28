import {render,screen} from "@testing-library/react";
import {describe,beforeEach,expect,test} from "@jest/globals";
import GetByDisplayValue from "../GetByDisplayValue";

describe("getByDisplayValue Testing",()=>{
    beforeEach(()=>{
        render(<GetByDisplayValue/>)
    })
    test("getByDisplayValue with input Field testing",()=>{
        const inputElement = screen.getByDisplayValue("Prashant");
        expect(inputElement).toBeInTheDocument();
    })
    test("getByDisplayValue with testarea Field testing",()=>{
        const textareael = screen.getByDisplayValue("First Value");
        expect(textareael).toBeInTheDocument();
    })
    test("getByDisplayValue with multiple input Field with same value",()=>{
        const multipleInputEle = screen.getAllByDisplayValue("Prashant1");
        for(let i=0;i<multipleInputEle.length;i++){
            expect(multipleInputEle[i]).toBeInTheDocument();
        }
      
    })
})