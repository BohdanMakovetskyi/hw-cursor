const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];

export default function() {
    const manStudents = ["Саша", "Игорь", "Алексей"];
    const womenStudents = ["Лена", "Ира", "Светлана"];
    let pairsStudents = [];
    for(let i = 0; i < Math.floor(students.length / 2); i++){
        pairsStudents[i] = [manStudents[i], womenStudents[i]];
    }
    return pairsStudents;
}