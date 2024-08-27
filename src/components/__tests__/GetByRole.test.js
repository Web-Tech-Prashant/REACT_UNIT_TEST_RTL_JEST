import {render,screen} from "@testing-library/react";
import {describe,test,expect} from "@jest/globals";

import GetByRole from "../GetByRole";

describe("Single Element Testing",()=>{
    test("Input Element-Semantic element-Have bydefault role defined",()=>{
        render(<GetByRole/>);
        const inputElem = screen.getByRole("textbox");
        expect(inputElem).toBeInTheDocument();
        expect(inputElem).toHaveValue("Welcome");
        expect(inputElem).toBeDisabled(true);
    })
})