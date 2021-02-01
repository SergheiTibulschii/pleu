// let и const блочные переменные
// const нельзя переопределять

var x = 5;
let y = 5;
const z = 5;

// В JS есть 2 типа данных - ссылочный тип и примитивный тип

/* К примитивным относится
 - number
 - string
 - boolean
 - undefined
 - null
 - ...
*/
/*
    К ссылочным типам относится:
    - object
    ...фукнция это обьект, массив это обьект
 */

const student = {}


// function declaration
function initializeStudent(name, age, sex) {
    student.name = name;
    student.age = age;
    student.sex = sex;
}

function getStudent() {
    return student
}

initializeStudent("Jora", 25, "male")

console.log(getStudent())

// expression
const getStudent = function () {
    let studentName;

    return {
        setStudentName: function (name) {
            studentName = name;
        },
        getStudentName: function () {
            return studentName
        }
    }
}