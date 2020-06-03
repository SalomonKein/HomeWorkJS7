// function createTreeOl(arrIn) {

// item => (typeof(item) == 'object') ?
// () => createLi(item) :
// () => `<li>` + item + `</li>`
// }

let createLi = (arr) => {
    let ul = document.createElement('ul')

    console.log(typeof(arr));
    ul.innerHTML = arr.map(function(item) {
        if (typeof(item) == 'object') {

            return createLi(item);

        } else {

            return `<li>` + item + `</li>`
        };
    }).join('');
    console.log(ul);
    document.body.append(ul);
}
console.log(createLi);


//     let i = 0;
//     // let li = document.createElement(`li`);
//     let newArrey = arrIn.map(item => `<li>` + item + `</li>`);

// container.innerHTML = createTreeText(obj);
//     let ol = document.createElement(`ol`);
//     body.append(ol);
//     console.log(typeof(newArrey[4]));
//     for (let elem of newArrey) {
//         // li.innerHtml = elem;
//         ol.append(elem);
//     }
// } //     function createTree(container, obj) {
// //   


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
createLi(arrForExample);
console.log(arrForExample);
// function createTree(container, arr) {
//     container.innerHTML = createTreeText(arr);
// }


// function createTreeText(arr) {
//     let li = '';
//     let ul;
//     let i = 0;
//     for (let elem of arr) {
//         li += '<li>' + elem + createTreeText(arr[i++]) + '</li>';
//     }
//     if (li) {
//         ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
// }

// createTree(container, arrForExample);



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


// createTreeOl(arrForExample);