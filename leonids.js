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
for(let i=0;i<115;i++){
 const star=document.createElement("i");star.className="star";
 star.style.left=Math.random()*100+"%";star.style.top=Math.random()*100+"%";
 star.style.setProperty("--t",(2+Math.random()*4)+"s");
 star.style.animationDelay=(-Math.random()*5)+"s";starField.append(star);
}
// Three radiant regions create overlapping, staggered fans of shooting stars.
[
 {x:76,y:13,count:9,spread:44},
 {x:91,y:42,count:7,spread:38},
 {x:48,y:7,count:8,spread:34}
].forEach((radiant,groupIndex)=>{
 const cluster=document.createElement("div");cluster.className="meteor-cluster";meteorField.append(cluster);
 for(let i=0;i<radiant.count;i++){
  const meteor=document.createElement("i");
  const bright=(i===1||i===6);meteor.className="meteor"+(bright?" meteor--bright":"");
  const angle=-58+Math.random()*radiant.spread;
  const distance=170+Math.random()*280;
  const radians=angle*Math.PI/180;
  meteor.style.left=(radiant.x+(Math.random()-.5)*5)+"%";
  meteor.style.top=(radiant.y+(Math.random()-.5)*7)+"%";
  meteor.style.setProperty("--angle",angle+"deg");
  meteor.style.setProperty("--dx",(-Math.cos(radians)*distance)+"px");
  meteor.style.setProperty("--dy",(Math.sin(Math.abs(radians))*distance*.82)+"px");
  meteor.style.setProperty("--length",(55+Math.random()*105)+"px");
  meteor.style.setProperty("--thickness",bright?"2.5px":"1.2px");
  meteor.style.setProperty("--head",bright?"5px":"3px");
  meteor.style.setProperty("--duration",(3.8+Math.random()*4.8)+"s");
  meteor.style.setProperty("--delay",(-Math.random()*7-groupIndex*.8)+"s");
  meteor.style.setProperty("--opacity",bright?".98":".72");
  cluster.append(meteor);
 }
});

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
$("shakeButton").addEventListener("click",reveal);
})();