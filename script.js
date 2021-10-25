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
      let content = document.querySelectorAll(".axeContent")[0];
      let axeTool = document.querySelector("#axeTool");
      let leaves = document.querySelectorAll(".leaves")[0];
      let clickme = document.querySelectorAll(".clickme")[0];

      content.dataset.show = "1";
      axeTool.dataset.play = "1";
      leaves.dataset.play = "1";
      clickme.dataset.show = "0"
      playing = true;
      window.setTimeout(function() {
        axeTool.dataset.play = "0";
        leaves.dataset.play = "0";
        clickme.dataset.show = "1"
        playing = false;
      }, 4000);
    }
    else if (pageno == 2){
      let cX = event.clientX;
      let cY = event.clientY-300;
      let spearTool = document.querySelector("#spearTool");
      let content = document.querySelector("#spearContent");
      let fish = document.querySelectorAll(".fish")[0];
      let spash = document.querySelectorAll(".spash")[0];
      let clickme = document.querySelectorAll(".clickme")[1];
      
      content.dataset.show = "1";
      clickme.dataset.show = "0"
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
        clickme.dataset.show = "1";
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
    else if (pageno == 5){
      let cannonTool = document.querySelectorAll(".cannonTool")[0];
      let cannonAmmo = document.querySelectorAll(".cannonAmmo")[0];
      let clickme = document.querySelectorAll(".clickme")[4];
      let content = document.querySelectorAll(".cannonContent")[0];

      clickme.dataset.show = "0";
      cannonTool.dataset.play = "1";
      cannonAmmo.dataset.play = "1";
      content.dataset.show = "1";

      playing = true;
      window.setTimeout(()=>{
        clickme.dataset.show = "1";
        cannonTool.dataset.play = "0";
        cannonAmmo.dataset.play = "0";
        playing = false;
      }, 1000)
    }
    else if (pageno == 6){
      let content = document.querySelectorAll(".gunContent")[0];
      let gunner = document.querySelectorAll(".gunner")[0];
      let muzzlesmoke = document.querySelectorAll(".muzzlesmoke")[0];
      let gunner_arm = document.querySelectorAll(".gunner-arm")[0];
      let clickme = document.querySelectorAll(".clickme")[5];

      content.dataset.show = "1";
      gunner.dataset.play = "1";
      muzzlesmoke.dataset.play = "1";
      gunner_arm.dataset.play = "1";
      clickme.dataset.show = "0";
      playing = true;

      window.setTimeout(()=>{
        gunner.dataset.play = "0";
        muzzlesmoke.dataset.play = "0";
        gunner_arm.dataset.play = "0";
        clickme.dataset.show = "1";
        playing = false;
      }, 1000)
    }
    else if (pageno == 7){
      let content = document.querySelectorAll(".bazookaContent")[0];

      content.dataset.show = "1";
      playing = true;


      
    }
    else if (pageno == 8){
      let content = document.querySelectorAll(".CyberContent")[0];

      content.dataset.show = "1";
      playing = true;

      
    }
    else if (pageno == 9){
      let content = document.querySelectorAll(".droneContent")[0];

      content.dataset.show = "1";
      playing = true;
    }
    else if (pageno == 10){
      // let clickme = document.querySelectorAll(".clickme")[9];
      // let drones = document.querySelectorAll(".flying-drone");

      // let drones_all_destroy = false;
      // drones.forEach((drone)=>{
      //   if (drone.dataset.destroyed == "1"){
      //     drones_all_destroy = true;
      //     clickme.innerHTML = "คลิกเพื่อรีเซ็ท"
      //   }
      // })
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

function shootDrone(no){
  let content = document.querySelectorAll(".droneContent")[0];
  let btn = document.querySelectorAll(".btn-reset")[0];
  let drone = document.querySelectorAll(".flying-drone")[no];

  drone.dataset.destroyed = "1";
  content.dataset.show = "1";
  btn.dataset.show = "1";
}

function resetDrone(){
  let drones = document.querySelectorAll(".flying-drone");
  let btn = document.querySelectorAll(".btn-reset")[0];

  drones.forEach((drone)=>{
    drone.dataset.destroyed = "0";
  })
  btn.dataset.show = "0";
}

function checkNumber(el){
  if (isNaN(el.value)){
    el.value = "";
  }
}

let wrong_pw = 0;

function login(){
  let input = document.querySelectorAll(".pw-input");
  let text = document.querySelectorAll(".login-text");
  let content = document.querySelectorAll(".CyberContent")[0];
  let emote = document.querySelectorAll(".emote")[0];
  let hint_text = document.querySelectorAll(".hint-text");

  let pw1 = input[0];
  let pw2 = input[1];
  let pw3 = input[2];
  let pw4 = input[3];

  content.dataset.show = "1";
  if (+pw1.value == 6 & +pw2.value == 2 & +pw3.value == 4 & +pw4.value == 8){
    text[0].dataset.show = "1";
    text[1].dataset.show = "0";
    emote.dataset.show = "1";
  }
  else{
    text[0].dataset.show = "0";
    text[1].dataset.show = "1";
    emote.dataset.show = "0";
    hint_text[wrong_pw].dataset.show = "1";
    if (wrong_pw < 3){
      wrong_pw++;
    }
  }

  window.setTimeout(()=>{
    text[0].dataset.show = "0";
    text[1].dataset.show = "0";
  }, 2000)
}