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
      page.style.zIndex = "0"
    })
    pages[pageno].dataset.show = "1";
    pages[pageno].style.zIndex = "3";
  document.body.style.setProperty("--ch", pageno);
  document.body.style.setProperty("--sy", scrollY);

  if (scrollY >= 250){
    let scd = document.querySelectorAll(".scrollDown")[0].style;
    scd.animation = "none";
    scd.opacity = "0"
  }
  else{
    let scd = document.querySelectorAll(".scrollDown")[0].style;
    scd.animation = "staring 1s infinite alternate linear";
    scd.opacity = "1"
  }

//   document.querySelector("#popup").innerHTML = `Y = ${scrollY}<br>Page = ${pageno}`
}

function goTo(y){
    window.scroll(0, 520 * (y-1));
    pageno = y;
    document.body.style.setProperty("--sy", scrollY);
    document.body.style.setProperty("--ch", pageno);
}

let playing = false;
let swordPlaying = false;

function play(event){
  if (!playing){
    if (pageno == 1){
      document.querySelectorAll(".axeContent")[0].style.opacity = "1";
      document.querySelector("#axeTool").style.animation = "axeMove 2s infinite alternate,axeSpin 2s infinite linear alternate";
      document.querySelectorAll(".leaves")[0].style.animation = "leavesFall 4s 2s infinite linear";
      document.querySelectorAll(".clickme")[0].style.opacity = "0"
      playing = true;
      window.setTimeout(function() {
        document.querySelectorAll(".clickme")[0].style.opacity = ".5";
        document.querySelector("#axeTool").style.animation = "none";
        document.querySelectorAll(".leaves")[0].style.animation = "none";
        playing = false;
      }, 4000);
    }
    else if (pageno == 2){
      let cX = event.clientX;
      let cY = event.clientY-300;
      let spearTool = document.querySelector("#spearTool")
      let fish = document.querySelectorAll(".fish")[0]
      let spash = document.querySelectorAll(".spash")[0]
      
      document.querySelector("#spearContent").style.opacity = "1";
      document.querySelectorAll(".clickme")[1].style.opacity = "0"
      spearTool.animate([
        { left: `100%`, bottom: `100%` }, 
        { left: `${cX}px`, bottom: `130px` },
        { left: `${cX}px`, bottom: `130px` }
      ], { 
        duration: 1000
      });
      window.setTimeout(function() {
        spearTool.style.left = `${cX}px`;
        spearTool.style.bottom = `130px`;
        fish.style.opacity = "1";
        fish.style.left = `${cX-100}px`;
        spash.style.left = `${cX-100}px`;
      }, 500)
      fish.style.animation = "fishmove 2s .5s linear";
      spash.style.animation = "spash 2s .5s linear";
      playing = true;
      window.setTimeout(function(){
        fish.style.animation = "none";
        spash.style.animation = "none";
        playing = false;
        document.querySelectorAll(".clickme")[1].style.opacity = ".5";
      }, 2500)
    }
    else if (pageno == 3){

    }
    else if (pageno == 4){
      let btn_l = document.querySelector("#swordBtn_L");
      let btn_r = document.querySelector("#swordBtn_R");
      let sword_l = document.querySelectorAll(".swordLeft")[0];
      let sword_r = document.querySelectorAll(".swordRight")[0];
      let sword_l_img = document.querySelector("#sword_L");
      let sword_r_img = document.querySelector("#sword_R");
      let light_l = document.querySelectorAll(".lightLeft")[0];
      let light_r = document.querySelectorAll(".lightRight")[0];

      if (swordPlaying) {  
        btn_l.style.display = "block";
        btn_r.style.display = "block";
        sword_l_img.src = "pic/sword/sword-right.png";
        sword_l.style.width = "400px";
        sword_l.style.left = "10%";
        sword_l.style.transform = "scaleX(-1)";
        sword_r_img.src = "pic/sword/sword-right.png";
        sword_r.style.width = "400px";
        sword_r.style.right = "10%";
        sword_r.style.transform = "none";
        light_l.style.left = "10vw";
        light_l.style.opacity = "1";
        light_r.style.right = "10vw";
        light_r.style.opacity = "0";
        
        document.querySelectorAll(".clickme")[3].innerHTML = "เลือกทีมที่คุณคิดว่าจะชนะ"
        swordPlaying = false;
      }
    }
  }
}

function chooseTeam(team){
  let btn_l = document.querySelector("#swordBtn_L");
  let btn_r = document.querySelector("#swordBtn_R");
  let sword_l = document.querySelectorAll(".swordLeft")[0];
  let sword_r = document.querySelectorAll(".swordRight")[0];
  let sword_l_img = document.querySelector("#sword_L");
  let sword_r_img = document.querySelector("#sword_R");
  let light_l = document.querySelectorAll(".lightLeft")[0];
  let light_r = document.querySelectorAll(".lightRight")[0];

  if (team == 1){
    btn_r.style.display = "none";
  }
  else{
    btn_l.style.display = "none";
  }

  document.querySelectorAll(".swordContent")[0].style.opacity = "1"
  let rand_win = parseInt(Math.random() * 2 +1);
  if (rand_win == 1){
    sword_l_img.src = "pic/sword/sword-left.png";
    sword_l.style.width = "700px";
    sword_l.style.left = "40vw";
    sword_l.style.transform = "none";
    light_l.style.opacity = "1";
    light_l.style.left = "30vw";
  }
  else{
    sword_r_img.src = "pic/sword/sword-left.png";
    sword_r.style.width = "700px";
    sword_r.style.right = "40vw";
    sword_r.style.transform = "scaleX(-1)";
    light_r.style.opacity = "1";
    light_r.style.right = "30vw";
    light_l.style.opacity = "0";
  }
  if (rand_win == team){
    document.querySelectorAll(".clickme")[3].innerHTML = `คุณชนะ<div>ทีมที่ ${rand_win} ชนะ</div><br>คลิกเพื่อเริ่มใหม่`
  }
  else {
    document.querySelectorAll(".clickme")[3].innerHTML = `คุณแพ้<div>ทีมที่ ${rand_win} ชนะ</div><br>คลิกเพื่อเริ่มใหม่`
  }
  window.setTimeout(function(){
    swordPlaying = true
  }, 500)
}