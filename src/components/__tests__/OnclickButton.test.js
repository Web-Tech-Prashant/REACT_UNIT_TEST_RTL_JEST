import {expect,describe,test} from "@jest/globals";
import {fireEvent, render,screen} from "@testing-library/react";
import { ButtonComponent } from "../OnclickButton";

const renderComponent = ()=>render(<ButtonComponent/>);

describe("Button group Test Cases",()=>{
    test("First Button test case",()=>{
        renderComponent();
        const btnElement = screen.getByRole("button");
        fireEvent.click(btnElement);
        expect(screen.getByText(/Prashant Kumar Singh/i)).toBeInTheDocument();
    })
})