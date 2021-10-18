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
    return function (...params) {
        let accum = initial;
        count = 0;
        const args = arguments;
        return (function doFunc() {
            if (count <= args.length - 1) {
                accum = func(accum, args[count])
                count++;
                doFunc()
            }
            return accum
        })()
    }
}

function accPartial(func, start, end) {
    return function (...randomArgs) {
        let args = arguments;
        let count = 0;
        let accum;
        let arr = []
        return (function doFunc() {
            if (count < start) {
                arr.push(args[count])
                count++
                doFunc()
            }
            if (count <= end - 2 && count >= start) {
                if (count == start) accum = args[start];
                accum = func(accum, args[count + 1])
                if (count == end - 2) arr.push(accum)
                count++;
                doFunc()
            }
            if (count <= args.length - 2) {
                arr.push(args[count + 1])
                count++
                doFunc()
            }
            return arr;
        })()
    }
}

function accRecurse(func, initial) {
    return function (...params) {
        let accum = initial;
        count = 0;
        const args = arguments;
        return (function doFunc() {
            if (count <= args.length - 1) {
                accum = func(accum, args[count])
                count++;
                doFunc()
            }
            return accum
        })()
    }
}

function fill(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(num)
    }
    return arr
}

function fillRecurse(num) {
    let arr = []
    let count = 0;
    return (function recurse() {
        if (count == num) return;
        arr.push(num);
        count++
        recurse();
        return arr;
    })()
}

function set(...funcArgs) {
    let arr = []
    let count = 0;
    return (function recurse() {
        for (let i = 0; i < arr.length; i++) {

        }
    })()
}//  FIXME

const identityf = (x) => () => x

const addf = a => b => a + b

/* function liftf(binary) {
    return function(a){
        return function(b){
            return binary(a,b)
        }
    }
} */

const liftf = binary => a => b => binary(a, b)

function pure(x, y) {
    (function impure(x) {
        y++;
        z = x * y;
    }
    )(x)
    var y = 5, z;

    return [y, z]
}

module.exports = {
    identity, addb, subb, mulb, minb, maxb, add,
    sub, mul, min, max, addRecurse, mulRecurse,
    minRecurse, maxRecurse, not, acc, accPartial, accRecurse,
    fill, fillRecurse, set, identityf, addf, liftf
};

// addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse, not, acc, accPartial, accRecurse, fill, fillRecurse, set, identityf, addf, liftf, pure, curryb, curry, inc, twiceUnary, doubl, square, twice, reverseb, reverse, composeuTwo, composeu, composeb, composeTwo, compose, limitb, limit, genFrom, genTo, genFromTo, elementGen, element, collect, filter, filterTail, concatTwo, concat, concatTail, gensymf, gensymff, fibonaccif, counter, revocableb, revocable, extract, m, addmTwo, addm, liftmbM, liftmb, liftm, exp, expn, addg, liftg, arrayg, continuizeu, continuize, vector, exploitVector, vectorSafe, pubsub, mapRecurse, filterRecurse, 