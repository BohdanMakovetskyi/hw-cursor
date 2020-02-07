const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

function makePairs(students) {
    const manStudents = ["Саша", "Игорь", "Алексей"];
    const womenStudents = ["Лена", "Ира", "Светлана"];
    let pairsStudents = [];
    for(let i = 0; i < Math.floor(students.length / 2); i++){
        pairsStudents[i] = [manStudents[i], womenStudents[i]]; 
    }
    return pairsStudents;
}
const pairsStudents = makePairs(students);
console.log(pairsStudents);

function takeThemes(pairsStudents, themes) {
    let studentsWithThemes = [];
    for(let i = 0; i < Math.floor(students.length / 2); i++){
        studentsWithThemes[i] = [pairsStudents[i].join(' и '), themes[i]];
    }
    return studentsWithThemes;
}
const studentsWithThemes = takeThemes(pairsStudents, themes);
console.log(studentsWithThemes);

function getMarksStudents(students, marks) {
    let studentsWithMarks = [];
    for(let i = 0; i < students.length; i++){
        studentsWithMarks[i] = [students[i], marks[i]];
    }
    return studentsWithMarks;
}
const studentsWithMarks = getMarksStudents(students, marks);
console.log(studentsWithMarks);

function getMarksPairsStudentsWithThemes(studentsWithThemes) {
    let arrayWithMarksPairsStudentsWithThemes = [];
    for(let i = 0; i < Math.floor(students.length / 2); i++){
        arrayWithMarksPairsStudentsWithThemes[i] = [studentsWithThemes[i], Math.floor((Math.random() * 6))];
    }
    return arrayWithMarksPairsStudentsWithThemes;
}
const arrayWithMarksPairsStudentsWithThemes = getMarksPairsStudentsWithThemes(studentsWithThemes);
console.log(arrayWithMarksPairsStudentsWithThemes);