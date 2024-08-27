import { render,screen } from "@testing-library/react";
import {describe,test,expect} from "@jest/globals";

import GetByRoleMutipleElement from "../GetByRole_MultipleEle";

describe("GetByRole-Multiple Element Testing",()=>{
    test("Button1 Test Case",()=>{
        render(<GetByRoleMutipleElement/>);
        const btn1 = screen.getByRole("button",{name:"Button1"});
        const btn2 = screen.getByRole("button",{name:"Button2"});
        expect(btn1).toBeInTheDocument();
        expect(btn2).toBeInTheDocument();
        const inputElem1 = screen.getByRole("textbox",{name:"UserName"});
        const inputElem2 = screen.getByRole("textbox",{name:"UserPass"});
        expect(inputElem1).toBeInTheDocument();
        expect(inputElem2).toBeInTheDocument();

        const divEle = screen.getByRole("custom");
        expect(divEle).toBeInTheDocument();
    })
})