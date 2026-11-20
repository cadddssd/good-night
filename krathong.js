(()=>{
const cfg={url:"https://azsnbnfwkhntcagfkflp.supabase.co",key:"sb_publishable_4mPvBrN2JL87lfdxFN_TGQ_ZUMO-4V9"};
const $=s=>document.querySelector(s),form=$("#wishForm"),name=$("#wishName"),message=$("#wishMessage"),send=$("#floatButton"),status=$("#status"),list=$("#krathongList"),empty=$("#emptyState"),dialog=$("#wishDialog");
const items=new Map();let lastSent=0;
for(let i=0;i<95;i++){const star=document.createElement("i");star.style.left=Math.random()*100+"%";star.style.top=Math.random()*66+"%";star.style.opacity=.25+Math.random()*.7;$("#stars").append(star)}
message.addEventListener("input",()=>$("#charCount").textContent=message.value.length+"/240");
function showWish(item){$("#dialogMessage").textContent=item.message;$("#dialogAuthor").textContent=item.display_name?"— "+item.display_name:"— ไม่ระบุชื่อ";if(!dialog.open)dialog.showModal()}
$("#closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
function render(){
 list.replaceChildren();const all=[...items.values()].sort((a,b)=>new Date(a.created_at)-new Date(b.created_at)).slice(-36);
 all.forEach((item,index)=>{
  const boat=document.createElement("button");boat.type="button";boat.className="floating-krathong";boat.setAttribute("aria-label","อ่านคำอธิษฐานของ "+(item.display_name||"ผู้ไม่ระบุชื่อ"));
  const seed=String(item.id).split("").reduce((n,c)=>Math.imul(n,31)+c.charCodeAt(0)|0,7)>>>0;
  boat.dataset.color=["cream","pink","lavender"][seed%3];
  boat.style.setProperty("--left",(8+(seed%85))+"%");boat.style.setProperty("--bottom",(8+(seed%34))+"%");boat.style.setProperty("--duration",(5.5+(seed%40)/10)+"s");boat.style.setProperty("--delay",(-1*(seed%60)/10)+"s");
  boat.innerHTML='<span class="cloud-bread"></span><span class="bread-face"></span><span class="bread-smile"></span><span class="bread-cheek left"></span><span class="bread-cheek right"></span><span class="bread-star">✦</span>';
  boat.addEventListener("click",()=>showWish(item));list.append(boat);
 });
 empty.hidden=all.length>0;
}
function add(item){if(!item?.id)return;items.set(String(item.id),item);render()}
async function init(){
 if(!window.supabase?.createClient){status.textContent="โหลดระบบไม่สำเร็จ กรุณารีเฟรชหน้านี้";return}
 const db=window.supabase.createClient(cfg.url,cfg.key);
 try{
  const {data,error}=await db.from("goodnight_krathongs").select("id,message,display_name,created_at").order("created_at",{ascending:false}).limit(100);
  if(error)throw error;(data||[]).reverse().forEach(add);
  status.textContent="สายน้ำพร้อมแล้ว มาแบ่งปันคำอธิษฐานดี ๆ ให้กันนะ 🪷";
 }catch(error){console.error(error);status.textContent="ยังเชื่อมต่อสายน้ำไม่ได้ กรุณาตั้งค่าตารางคำอธิษฐานใน Supabase ก่อน"}
 db.channel("goodnight-krathong-river").on("postgres_changes",{event:"INSERT",schema:"public",table:"goodnight_krathongs"},payload=>{add(payload.new);status.textContent="มีกระทงแห่งคำอธิษฐานลอยมาถึงแล้ว ✨"}).subscribe();
 form.addEventListener("submit",async event=>{
  event.preventDefault();const text=message.value.trim(),author=name.value.trim();
  if(!text){message.focus();return}
  if(text.length>240||author.length>30){status.textContent="คำอธิษฐานไม่เกิน 240 ตัวอักษร และชื่อไม่เกิน 30 ตัวอักษรนะ";return}
  if(Date.now()-lastSent<10000){status.textContent="ค่อย ๆ ส่งคำอธิษฐานนะ รออีกสักครู่ 🪷";return}
  send.disabled=true;send.innerHTML="<span>🕯️</span> กำลังลอยกระทง...";
  try{
   const {data,error}=await db.from("goodnight_krathongs").insert({message:text,display_name:author||null}).select("id,message,display_name,created_at").single();
   if(error)throw error;lastSent=Date.now();add(data);message.value="";name.value="";$("#charCount").textContent="0/240";status.textContent="ลอยกระทงสำเร็จแล้ว ขอให้คำอธิษฐานนี้พาคุณไปพบวันที่ดีนะ 💛";
  }catch(error){console.error(error);status.textContent="ลอยกระทงไม่สำเร็จ กรุณาลองใหม่อีกครั้ง"}
  finally{send.disabled=false;send.innerHTML="<span>☁️</span> ลอยขนมปังก้อนเมฆ"}
 });
}
init();
})();