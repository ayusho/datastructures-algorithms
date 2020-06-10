class Staff {
    constructor(obj){
        this.name = obj.name;
    }
}

class Teacher extends Staff {
    constructor(obj){
        super(obj);
        this.subject = obj.subject;
    }
}

let staff = new Staff({name: 'Ayush'});

let teacher = new Teacher({name: 'Shubham', subject: 'Maths'});

const old_staff = {
    name: 'Ayush  Ojha',
    get printname() {
        console.log(this.name);
        return this.name;
    }
}
const old_teacher = {
    subject: 'Maths',
    __proto__: old_staff
}

old_teacher.printname1 = () => {
    console.log("maths");
}


console.log(teacher.name, teacher.subject);
console.log(old_teacher.name, old_teacher.subject);
old_teacher.printname;