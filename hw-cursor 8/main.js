class Student {
    marks = [5, 4, 4, 5];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }
    get getInfo(){
        return console.log(`Студент ${this.course} курсу університету ${this.university} , ${this.fullName}!`);
    }
    set setMarks(number) {
        if (this.marks === null) {
            return null;
        } else {
            this.marks.push(number);
        }
    }
    get getMarks() {
        return console.log(this.marks);
    }
    getAverageMark() {
        if (this.marks == null) {
            return null;
        } else {
            return this.marks.reduce((prevValue, value) => {
                prevValue += value;
                return prevValue;
            }, 0) / this.marks.length;
        }

    }
    dismiss() {
        this.marks = null;
        return console.log('студента вигнано!');
    }
    recover() {
        this.marks = [5, 4, 4, 5];
        return console.log('студента відновлено!');
    }
}

let bohdan = new Student('Politechika', 2, 'Bohdan Makovetskyi');
bohdan.getInfo;
bohdan.getMarks;
bohdan.dismiss();
bohdan.getMarks;
bohdan.setMarks = 3;
console.log(bohdan.getAverageMark());
bohdan.recover();
bohdan.setMarks = 2;
bohdan.setMarks = 4;
bohdan.getMarks;
console.log(bohdan.getAverageMark());



// Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        if (parseFloat(this.getAverageMark()) > 4) {
            setInterval(() => {
                this.getScholarship();
            }, 30000);
        }
    }
    getScholarship() {
        if (parseFloat(this.getAverageMark()) > 4){
            return console.log('Ви получили стипнедію 1400 грн.!');
        }
    }
}

let maxim = new BudgetStudent('Franko', 3, 'Maxim Farestyh');
maxim.getInfo;
maxim.getMarks;
maxim.getScholarship();
