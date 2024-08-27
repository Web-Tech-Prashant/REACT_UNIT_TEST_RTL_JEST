
import {screen,render, fireEvent} from "@testing-library/react";
import FunctionComponent from "../MethodTesting_FunctionalComponent";
import {test,describe,expect} from "@jest/globals"
import { handlePrint } from "../Utilities/helper";

describe("Methods for Functional component Testing",()=>{
    test("Button1 OnClick Testing",()=>{
        render(<FunctionComponent/>);
        const btn1 = screen.getByTestId("btn1");
        fireEvent.click(btn1);
        expect(screen.getByText("Hello Prashant Welcome to RTL + JEST")).toBeInTheDocument();
    })

    test("Button2 OnClick Testing",()=>{
        expect(handlePrint()).toMatch("Hi Prashant Printing...")
    })
})

