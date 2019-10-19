const id = [];
const size = [];

function constructor(N) {
    for(i = 0; i < N; i++) {
        size[i] = 1;
        id[i] = i;
    }
}

function root(i) {
    while (i != id[i]) {
        i = id[i];
    }
    return i;
}

function connected(p, q) {
    return root(p) === root(q);
}

function union(p, q) {
    let i = root(p);
    let j = root(q);
    if(size[i] < size[j]) {
        id[i] = j;
        size[j] += size[i];
    } else {
        id[j] = i;
        size[i] += size[j];
    }
}


// Run some iterations to check our algorithm
constructor(10);

console.log('Initial id N=10');
console.log(id);
console.log('Initial size N=10');
console.log(size);
console.log('\n');

console.log('union(4, 3)');
union(4, 3)
console.log(id);
console.log('size after union(4, 3)');
console.log(size);
console.log('\n');

console.log('union(3, 8)');
union(3, 8)
console.log(id);
console.log('size after union(3, 8)');
console.log(size);
console.log('\n');

console.log('union(6, 5)');
union(6, 5)
console.log(id);
console.log('size after union(6, 5)');
console.log(size);
console.log('\n');

console.log('union(9, 4)');
union(9, 4)
console.log(id);
console.log('size after union(9, 4)');
console.log(size);
console.log('\n');

console.log('union(2, 1)');
union(2, 1)
console.log(id);
console.log('size after union(2, 1)');
console.log(size);
console.log('\n');

console.log('union(5, 0)');
union(5, 0)
console.log(id);
console.log('size after union(5, 0)');
console.log(size);
console.log('\n');

console.log('union(7, 2)');
union(7, 2)
console.log(id);
console.log('size after union(7, 2)');
console.log(size);
console.log('\n');

console.log('union(6, 1)');
union(6, 1)
console.log(id);
console.log('size after union(6, 1)');
console.log(size);
console.log('\n');

console.log('union(7, 3)');
union(7, 3)
console.log(id);
console.log('size after union(7, 3)');
console.log(size);
console.log('\n');