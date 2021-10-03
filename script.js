let canvas = document.querySelector("#canvas");
let pages = document.querySelectorAll(".page");

let heightScreen = screen.height;
let pageno = 0;

document.body.onscroll = function(){
  let scrollY = window.scrollY;
  
  
  if (pageno+1 < pages.length && scrollY >= 520*(pageno+1)){
      pageno++;
    }
    else if(pageno != 0 && scrollY <= 520*(pageno)){
      pageno--;
    }
    pages.forEach((page) => {
      page.dataset.show = "0";
    })
    pages[pageno].dataset.show = "1";
  document.body.style.setProperty("--ch", pageno);
  document.body.style.setProperty("--sy", scrollY);
}