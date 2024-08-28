import{render,screen,configure} from "@testing-library/react";
import{describe,beforeEach,test,expect} from "@jest/globals";
import { OverridingTestAttribute } from "../OverridingTestAttribute";

configure({testIdAttribute:"id"})

describe("Overriding of Test ID Attribute",()=>{
    beforeEach(()=>{
        render(<OverridingTestAttribute/>);
    })
    // test("with normal data-testid testing",()=>{
    //     expect(screen.getByTestId("firstdiv")).toBeInTheDocument();
    // })
    test("different ID ",()=>{
        expect(screen.getByTestId("seconddiv")).toBeInTheDocument();
    })
    test("Without data-testid ",()=>{
        expect(screen.getByTestId("thirddiv")).toBeInTheDocument();
    })
})