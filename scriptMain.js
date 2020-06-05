function createUl(arrEl) {
    return arrEl.map(function(el) {
        if (Array.isArray(el)) {
            return `<ul>` + createUl(el) + `</ul>`
        } else {
            return `<li>` + el + `</li>`
        };
    }).join('');
};

let createLi = (arr) => {
    let ol = document.createElement('ol')
    console.log(typeof(arr));
    console.log(arr.map(function(item) {
        if (Array.isArray(item)) {
            return `<ul>` + item.map(function(elem) {
                return `<li>` + elem + `</li>`
            }) + `</ul>`
        } else {
            return `<li>` + item + `</li>`
        };
    }))
    ol.innerHTML = arr.map(function(item) {
        if (Array.isArray(item)) {
            return `<ul>` + createUl(item) + `</ul>`
        } else {
            return `<li>` + item + `</li>`
        };
    }).join('');
    console.log(ol);
    document.body.append(ol);
    setTimeout(() => ol.remove(), 11000)
}

let arrForExample = ['hello', 'world', 'Kiev', ['wwww', ['111', ['q1', [4, 6, 2, ], 'q2', 'q3'], 'e222', '3333'], 'errere', 'rtrtr'], 'Kharkiv', 'Odessa', 'Lviv'];


createLi(arrForExample);
console.log(arrForExample);
console.log(Array.isArray(arrForExample))


function showTimer() {
    let timer = document.createElement('div');
    timer.className = "timer";
    timer.innerHTML = 'time to remove: ' + i--;
    document.body.append(timer);
    setTimeout(() => timer.remove(), 1000);
}
let i = 10;
let timerId = setInterval(() => { showTimer({}); }, 1000);


setTimeout(() => clearInterval(timerId), 11000);