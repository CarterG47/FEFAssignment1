export abstract class Employee {

    protected ssn: string;
    protected lastName: string;
    protected firstName: string;
    protected address: string;
    protected rank: number;
    protected age: number;

    constructor(
        ssn: string,
        lastName: string,
        firstName: string,
        address: string,
        rank: number,
        age: number
    ) {
        this.ssn = ssn;
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.rank = rank;
        this.age = age;
    }

    validateAge(age: number): boolean {
        if (age >= 16) {
            return true;
        } else {
            console.log("Age of the Employee must be greater than or equal to 16");
            return false;
        }
    }

    validateRank(rank: number): boolean {
        if (rank >= 1 && rank <= 5) {
            return true;
        } else {
            console.log("Rank must be between 1 and 5");
            return false;
        }
    }

    validateSSN(ssn: string): boolean {
        if (!/^\d{3}-\d{3}-\d{3}$/.test(ssn)) {
            console.log("The SSN must match the pattern ###-###-###");
            return false;
        }

        return true;
    }
}