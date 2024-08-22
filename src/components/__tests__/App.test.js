import {render,screen} from "@testing-library/react";
import {expect, jest, test} from '@jest/globals';
import {act} from 'react'
import App from "../../App";

test("App Component",()=>{
    render(<App/>);
})
// test("Testing Root Component",()=>{
//     render(<App/>);
//     const h4Element = screen.getByText(/Total Sum/i);
//     const imgElement = screen.getByAltText("photographer");
//     expect(h4Element).toBeInTheDocument();
//     expect(imgElement).toBeInTheDocument();
// })
// test("Testing Root Component",()=>{
//     render(<App/>);
   
//     const imgElement = screen.getByAltText("photographer");

//     expect(imgElement).toBeInTheDocument();
// })

// test("Testing Input Field",()=>{
//     render(<App/>);
//     const checkInputElement = screen.getByRole("textbox");
//     const placeholderText = screen.getByPlaceholderText("Enter UserName");
 
//     expect(checkInputElement).toBeInTheDocument();
//     expect(placeholderText).toBeInTheDocument();
//     expect(checkInputElement).toHaveAttribute("name","username");
//     expect(checkInputElement).toHaveAttribute("id","userId");
//     expect(checkInputElement).toHaveAttribute("value","Prashant");

// })