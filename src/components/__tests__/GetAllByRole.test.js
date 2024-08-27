import {render,screen} from "@testing-library/react";
import {describe,test,expect,afterEach,afterAll,beforeAll,beforeEach} from "@jest/globals";
import { GetAllByRole } from "../GetAllByRole";



describe("GetALLBYROLE TESTING",()=>{
    beforeEach(()=>{
        render(<GetAllByRole/>)
    })

    test("Button Testing",()=>{
        const btnEle = screen.getAllByRole("button");
        for(let i=0;i<btnEle.length-1;i++){
            expect(btnEle[i]).toBeInTheDocument();
        }
    })
    test("Input Element Testing",()=>{
        const inputEle = screen.getAllByRole("textbox");
        for(let j=0; j<inputEle.length-1; j++){
            expect(inputEle[j]).toBeInTheDocument();
        }

    })
    test("Select Element Testing",()=>{
        const optionElement = screen.getAllByRole("option");
        for(let i=0;i<optionElement.length-1;i++){
            expect(optionElement[i]).toBeInTheDocument();
        }
    })
})