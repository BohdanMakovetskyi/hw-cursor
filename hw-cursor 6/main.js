const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// function 1
function getSubjects(student) {
    let result = [];
    result = Object.keys(student.subjects).map(value => {
        if(value.includes('_')){
            value = value.replace('_', ' ');
        }
        return value[0].toUpperCase() + value.slice(1);
    });
    return result;
}
console.log('Task 1:');
console.log(getSubjects(students[0]));

// function 2
function getAverageMark(student) {
    let result = Object.values(student.subjects);
    let length = 0;
    let sum;
    result = result.map(value => {
        sum = 0;
        for(let i = 0; i < value.length; i++){
            sum += parseInt(value[i]);
        }
        length += value.length;
        return sum;
    });
    sum = 0;
    for(let i = 0; i < result.length; i++){
        sum += result[i];
    }
    return (sum/length).toFixed(2);
}
console.log('Task 2:');
console.log(getAverageMark(students[0]));

// function 3
function getStudentInfo(student) {
    let result = {};
    let averageMark = getAverageMark(student);
    result.course = student.course;
    result.name = student.name;
    result.averageMark = averageMark;
    return result;
}
console.log('Task 3:');
console.log(getStudentInfo(students[0]));

// function 4
function getStudentsNames(students) {
    let result = [];
    for(let i = 0; i < students.length; i++){
        result.push(students[i].name);
    }
    return result.reverse();
}
console.log('Task 4:');
console.log(getStudentsNames(students));

// function 5
function getBestStudent(students) {
    let result = [];
    let max = 0.0;
    for(let i = 0; i < students.length; i++){
        result.push(getStudentInfo(students[i]));
        if(parseFloat(result[i].averageMark) > max) {
            max = parseFloat(result[i].averageMark);
        }
    }
    for(let i = 0; i < result.length; i++){
        if(parseFloat(result[i].averageMark) === max){
            return result[i].name;
        }
    }
}
console.log('Task 5:');
console.log(getBestStudent(students));

// function 6
function calculateWordLetters(str) {
    let result = {};
    let newStr = str.toLowerCase();
    for (let i = 0; i < newStr.length; i++){
        if(!Object.keys(result).includes(newStr[i])){
            result[`"${newStr[i]}"`] = 1;
        }
        else result[`"${newStr[i]}"`]+=1;
    }
    return result;
}
console.log('Task 6:');
console.log(calculateWordLetters('тест'));