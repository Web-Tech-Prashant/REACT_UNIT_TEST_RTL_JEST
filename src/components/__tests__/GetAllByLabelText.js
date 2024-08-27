import {render,screen} from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import GetAllByLabelText from "../GetAllByLabelText";


describe("GetAllByLabelText",()=>{
    beforeEach(()=>{
        render(<GetAllByLabelText/>)
    })

    test("Input with GetAllByLabelText",()=>{
        const inputAllElement = screen.getAllByLabelText("UserName");
        for(let i=0;i<inputAllElement.length-1;i++){
            expect(inputAllElement[i]).toBeInTheDocument();
        }
     
    })

    test("Input with CheckBox using GetAllByLabelText",()=>{
        const checkBoxEl = screen.getAllByLabelText("React JS");
        for(let i=0;i<checkBoxEl.length -1;i++){
        expect(checkBoxEl[i]).toBeInTheDocument();
        }
    })
})

