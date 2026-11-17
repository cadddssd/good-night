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
let lastWish=-1,lastShake=0,motionEnabled=false,lastMotion=0;
for(let i=0;i<95;i++){const s=document.createElement("i");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.setProperty("--t",(2+Math.random()*4)+"s");s.style.animationDelay=(-Math.random()*5)+"s";$("starField").append(s)}
for(let i=0;i<9;i++){const m=document.createElement("i");m.className="meteor";m.style.setProperty("--top",(Math.random()*55)+"%");m.style.setProperty("--left",(65+Math.random()*45)+"%");m.style.setProperty("--length",(75+Math.random()*115)+"px");m.style.setProperty("--duration",(2.4+Math.random()*3.5)+"s");m.style.setProperty("--delay",(-Math.random()*5)+"s");$("meteorField").append(m)}
function reveal(){
 const now=Date.now();if(now-lastWish<1300)return;lastWish=now;
 let pick=Math.floor(Math.random()*wishes.length);if(wishes.length>1&&pick===lastWishIndex)pick=(pick+1)%wishes.length;lastWishIndex=pick;
 message.textContent=wishes[pick];letter.classList.remove("open","shaking");void letter.offsetWidth;letter.classList.add("shaking");setTimeout(()=>letter.classList.add("open"),360);
 status.textContent="ดวงดาวส่งคำอวยพรมาให้คุณแล้ว ✨";
}
let lastWishIndex=-1;
$("shakeButton").addEventListener("click",reveal);
async function enableMotion(){
 if(!("DeviceMotionEvent" in window)){status.textContent="อุปกรณ์นี้ไม่รองรับการเขย่าจากเซนเซอร์ ใช้ปุ่มเขย่าจดหมายได้เลยนะ";return}
 try{
  if(typeof DeviceMotionEvent.requestPermission==="function"){
   const permission=await DeviceMotionEvent.requestPermission();
   if(permission!=="granted"){status.textContent="ยังไม่ได้อนุญาตเซนเซอร์ สามารถแตะปุ่มรับคำอวยพรแทนได้";return}
  }
  if(!motionEnabled){window.addEventListener("devicemotion",onMotion);motionEnabled=true}
  $("motionButton").textContent="เปิดใช้การเขย่าจากมือถือแล้ว ✓";
  status.textContent="ลองเขย่าโทรศัพท์เบา ๆ เพื่อเปิดจดหมาย 🌠";
 }catch(e){status.textContent="เปิดเซนเซอร์ไม่ได้ในเบราว์เซอร์นี้ ใช้ปุ่มเขย่าจดหมายได้เลยนะ"}
}
function onMotion(e){
 const a=e.accelerationIncludingGravity;if(!a)return;
 const power=Math.abs(a.x||0)+Math.abs(a.y||0)+Math.abs(a.z||0);
 const now=Date.now();if(power>27&&now-lastMotion>1700){lastMotion=now;reveal()}
}
$("motionButton").addEventListener("click",enableMotion);
})();