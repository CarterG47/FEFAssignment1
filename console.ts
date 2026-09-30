//Carter Greer 
//Assignment 1

import { FulltimeEmployee } from "./FullTimeEmployee.ts";
import { ContractEmployee } from "./ContractEmployee.ts";

const fulltimeEmployee = new FulltimeEmployee(
    "123-456-789",
    "Greer",
    "Carter",
    "Saint John",
    3,
    24,
    1200,
    100,
    5
);

fulltimeEmployee.saveEmployee();

console.log(fulltimeEmployee.displayInformation());

console.log("Fulltime Compensation: $" + fulltimeEmployee.calculateCompensation());


const contractEmployee = new ContractEmployee(
    "667-654-621",
    "Smith",
    "John",
    "Fredericton",
    2,
    30,
    45,
    30
);

contractEmployee.saveEmployee();

console.log(contractEmployee.displayInformation());

console.log("Contract Compensation: $" + contractEmployee.calculateCompensation());


const invalidEmployee = new FulltimeEmployee(
    "123-45-678",
    "Test",
    "Employee",
    "Moncton",
    6,
    15,
    1000,
    50,
    5
);

console.log("Testing invalid employee:");

invalidEmployee.saveEmployee();