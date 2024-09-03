import {render,screen} from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import QuerySelector from "../QuerySelector";


describe("Test using querySelector",()=>{

    beforeEach(()=>{
        render(<QuerySelector/>);
    })

    test("First Element Testing",()=>{
        const headElement =document.querySelector("#head-id");
        expect(headElement).toBeInTheDocument();
        expect(headElement).toHaveTextContent("Hello Prashant");
    })
})