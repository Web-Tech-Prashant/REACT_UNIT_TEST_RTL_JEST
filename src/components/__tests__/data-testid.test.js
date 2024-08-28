import {render,screen} from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import DataTestId from "../data-testid";


describe("data-testid testing",()=>{
    beforeEach(()=>{
        render(<DataTestId/>)
    })
    // test("using getByTestId",()=>{
    //     const firstEle = screen.getByTestId("firstdiv");
    //     expect(firstEle).toBeInTheDocument();
       
    // })
    test("using getAllByTestId",()=>{
        const firstEle = screen.getAllByTestId("firstdiv");
        for(let i=0;i<firstEle.length;i++){
        expect(firstEle[i]).toBeInTheDocument();
        }
       
    })
})