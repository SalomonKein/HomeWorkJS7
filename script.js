function createTreeOl(arrIn) {

    let ol = document.createElement(`ol`);

    body.append(ol);

    for (let elem of arrIn) {
        // if (!Object.keys(arrIn).length) return;
        let li = document.createElement('li');
        ol.append(li);
        li.append(elem);
    };

    function showNotification({ className, html }) {

        let notification = document.createElement('div');
        notification.className = "notification";
        notification.innerHTML = html;
        document.body.append(notification);

        setTimeout(() => notification.remove(), 1000);

    }


    let i = 9;

    setInterval(() => {
        showNotification({
            // top: 10,
            // right: 10,
            html: 'time to remove: ' + i--,
            className: "timer",
        });
        // clearInterval(i == 0);
    }, 1000);






    setTimeout(() => ol.remove(), 10000);
}

let arrForExample = ['hello', 'world', 'Kiev', ['wwww', 'errere', 'rtrtr'], 'Kharkiv', 'Odessa', 'Lviv'];
createTreeOl(arrForExample);