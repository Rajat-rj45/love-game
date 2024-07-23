let btn2 = document.querySelector(".btn2");
let temp = document.querySelector(".btn2");
let btn1 = document.querySelector(".btn1");
btn2.addEventListener("mouseenter",function(){
    if(btn2.innerText == "NO"){
        btn2.innerText = "YES";
        btn2.style.backgroundColor = 'lawngreen';
        btn1.innerText = "NO";
        btn1.style.backgroundColor = 'red';
        let img = document.querySelector("img");
        img.classList.remove("ani");
    }
})

btn1.addEventListener("mouseenter",function(){
    if(btn1.innerText == "NO"){
        btn1.innerText = "YES";
        btn1.style.backgroundColor = 'lawngreen';
        btn2.innerText = "NO";
        btn2.style.backgroundColor = 'red';
        let img = document.querySelector("img");
        img.classList.remove("ani");
    }
})

btn1.addEventListener("click",function(){
    if(btn1.innerText == "YES"){
        let img = document.querySelector("img");
        img.classList.add("ani");
        
     }
})

btn2.addEventListener("click",function(){
    if(btn2.innerText == "YES"){
       let img = document.querySelector("img");
       img.classList.add("ani");
       
    }
})