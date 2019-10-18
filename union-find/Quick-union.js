const id = [0,1,9,4,9,6,6,7,8,9];

function constructor(n) {
    for(i = 0; i < n; i++) {
        id[i] = i;
    }
    return id;
}

function findRoot(p) {
    let pParent = id[p];
    while(pParent !== p) {
        p = pParent;
        pParent = id[p];
    }
    return pParent;
}

function find(p, q) {
    return findRoot(p) === findRoot(q);
}

function union(p, q) {
    id[findRoot(p)] = id[findRoot(q)];
    return id;
}

console.log('root of p: ', findRoot(3));
console.log('root of q: ', findRoot(6));
console.log('shared root?: ', find(3, 5));
console.log(union(3, 5));
console.log('now shared root?: ', find(3, 5));