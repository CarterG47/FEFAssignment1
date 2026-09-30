import { Employee } from "./Employee.ts";
import type { IEmployee } from "./IEmployee.ts";

export class ContractEmployee extends Employee implements IEmployee {

    public hours: number;
    public hourlyRate: number;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
        hours: number,
        hourlyRate: number
    ) {
        super(ssn, lastName, firstName, address, rank, age);

        this.hours = hours;
        this.hourlyRate = hourlyRate;
    }

    displayInformation(): string {
        return "Contract Employee: " +
            this.firstName + " " +
            this.lastName + ", SSN: " + this.ssn + ", Address: " + this.address + ", Rank: " + this.rank + ", Age: " + this.age +", Hours: " + this.hours +", Hourly Rate: $" + this.hourlyRate;
    }

    calculateCompensation(): number {
        if (this.hours <= 40) {
            return this.hours * this.hourlyRate;
        }

        const regularPay = 40 * this.hourlyRate;
        const overtimeHours = this.hours - 40;
        const overtimePay = overtimeHours * this.hourlyRate * 1.5;

        return regularPay + overtimePay;
    }

    saveEmployee(): void {
        const validAge = this.validateAge(this.age);
        const validRank = this.validateRank(this.rank);
        const validSSN = this.validateSSN(this.ssn);

        if (validAge && validRank && validSSN) {
            console.log("Contract employee saved successfully.");
        }
    }
}