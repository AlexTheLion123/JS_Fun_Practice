function identity(x) {
    return x;
}

function addb(a, b) {
    return a + b
}

function subb(a, b) {
    return a - b
}

function mulb(a, b) {
    return a * b
}

function minb(a, b) {
    return a < b ? a : b
}

function maxb(a, b) {
    return a < b ? b : a
}

function add(...nums) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

function sub(...nums) {
    let diff;
    for (let i = 0; i < arguments.length; i++) {
        if (i == 0) {
            diff = arguments[i]
            continue
        }
        diff = diff - arguments[i]
    }
    return diff
}

function mul(...nums) {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product *= arguments[i]
    }
    return product
}

function min(...nums) {
    let min;
    for (let i = 0; i < arguments.length; i++) {
        if (i == 0) min = arguments[i];
        min = arguments[i] < min ? arguments[i] : min
    }
    return min
}

function max(...nums) {
    let max;
    for (let i = 0; i < arguments.length; i++) {
        if (i == 0) max = arguments[i];
        max = arguments[i] > max ? arguments[i] : max
    }
    return max
}

function addRecurse(...nums) {
    let sum = 0;
    let count = 0;
    let args = arguments

    function add(num) {
        sum += args[count]
        if (count <= args.length - 2) {
            count++;
            add(args[count])
        }
        return sum;
    };
    return add(arguments[0]);
}

function mulRecurse(...nums) {
    let product = 1;
    let count = 0;
    let args = arguments;

    function mul(num) {
        product *= args[count]
        if (count <= args.length - 2) {
            count++;
            mul(args[count])
        }
        return product;
    }
    return mul(arguments[0])
}

function minRecurse(...nums) {
    let min;
    let count = 0;
    let args = arguments;

    function minFunc(num) {
        if (count == 0) min = args[0]
        if (args[count] < min) min = args[count]
        if (count <= args.length - 2) {
            count++;
            minFunc(args[count])
        }
        return min
    }
    return minFunc(args[0])
}

function maxRecurse(...nums) {
    let max;
    let count = 0;
    let args = arguments;

    function maxFunc(num) {
        if (count == 0) max = args[0]
        if (args[count] > max) max = args[count]
        if (count <= args.length - 2) {
            count++;
            maxFunc(args[count])
        }
        return max
    }
    return maxFunc(args[0])
}

const not = func => arg => !func(arg)

function acc(func, initial) {
    return function (...args) {
        return (function () {
            
        })()
    }
}

let myadd = acc(addb, 0)
console.log(myadd(1, 2, 4))

module.exports = { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not };

// addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, 