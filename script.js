const messages = [
  "วันนี้เหนื่อยมามากแล้ว พักใจไว้ตรงนี้ก่อนนะ พรุ่งนี้ค่อยเริ่มใหม่ 🌙",
  "ขอให้คืนนี้มีแต่ความฝันที่อ่อนโยน และตื่นมาพร้อมรอยยิ้มนะ 💜",
  "ไม่ว่าวันนี้จะเป็นยังไง คุณก็เก่งมากแล้วนะ หลับฝันดี ✨",
  "วางเรื่องหนัก ๆ ลงสักคืน แล้วให้หัวใจได้พักบ้างนะ 🤍",
  "คืนนี้ฟ้าจะช่วยกอดคุณไว้เอง หลับให้สบายนะ 🌌",
  "ขอให้พรุ่งนี้ใจดีกับคุณ เหมือนที่คุณใจดีกับคนอื่นเสมอ 💫",
  "ปิดวันด้วยความภูมิใจเล็ก ๆ ว่าวันนี้คุณผ่านมันมาได้แล้ว 💗",
  "ส่งดาวหนึ่งดวงไปเฝ้าฝันของคุณนะ ฝันดีค่ะ ⭐",

  //อบอุ่นและห่วงใย
  "วันนี้เหนื่อยมามากแล้วนะ ขอให้คืนนี้เป็นเวลาที่เธอได้พักใจอย่างเต็มที่ 🤍",
  "ไม่ว่าวันนี้จะเจอเรื่องอะไรมาบ้าง อย่าลืมใจดีกับตัวเองนะ 🌷",
  "ขอให้คืนนี้มีผ้าห่มอุ่น ๆ และความสบายใจอยู่รอบตัวเธอนะ 🧸",
  "บางวันการได้พักผ่อนก็ถือว่าเป็นความสำเร็จอย่างหนึ่งแล้วนะ 💗",
  "ไม่ต้องแบกทุกอย่างไว้คนเดียวก็ได้นะ พักบ้างนะคนเก่ง ☁️",
  "ขอให้ความเหนื่อยล้าของวันนี้ค่อย ๆ จางหายไปพร้อมกับการหลับตา 🌙",
  "ขอให้คืนนี้เธอรู้สึกปลอดภัย อบอุ่น และสบายใจนะ 🕊️",
  "วันนี้ทำดีที่สุดแล้วนะ ไม่ต้องกดดันตัวเองมากเกินไปแล้ว 💕",
  "ขอให้มีใครสักคนหรืออะไรสักอย่างทำให้หัวใจเธอยิ้มได้เสมอนะ 🌻",
  "ส่งความห่วงใยเล็ก ๆ ไปให้ ขอให้คืนนี้หลับสบายและฝันดีนะ 🤗",

  //สดใสและให้กำลังใจ
  "พรุ่งนี้คือโอกาสใหม่ ขอให้เธอได้พบกับเรื่องราวดี ๆ นะ ☀️",
  "อย่าลืมภูมิใจในตัวเองบ้างนะ เพราะเธอเดินทางมาไกลมากแล้ว 🌈",
  "ถึงวันนี้จะไม่เป็นอย่างที่หวัง แต่พรุ่งนี้ยังมีโอกาสให้เริ่มต้นใหม่เสมอ ✨",
  "ขอให้เช้าวันใหม่เต็มไปด้วยรอยยิ้มและพลังดี ๆ นะ 🌼",
  "ทุกก้าวเล็ก ๆ ที่เธอเดินไป ล้วนมีความหมายเสมอนะ 🌱",
  "ไม่ต้องเปรียบเทียบตัวเองกับใคร ค่อย ๆ เติบโตในแบบของตัวเองนะ 🌻",
  "ขอให้ความฝันที่ตั้งใจไว้ ค่อย ๆ กลายเป็นความจริงในสักวันนะ ⭐",
  "วันนี้อาจเหนื่อยหน่อย แต่เธอเก่งกว่าที่ตัวเองคิดนะ 💛",
  "ขอให้วันพรุ่งนี้มีเรื่องให้หัวเราะมากกว่าเรื่องให้กังวลนะ 😊",
  "พักผ่อนให้เต็มที่ แล้วออกไปใช้ชีวิตในวันใหม่อย่างสดใสนะ 🌞",

  //สงบและผ่อนคลาย
  "คืนนี้ปล่อยวางทุกเรื่องไว้ก่อน ให้หัวใจได้พักผ่อนบ้างนะ 🌌",
  "ค่อย ๆ หายใจเข้าและออก ไม่ต้องรีบร้อนอะไรแล้วนะ 🍃",
  "ขอให้ความเงียบสงบของค่ำคืนนี้ช่วยเติมพลังให้เธอ 💤",
  "บางเรื่องไม่จำเป็นต้องหาคำตอบในคืนนี้ พรุ่งนี้ค่อยว่ากันนะ ☁️",
  "ขอให้แสงดาวคืนนี้พาเธอเข้าสู่ความฝันที่แสนสงบ ⭐",
  "ปิดเสียงความวุ่นวายรอบตัว แล้วเปิดพื้นที่เล็ก ๆ ให้ตัวเองได้พักนะ 🌿",
  "คืนนี้ขอให้ไม่มีเรื่องกังวลมารบกวนการนอนของเธอเลยนะ 🕯️",
  "ไม่ต้องคิดถึงเรื่องที่ผ่านมา และไม่ต้องกังวลเรื่องที่ยังมาไม่ถึงนะ 🌙",
  "ขอให้ทุกนาทีของการพักผ่อนช่วยให้หัวใจเบาสบายขึ้นนะ 🤍",
  "คืนนี้พักให้เต็มอิ่มนะ โลกยังรอให้เธอออกไปพบเจอสิ่งสวยงามในวันพรุ่งนี้ 🌠",

  //น่ารักและเป็นกันเอง
  "ถึงเวลาปิดโหมดทำงาน แล้วเปิดโหมดนอนหลับได้แล้วนะ 🤭",
  "วันนี้ใช้พลังงานไปเยอะแล้ว อย่าลืมชาร์จแบตตัวเองด้วยนะ 🔋",
  "หมอนพร้อม ผ้าห่มพร้อม เหลือแค่เจ้าของเตียงไปนอนแล้วนะ 🛏️",
  "คืนนี้ขอให้ฝันหวานจนไม่อยากตื่นเลยนะ 🍭",
  "อย่ามัวแต่เล่นโทรศัพท์จนลืมนอนนะ เจ้าเด็กดื้อ 📱",
  "ส่งหมอนนุ่ม ๆ หนึ่งใบ พร้อมความฝันดี ๆ ไปให้เลยนะ 🧸",
  "ภารกิจของคืนนี้คือหลับให้สบาย และตื่นมาอย่างสดใส! 🌟",
  "ขอให้คืนนี้ไม่มีฝันร้าย มีแต่ขนมอร่อย ๆ อยู่ในความฝัน 🍰",
  "เตรียมตัวเข้าสู่โลกแห่งความฝันได้แล้วนะ นักพักผ่อนมืออาชีพ 💤",
  "คืนนี้ขอให้เธอหลับปุ๋ยเหมือนลูกแมวตัวน้อยเลยนะ 🐱"
];

