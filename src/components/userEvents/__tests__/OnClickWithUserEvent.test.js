import { render,screen } from "@testing-library/react";
import {describe,test,expect,beforeEach} from "@jest/globals";
import { OnClickWithUserEvent } from "../OnClickWithUserEvent";
import {userEvent} from "@testing-library/user-event";

describe("OnClickWithUserEvent Testing",()=>{
    beforeEach(()=>{
        render(<OnClickWithUserEvent/>);
        userEvent.setup();
    })

    test("OnClick using userEvent Test",async()=>{
      const btnElement = screen.getByText("Click Me!");
      expect(btnElement).toBeInTheDocument();
      await userEvent.click(btnElement);
      expect(screen.getByText("Welcome!")).toBeInTheDocument();  
    })
})