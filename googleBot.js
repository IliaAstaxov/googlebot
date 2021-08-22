// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==

let words = ["Габой", "Как звучит флейта", "Кларнет", "Валторна", "Фагот"];
let btnK = document.getElementsByName("btnK")[0];
let googleInput = document.getElementsByName("q")[0];
googleInput.value = words[getIntRandom(0,words.length)]
if(btnK != undefined){
    setTimeout(function(){//в setTimeOut принято, чтобы его первым значением была функция, поэтому я сощдал функцию и вложил туда строчку кода, можно было и просто сложить код в первую переменную, но спецификация не рекомендует этого делать.
    btnK.click();
    },1500);
}else {
    let links = document.links;
    let nextPage = document.getElementById("pnnext");
    let goNextPage = true;
    for(let i=0; i<links.length; i++){ //перебираю ссылки
        let link = links[i];
          if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1) {
          setTimeout(function(){
          link.click();}, 2000);
          goNextPage = false;
          break;
          }
    }
    if(goNextPage) {
    setTimeout(function(){
      nextPage.click()}, 2000)
    }
}

function getIntRandom(min, max){
  return Math.floor(Math.random()*(max-min)+min);
}
