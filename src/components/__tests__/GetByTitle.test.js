import {render,screen} from "@testing-library/react";
import {describe,test,beforeEach,expect} from "@jest/globals";
import GetByTitle from "../GetByTitle";

describe("getByTitle testing",()=>{
    beforeEach(()=>{
        render(<GetByTitle/>)
    })
    test("button testing",()=>{
        const btnElement = screen.getByTitle("click");
        expect(btnElement).toBeInTheDocument();
    })
    test("span testing",()=>{
        const spanElement = screen.getAllByTitle("copy");
        for(let i=0;i<spanElement.length;i++){
            expect(spanElement[i]).toBeInTheDocument();
        }
    })

    test("Image1 using getByAltText",()=>{
        const image1 = screen.getByAltText("firstImage");
        expect(image1).toBeInTheDocument();
    })
    test("Image2 using getByAltText",()=>{
        const image2 = screen.getAllByAltText("secondImage");
        for(let i=0;i<image2.length;i++){
            expect(image2[i]).toBeInTheDocument();
        }
       
    })
    
})
