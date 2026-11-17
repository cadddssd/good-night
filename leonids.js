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
let lastWish=0;
function reveal(){
 const now=Date.now();if(now-lastWish<1300)return;lastWish=now;
 let pick=Math.floor(Math.random()*wishes.length);if(wishes.length>1&&pick===lastWishIndex)pick=(pick+1)%wishes.length;lastWishIndex=pick;
 message.textContent=wishes[pick];letter.classList.remove("open","shaking");void letter.offsetWidth;letter.classList.add("shaking");setTimeout(()=>letter.classList.add("open"),360);
 status.textContent="ดวงดาวส่งคำอวยพรมาให้คุณแล้ว ✨";
}
let lastWishIndex=-1;
$("shakeButton").addEventListener("click",reveal);
})();