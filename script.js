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
const audio = document.querySelector("#goodNightMusic");
const musicButton = document.querySelector("#musicBtn");
const musicIcon = document.querySelector("#musicIcon");
const musicText = document.querySelector("#musicText");
const musicStatus = document.querySelector("#musicStatus");

function todayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

// Keep a shuffled message bag locally: one daily pick, with no repeats until all are used.
function dailyMessage() {
  const key = "goodNightMessageCycle";
  let state;
  try { state = JSON.parse(localStorage.getItem(key) || "null"); } catch { state = null; }
  if (!state || !Array.isArray(state.remaining) || !Array.isArray(state.order)) {
    state = { remaining: [], order: [], today: "", message: "" };
  }
  if (state.today !== todayKey()) {
    if (state.remaining.length === 0) {
      state.remaining = messages.map((_, index) => index);
      for (let i = state.remaining.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [state.remaining[i], state.remaining[j]] = [state.remaining[j], state.remaining[i]];
      }
    }
    const index = state.remaining.pop();
    state.today = todayKey();
    state.message = messages[index];
    state.order = state.remaining;
    try { localStorage.setItem(key, JSON.stringify(state)); } catch { /* Private browsing may block storage. */ }
  }
  return state.message || messages[0];
}

function showMessage(message) {
  messageEl.animate([{ opacity: 0, transform: "translateY(5px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 450 });
  messageEl.textContent = message;
}

showMessage(dailyMessage());
dateLabel.textContent = new Intl.DateTimeFormat("th-TH", { dateStyle: "long" }).format(new Date());

messageButton.addEventListener("click", () => {
  const remaining = messages.filter((item) => item !== messageEl.textContent);
  const next = remaining[Math.floor(Math.random() * remaining.length)];
  showMessage(next || dailyMessage());
  makeHeart();
});

const starsLayer = document.querySelector("#stars");
for (let i = 0; i < 75; i += 1) {
  const star = document.createElement("i");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.setProperty("--duration", `${2 + Math.random() * 4}s`);
  star.style.animationDelay = `${Math.random() * 4}s`;
  starsLayer.append(star);
}

function makeHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["♡", "♥", "✨"][Math.floor(Math.random() * 3)];
  heart.style.left = `${10 + Math.random() * 80}%`;
  heart.style.fontSize = `${16 + Math.random() * 18}px`;
  heart.style.setProperty("--duration", `${5 + Math.random() * 4}s`);
  heart.style.setProperty("--drift", `${Math.random() * 100 - 50}px`);
  document.querySelector("#floaties").append(heart);
  heart.addEventListener("animationend", () => heart.remove(), { once: true });
}
setInterval(makeHeart, 1700);

function setMusicPlaying(playing) {
  musicButton.classList.toggle("playing", playing);
  musicButton.setAttribute("aria-pressed", String(playing));
  musicIcon.textContent = playing ? "🎶" : "🎵";
  musicText.textContent = playing ? "ปิดเพลง" : "เปิดเพลงพื้นหลัง";
}

musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      setMusicPlaying(true);
      musicStatus.textContent = "กำลังเล่นเพลงพื้นหลัง 🎵";
    } catch (error) {
      setMusicPlaying(false);
      musicStatus.textContent = "ยังไม่พบไฟล์เพลง — ดูวิธีเพิ่มไฟล์ในคำแนะนำ";
      console.error("Audio playback failed:", error);
    }
  } else {
    audio.pause();
    setMusicPlaying(false);
    musicStatus.textContent = "หยุดเพลงแล้ว";
  }
});

audio.volume = 0.25;
audio.addEventListener("error", () => {
  musicStatus.textContent = "ยังไม่พบไฟล์ assets/good-night.mp3";
});

