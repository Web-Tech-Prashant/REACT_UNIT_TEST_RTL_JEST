
import {render,screen} from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import GetByLabelText from "../GetByLabelText";

describe("GetByLabelText",()=>{

    beforeEach(()=>{
        render(<GetByLabelText/>)
    })

    test("Input with Label Field Testing",()=>{
        const inputEle = screen.getByLabelText("UserName");
        expect(inputEle).toBeInTheDocument();
        expect(inputEle).toHaveValue("Prashant");
    })

    test("Input with Checkbox Field Testing",()=>{
        const checkboxEle = screen.getByLabelText("Skills");
        expect(checkboxEle).toBeInTheDocument();
        expect(checkboxEle).toBeChecked(true);
    })

})