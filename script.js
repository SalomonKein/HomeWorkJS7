function createTreeOl(arrIn) {

    let ol = document.createElement(`ol`);

    body.append(ol);

    for (let elem of arrIn) {
        if (typeof(elem) !== "object") {
            let li = document.createElement('li');
            ol.append(li);
            li.append(elem);
        };
        if (typeof(elem) == "object") {
            let arr = elem;
            let li = document.createElement('li');
            ol.append(li);
            let ul = document.createElement(`ul`);
            li.append(ul);
            for (let elem of arr) {
                let li = document.createElement('li');
                ul.append(li);
                li.append(elem);


            };
        };
    };
};



function showNotification({ className, html }) {

    let notification = document.createElement('div');
    notification.className = "notification";
    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1000);

}


// let i = 9;

// setInterval(() => {
//     showNotification({
//         // top: 10,
//         // right: 10,

//         html: 'time to remove: ' + i--,
//         className: "timer",
//     });
//     // clearInterval(i == 0);
// }, 1000);






// setTimeout(() => ol.remove(), 10000);



let arrForExample = ['hello', 'world', 'Kiev', ['wwww', ['wwww', 'errere', 'rtrtr'], 'errere', 'rtrtr'], 'Kharkiv', 'Odessa', 'Lviv'];
createTreeOl(arrForExample);
console.log(typeof(arrForExample))