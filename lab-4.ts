// const = [
//     {id: 1, name: 'Vasya', group: 10},
//     {id: 2, name: 'Ivan', group: 11},
//     {id: 3, name: 'Masha', group: 12},
//     {id: 4, name: 'Petya', group: 10},
//     {id: 5, name: 'Kira', group: 11},
// ]


// type StudentType = {
//     id: number;
//     name: string;
//     group: number;
// };

// const students: StudentType[] = [
//     { id: 1, name: 'Vasya', group: 10 },
//     { id: 2, name: 'Ivan', group: 11 },
//     { id: 3, name: 'Masha', group: 12 },
//     { id: 4, name: 'Petya', group: 10 },
//     { id: 5, name: 'Kira', group: 11 },
// ];


// const student1: StudentType = students[0];
// console.log(student1.id); // Выведет 1
// console.log(student1.name); // Выведет 'Vasya'
// console.log(student1.group); // Выведет 10




// lat car: CarsType = ();
// car.manufacrurer = "manufacturer";
// car.model = 'model';

type CarType = {
    manufacturer: string;
    model: string;
};

type CarsType = CarType[];

const car: CarType = {
    manufacturer: "japan",
    model: 'mazda',
};

// Пример использования:
console.log(car.manufacturer); // Выведет "manufacturer"
console.log(car.model); // Выведет "model"





// const car1: CarType = {};
// car1.manufacturer = "manufacturer";
// car1.model = 'model';

// const car2: CarType = {};
// car2.manufacturer = "manufacturer";
// car2.model = 'model';

// const arryCars: AZrray<ArrayCarsType> = [{
//     cars: [car1, car2]
// }];

type ArrayCarsType = {
    cars: CarType[];
};

const car1: CarType = {
    manufacturer: "3",
    model: '3',
};

const car2: CarType = {
    manufacturer: "3",
    model: 'model3',
};

const arrayCars: Array<ArrayCarsType> = [{
    cars: [car1, car2]
}];


console.log(arrayCars[0].cars[0].manufacturer); 
console.log(arrayCars[0].cars[0].model); 


// type MarkType = {
//     subject: string, 
//     mark: MarkFilterType,
//     done: DocumentType,
// }
// type StudentType = {
//     id: number,
//     mane: string,
//     group: GroupFilterType,
//     marks: Array<MarkType>,
// }

// type GroupType = {
//     students: //массив студентов типа StudentType
//     StudentsFilter: (group: number) => Array<StudentType>,
//     marksFilter: (mark: number) => Array<StudentType>,
//     deleteStudent: (id: number) => void,
//     mark: MarkFilterType,
//     group: GroupFilterType,
// }


type MarkFilterType = number; 

type DoneType = boolean; 

type GroupFilterType = number; 

type MarkType = {
    subject: string;
    mark: MarkFilterType;
    done: DoneType;
};

type StudentType = {
    id: number;
    name: string; 
    group: GroupFilterType;
    marks: Array<MarkType>;
};

type GroupType = {
    students: Array<StudentType>; 
    StudentsFilter: (group: GroupFilterType) => Array<StudentType>;
    marksFilter: (mark: MarkFilterType) => Array<StudentType>;
    deleteStudent: (id: number) => void;
    mark: MarkFilterType;
    group: GroupFilterType;
};

const group: GroupType = {
    students: [],
    StudentsFilter: (group) => [],
    marksFilter: (mark) => [],
    deleteStudent: (id) => {},
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