const student = {
    fullName : "N SATISH",
    marks : 98.3,
    printMarks : function() {
        console.log("Marks = ",this.marks);
    },

}

const employee = {
    calcTax(){
        console.log("Tax rate is 10%.");
    },
};

const ram = {

    salary: 80000,
    calcTax(){
        console.log("Tax rate is 20%");
    },
};

const ram2 = {
    salary: 70000,
};

const ram3 = {
    salary: 92000,
};

const ram4 = {
    salary: 99000,
};

ram.__proto__ = employee;

ram2.__proto__ = employee;
ram3.__proto__ = employee;
ram4.__proto__ = employee;



class Car{
    start(){
        console.log("START");
    }

    stop(){
        console.log("STOP");
    }
    constructor(brand){
        console.log("Thid is a construuctor.");
        this.brand=brand;
    }

}

let obj = new Car();

obj.stop();

let mo = new Car("TOYOTA");
console.log(`Brand: ${mo.brand}`);
mo.start();
