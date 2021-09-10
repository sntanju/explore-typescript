interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string
    previousClubs?: string[]
}

const messy: Player = {
    name: 'L Messy',
    club: 'Abahony',
    salary: 1200,
    wife: 'ABc'
}


const hanna: Player = {
    name: 'Abdul',
    club: 'fkjf',
    salary: 1399,

}

interface Employee{
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee{
    language: string,
    codeEditor: string,
    typingSpeeed: number
}

const zuku: Developer = {
    name:'abcd',
    salary: 1000,
    age: 30,
    designation: 'aabbef',
    language: 'js',
    codeEditor: 'VS code',
    typingSpeeed: 65
}