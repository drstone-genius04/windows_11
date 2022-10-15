/* MADE BY DHAIRYA GUPTA
   INSTAGRAM ID - mr.dhairya.gupta
*/


let windows_icon = document.querySelector(".windows_icon")
let search_icon = document.querySelector(".search_icon")
let store_icon = document.querySelector(".store_icon")
let settings_icon = document.querySelector(".settings_icon")
let file_explorer_icon = document.querySelector(".file_explorer_icon")
let calculator_icon = document.querySelector(".calculator_icon")
let terminal_icon = document.querySelector(".terminal_icon")
let shutdown_icon = document.querySelector(".power_off")
let actions_div = document.querySelector(".actions")
let recent_app_icon = document.querySelector(".content")
let videoBG = document.querySelector(".videoBG")


let start_menu = document.querySelector(".start_menu")
let search_menu = document.querySelector(".search_menu")
let store_menu = document.querySelector(".store_menu")
let settings_menu = document.querySelector(".settings_menu")
let file_explorer_menu = document.querySelector(".file_explorer_menu")
let calculator_menu = document.querySelector(".calculator_menu")
let terminal_menu = document.querySelector(".terminal_menu")
let shutdown_menu = document.querySelector(".shutdown_menu")


function auto_close(name){
    let opened_menus = document.querySelectorAll("[class$=_menu_open]")
    for (let menu of opened_menus){
        let classList = menu.classList
        for (let c of classList){
            if (c.includes('_menu_open') && ! c.includes(name)){
                menu.classList.toggle(c)
                closed=true
            }
        }
    }
}
videoBG.addEventListener("click", ()=>{
    auto_close()
})

windows_icon.addEventListener("click", ()=>{
    auto_close('start')
    start_menu.classList.toggle("start_menu_open")
})

search_icon.addEventListener("click", ()=>{
    auto_close('search')
    search_menu.classList.toggle("search_menu_open")
})

store_icon.addEventListener("click", ()=>{
    auto_close('store')
    store_menu.classList.toggle("store_menu_open")
})

settings_icon.addEventListener("click", ()=>{
    auto_close('settings')
    settings_menu.classList.toggle("settings_menu_open")

})

file_explorer_icon.addEventListener("click", ()=>{
    auto_close('file_explorer')
    file_explorer_menu.classList.toggle("file_explorer_menu_open")

})

calculator_icon.addEventListener("click", ()=>{
    auto_close('calculator')
    calculator_menu.classList.toggle("calculator_menu_open")
})

terminal_icon.addEventListener("click", ()=>{
    auto_close('terminal')
    terminal_menu.classList.toggle("terminal_menu_open")
})

shutdown_icon.addEventListener("click", ()=>{
    auto_close('shutdown')
    var audio = new Audio('./notification/notification.mp3');
    audio.currentTime="0";
    audio.play();
    shutdown_menu.classList.toggle("shutdown_menu_open")
})

actions_div.addEventListener("click",()=>{
    shutdown_menu.classList.toggle("shutdown_menu_open")
})

recent_app_icon.addEventListener("click", ()=>{
    auto_close('settings')
    console.log("hey")
    settings_menu.classList.toggle("settings_menu_open")
})

if (screen.width < 1200) {
    alert('I recommend you to visit here with a PC. Else its completely fine XD');
}

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

t = n.getHours() + ":" + n.getMinutes()
document.getElementById("time").innerHTML = t;
console.log("hello");
