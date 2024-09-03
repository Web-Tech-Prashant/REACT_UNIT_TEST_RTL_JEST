import { render,screen, within } from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import Within from "../Within";

describe("Test case for Parent & Child element using 'within'",()=>{
    beforeEach(()=>{
        render(<Within/>);
    })
    test("Find Parent & child Element",()=>{
        const parentElement = screen.getByText(/World/i);
        expect(parentElement).toBeInTheDocument();
        const childEle1 = within(parentElement).getByText(/hi/i);
        expect(childEle1).toBeInTheDocument();
        const childEle2 = within(parentElement).getByText("Hello");
        expect(childEle2).toBeInTheDocument();
    })
})