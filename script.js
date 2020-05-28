function createTreeOl(arrIn) {

    // function createUl(arr){
    //     li = document.createElement('li');
    //     ol.append(li);
    //     let ul = document.createElement(`ul`);
    //     li.append(ul);
    //     for (let elem of arr) {
    //         if (typeof(elem) !== "object") {
    //         let li = document.createElement('li');
    //         ul.append(li);
    //         li.append(elem);}
    //          if (typeof(elem) == "object"){
                
    //              createUl(elem)
    //             };
        

    //         };
    //     };
    let ol = document.createElement(`ol`);

    body.append(ol);

    for (let elem of arrIn) {
        if (typeof(elem) !== "object") {
            let li = document.createElement('li');
            ol.append(li);
            li.append(elem);
        };
          if (typeof(elem) == "object") {
            let arr=elem;
              li = document.createElement('li');
              ol.append(li);
              let ul = document.createElement(`ul`);
              li.append(ul);
              for (let elem of arr) {
                  
                  if (typeof(elem) !== "object") {
                  li = document.createElement('li');
                  ul.append(li);
                  li.append(elem);}
                   if (typeof(elem) == "object"){
                      
                    let arr=elem;
                    li = document.createElement('li');
                    ol.append(li);
                    let ul = document.createElement(`ul`);
                    li.append(ul);
                    for (let elem of arr) {
                        
                        if (typeof(elem) !== "object") {
                        li = document.createElement('li');
                        ul.append(li);
                        li.append(elem);}
                         if (typeof(elem) == "object"){
                            
                             createUl(elem)
                            };}
                      };
              
      
                  };
             
            };
    };
    setTimeout(() => ol.remove(), 11000);
};



function showTimer({ className, html }) {

    let timer = document.createElement('div');
    timer.className = "timer";
    timer.innerHTML = 'time to remove: ' + i-- ;
    document.body.append(timer);
    

    setTimeout(() => timer.remove(), 1000);
    
    

}

let i = 10;
let timerId = setInterval(() => {showTimer({});},1000 );


setTimeout(() => clearInterval(timerId), 11000);

 

 



let arrForExample = ['hello', 'world', 'Kiev', ['wwww', ['wwww', 'errere', 'rtrtr'], 'errere', 'rtrtr'], 'Kharkiv', 'Odessa', 'Lviv'];
createTreeOl(arrForExample);
console.log(typeof(arrForExample))