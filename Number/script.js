function random() {
    let numSet = [];
    numSet[0] = Math.floor(Math.random() * 100 + 1);
    numSet[1] = Math.floor(Math.random() * 100 + 1);
    numSet[2] = Math.floor(Math.random() * 100 + 1);
    return numSet;
}

function findSum(numSet) {
    let sum = 0;
    numSet.forEach(x => {
        sum += x;
    });
    return sum;
}

function findMin(numSet) {
    let min = Number.POSITIVE_INFINITY;
    numSet.forEach(x => {
        if (x < min) { min = x };
    });
    return min;
}

function findMax(numSet) {
    let max = Number.NEGATIVE_INFINITY;
    numSet.forEach(x => {
        if (x > max) { max = x };
    });
    return max;
}

let numSet = random();
console.log(numSet);
console.log(findSum(numSet));
console.log(findMin(numSet));
console.log(findMax(numSet));