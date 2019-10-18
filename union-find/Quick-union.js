const id = [0,9,6,5,4,2,6,1,0,5];

function constructor(n) {
    for(i = 0; i < n; i++) {
        id[i] = i;
    }
    return id;
}

function find(p) {
    while (p != id[p]) {
        p = id[p];
    }
    return p;
}

function union(p, q) {
    id[find(p)] = id[find(q)];
    return id;
}

function connected(p, q) {
    return find(p) === find(q);
}

console.log(find(7));
console.log(connected(3, 5));
console.log(union(3, 5));