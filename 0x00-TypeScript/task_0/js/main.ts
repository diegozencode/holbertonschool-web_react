interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Tatiana',
    lastName: 'Ramirez',
    age: 30,
    location: 'New York',
}

const student2: Student = {
    firstName: 'Juan',
    lastName: 'Romero',
    age: 35,
    location: 'Bogota',
}

const studentsList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

table.append(thead, tbody);
document.querySelector<HTMLBodyElement>('body').prepend(table);

studentsList.forEach((student) => {
    const { firstName, location } = student;
    const row: HTMLTableRowElement = document.createElement('tr');
    row.innerHTML = `<td>${firstName}</td><td>${location}</td>`;
    document.querySelector<HTMLTableSectionElement>('body').append(row);
});
