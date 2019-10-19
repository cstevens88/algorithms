const id = [];

function constructor(N) {
    for(i = 0; i < N; i++) {
        id[i] = i;
    }
    return id;
}

function root(i) {
    while (i != id[i]) {
        i = id[i];
    }
    return i;
}

function union(p, q) {
    id[root(p)] = id[root(q)];
    return id;
}

function connected(p, q) {
    return root(p) === root(q);
}

// Run some iterations to check our algorithm
constructor(10);

console.log('Initial id N=10');
console.log(id);

console.log('Root of 7');
console.log(root(7));

console.log('Are 3 and 5 connected? They shouldn\'t be...for now.');
console.log(connected(3, 5));

console.log('union(3, 5)');
console.log(union(3, 5));

console.log('Are 3 and 5 connected now?');
console.log(connected(3, 5));