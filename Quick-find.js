const id = [];

function constructor(n) {
    for(i = 0; i < n; i++) {
        id[i] = i;
    }
    return id;
}

function connected(p, q) {
    return id[p] === id[q];
}

function union(p, q) {
    let pid = id[p];
    let qid = id[q];
    for(i = 0; i < id.length; i++) {
        if(id[i] === pid) {
            id[i] = qid;
        }
    }
    return id;
}

console.log(constructor(10));
console.log(union(0, 1));
console.log(union(0, 2));
console.log(union(3, 9));
console.log(union(0, 3));
