import { render,screen } from "@testing-library/react";

import {expect,describe,test,beforeAll,beforeEach,afterAll,afterEach} from "@jest/globals";



describe("Lifecyle of Test cases",()=>{
beforeAll(()=>{
    console.log("before All calling...");
})
beforeEach(()=>{
    console.log("before Each calling...");
})
afterAll(()=>{
    console.log("After All calling...");
})
afterEach(()=>{
    console.log("After Each calling...");
})

test("testcase1",()=>{
    console.log("1");
})
test("testcase2",()=>{
    console.log("2");
})
test("testcase3",()=>{
    console.log("3");
})
    

})