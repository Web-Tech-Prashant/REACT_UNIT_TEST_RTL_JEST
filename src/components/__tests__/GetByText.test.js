import{render,screen} from "@testing-library/react";
import{expect,describe,test,beforeEach} from "@jest/globals";
import GetByText from "../GetByText";


describe("GetByText Testing",()=>{
        beforeEach(()=>{
            render(<GetByText/>)
        })
    test("Using getByTextk",()=>{
        const paragrahEle = screen.getByText("First paragraph");
        expect(paragrahEle).toBeInTheDocument();
        expect(paragrahEle).toHaveClass("class1");
        
    })

    test("Using getAllByTextk",()=>{
        const btnElement = screen.getAllByText("First Button");
        for(let i=0;i<btnElement.length;i++){
            expect(btnElement[i]).toBeInTheDocument();
        }

        
    })
})