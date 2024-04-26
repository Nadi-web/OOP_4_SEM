// const = [
//     {id: 1, name: 'Vasya', group: 10},
//     {id: 2, name: 'Ivan', group: 11},
//     {id: 3, name: 'Masha', group: 12},
//     {id: 4, name: 'Petya', group: 10},
//     {id: 5, name: 'Kira', group: 11},
// ]
var students = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 },
];
var student1 = students[0];
console.log(student1.id); // Выведет 1
console.log(student1.name); // Выведет 'Vasya'
console.log(student1.group); // Выведет 10
var car = {
    manufacturer: "japan",
    model: 'mazda',
};
// Пример использования:
console.log(car.manufacturer); // Выведет "manufacturer"
console.log(car.model); // Выведет "model"
var car1 = {
    manufacturer: "3",
    model: '3',
};
var car2 = {
    manufacturer: "3",
    model: 'model3',
};
var arrayCars = [{
        cars: [car1, car2]
    }];
console.log(arrayCars[0].cars[0].manufacturer);
console.log(arrayCars[0].cars[0].model);
var group = {
    students: [],
    StudentsFilter: function (group) { return []; },
    marksFilter: function (mark) { return []; },
    deleteStudent: function (id) { },
    mark: 0,
    group: 0,
};
// type MarkFilterType = "done" | "undone";
// type GroupFilterType = "group1" | "group2" | "group3";
// type MarkType = {
//     subject: string;
//     mark: MarkFilterType;
//     done: boolean;
// };
// type StudentType = {
//     id: number,
//     name: string,
//     group: GroupFilterType,
//     marks: Array<MarkType>,
//     findIndex: (students: StudentType[], id: number) => number,
// }
// type GroupType = {
//     students: Array<StudentType>,
//     StudentsFilter: (group: GroupFilterType) => Array<StudentType>,
//     marksFilter: (mark: MarkFilterType) => Array<StudentType>,
//     deleteStudent: (id: number) => void,
//     mark: MarkFilterType,
//     group: GroupFilterType,
// }
// const students: Array<StudentType> = [
//     {
//         id: 1,
//         name: "me",
//         group: "group1",
//         marks: [
//             {
//                 subject: "js",
//                 mark: "done",
//                 done: true,
//             },
//             {
//                 subject: "db",
//                 mark: "undone",
//                 done: false,
//             },
//         ],
//         findIndex: (students: StudentType[], id: number) => students.findIndex((student) => student.id === id),
//     },
// ];
// const groups: Array<GroupType> = [
//     {
//         students: students,
//         StudentsFilter: (group: GroupFilterType) => {
//             return students.filter((student) => student.group === group);
//         },
//         marksFilter: (mark: MarkFilterType) => {
//             return students.filter((student) => student.marks.some((m) => m.mark === mark));
//         },
//         deleteStudent: (id: number) => {
//             const studentIndex = students.findIndex((student) => student.id === id);
//             if (studentIndex !== -1) {
//                 students.splice(studentIndex, 1);
//             }
//         },
//         mark: "done",
//         group: "group1",
//     },
// ];
