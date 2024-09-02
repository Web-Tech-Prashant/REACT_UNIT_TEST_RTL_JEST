import { render,screen } from "@testing-library/react";
import{describe,test,expect,beforeEach} from "@jest/globals";
import TextMatch from "../TextMatch";


describe("TextMatch testing with String",()=>{
    beforeEach(()=>{
        render(<TextMatch/>)
    })
    test("First Testing",()=>{
        const divElement = screen.getByText("Hello",{exact:false});
        // const divElement = screen.getByText("ello",{exact:false});
        // const divElement = screen.getByText("Hello World");
        expect(divElement).toBeInTheDocument();
    })
    test("First Testing using RegExp",()=>{
        // const divElement = screen.getByText(/Hello/);
        const divElement = screen.getByText(/lo Wo/);
        expect(divElement).toBeInTheDocument();
    })
    test("First Testing using RegExp1",()=>{
    
        // const divElement = screen.getByText(/lo Wo/i);//case insensitive
        const divElement = screen.getByText(/hello Wo/i);//case insensitive
        expect(divElement).toBeInTheDocument();
    })

    describe("TextMatch with Function",()=>{

        test("First testing using function",()=>{
            // const textElement = screen.getByText((content,element)=>content.startsWith("Hello"));
            // const textElement = screen.getByText((content,element)=>content.endsWith("World"));
            const textElement = screen.getByText((content,element)=>content.includes("Hello World"));
            // const textElement = screen.getByText((content,element)=>content.length === 11);

            expect(textElement).toBeInTheDocument();
        })
    })
})