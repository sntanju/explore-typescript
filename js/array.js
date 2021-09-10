"use strict";
const salary = 75000;
const friendSalaries = [5349, 3434, 454, 45454, 433];
const friends = ['fdfd', 'fdfd', 'fdfgdg'];
friendSalaries[0] = 43854;
friendSalaries.push(9485948);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
