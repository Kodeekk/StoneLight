import "@fontsource/raleway";
import "../app.scss";

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

var pongsection = document.getElementById("pong-section");
var height = pongsection.clientHeight;
var width = pongsection.clientWidth;
// while(true) {
//    setTimeout(function(){
//       console.log(height)
//       console.log(width)
//    }, 1000)

// }
// div.style.left = '100px'
// div.style.top = '100px'

var factTitles = [
   "villagers",
   "totems",
   "bags",
   "wonderingtraders",
   "serverresourcepack",
   "heads",
   "armorstands",
   "banners",
   "particles",
];

var factContent = [
   [
      "Измененены некоторые торги у жителей",
      "Алмазные вещи (броня, инструменты, оружие) жители будут продавать не только за изумруды, а и за алмазы (цена у жителей будет меньше чем при крафте на верстаке), книги зачарования будут продаваться за лазурит. Все инструменты и вся броня продаются без зачарований",
   ],
   ["Уменьшен шанс дропа тотема с призывателя со 100% до 5%"],
   ["Добавлен крафт для мешков"],
   [
      "Странствующие торговцы иногда могут продать сундук с картой древнего города",
   ],
   [
      "Добавлен ресурспак сервера",
      "В ресурспак включены: различные шляпы, появляющиеся при переименовании тыкв, карты (переименованая бумага). Названия шляп можно посмотреть здесь",
   ],
   ["Игроки при убийстве дропают головы"],
   [
      "Редактор стоек для брони",
      "Нажатие ПКМ c кремнем с руке открывает интуитивно понятное меню управления",
   ],
   [
      "Баннеры можно располагать горизонтально как флаги",
      "Поддерживаемые блоки: заборы, стены, стеклянные панели, железные решетки, громоотводы. Присядьте и щелкните баннер на одном из поддерживаемых блоков, чтобы разместить его в качестве флага",
   ],
   ["У игрока с невидимостью нет частиц эффекта"],
];

factTitles.forEach((title) => {

   if (factTitles && factContent) {

      var plate = document.createElement("div");
      plate.classList.add(title);

      if (factContent[factTitles.indexOf(title)].length > 1) {

         var plateContent = document.createElement("div");
         var plateTitle = document.createElement("span");
         plateTitle.appendChild(
            document.createTextNode(factContent[factTitles.indexOf(title)[0]])
         );

         plateContent.appendChild(plateTitle);

         var innerPlateContent = document.createElement("div");
         var innerPlateTitle = document.createElement("span");
         innerPlateTitle.appendChild(
            document.createTextNode(factContent[factTitles.indexOf(title)[1]])
         );
         innerPlateContent.appendChild(innerPlateTitle);

         plateContent.appendChild(innerPlateContent);
      } else {
         var plateContent = document.createElement("span");
         plateContent.appendChild(
            document.createTextNode(factContent[factTitles.indexOf(title)[0]])
         );
      }

      plate.appendChild(plateContent);
      pongsection.appendChild(plate);
   }
});

$(function () {
   $("a").click(function () {
      // remove classes from all
      $("a").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});
