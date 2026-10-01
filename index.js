const students = [
    {
        name: "Rim",
        age: 22,
        grades: [80, 90, 75]
    },
    {
        name: "Sara",
        age: 21,
        grades: [95, 88, 92]
    },
    {
        name: "Maya",
        age: 23,
        grades: [60, 70, 65]
    },
    {
        name: "Lina",
        age: 20,
        grades: [85, 78, 90]
    }
];
function getAverage(student){
    let total = 0;
    let average = 0;
    for(let grade of student.grades){
      total += grade;
     }
     average = total / (student.grades).length;
  return average;
}
function getTopStudent(){
    let topstudent = students[0];
   for(let student of students){
    if(getAverage(student) > getAverage(topstudent)){
        topstudent = student;
    }
   }
    return topstudent;
}
function getpassingStudents(){
    let passingstudents = [];
    for(let student of students){
        if(getAverage(student) >= 60){
            passingstudents.push(student)  ;
        }
    }return passingstudents;
}
function getStudent(name){
    for(let student of students){
        if(student.name === name){
            return student;
        }
    }
}
function addStudent(name,age,grades){
    const student={
        name:name,
        age:age,
        grades :grades
    };
    students.push(student);
}
function getclassAverage(){
    let total = 0;
    let average = 0;
    for(let student of students){
        total += getAverage(student);
    }
    average = total / students.length;
    return average;

}
console.log(getAverage(students[0]));
console.log(getTopStudent());
console.log(getpassingStudents());
console.log(getStudent("Maya"));
addStudent("aly" , 22 , [20,50,60]);
console.log(students);
console.log(getclassAverage());