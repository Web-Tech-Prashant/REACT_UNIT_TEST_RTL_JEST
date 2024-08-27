


import { render,screen } from "@testing-library/react";
import {expect,test,describe} from "@jest/globals";
import InputComponent from "../OnchangeInput";
import { ButtonComponent } from "../OnclickButton";
import App from "../../App";

describe("Snapshot Testing Group",()=>{
    test("Snapshot-1",()=>{
       const container = render(<InputComponent/>);
       expect(container).toMatchSnapshot();
    })
    test("Snapshot-2",()=>{
        const container1 = render(<ButtonComponent/>);
        expect(container1).toMatchSnapshot();
    })
    // test("Snapshot-3",()=>{
    //     const container2 = render(<App/>);
    //     expect(container2).toMatchSnapshot();
    // })
})