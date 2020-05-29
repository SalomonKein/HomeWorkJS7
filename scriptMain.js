// function createTreeOl(arrIn) {
//     let i = 0;

//     let newArrey = arrIn.map(() => `<li>${arrIn[i++]}</li>;`);
//     console.log(arrIn[2]);
//     console.log(newArrey);

//     let ol = document.createElement(`ol`);

//     body.append(ol);
//     for (let elem of newArrey) {
//         // li = document.createElement(elem);
//         ol.append(innerHtml = elem);
//         function createTree(container, obj) {
//             container.innerHTML = createTreeText(obj);
//           }








// };
//     if (typeof(elem) == "object") {
//         let arr = elem;
//         li = document.createElement('li');
//         ol.append(li);
//         let ul = document.createElement(`ul`);
//         li.append(ul);
//         for (let elem of arr) {
//             if (typeof(elem) !== "object") {
//                 li = document.createElement('li');
//                 ul.append(li);
//                 li.append(elem);
//             }
//             if (typeof(elem) == "object") {
//                 let arr = elem;
//                 li = document.createElement('li');
//                 ol.append(li);
//                 let ul = document.createElement(`ul`);
//                 li.append(ul);
//             };
//         };
//     };
// };
// setTimeout(() => ol.remove(), 11000);
// };
// let div = document.createElement(`div`);
// div.className = 'container'
// body.append(div); createTreeText(elem) +
let arrForExample = ['hello', 'world', 'Kiev', ['wwww', ['wwww', 'errere', 'rtrtr'], 'errere', 'rtrtr'], 'Kharkiv', 'Odessa', 'Lviv'];

function createTree(container, arr) {
    container.innerHTML = createTreeText(arr);
}


function createTreeText(arr) {
    let li = '';
    let ul;
    let i = 0;
    for (let elem of arr) {
        li += '<li>' + elem + createTreeText(arr[i++]) + '</li>';
    }
    if (li) {
        ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
}

createTree(container, arrForExample);



function showTimer({ className, html }) {
    let timer = document.createElement('div');
    timer.className = "timer";
    timer.innerHTML = 'time to remove: ' + i--;
    document.body.append(timer);
    setTimeout(() => timer.remove(), 1000);
}

let i = 10;
let timerId = setInterval(() => { showTimer({}); }, 1000);


setTimeout(() => clearInterval(timerId), 11000);


// createTreeOl(arrForExample);