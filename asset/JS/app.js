class Person {
    constructor(name,surname,job,age) {
        this.name= name;
        this.surname=surname;
        this.job=job;
        this.age=age;
    }

    GetFullName() {
        return this.name + ' ' + this.surname;
    }

    GetAge() {
        return this.age;
    }

    GetJob() {
        return this.job;
    }

}

let person = new Person("Elshan", "Aliyev" , 25 , "Unemployed")


console.log(`Full Name: ${person.GetFullName()}  Age: ${person.GetAge()} Job: ${person.GetJob()}`);