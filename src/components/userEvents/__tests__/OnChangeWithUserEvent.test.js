import { render,screen } from "@testing-library/react";
import {describe,test,beforeEach,expect} from "@jest/globals";
import OnChange from "../OnChangeWithUserEvent";
import userEvent from "@testing-library/user-event";


describe("onChange Using userEvent Testing",()=>{
    beforeEach(()=>{
        render(<OnChange/>);
        userEvent.setup();
    })
    test("testing using userEvent for onChange",async()=>{
        const inputElement = screen.getByPlaceholderText("Enter Your Name");
        expect(inputElement).toBeInTheDocument();
        await userEvent.type(inputElement,"PK");
        expect(screen.getByText("PK")).toBeInTheDocument();
    })
})