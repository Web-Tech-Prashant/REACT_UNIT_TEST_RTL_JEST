import { render,screen } from "@testing-library/react";
import {describe,test,beforeEach,expect} from "@jest/globals";
import { FindBy } from "../FindBy";


describe("FindBy Testing",()=>{
    beforeEach(()=>{
        render(<FindBy/>);
    })

    test("First Testing",async()=>{
        // const datafoundElement = screen.getByText("Data Found");
        const datafoundElement = await screen.findByText("Data Found",{},{timeout:7000});
        expect(datafoundElement).toBeInTheDocument();
    })
})