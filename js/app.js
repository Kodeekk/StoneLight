import "@fontsource/raleway";
import '../app.scss';

//document.querySelector('footer').innerHTML = "<h1>Hello, World!</h1>"

// function httpGet(theUrl) {
//     var xmlHttp = new XMLHttpRequest()
//     xmlHttp.open("GET", theUrl, false)
//     xmlHttp.send(null)
//     return xmlHttp.responseText
// }
//console.log(httpGet("https://minecraft-statistic.net/ru/server/23.109.126.244_25565/top/"))
//const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
//console.log(obj)
//document.querySelector('footer').innerHTML = '<img src="https://mc-heads.net/body/HiVisPriest" alt="icon">'



// function navbar_buttons_activation() {
//     var homebutton = document.getElementById("homebutton")
//     var clansbutton = document.getElementById("clansbutton")
//     var statsbutton = document.getElementById("statsbutton")
//     var adminsbutton = document.getElementById("adminsbutton")
//     var aboutbutton = document.getElementById("aboutbutton")
//     var navbarbuttons = [homebutton, clansbutton, statsbutton, adminsbutton, aboutbutton]
//     navbarbuttons.forEach(element => {
//         element.classList.remove("active")
//     });
//     navbarbuttons.forEach(element => {
//         if (!element.classList.contains("active")) {
//             console.log("Ready! now, element '" + element.innerText + "' does`nt have 'active' class!")
//         }
//     });
//     console.log("navbar clear!")
//     var currentpage = document.URL.toString().toLocaleLowerCase().split('/')
//     currentpage = currentpage[currentpage.length - 1]

//     switch (currentpage) {
//         case "index":
//             homebutton.classList.add("active")
//         case "clans":
//             clansbutton.classList.add("active")
//         case "stats":
//             statsbutton.classList.add("active")
//         case "admins":
//             adminsbutton.classList.add("active")
//         case "about":
//             aboutbutton.classList.add("active")
//         default:
//             homebutton.classList.add("active")
//     }
// }
// navbar_buttons_activation()

// console.log(document.URL.toString())


// switch (document.URL.toString) {

//     case "http://localhost:1234/index":
//         console.log(document.URL.toString())


//     case "http://localhost:1234/about":
//         console.log(document.URL.toString())

//     case "http://localhost:1234/admins":
//         console.log(document.URL.toString())

//     case "http://localhost:1234/clans":
//         console.log(document.URL.toString())

//     case "http://localhost:1234/stats":
//         console.log(document.URL.toString())
// }

// var pongsection = document.getElementById('pongsection')
// var height = pongsection.clientHeight
// var width = pongsection.clientWidth
// while(true) {
//    setTimeout(function(){
//       console.log(height)
//       console.log(width)
//    }, 1000)
   
// }
// div.style.left = '100px'
// div.style.top = '100px'

$(function() {
    $("a").click(function() {
       // remove classes from all
       $("a").removeClass("active");
       // add class to the one we clicked
       $(this).addClass("active");
    });
 });