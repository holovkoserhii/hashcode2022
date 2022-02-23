const fs = require('fs');

const files = {
    a: {
        input: 'tasks/a.txt',
        output: 'results/a_result.txt',
    },
    b: {
        input: 'tasks/b_read_on.txt',
        output: 'results/b_result.txt',
    },
    c: {
        input: 'tasks/c_incunabula.txt',
        output: 'results/c_result.txt',
    },
    d: {
        input: 'tasks/d_tough_choices.txt',
        output: 'results/d_result.txt',
    },
    e: {
        input: 'tasks/e_so_many_books.txt',
        output: 'results/e_result.txt',
    },
    f: {
        input: 'tasks/f_libraries_of_the_world.txt',
        output: 'results/f_result.txt',
    },
};

const file = fs.readFileSync(files.a.input, 'utf-8');

const a: string = 'some string';
console.log(file);
fs.writeFileSync(files.a.output, [1, 2, 3, 4].join('\n'));
