import {render,screen} from "@testing-library/react" ;
import {describe,test,expect,beforeEach} from "@jest/globals";
import QueryBy from "../QueryBy";


describe("QueryBy testing",()=>{
    beforeEach(()=>{
        render(<QueryBy/>);
    })

    test("QueryBy Testing",()=>{
        // const btnelem = screen.getByText("Logout");
        const logoutelement = screen.queryByText("Logout");
        expect(logoutelement).toBeInTheDocument();
        const loginElem = screen.queryByText("Login");
        expect(loginElem).not.toBeInTheDocument();
 
    })
})