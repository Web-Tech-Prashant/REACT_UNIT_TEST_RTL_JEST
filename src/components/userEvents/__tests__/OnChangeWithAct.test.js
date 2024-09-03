import { render,screen } from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import OnChangeWithAct from "../OnChangeWithAct";
import userEvent from "@testing-library/user-event";
import { act } from "react";


describe("Testing onChange event using 'act'",()=>{
    beforeEach(()=>{
        render(<OnChangeWithAct/>);
        userEvent.setup();
    })

    test("test using 'act'",async()=>{

        const inputEle = screen.getByRole("textbox")

        await act(async()=>{
            await userEvent.type(inputEle,"PRASHI");
        })
  

        expect(screen.getByText("PRASHI")).toBeInTheDocument();

    })
})