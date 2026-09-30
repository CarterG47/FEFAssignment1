import { Employee } from "./Employee.ts";
import type { IEmployee } from "./IEmployee.ts";

export class FulltimeEmployee extends Employee implements IEmployee {

    public salary: number;
    public bonus: number;
    public overtimeHours: number;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number,
        salary: number,
        bonus: number,
        overtimeHours: number
    ) {
        super(ssn, lastName, firstName, address, rank, age);

        this.salary = salary;
        this.bonus = bonus;
        this.overtimeHours = overtimeHours;
    }

    displayInformation(): string {
        return "Fulltime Employee: " +
            this.firstName + " " +
            this.lastName +
            ", SSN: " + this.ssn +
            ", Address: " + this.address +
            ", Rank: " + this.rank +
            ", Age: " + this.age +
            ", Salary: $" + this.salary +
            ", Bonus: $" + this.bonus +
            ", Overtime Hours: " + this.overtimeHours;
    }

    calculateCompensation(): number {
        return this.calculateSalary() + this.bonus;
    }

    saveEmployee(): void {
        const validAge = this.validateAge(this.age);
        const validRank = this.validateRank(this.rank);
        const validSSN = this.validateSSN(this.ssn);

        if (validAge && validRank && validSSN) {
            console.log("Fulltime employee saved successfully.");
        }
    }

    private calculateSalary(): number {
        const hourlyRate = this.salary / 40;
        let overtimePay = 0;

        if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            overtimePay = hourlyRate * this.overtimeHours * 1.25;
        }
        else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            overtimePay = hourlyRate * this.overtimeHours * 1.5;
        }
        else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            overtimePay = hourlyRate * this.overtimeHours * 1.75;
        }
        else if (this.overtimeHours > 30) {
            overtimePay = hourlyRate * this.overtimeHours * 2;
        }

        return this.salary + overtimePay;
    }
}