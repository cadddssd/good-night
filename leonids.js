(()=>{
const wishes=[
"ขอให้ความเหนื่อยล้าค่อย ๆ จางหาย และพรุ่งนี้มีเรื่องดี ๆ รอคุณอยู่ ✨",
"ขอให้หัวใจของคุณได้รับความรักและความอ่อนโยน เท่าที่คุณสมควรได้รับ 🤍",
"ขอให้สิ่งที่กำลังตั้งใจ ค่อย ๆ เติบโตเป็นความสำเร็จในวันที่เหมาะสม 🌱",
"แม้บางคืนจะมืดมน ขอให้คุณจำไว้ว่ายังมีแสงเล็ก ๆ รออยู่เสมอ 🌟",
"ขอให้คืนนี้เป็นคืนที่ปลอดภัย หลับสนิท และตื่นมาพร้อมรอยยิ้ม 🌙",
"ขอให้คนที่คุณรักมีความสุข และขอให้คุณได้รับความสุขนั้นกลับมาเช่นกัน 💗",
"ไม่ต้องรีบไปถึงทุกเป้าหมายก็ได้ ค่อย ๆ เดินในจังหวะของตัวเองนะ ☁️",
"ขอให้จักรวาลใจดีกับคุณ และส่งโอกาสดี ๆ มาในเวลาที่พอดี 💫",
"ขอให้ความฝันที่เก็บไว้ในใจ มีวันได้เปล่งประกายเหมือนดาวคืนนี้ ⭐",
"ขอให้คุณภูมิใจในตัวเองมากขึ้น เพราะคุณผ่านอะไรมาได้ตั้งมากมาย 🕊️",
"ขอให้พรุ่งนี้มีเหตุผลเล็ก ๆ ที่ทำให้คุณยิ้มได้ตั้งแต่เช้า 🌼",
"ขอให้ทุกคำอธิษฐานที่ดี ค่อย ๆ เดินทางไปพบวันที่เป็นจริง 💌"
];
const $=id=>document.getElementById(id);
const letter=$("wishLetter"),message=$("wishMessage"),hint=$("letterHint"),status=$("shakeStatus");
const starField=$("starField"),meteorField=$("meteorField");
// A full viewport of softly twinkling stars.
for(let i=0;i<28;i++){
 const star=document.createElement("i");
 star.className="star";
 star.style.left=(Math.random()*100)+"%";
 star.style.top=(Math.random()*100)+"%";
 const size=.55+Math.random()*.95;
 star.style.setProperty("--star-size",size+"px");
 star.style.setProperty("--star-dim",(.08+Math.random()*.12).toFixed(2));
 star.style.setProperty("--t",(4.5+Math.random()*4)+"s");
 star.style.animationDelay=(-Math.random()*8)+"s";
 starField.append(star);
}
// Meteors arrive in natural-looking waves, with a quiet pause between showers.
const reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function launchMeteor(){
 if(reducedMotion||document.hidden)return;
 const meteor=document.createElement("i");
 const bright=Math.random()<.16;
 meteor.className="meteor"+(bright?" meteor--bright":"");
 const startX=12+Math.random()*112;
 const startY=-18+Math.random()*42;
 const duration=3.1+Math.random()*1.9;
 meteor.style.left=startX+"vw";
 meteor.style.top=startY+"vh";
 meteor.style.setProperty("--length",(85+Math.random()*(bright?165:105))+"px");
 meteor.style.setProperty("--thickness",bright?"2.3px":"1.15px");
 meteor.style.setProperty("--head",bright?"5px":"3px");
 meteor.style.setProperty("--dx",(-58-Math.random()*72)+"vw");
 meteor.style.setProperty("--dy",(72+Math.random()*43)+"vh");
 meteor.style.setProperty("--duration",duration+"s");
 meteor.style.setProperty("--opacity",bright?".98":(.48+Math.random()*.34).toFixed(2));
 meteorField.append(meteor);
 setTimeout(()=>meteor.remove(),duration*1000+100);
}
function meteorShowerWave(){
 if(reducedMotion)return;
 if(!document.hidden){
  const count=5+Math.floor(Math.random()*5);
  for(let i=0;i<count;i++){
   setTimeout(launchMeteor,i*(145+Math.random()*155));
  }
 }
 const pause=6500+Math.random()*5500;
 setTimeout(meteorShowerWave,pause);
}
setTimeout(meteorShowerWave,900);
let lastWish=0;
function reveal(){
 const now=Date.now();if(now-lastWish<1300)return;lastWish=now;
 let pick=Math.floor(Math.random()*wishes.length);if(wishes.length>1&&pick===lastWishIndex)pick=(pick+1)%wishes.length;lastWishIndex=pick;
 message.textContent=wishes[pick];
 const area=letter.closest(".wish-area");
 letter.classList.remove("open","shaking","celebrating");
 area.classList.remove("celebrating");
 void letter.offsetWidth;
 letter.classList.add("shaking","celebrating");
 area.classList.add("celebrating");
 setTimeout(()=>{letter.classList.remove("celebrating");letter.classList.add("open");area.classList.remove("celebrating")},720);
 status.textContent="ตราดาวเปล่งประกาย... คำอวยพรกำลังเดินทางมา 🌠";
}
let lastWishIndex=-1;
letter.addEventListener("click",reveal);
letter.addEventListener("keydown",event=>{
 if(event.key==="Enter"||event.key===" "){
  event.preventDefault();
  reveal();
 }
});
const mythModal=$("mythModal"),mythOpen=$("mythOpen"),mythClose=$("mythClose");
const bookStart=$("bookStart"),bookPages=$("bookPages"),spreadItems=[...document.querySelectorAll(".book-spread")];
const bookCover=document.querySelector('.book-cover'),bookPagesScreen=document.querySelector('.book-pages');
const bookPrev=$("bookPrev"),bookNext=$("bookNext"),bookPageCount=$("bookPageCount"),pageDots=$("pageDots");
let currentSpread=0;
let pageTurning=false;
const TURN_MS=780;
function showBookScreen(screen){
 bookCover.classList.toggle("is-visible",screen==="cover");
 bookPagesScreen.classList.toggle("is-visible",screen==="pages");
}
function renderBookSpread(){
 spreadItems.forEach((spread,index)=>spread.classList.toggle("is-current",index===currentSpread));
 bookPageCount.textContent=(currentSpread+1)+" / "+spreadItems.length+" คู่หน้า";
 pageDots.textContent=spreadItems.map((_,index)=>index===currentSpread?"●":"○").join(" ");
 bookPrev.disabled=currentSpread===0||pageTurning;
 bookNext.disabled=currentSpread===spreadItems.length-1||pageTurning;
 bookNext.textContent=currentSpread===spreadItems.length-1?"จบบทอ่าน":"พลิกหน้าถัดไป →";
}
function turnBookSpread(direction){
 if(pageTurning)return;
 const nextIndex=currentSpread+direction;
 if(nextIndex<0||nextIndex>=spreadItems.length)return;
 const outgoing=spreadItems[currentSpread],incoming=spreadItems[nextIndex];
 pageTurning=true;bookPrev.disabled=true;bookNext.disabled=true;
 if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  currentSpread=nextIndex;pageTurning=false;renderBookSpread();return;
 }
 // Reveal the next spread with a right-to-left paper-like wipe.
 // Only the spread's clipping boundary moves; text and illustrations stay still.
 currentSpread=nextIndex;
 renderBookSpread();
 incoming.classList.add("spread-page-reveal");
 window.setTimeout(()=>{
  incoming.classList.remove("spread-page-reveal");
  pageTurning=false;
  renderBookSpread();
 },900);
}
bookStart.addEventListener("click",()=>{currentSpread=0;renderBookSpread();showBookScreen("pages")});
bookPrev.addEventListener("click",()=>turnBookSpread(-1));
bookNext.addEventListener("click",()=>turnBookSpread(1));
$("bookRestart").addEventListener("click",()=>{if(pageTurning)return;currentSpread=0;renderBookSpread();showBookScreen("cover")});

function openMyths(){
 showBookScreen("cover");
 mythModal.classList.add("is-open");
 mythModal.setAttribute("aria-hidden","false");
 document.body.classList.add("myth-open");
 mythClose.focus();
}
function closeMyths(){
 if(!mythModal.classList.contains("is-open"))return;
 mythModal.classList.remove("is-open");
 showBookScreen("cover");
 mythModal.setAttribute("aria-hidden","true");
 document.body.classList.remove("myth-open");
 mythOpen.focus();
}
mythOpen.addEventListener("click",openMyths);
mythClose.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();closeMyths()});
mythModal.addEventListener("click",event=>{if(event.target.hasAttribute("data-myth-close"))closeMyths()});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&mythModal.classList.contains("is-open"))closeMyths()});
})();