const messageEl = document.querySelector("#message");
const dateLabel = document.querySelector("#dateLabel");
const messageButton = document.querySelector("#newMessage");
const messageStatus = document.querySelector("#messageStatus");
const audio = document.querySelector("#goodNightMusic");
const musicButton = document.querySelector("#musicBtn");
const musicIcon = document.querySelector("#musicIcon");
const musicText = document.querySelector("#musicText");
const musicStatus = document.querySelector("#musicStatus");
const trackTitle = document.querySelector("#trackTitle");
const prevTrackButton = document.querySelector("#prevTrack");
const nextTrackButton = document.querySelector("#nextTrack");
const volumeToggle = document.querySelector("#volumeToggle");
const volumeIcon = document.querySelector("#volumeIcon");
const volumePanel = document.querySelector("#volumePanel");
const volumeSlider = document.querySelector("#volumeSlider");
const volumeValue = document.querySelector("#volumeValue");
const themeButton = document.querySelector("#themeBtn");

// เพลง MP3 ในโฟลเดอร์ assets
const tracks = [
  { title: "Study Rainy Night", src: "assets/alex-morgan-lofi-study-rainy-night-568166.mp3" },
  { title: "Open Window", src: "assets/ornave-lofi-open-window-553420.mp3" },
  { title: "Midnight Club", src: "assets/alex-morgan-lofi-midnight-club-568164.mp3" }
];
let currentTrack = 0;
function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function readStorage(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function saveStorage(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function getMessageState() {
  const state = readStorage("goodNightMessageHistory", null);
  return state && state.date === todayKey() && Array.isArray(state.used) ? state : { date: todayKey(), used: [], current: null };
}
let messageState = getMessageState();
function pickUnusedMessage() {
  const available = messages.map((_,i)=>i).filter(i=>!messageState.used.includes(i));
  if (!available.length) {
    messageButton.disabled = true;
    messageButton.textContent = "วันนี้อ่านข้อความครบแล้ว 💗";
    messageStatus.textContent = "พรุ่งนี้กลับมาพบข้อความชุดใหม่นะ";
    return null;
  }
  const index = available[Math.floor(Math.random()*available.length)];
  messageState.used.push(index);
  messageState.current = index;
  saveStorage("goodNightMessageHistory", messageState);
  return messages[index];
}
function showMessage(message) {
  messageEl.animate([{opacity:0,transform:"translateY(5px)"},{opacity:1,transform:"translateY(0)"}],{duration:450});
  messageEl.textContent = message;
}
if (messageState.current === null || !messages[messageState.current]) {
  const first = pickUnusedMessage(); if (first) showMessage(first);
} else showMessage(messages[messageState.current]);
dateLabel.textContent = new Intl.DateTimeFormat("th-TH",{dateStyle:"long"}).format(new Date());
messageButton.addEventListener("click",()=>{ const next=pickUnusedMessage(); if(next){showMessage(next);makeHeart();} });

const starsLayer = document.querySelector("#stars");
for(let i=0;i<75;i++){
  const star=document.createElement("i"); star.className="star";
  star.style.left=`${Math.random()*100}%`; star.style.top=`${Math.random()*100}%`;
  star.style.setProperty("--duration",`${2+Math.random()*4}s`);
  star.style.animationDelay=`${Math.random()*4}s`; starsLayer.append(star);
}
function makeHeart(){
  const heart=document.createElement("span"); heart.className="heart";
  heart.textContent=["♡","♥","✨"][Math.floor(Math.random()*3)];
  heart.style.left=`${10+Math.random()*80}%`; heart.style.fontSize=`${16+Math.random()*18}px`;
  heart.style.setProperty("--duration",`${5+Math.random()*4}s`);
  heart.style.setProperty("--drift",`${Math.random()*100-50}px`);
  document.querySelector("#floaties").append(heart);
  heart.addEventListener("animationend",()=>heart.remove(),{once:true});
}
setInterval(makeHeart,1700);

// เปลี่ยนธีมและจดจำค่าที่เลือกไว้ในอุปกรณ์นี้
const themes=["night","lavender","ocean","dawn"];
const themeNames={night:"ท้องฟ้ายามค่ำคืน",lavender:"ม่วงละมุน",ocean:"ทะเลยามค่ำ",dawn:"แสงสนธยา"};
let themeIndex=Math.max(0,themes.indexOf(localStorage.getItem("goodNightTheme")||"night"));
function applyTheme(){document.body.dataset.theme=themes[themeIndex];themeButton.textContent=`เปลี่ยนบรรยากาศ · ${themeNames[themes[themeIndex]]} 🌌`;saveStorage("goodNightTheme",themes[themeIndex]);}
themeButton.addEventListener("click",()=>{themeIndex=(themeIndex+1)%themes.length;applyTheme();});
applyTheme();

// เครื่องเล่นเพลงแบบ audio-only
function setMusicPlaying(playing){
  musicButton.classList.toggle("playing",playing);
  musicButton.setAttribute("aria-pressed",String(playing));
  musicIcon.textContent=playing?"🎶":"🎵";
  musicText.textContent=playing?"ปิดเพลง":"เปิดเพลงพื้นหลัง";
}
function loadTrack(index,autoplay=false){
  currentTrack=(index+tracks.length)%tracks.length;
  audio.src=tracks[currentTrack].src; trackTitle.textContent=tracks[currentTrack].title;
  audio.load(); setMusicPlaying(false); musicStatus.textContent="พร้อมเปิดเพลง 🎵";
  if(autoplay) audio.play().then(()=>{setMusicPlaying(true);musicStatus.textContent="กำลังเล่นเพลง 🎶";}).catch(()=>{
    setMusicPlaying(false);musicStatus.textContent="เล่นเพลงไม่ได้ ตรวจสอบไฟล์ MP3 ในโฟลเดอร์ assets";
  });
}
musicButton.addEventListener("click",async()=>{
  if(audio.paused){
    try{
      if(audioContext && audioContext.state === "suspended") await audioContext.resume();
      await audio.play();
      setMusicPlaying(true);musicStatus.textContent="กำลังเล่นเพลง 🎶";
    }
    catch(error){setMusicPlaying(false);musicStatus.textContent="เล่นเพลงไม่ได้ ตรวจสอบไฟล์ MP3 ในโฟลเดอร์ assets";console.error(error);}
  }else{audio.pause();setMusicPlaying(false);musicStatus.textContent="หยุดเพลงแล้ว";}
});
prevTrackButton.addEventListener("click",()=>loadTrack(currentTrack-1,!audio.paused));
nextTrackButton.addEventListener("click",()=>loadTrack(currentTrack+1,!audio.paused));
audio.addEventListener("ended",()=>loadTrack(currentTrack+1,true));
audio.addEventListener("error",()=>{setMusicPlaying(false);musicStatus.textContent="ไม่พบไฟล์เพลง กรุณาตรวจสอบชื่อไฟล์และโฟลเดอร์ assets";});
// ใช้ Web Audio GainNode ควบคุมความดังโดยตรง และ fallback เป็น audio.volume
let audioContext = null;
let gainNode = null;
try {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (AudioContextClass) {
    audioContext = new AudioContextClass();
    gainNode = audioContext.createGain();
    const audioSource = audioContext.createMediaElementSource(audio);
    audioSource.connect(gainNode);
    gainNode.connect(audioContext.destination);
    audio.volume = 1;
  }
} catch (error) {
  console.warn("Web Audio volume control unavailable; using native volume.", error);
  audioContext = null;
  gainNode = null;
}

// ปรับระดับเสียงด้วยปุ่มและแถบเลื่อน พร้อมจดจำค่าที่เลือกไว้
let currentVolume = 0.25;
function setVolume(value) {
  const numericValue = Number(value);
  const volume = Math.round(Math.max(0, Math.min(1, numericValue)) * 20) / 20;
  currentVolume = volume;
  audio.muted = false;
  if (gainNode && audioContext) {
    gainNode.gain.setTargetAtTime(volume, audioContext.currentTime, 0.015);
  } else {
    audio.volume = volume;
  }
  volumeSlider.value = String(volume);
  volumeValue.textContent = `${Math.round(volume * 100)}%`;
  volumeIcon.textContent = volume === 0 ? "🔇" : volume < 0.5 ? "🔉" : "🔊";
  try { localStorage.setItem("goodNightVolume", String(volume)); } catch {}
}
let savedVolume = 0.25;
try {
  const storedVolume = localStorage.getItem("goodNightVolume");
  if (storedVolume !== null && Number.isFinite(Number(storedVolume))) savedVolume = Number(storedVolume);
} catch {}
setVolume(savedVolume);
volumeSlider.addEventListener("input", () => setVolume(volumeSlider.value));
volumeToggle.addEventListener("click", () => {
  const isOpen = !volumePanel.hidden;
  volumePanel.hidden = isOpen;
  volumeToggle.setAttribute("aria-expanded", String(!isOpen));
});
audio.addEventListener("volumechange", () => {
  if (!gainNode && Number.isFinite(audio.volume) && Math.abs(audio.volume - currentVolume) > 0.001) {
    currentVolume = audio.volume;
    volumeSlider.value = String(currentVolume);
    volumeValue.textContent = `${Math.round(currentVolume * 100)}%`;
    volumeIcon.textContent = currentVolume === 0 ? "🔇" : currentVolume < 0.5 ? "🔉" : "🔊";
  }
});
loadTrack(0);
