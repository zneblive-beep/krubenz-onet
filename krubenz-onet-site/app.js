(function(){
var T=TOPICS, $=function(s){return document.querySelector(s)};
var ALL=SETS.concat(PRACTICE);
var esc=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};
var yl=function(y){return y==="NEW"?"ข้อฝึกใหม่":"O-NET ปี "+y};

/* ---------- icons ---------- */
var ICON={
read:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M100 50c-20-14-48-16-72-10v110c24-6 52-4 72 10 20-14 48-16 72-10V40c-24-6-52-4-72 10z"/><path d="M100 50v110"/><path d="M46 70h34M46 90h34M46 110h26M120 70h34M120 90h34M120 110h26"/><circle cx="150" cy="150" r="22" fill="currentColor" opacity=".25"/><path d="M166 166l18 18"/></svg>',
chat:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round"><path d="M24 40h104a12 12 0 0112 12v52a12 12 0 01-12 12H70l-30 26v-26H24a12 12 0 01-12-12V52a12 12 0 0112-12z"/><path d="M152 76h24a12 12 0 0112 12v48a12 12 0 01-12 12h-12v24l-28-24h-40a12 12 0 01-12-12v-8"/><circle cx="48" cy="78" r="6" fill="currentColor"/><circle cx="76" cy="78" r="6" fill="currentColor"/><circle cx="104" cy="78" r="6" fill="currentColor"/></svg>',
pen:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="26" width="110" height="148" rx="10"/><path d="M52 60h66M52 84h66M52 108h40"/><path d="M168 58l14 14-62 62-20 6 6-20z" fill="currentColor" fill-opacity=".2"/></svg>',
globe:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="6"><circle cx="100" cy="100" r="72"/><ellipse cx="100" cy="100" rx="32" ry="72"/><path d="M28 100h144M40 62h120M40 138h120"/><path d="M150 30l10 20 22 3-16 15 4 22-20-10-20 10 4-22-16-15 22-3z" fill="currentColor" fill-opacity=".35" stroke-linejoin="round"/></svg>',
swap:'<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="40" width="70" height="50" rx="10"/><rect x="110" y="110" width="70" height="50" rx="10"/><text x="55" y="76" font-size="30" text-anchor="middle" fill="currentColor" stroke="none" font-family="Prompt">ก</text><text x="145" y="146" font-size="30" text-anchor="middle" fill="currentColor" stroke="none" font-family="Literata">Aa</text><path d="M110 64h50a12 12 0 0112 12v20M160 84l12 12 12-12M90 136H40a12 12 0 01-12-12v-20M40 116l-12-12-12 12"/></svg>'
};
var COVERART=(function(){
 var F='font-family="IBM Plex Sans Thai, Prompt, sans-serif"',P='font-family="Prompt, sans-serif"',L='font-family="Literata, Georgia, serif"';
 var lines="";[0,1,2,3,4,5,6,7,8].forEach(function(i){var w=[250,232,246,210,240,226,180,238,150][i];lines+='<rect x="96" y="'+(206+i*22)+'" width="'+w+'" height="8" rx="4" fill="#cfd7e6"/>'});
 var opts="";["achieve","arrange","announce","allow"].forEach(function(t,i){var on=i===0;opts+='<rect x="392" y="'+(262+i*44)+'" width="222" height="34" rx="9" fill="'+(on?"#eaf1ff":"#f5f7fb")+'" stroke="'+(on?"#2f6fd6":"#dfe5ef")+'" stroke-width="2"/><circle cx="412" cy="'+(279+i*44)+'" r="8" fill="#fff" stroke="'+(on?"#2f6fd6":"#9aa6bf")+'" stroke-width="3"/>'+(on?'<circle cx="412" cy="'+(279+i*44)+'" r="4" fill="#2f6fd6"/>':'')+'<text x="430" y="'+(285+i*44)+'" '+L+' font-size="16" fill="#16213a">'+(i+1)+'. '+t+'</text>'});
 var pal="";for(var i=0;i<32;i++){var c=i<13?"#2f6fd6":(i===13?"#fff":"#fff");pal+='<rect x="'+(634+(i%4)*12.5)+'" y="'+(206+Math.floor(i/4)*14)+'" width="10" height="11" rx="3" fill="'+c+'" stroke="'+(i===13?"#f2b230":(i<13?"#2f6fd6":"#d6dde9"))+'" stroke-width="'+(i===13?2:1)+'"/>'}
 return '<svg viewBox="0 0 760 760" fill="none" role="img" aria-label="หน้าจอห้องสอบจำลอง Digital Testing">'+
 '<defs><linearGradient id="cvg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a59"/><stop offset="1" stop-color="#f2b230"/></linearGradient><filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity=".35"/></filter></defs>'+
 /* monitor */
 '<g filter="url(#sh)"><rect x="60" y="120" width="640" height="420" rx="22" fill="#0e1628"/><rect x="74" y="134" width="612" height="392" rx="12" fill="#eef2f8"/></g>'+
 '<rect x="74" y="134" width="612" height="50" rx="12" fill="#16213a"/><rect x="74" y="160" width="612" height="24" fill="#16213a"/>'+
 '<rect x="90" y="146" width="26" height="26" rx="8" fill="url(#cvg)"/><text x="126" y="166" '+P+' font-size="16" font-weight="700" fill="#fff" letter-spacing="2">KRUBENZ</text><text x="234" y="166" '+F+' font-size="13" fill="#9fb0d4">Mock O-NET · English 93</text>'+
 '<rect x="588" y="144" width="84" height="30" rx="8" fill="#0b1222"/><text x="630" y="165" '+P+' font-size="16" fill="#fff" text-anchor="middle">⏱ 87:42</text>'+
 '<rect x="86" y="194" width="270" height="250" rx="10" fill="#fff"/>'+lines+
 '<rect x="96" y="206" width="54" height="8" rx="4" fill="#f2b230"/>'+
 '<rect x="370" y="194" width="256" height="250" rx="10" fill="#fff"/><text x="384" y="222" '+P+' font-size="17" font-weight="600" fill="#16213a">ข้อ 24</text><text x="436" y="222" '+F+' font-size="12" fill="#5d6882">จาก 32</text><rect x="384" y="234" width="200" height="8" rx="4" fill="#cfd7e6"/>'+opts+
 '<rect x="630" y="194" width="46" height="250" rx="10" fill="#fff" opacity="0"/>'+pal+
 '<rect x="86" y="456" width="590" height="58" rx="10" fill="#fff"/><rect x="230" y="469" width="88" height="32" rx="9" fill="#e7ebf3"/><rect x="328" y="469" width="96" height="32" rx="9" fill="#fff1d6"/><rect x="434" y="469" width="88" height="32" rx="9" fill="#1f9a6a"/><text x="478" y="490" '+F+' font-size="13" fill="#fff" text-anchor="middle">ส่งคำตอบ</text><text x="376" y="490" '+F+' font-size="13" fill="#8a4b00" text-anchor="middle">⚑ ปักธง</text><text x="274" y="490" '+F+' font-size="13" fill="#16213a" text-anchor="middle">◀ ก่อนหน้า</text>'+
 '<path d="M330 540h100l14 60H316z" fill="#1b2540"/><rect x="270" y="598" width="220" height="14" rx="7" fill="#24304f"/>'+
 /* floating card: verified key */
 '<g filter="url(#sh)" transform="translate(0 30)"><rect width="270" height="84" rx="18" fill="#fff"/><circle cx="40" cy="42" r="22" fill="#1f9a6a"/><path d="M29 42l8 8 15-16" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><text x="74" y="36" '+P+' font-size="22" font-weight="700" fill="#16213a">160/160 ข้อ</text><text x="74" y="62" '+F+' font-size="15" fill="#5d6882">เฉลยตรงกับ สทศ.</text></g>'+
 /* floating card: blueprint */
 '<g filter="url(#sh)" transform="translate(470 0)"><rect width="270" height="96" rx="18" fill="#fff"/><text x="20" y="34" '+F+' font-size="14" fill="#5d6882">ผังสอบ 2569 · 32 ข้อ</text>'+
 [["#2f6fd6",12],["#c2410c",7],["#7a4bd1",7],["#9a6200",2],["#157a52",4]].map(function(c,i,arr){var x=20;for(var j=0;j<i;j++)x+=arr[j][1]*7.2;return '<rect x="'+x+'" y="50" width="'+(c[1]*7.2-3)+'" height="26" rx="5" fill="'+c[0]+'"/>'}).join("")+'</g>'+
 /* floating card: strand result */
 '<g filter="url(#sh)" transform="translate(480 600)"><rect width="260" height="130" rx="18" fill="#fff"/><text x="20" y="34" '+F+' font-size="14" fill="#5d6882">ผลรายสาระ</text>'+
 '<text x="20" y="66" '+F+' font-size="14" fill="#16213a">สาระที่ 1</text><rect x="90" y="56" width="140" height="12" rx="6" fill="#e7ebf3"/><rect x="90" y="56" width="112" height="12" rx="6" fill="#2f6fd6"/>'+
 '<text x="20" y="100" '+F+' font-size="14" fill="#16213a">สาระที่ 2</text><rect x="90" y="90" width="140" height="12" rx="6" fill="#e7ebf3"/><rect x="90" y="90" width="94" height="12" rx="6" fill="#9a6200"/></g>'+
 /* floating badge: time */
 '<g filter="url(#sh)" transform="translate(20 610)"><rect width="230" height="96" rx="18" fill="url(#cvg)"/><text x="22" y="48" '+P+' font-size="34" font-weight="700" fill="#16213a">90 นาที</text><text x="22" y="76" '+F+' font-size="15" fill="#16213a">Digital Testing · 1–8 ก.พ. 70</text></g>'+
 '</svg>'})();

function LOGO(sz){return '<svg class="logo" width="'+sz+'" height="'+sz+'" viewBox="0 0 100 100" aria-label="Krubenz"><defs><linearGradient id="kbg'+sz+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff7a59"/><stop offset="1" stop-color="#f2b230"/></linearGradient></defs><rect x="4" y="4" width="92" height="92" rx="26" fill="url(#kbg'+sz+')"/><path d="M32 24v52M32 52l28-28M42 44l22 32" stroke="#16213a" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M78 16l3.5 8 8 3.5-8 3.5-3.5 8-3.5-8-8-3.5 8-3.5z" fill="#fff"/></svg>'}
function MASCOT(sz,mood,anim,prop){var hap=mood==="happy",hair="#1c1816",skin="#f3cfae",kh="#bfae92",khd="#a8977b",o='';
 o+='<ellipse cx="60" cy="116" rx="32" ry="4.5" fill="#000" opacity=".12"/>';
 /* khaki uniform */
 o+='<path d="M24 117Q25 92 44 88L60 92L76 88Q95 92 96 117Z" fill="'+kh+'"/>';
 o+='<path d="M44 88L60 92L76 88L71 99L60 94L49 99Z" fill="'+khd+'"/><path d="M49 86L60 95L71 86L68 97L60 92L52 97Z" fill="#cfbfa4"/>';
 o+='<path d="M60 95V117" stroke="'+khd+'" stroke-width="1.4"/><circle cx="60" cy="104" r="1.2" fill="#8d7c62"/><circle cx="60" cy="112" r="1.2" fill="#8d7c62"/>';
 o+='<path d="M27 96L43 90" stroke="#d9a520" stroke-width="5" stroke-linecap="round"/><path d="M93 96L77 90" stroke="#d9a520" stroke-width="5" stroke-linecap="round"/>';
 o+='<circle cx="52" cy="95" r="1.8" fill="#d9a520"/><circle cx="68" cy="95" r="1.8" fill="#d9a520"/>';
 o+='<rect x="38" y="101" width="14" height="4" rx="1" fill="#2a2a2e"/><path d="M40 103H50" stroke="#c9ccd2" stroke-width="1"/>';
 o+='<rect x="68" y="100" width="14" height="2" fill="#f2c94c"/><rect x="68" y="102" width="14" height="2" fill="#7b4fb0"/><rect x="68" y="104" width="14" height="1.6" fill="#fff"/>';
 o+='<path d="M37 108H52M68 108H83" stroke="'+khd+'" stroke-width="1.2"/>';
 /* neck */
 o+='<rect x="53" y="78" width="14" height="12" rx="5" fill="'+skin+'"/>';
 /* ears + round face */
 o+='<ellipse cx="31" cy="60" rx="5" ry="7.5" fill="'+skin+'"/><ellipse cx="89" cy="60" rx="5" ry="7.5" fill="'+skin+'"/>';
 o+='<path d="M60 30C79 30 89 43 89 59C89 76 76 86 60 86C44 86 31 76 31 59C31 43 41 30 60 30Z" fill="'+skin+'"/>';
 /* short textured dark hair */
 o+='<path d="M31 56C29 36 42 22 60 22C78 22 91 34 89 56C86 48 84 44 80 42C74 45 66 44 60 41C53 45 44 46 38 43C35 46 33 50 31 56Z" fill="'+hair+'"/>';
 o+='<path d="M40 27q4 -6 9 -2q4 -6 10 -2q5 -5 10 0q6 -4 9 3" stroke="'+hair+'" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
 o+='<path d="M46 31q4 -2 7 1M60 29q4 -2 7 1M71 32q3 -1 5 2" stroke="#4a403a" stroke-width="1.5" fill="none" stroke-linecap="round"/>';
 /* brows */
 o+='<path d="M40 50Q46 47.5 53 49M67 49Q74 47.5 80 50" stroke="'+hair+'" stroke-width="3" fill="none" stroke-linecap="round"/>';
 /* eyes */
 o+='<g class="eyes">'+(hap?'<path d="M42 59Q46.5 54.5 51 59M69 59Q73.5 54.5 78 59" stroke="#16213a" stroke-width="2.8" fill="none" stroke-linecap="round"/>':'<ellipse cx="46.5" cy="58.5" rx="3.2" ry="3.9" fill="#16213a"/><ellipse cx="73.5" cy="58.5" rx="3.2" ry="3.9" fill="#16213a"/><circle cx="47.8" cy="57" r="1.2" fill="#fff"/><circle cx="74.8" cy="57" r="1.2" fill="#fff"/>')+'</g>';
 /* thin-rim glasses */
 o+='<rect x="36" y="51.5" width="21" height="15" rx="5.5" fill="#fff" fill-opacity=".22" stroke="#7d848f" stroke-width="2"/><rect x="63" y="51.5" width="21" height="15" rx="5.5" fill="#fff" fill-opacity=".22" stroke="#7d848f" stroke-width="2"/>';
 o+='<path d="M57 56Q60 54 63 56M36 55L31.5 53.5M84 55L88.5 53.5" stroke="#7d848f" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M39 55l3 -2M66 55l3 -2" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity=".85"/>';
 /* nose, blush, mouth */
 o+='<path d="M59 64Q60.5 68 58 69" stroke="#d9a789" stroke-width="2" fill="none" stroke-linecap="round"/>';
 o+='<ellipse cx="39" cy="71" rx="5" ry="3" fill="#ff7f98" opacity=".42"/><ellipse cx="81" cy="71" rx="5" ry="3" fill="#ff7f98" opacity=".42"/>';
 o+=hap?'<path d="M51 73Q60 82 69 73Z" fill="#b8484c" stroke="#16213a" stroke-width="1.8" stroke-linejoin="round"/><path d="M54 74.5H66" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>':'<path d="M52 74Q60 79 68 74" stroke="#16213a" stroke-width="2.4" fill="none" stroke-linecap="round"/>';
 if(prop){var arm=function(x,y){return '<path d="M90 100Q98 104 '+x+' '+y+'" stroke="'+kh+'" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="'+x+'" cy="'+y+'" r="5.5" fill="'+skin+'"/>'};
  if(prop==="book")o+='<g transform="rotate(-6 60 102)"><path d="M34 92Q47 88 60 94Q73 88 86 92V114Q73 110 60 116Q47 110 34 114Z" fill="#2a62c4"/><path d="M37 94Q48 91 59 96V112Q48 108 37 111Z" fill="#fff"/><path d="M61 96Q72 91 83 94V111Q72 108 61 112Z" fill="#fff"/><path d="M41 99H55M41 103H54M41 107H52M65 99H79M65 103H78M65 107H76" stroke="#9fb6e6" stroke-width="1.4"/></g><circle cx="36" cy="104" r="5.5" fill="'+skin+'"/><circle cx="84" cy="104" r="5.5" fill="'+skin+'"/>';
  if(prop==="chat")o+='<g><path d="M86 8H116Q120 8 120 12V32Q120 36 116 36H100L92 43V36H86Q82 36 82 32V12Q82 8 86 8Z" fill="#c2410c"/><text x="101" y="27" text-anchor="middle" font-family="Mitr, Prompt, sans-serif" font-size="13" font-weight="600" fill="#fff">Hi!</text></g>'+arm(100,80);
  if(prop==="pen")o+='<g transform="rotate(-38 104 92)"><rect x="98" y="66" width="12" height="40" rx="2" fill="#f2b230"/><rect x="98" y="62" width="12" height="7" rx="2" fill="#ff8fab"/><rect x="98" y="68" width="12" height="3" fill="#c9ccd2"/><path d="M98 106L104 118L110 106Z" fill="#f6d3b5"/><path d="M102.5 114L104 118L105.5 114Z" fill="#16213a"/><path d="M101 74V102" stroke="#7a4bd1" stroke-width="2"/></g>'+arm(96,98);
  if(prop==="globe")o+='<g><rect x="101" y="109" width="16" height="4" rx="2" fill="#9a6200"/><path d="M109 109V103" stroke="#9a6200" stroke-width="3"/><circle cx="109" cy="88" r="15" fill="#f6c86a" stroke="#9a6200" stroke-width="2.5"/><ellipse cx="109" cy="88" rx="6" ry="15" fill="none" stroke="#9a6200" stroke-width="1.8"/><path d="M94 88H124M97 80H121M97 96H121" stroke="#9a6200" stroke-width="1.6"/></g>'+arm(96,98);
  if(prop==="swap")o+='<g transform="rotate(6 102 92)"><rect x="82" y="74" width="38" height="30" rx="6" fill="#157a52"/><text x="101" y="94" text-anchor="middle" font-family="Mitr, Prompt, sans-serif" font-size="14" font-weight="600" fill="#fff">ก⇄A</text><path d="M101 104V114" stroke="#8d7c62" stroke-width="3"/></g>'+arm(94,100)}
 if(anim==="wave")o+='<g class="arm"><path d="M92 100Q102 92 104 76" stroke="'+kh+'" stroke-width="9" stroke-linecap="round" fill="none"/><circle cx="104" cy="72" r="6.5" fill="'+skin+'"/></g>';
 return '<svg class="mascot'+(anim?" m-"+anim:"")+'" width="'+sz+'" height="'+sz+'" viewBox="'+(prop?"-6 0 132 120":"0 0 120 120")+'" aria-label="ครูเบนซ์ มาสคอต KRUBENZ" role="img">'+o+'</svg>'}
var CHEER=["เก่งมาก! 🎉","เยี่ยมไปเลย ✨","ถูกต้อง! 💯","สุดยอด! 🌟","ใช่เลย! 🥳"],TRY=["เกือบแล้ว ลองอีกนิด 💪","ยังไม่ใช่ ลองดูอีกที 🙂","อีกนิดเดียว สู้ ๆ 🌱"];
function pickStr(arr,k){var h=0;for(var i=0;i<k.length;i++)h=(h*31+k.charCodeAt(i))>>>0;return arr[h%arr.length]}
var REDUCE=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
function confetti(x,y){if(REDUCE)return;var fx=document.getElementById("fx"),cols=["#ff7a59","#f2b230","#2f6fd6","#157a52","#ff6f91","#7a4bd1"];
 for(var i=0;i<28;i++){var d=document.createElement("i");var ang=Math.random()*Math.PI*2,dist=60+Math.random()*120;d.style.left=x+"px";d.style.top=y+"px";d.style.background=cols[i%cols.length];
  d.style.setProperty("--dx",Math.cos(ang)*dist+"px");d.style.setProperty("--dy",(Math.sin(ang)*dist-60)+"px");d.style.setProperty("--r",(Math.random()*720-360)+"deg");fx.appendChild(d);setTimeout((function(n){return function(){n.remove()}})(d),1100)}}
function toast(t){var el=document.getElementById("toast");el.textContent=t;el.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(function(){el.classList.remove("on")},2200)}
var SND={ac:null};
function sfx(kind){if(!PREF.sound||CBT.on)return;try{var C=window.AudioContext||window.webkitAudioContext;if(!C)return;SND.ac=SND.ac||new C();var ac=SND.ac,t=ac.currentTime;
 var tone=function(f,st,du,type,vol){var o=ac.createOscillator(),g=ac.createGain();o.type=type||"sine";o.frequency.setValueAtTime(f,t+st);o.connect(g);g.connect(ac.destination);g.gain.setValueAtTime(0.0001,t+st);g.gain.exponentialRampToValueAtTime(vol||.18,t+st+.015);g.gain.exponentialRampToValueAtTime(0.0001,t+st+du);o.start(t+st);o.stop(t+st+du+.02)};
 if(kind==="ok"){tone(1046.5,0,.18,"triangle",.2);tone(1318.5,.09,.32,"triangle",.2)}
 else if(kind==="bad"){tone(220,0,.18,"square",.05);tone(196,.12,.22,"square",.05)}
 else if(kind==="pop"){tone(660,0,.08,"sine",.15);tone(990,.05,.12,"sine",.12)}
 else if(kind==="tick"){tone(1500,0,.03,"square",.04)}
 else if(kind==="win"){[523.3,659.3,784,1046.5].forEach(function(f,i){tone(f,i*.11,.3,"triangle",.17)})}}catch(e){}}
var TTS={};
function speak(t,btn){if(!("speechSynthesis" in window)){toast("เบราว์เซอร์นี้ยังไม่รองรับเสียงอ่าน ลองใช้ Chrome หรือ Safari");return}
 var ss=window.speechSynthesis;if(ss.speaking||ss.pending){ss.cancel();if(TTS.btn){TTS.btn.classList.remove("playing");var was=TTS.btn===btn;TTS.btn=null;if(was)return}}
 var u=new SpeechSynthesisUtterance(t);u.lang="en-US";u.rate=0.9;var vs=ss.getVoices().filter(function(v){return /^en[-_](US|GB)/i.test(v.lang)});if(vs.length)u.voice=vs[0];
 if(btn){btn.classList.add("playing");TTS.btn=btn;u.onend=u.onerror=function(){btn.classList.remove("playing");if(TTS.btn===btn)TTS.btn=null}}
 ss.speak(u)}
function stopSpeak(){try{if(window.speechSynthesis)speechSynthesis.cancel()}catch(e){}TTS.btn=null}
function passSpeech(s){return s.pass.replace(/___\((\d+)\)___/g," blank ").replace(/^(NEWS REPORT|ALGAE FACT SHEET)$/gm,"$1.").replace(/\n+/g,". ")}
var VERSION="v1.9",ASOF="8 พ.ย. 2569",FB="Ratchanon Udomlap";
var PROP={T11:"book",T12:"chat",T13:"pen",T21:"globe",T22:"swap"};
var DARK={cover:1,topic:1,strand:1,end:1,pintro:1,cbtl:1};

/* ---------- drawn fictional faces (replace celebrity caricatures) ---------- */
function faceSVG(p,n){var sk=p.skin||"#f3d2b8",hc=p.hc||"#2b2420",ln="#3a2a24",o='';
 var H={
  longwavy:'<path d="M48 120C38 60 78 28 120 28S202 60 192 120C204 150 186 172 200 202C208 224 190 244 172 246H68C50 244 32 224 40 202C54 172 36 150 48 120Z" fill="'+hc+'"/><path d="M52 150q10 20 0 40M188 150q-10 20 0 40M60 205q8 15 -2 30M180 205q-8 15 2 30" stroke="rgba(255,255,255,.18)" stroke-width="4" fill="none"/>',
  longstraight:'<path d="M46 110C46 50 84 28 120 28S194 50 194 110L198 246H42Z" fill="'+hc+'"/>',
  shoulder:'<path d="M50 115C48 54 84 30 120 30S192 54 190 115L194 196C178 202 166 196 160 186H80C74 196 62 202 46 196Z" fill="'+hc+'"/>',
  bob:'<path d="M50 125C46 56 84 30 120 30S194 56 190 125L194 168C170 176 160 168 156 160H84C80 168 70 176 46 168Z" fill="'+hc+'"/>',
  afro:(function(){var s='';for(var a=0;a<360;a+=24){var r=Math.PI*a/180;s+='<circle cx="'+(120+92*Math.cos(r)).toFixed(1)+'" cy="'+(98+78*Math.sin(r)).toFixed(1)+'" r="30" fill="'+hc+'"/>'}return s+'<ellipse cx="120" cy="98" rx="92" ry="78" fill="'+hc+'"/>'})(),
  curlylong:(function(){var s='<path d="M50 118C44 56 84 30 120 30S196 56 190 118L196 238H44Z" fill="'+hc+'"/>';for(var y=60;y<=232;y+=22){var d=(y%44)?6:0;s+='<circle cx="'+(46-d)+'" cy="'+y+'" r="15" fill="'+hc+'"/><circle cx="'+(194+d)+'" cy="'+y+'" r="15" fill="'+hc+'"/>'}return s})(),
  wild:'<path d="M40 130L20 90L52 84L34 44L74 54L76 14L108 40L126 6L144 40L178 16L174 56L214 46L192 86L222 96L198 128L222 170L190 168L204 214L168 196L170 240H70L72 196L36 214L50 168L18 170Z" fill="'+hc+'"/>'
 };
 var FACE={
  ovalpoint:'<path d="M120 54C158 54 176 86 174 124C172 162 150 204 120 216C90 204 68 162 66 124C64 86 82 54 120 54Z" fill="'+sk+'" stroke="'+ln+'" stroke-width="2.5"/>',
  oval:'<ellipse cx="120" cy="130" rx="55" ry="76" fill="'+sk+'" stroke="'+ln+'" stroke-width="2.5"/>',
  square:'<path d="M64 80Q64 52 120 52T176 80L176 164L152 202H88L64 164Z" fill="'+sk+'" stroke="'+ln+'" stroke-width="2.5" stroke-linejoin="round"/>',
  round:'<circle cx="120" cy="132" r="68" fill="'+sk+'" stroke="'+ln+'" stroke-width="2.5"/>'
 };
 o+=H[p.hair]||'';
 o+='<path d="M54 250Q64 214 120 210Q176 214 186 250Z" fill="'+(p.shirt||"#2f6fd6")+'"/><rect x="106" y="190" width="28" height="26" fill="'+sk+'"/>';
 o+='<ellipse cx="64" cy="132" rx="8" ry="13" fill="'+sk+'" stroke="'+ln+'" stroke-width="2"/><ellipse cx="176" cy="132" rx="8" ry="13" fill="'+sk+'" stroke="'+ln+'" stroke-width="2"/>';
 o+=FACE[p.face];
 if(p.hair!=="afro"&&p.hair!=="wild")o+='<path d="M60 104C58 56 90 38 120 38S182 56 180 104C162 84 142 76 120 78C98 76 78 84 60 104Z" fill="'+hc+'"/>';
 else o+='<path d="M62 100C70 70 96 60 120 62S170 70 178 100C160 86 140 82 120 84C100 82 80 86 62 100Z" fill="'+hc+'"/>';
 if(p.cheek)o+='<path d="M80 146Q90 136 100 142M160 146Q150 136 140 142" stroke="#c98d78" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
 var bw=p.brows==="thick"?7:2.5,bl=p.brows==="thin"?20:14,by=p.brows==="thick"?96:99;
 o+='<path d="M'+(98-bl)+' 104Q98 '+by+' '+(98+bl-4)+' 103M'+(142-bl+4)+' 103Q142 '+by+' '+(142+bl)+' 104" stroke="'+(p.bc||hc)+'" stroke-width="'+bw+'" fill="none" stroke-linecap="round"/>';
 var er=p.eyes==="big"?9:6;
 o+='<ellipse cx="98" cy="120" rx="'+(er+3)+'" ry="'+er+'" fill="#fff" stroke="'+ln+'" stroke-width="1.5"/><ellipse cx="142" cy="120" rx="'+(er+3)+'" ry="'+er+'" fill="#fff" stroke="'+ln+'" stroke-width="1.5"/><circle cx="98" cy="120" r="'+(er-3)+'" fill="#2a1d18"/><circle cx="142" cy="120" r="'+(er-3)+'" fill="#2a1d18"/>';
 if(p.eyes==="deep")o+='<path d="M84 114Q98 106 112 114M128 114Q142 106 156 114" stroke="#b07a66" stroke-width="3" fill="none"/>';
 o+=p.nose==="up"?'<path d="M120 124L114 146Q120 140 126 146" stroke="'+ln+'" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="116" cy="146" r="1.8" fill="'+ln+'"/><circle cx="124" cy="146" r="1.8" fill="'+ln+'"/>':'<path d="M120 124L115 150H125" stroke="'+ln+'" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
 if(p.mous)o+='<path d="M98 162Q120 150 142 162Q120 158 98 162Z" fill="'+hc+'"/>';
 if(p.mouth==="thin")o+='<path d="M104 172Q120 176 136 172" stroke="#b5544f" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
 else if(p.mouth==="large")o+='<path d="M100 170Q110 162 120 166Q130 162 140 170Q120 186 100 170Z" fill="#c25b5b" stroke="#8e3c3c" stroke-width="1.5"/>';
 else if(p.mouth==="smile")o+='<path d="M92 164Q120 198 148 164Z" fill="#fff" stroke="#8e3c3c" stroke-width="3" stroke-linejoin="round"/>';
 if(p.beard)o+='<path d="M72 156Q76 210 120 214Q164 210 168 156Q160 184 140 182Q120 196 100 182Q80 184 72 156Z" fill="'+hc+'" opacity=".92"/>';
 return '<div><h5>ภาพ '+n+'</h5><svg viewBox="0 0 240 250" width="100%" role="img" aria-label="ภาพตัวเลือก '+n+'">'+o+'</svg></div>'}
function faceOpts(fs){return fs.map(function(p,i){return faceSVG(p,i+1)}).join("")}

/* ---------- build slide list ---------- */
var S=[];
function add(o,sec){o.sec=sec;S.push(o)}
add({type:"cover",title:"หน้าปก"},"เริ่มต้น");
add({type:"howto",title:"วิธีใช้สไลด์นี้"},"เริ่มต้น");
add({type:"about",title:"เกี่ยวกับสื่อชุดนี้ · ที่มา · ผู้จัดทำ"},"เริ่มต้น");
add({type:"blueprint",title:"ผังสอบ O-NET 2569 (32 ข้อ)"},"เริ่มต้น");
add({type:"map",title:"ข้อสอบ 5 ปี ↔ ผังสอบ"},"เริ่มต้น");
add({type:"trends",title:"วิเคราะห์แนวโน้ม 5 ปี"},"เริ่มต้น");
add({type:"schedule",title:"แผนการติว พ–ศ 12 สัปดาห์"},"เริ่มต้น");
add({type:"examtips",title:"สอบผ่านคอมพิวเตอร์ (Digital Testing)"},"เริ่มต้น");
add({type:"cbtl",title:"ห้องสอบจำลองบนคอมพิวเตอร์"},"เริ่มต้น");
STRANDS.forEach(function(sd){
 add({type:"strand",sd:sd,title:"สาระที่ "+sd.n+" "+sd.name,strand:sd.n},"สาระที่ "+sd.n+" · "+sd.name);
 sd.topics.forEach(function(k){
  var sec="สาระที่ "+sd.n+" › "+T[k].code+" "+T[k].name;
  add({type:"topic",k:k,title:"เปิดหัวข้อ "+T[k].code},sec);
  (STRATEGY[k]||[]).forEach(function(st){add({type:"strat",k:k,st:st,title:"กลยุทธ์: "+st.title},sec)});
  if(k==="T22")add({type:"worder",k:k,title:"ภาพเคลื่อนไหว: เรียงคำไทย → อังกฤษ"},sec);
  SETS.filter(function(s){return s.topic===k}).sort(function(a,b){return a.y-b.y}).forEach(function(s){add({type:"set",set:s,k:k,title:s.y+" · "+s.title},sec)});
  if(k==="T22"){var d=drillItems();for(var i=0;i<d.length;i+=5)add({type:"drill",items:d.slice(i,i+5),k:k,part:i/5+1,title:"รวมข้อเรียงคำจากข้อสอบจริง ("+(i/5+1)+")"},sec)}
  var pr=PRACTICE.filter(function(s){return s.topic===k});
  if(pr.length){add({type:"pintro",k:k,n:pr.reduce(function(a,s){return a+s.qs.length},0),title:"ข้อฝึกใหม่ "+T[k].code},sec);pr.forEach(function(s){add({type:"set",set:s,k:k,title:"ฝึก · "+s.title},sec)})}
 });
});
add({type:"flash",title:"บัตรคำศัพท์ + ทดสอบคำศัพท์"},"บัตรคำศัพท์");
add({type:"cbtl",title:"Mock test ก่อนวันสอบ"},"ปิดท้าย");
add({type:"end",title:"สู้ ๆ!"},"ปิดท้าย");
function skey(o){if(o.k)return o.k;if(o.type==="strand")return o.sd.topics[0];if(o.type==="flash")return "flash";if(o.type==="cbtl"&&o.sec==="ปิดท้าย")return "cbt";if(o.type==="cbtl")return "cbt";return "start"}
S.forEach(function(o){o.sk=skey(o)});
(function(){var tabs=[["start","🏠","เริ่มต้น"]];STRANDS.forEach(function(sd){tabs.push(["g"+sd.n,"","สาระ "+sd.n]);sd.topics.forEach(function(k){tabs.push([k,"",T[k].code+" "+({T11:"อ่าน",T12:"สนทนา",T13:"เขียน",T21:"วัฒนธรรม",T22:"เทียบภาษา"})[k]])})});tabs.push(["flash","🃏","บัตรคำ"],["cbt","🖥️","ห้องสอบจำลอง"]);
 document.getElementById("tabs").innerHTML='<div class="tabin">'+tabs.map(function(t){if(t[0][0]==="g")return '<span class="tgrp">'+t[2]+'</span>';var c=T[t[0]]?' style="--c:'+T[t[0]].color+'"':'';return '<button data-tab="'+t[0]+'"'+c+'>'+(t[1]?'<span>'+t[1]+'</span>':'<i></i>')+t[2]+'</button>'}).join("")+'</div>';
 document.getElementById("tabs").addEventListener("click",function(e){var b=e.target.closest("[data-tab]");if(!b)return;var k=b.dataset.tab,i=S.findIndex(function(o){return o.sk===k&&(k!=="cbt"||o.type==="cbtl")});if(k==="T11"||k==="T21"){i=S.findIndex(function(o){return o.type==="strand"&&o.sd.topics[0]===k})}if(i>-1)go(i)})})();
S.forEach(function(o){if(o.k){STRANDS.forEach(function(sd){if(sd.topics.indexOf(o.k)>-1)o.strand=sd.n})}});

function drillItems(){var out=[];SETS.forEach(function(s){s.qs.forEach(function(q){if(q.t==="T22"){var m=s.pass.replace(/\n/g," ").split(/(?<=[.!?])\s+/).filter(function(x){return x.indexOf("___("+q.n+")___")>-1})[0]||"";out.push({s:s,q:q,sen:m})}})});return out}

/* ---------- state ---------- */
var st={i:0,ans:{},qi:{}};
try{var sv=JSON.parse(localStorage.getItem("onet69")||"null");if(sv&&sv.ans)st.ans=sv.ans}catch(e){}
function save(){try{localStorage.setItem("onet69",JSON.stringify({ans:st.ans}))}catch(e){}}
function key(s,q){return s.id+"_"+q.n}
function score(){var a=0,c=0;for(var k in st.ans){a++;if(st.ans[k].first)c++}$("#score").textContent=c+"/"+a}

/* ---------- renderers ---------- */
function eyebrow(k,txt){return '<div class="eyebrow"><span class="bar"></span>'+txt+'</div>'}
var R={};
R.cover=function(){return '<div class="slide cover">'+COVERART.replace('<svg','<svg class="coverart"')+
'<div class="covermascot">'+MASCOT(150,"happy","wave")+'<span>สู้ ๆ นะ ม.3!</span></div><div class="coverbrand">'+LOGO(78)+'<div><b>KRUBENZ</b><span>English Tutoring · O-NET M.3</span></div></div>'+
'<div class="eyebrow" style="--tc:#f2b230"><span class="bar"></span>O-NET ม.3 · วิชาภาษาอังกฤษ (รหัส 93) · สอบผ่านคอมพิวเตอร์</div>'+
'<h1>ติวตรงผังสอบ<br><em>ปีการศึกษา 2569</em></h1>'+
'<p class="sub">แยกตาม 2 สาระ 5 มาตรฐาน · วิเคราะห์ข้อสอบจริง 5 ปีทีละข้อ พร้อมวิธีคิด คำแปลศัพท์ ข้อฝึกใหม่ และห้องสอบจำลองแบบ Digital Testing</p>'+
'<div class="strandbtns">'+STRANDS.map(function(sd){return '<button data-strand="'+sd.n+'" style="--c:'+sd.color+'"><b>สาระที่ '+sd.n+'</b>'+sd.name+'<i>'+sd.items+' ข้อ · '+sd.pts+' คะแนน</i></button>'}).join("")+'<button data-cbt="full" style="--c:#c2410c"><b>ห้องสอบจำลอง</b>ทำข้อสอบบนจอ 32 ข้อ<i>จับเวลา 90 นาที</i></button></div>'+
'<div class="coverfoot">จัดทำโดย KRUBENZ · Facebook: '+FB+'</div><div class="stats"><div class="stat"><b>160</b><span>ข้อสอบจริงพร้อมเฉลย</span></div><div class="stat"><b>'+PRACTICE.reduce(function(a,s){return a+s.qs.length},0)+'</b><span>ข้อฝึกแต่งใหม่</span></div><div class="stat"><b>36</b><span>คาบติว พ–ศ</span></div><div class="stat"><b>1–8 ก.พ.</b><span>ช่วงสอบ 2570</span></div></div></div>'};
R.howto=function(){return '<div class="slide">'+eyebrow("","เริ่มต้น")+'<h2 class="t">วิธีใช้สไลด์ในคาบติว</h2><div class="tipgrid">'+
'<div class="card"><h3>เลื่อนสไลด์</h3><p>ปุ่ม ◀ ▶ ด้านล่าง หรือปุ่มลูกศรบนคีย์บอร์ด · กด <b>M</b> เปิดสารบัญ · กด <b>F</b> เต็มจอ</p></div>'+
'<div class="card"><h3>ทำข้อสอบ</h3><p>กดตัวเลือก 1–4 (หรือกดเลข 1–4 บนคีย์บอร์ด) ถ้าถูกจะขึ้นสีเขียวพร้อมคำอธิบายภาษาไทย ถ้าผิดให้ลองใหม่ ปุ่ม <b>เฉลย</b> จะขึ้นหลังตอบแล้ว (โหมดครูกดดูเฉลยได้ทันที เปลี่ยนที่ปุ่ม Aa)</p></div>'+
'<div class="card"><h3>เปลี่ยนข้อ</h3><p>กดเลขข้อด้านบนขวา หรือปุ่ม <b>ข้อถัดไป</b> ช่องว่างในบทอ่านจะไฮไลต์สีเหลืองตามข้อที่ทำอยู่</p></div>'+
'<div class="card"><h3>คำศัพท์</h3><p>ใต้บทอ่านทุกชุดมี <b>คำศัพท์สำคัญ + คำแปลไทย</b> ให้นักเรียนจดลงสมุดศัพท์ก่อนเริ่มทำ</p></div>'+
'<div class="card"><h3>คะแนน</h3><p>มุมขวาล่างนับเฉพาะ <b>การตอบครั้งแรก</b> ของแต่ละข้อ ใช้วัดผลรายคาบ กด ↺ เริ่มใหม่ ก่อนให้นักเรียนคนใหม่ทำ</p></div>'+
'<div class="card"><h3>สีของหัวข้อ</h3><div class="legend">'+TOPIC_ORDER.map(function(k){return '<span style="--c:'+T[k].color+'"><i></i>'+T[k].code+' '+T[k].name+'</span>'}).join("")+'</div></div></div></div>'};
R.about=function(){return '<div class="slide">'+eyebrow("","About")+'<h2 class="t">เกี่ยวกับสื่อชุดนี้</h2><div class="tipgrid">'+
'<div class="card credit"><div class="crow">'+LOGO(64)+'<div><b>KRUBENZ</b><span>English Tutoring · O-NET M.3</span></div></div><p>จัดทำโดย <b>KRUBENZ</b><br>Facebook: <b>'+FB+'</b></p><p class="small">พบข้อผิดพลาดหรือมีข้อเสนอแนะ ทักมาทาง Facebook ได้เลย</p></div>'+
'<div class="card"><h3>📚 ที่มาของข้อสอบ</h3><p>ข้อสอบจริงปีการศึกษา 2564–2568 เป็นของ <b>สถาบันทดสอบทางการศึกษาแห่งชาติ (สทศ.)</b> นำมาใช้เพื่อการศึกษาเท่านั้น สื่อนี้เป็นสื่อการสอนอิสระ <b>ไม่ใช่เอกสารทางการของ สทศ.</b></p></div>'+
'<div class="card"><h3>✔ ความถูกต้องของเฉลย</h3><p>เฉลยข้อสอบจริง 160 ข้อ ตรวจเทียบกับกระดาษคำตอบเฉลยของ สทศ. ครบทุกข้อ · คำอธิบายภาษาไทยและข้อฝึกใหม่ '+PRACTICE.reduce(function(a,s){return a+s.qs.length},0)+' ข้อ เขียนโดย KRUBENZ</p></div>'+
'<div class="card"><h3>🗓️ ข้อมูลการสอบ</h3><p>ผังสอบตามประกาศ สทศ. ปีการศึกษา 2569 · กำหนดการสอบอ้างอิงข่าวประกาศ ณ '+ASOF+' โปรดตรวจสอบล่าสุดที่ <b>niets.or.th</b> และโรงเรียน</p></div>'+
'<div class="card"><h3>🔒 ความเป็นส่วนตัว</h3><p>ชื่อและคะแนนที่กรอก <b>เก็บอยู่ในเครื่องของคุณเท่านั้น</b> ไม่มีการส่งข้อมูลออกไปที่ใด · ล้างได้ด้วยปุ่ม ↺ เริ่มใหม่</p></div>'+
'<div class="card"><h3>🖼️ ภาพประกอบ</h3><p>ภาพจากข้อสอบจริงใช้ประกอบการอธิบายข้อสอบ · ภาพใบหน้าในข้อบรรยายบุคคลวาดใหม่ทั้งหมด ไม่ใช่ภาพบุคคลจริง</p></div></div></div>'};
var VOC=[];(function(){var seen={};ALL.forEach(function(s){s.vocab.forEach(function(v){var k=v[0].toLowerCase();if(seen[k])return;seen[k]=1;VOC.push({en:v[0],th:v[1],tp:s.topic,src:yl(s.y)+" · "+s.title})})})})();
var FL={f:"ALL",i:0,flip:false,order:null,known:{},mode:"cards",quiz:null};
function flPool(){return VOC.filter(function(v){return FL.f==="ALL"||v.tp===FL.f})}
function flOrder(){var p=flPool();if(!FL.order||FL.order.length!==p.length)FL.order=p.map(function(_,i){return i});return FL.order}
function mtNew(){var p=shuffle(flPool()).filter(function(v,i,arr){return arr.findIndex(function(x){return x.th===v.th})===i}).slice(0,6);FL.mt={pairs:p,left:shuffle(p.map(function(_,i){return i})),right:shuffle(p.map(function(_,i){return i})),sel:null,done:{},miss:0,start:0,end:0};clearInterval(FL.mtiv)}
function mtClock(){var el=document.getElementById("mtclock");if(el&&FL.mt&&FL.mt.start&&!FL.mt.end)el.textContent=((Date.now()-FL.mt.start)/1000).toFixed(1)+" วิ"}
function flQuiz(){var p=shuffle(flPool()).slice(0,10);FL.quiz={items:p.map(function(v){var wrong=shuffle(VOC.filter(function(x){return x.th!==v.th})).slice(0,3).map(function(x){return x.th});return {v:v,opts:shuffle(wrong.concat([v.th])),pick:null}}),i:0}}
R.flash=function(){var pool=flPool(),ord=flOrder(),n=pool.length;if(FL.i>=n)FL.i=0;
 var chips='<div class="flchips"><button data-ff="ALL" class="'+(FL.f==="ALL"?"on":"")+'">ทั้งหมด <small>'+VOC.length+'</small></button>'+TOPIC_ORDER.map(function(k){var c=VOC.filter(function(v){return v.tp===k}).length;return '<button data-ff="'+k+'" style="--c:'+T[k].color+'" class="'+(FL.f===k?"on":"")+'">'+T[k].code+' <small>'+c+'</small></button>'}).join("")+'</div>';
 var modes='<div class="flmode"><button data-fm="cards" class="'+(FL.mode==="cards"?"on":"")+'">🃏 บัตรคำ</button><button data-fm="quiz" class="'+(FL.mode==="quiz"?"on":"")+'">✏️ ทดสอบ 10 คำ</button><button data-fm="match" class="'+(FL.mode==="match"?"on":"")+'">🧩 เกมจับคู่</button></div>';
 var body="";
 if(FL.mode==="cards"){var v=pool[ord[FL.i]],kn=Object.keys(FL.known).filter(function(k){return pool.some(function(p){return p.en===k})}).length;
  body='<div class="flwrap">'+MASCOT(120,FL.flip?"happy":"")+'<div class="fcard'+(FL.flip?" flip":"")+'" data-fl="flip" style="--c:'+T[v.tp].color+'"><div class="ff"><span class="ftag">'+T[v.tp].code+'</span><b>'+esc(v.en)+'</b><i>แตะเพื่อดูคำแปล</i></div><div class="fb2"><span class="ftag">'+T[v.tp].code+'</span><b>'+esc(v.th)+'</b><i>'+esc(v.en)+' · '+esc(v.src)+'</i></div></div></div>'+
  '<div class="flctl"><button data-fl="prev">◀</button><button data-say="'+esc(v.en)+'" class="say">🔊 ฟังเสียง</button><button data-fl="shuffle">🔀 สุ่ม</button><button data-fl="known" class="ok">✔ จำได้แล้ว</button><button data-fl="next">▶</button></div>'+
  '<div class="flstat">คำที่ <b>'+(FL.i+1)+'</b> / '+n+' · จำได้แล้ว <b>'+kn+'</b> คำ'+(FL.known[v.en]?' · <span class="okc">✔ คำนี้จำได้แล้ว</span>':'')+'</div>'}
 else if(FL.mode==="match"){if(!FL.mt)mtNew();var M=FL.mt,all=M.pairs.length,ok=Object.keys(M.done).length;
  if(ok===all){var sec=((M.end-M.start)/1000).toFixed(1),bk="krubenz_best_"+FL.f,best=null;try{best=parseFloat(localStorage.getItem(bk))}catch(_){}
   body='<div class="flwrap res">'+MASCOT(150,"happy","jump")+'<div><h3>จับคู่ครบใน '+sec+' วินาที</h3><p>พลาด '+M.miss+' ครั้ง'+(best?' · สถิติดีที่สุด '+best.toFixed(1)+' วินาที':'')+(M.newBest?' · 🏆 สถิติใหม่!':'')+'</p><div class="flctl"><button data-fl="mnew" class="ok">เล่นอีกรอบ 🧩</button></div></div></div>'}
  else body='<div class="mt"><div class="mthead"><span>แตะคำอังกฤษ แล้วแตะคำแปลที่คู่กัน</span><b id="mtclock">'+(M.start?((Date.now()-M.start)/1000).toFixed(1):"0.0")+' วิ</b><span>ถูก '+ok+'/'+all+' · พลาด '+M.miss+'</span></div><div class="mtgrid"><div class="mtcol">'+M.left.map(function(i){return '<button data-ml="'+i+'" class="'+(M.done[i]?"ok":"")+(M.sel===i?" sel":"")+'"'+(M.done[i]?" disabled":"")+'>'+esc(M.pairs[i].en)+'</button>'}).join("")+'</div><div class="mtcol th">'+M.right.map(function(i){return '<button data-mr="'+i+'" class="'+(M.done[i]?"ok":"")+'"'+(M.done[i]?" disabled":"")+'>'+esc(M.pairs[i].th)+'</button>'}).join("")+'</div></div></div>'}
 else{if(!FL.quiz)flQuiz();var Q=FL.quiz;if(Q.i>=Q.items.length){var sc=Q.items.filter(function(x){return x.pick===x.v.th}).length;
   body='<div class="flwrap res">'+MASCOT(150,"happy")+'<div><h3>ได้ '+sc+' / '+Q.items.length+' คะแนน</h3><p>'+(sc>=8?"เก่งมาก! คำศัพท์แน่นแล้ว 🎉":sc>=5?"ดีแล้ว ทบทวนบัตรคำอีกนิดนะ 💪":"ลองเปิดบัตรคำทบทวนก่อน แล้วกลับมาใหม่ 🌱")+'</p><div class="flctl"><button data-fl="again" class="ok">ทดสอบอีกรอบ</button><button data-fm="cards">ไปทบทวนบัตรคำ</button></div></div></div>'}
  else{var it=Q.items[Q.i];body='<div class="flq"><div class="qcount">ข้อ '+(Q.i+1)+' / '+Q.items.length+'</div><div class="qword">'+esc(it.v.en)+' <button class="say mini" data-say="'+esc(it.v.en)+'">🔊</button></div><p>แปลว่าอะไร?</p><div class="qopts">'+it.opts.map(function(o,i){var c="";if(it.pick){if(o===it.v.th)c="ok";else if(o===it.pick)c="bad"}return '<button data-fq="'+i+'" class="'+c+'">'+esc(o)+'</button>'}).join("")+'</div>'+(it.pick?'<div class="flctl"><button data-fl="qnext" class="ok">'+(Q.i<Q.items.length-1?"ข้อต่อไป ▶":"ดูคะแนน")+'</button></div>':'')+'</div>'}}
 return '<div class="slide flash" style="--tc:#c2410c">'+eyebrow("","Vocabulary · "+VOC.length+" คำจากทุกชุด")+'<h2 class="t">บัตรคำศัพท์ & ทดสอบคำศัพท์</h2><div class="flhead">'+chips+modes+'</div>'+body+'</div>'};
var WOX=[
 {th:["ฉาก","แอ็กชัน","ระทึกใจ"],en:["tense","action","scenes"],map:[2,1,0],role:["ความรู้สึก","ประเภท","คำนามหลัก"],src:"O-NET 2568 ข้อ 31"},
 {th:["เรื่อง","สืบสวน","แนวโกธิก"],en:["gothic","detective","story"],map:[2,1,0],role:["ลักษณะ","ประเภท","คำนามหลัก"],src:"O-NET 2565 ข้อ 30"},
 {th:["การวิ่งเหยาะ","เบา ๆ","นาน ๆ"],en:["long","light","jogging"],map:[2,1,0],role:["ขนาด/เวลา","ลักษณะ","คำนามหลัก"],src:"O-NET 2565 ข้อ 24"},
 {th:["ครอบครัว","ใหญ่","ยากจน","ชนบท"],en:["poor","big","rural","family"],map:[2,1,3,0],role:["ความเห็น","ขนาด","ที่มา","คำนามหลัก"],src:"O-NET 2567 ข้อ 28"},
 {th:["รุ่น","ออลอินวัน","ล่าสุด"],en:["latest","all-in-one","models"],map:[2,1,0],role:["อายุ/ใหม่","ประเภท","คำนามหลัก"],src:"O-NET 2566 ข้อ 25"},
 {th:["กระบวนการ","สืบสวน","ทั้งหมด"],en:["whole","detective","process"],map:[2,1,0],role:["ปริมาณ","ประเภท","คำนามหลัก"],src:"O-NET 2566 ข้อ 30"},
 {th:["ลูกหมา","ตัวเล็ก","สีขาว","น่ารัก"],en:["cute","little","white","puppy"],map:[3,1,2,0],role:["ความเห็น","ขนาด","สี","คำนามหลัก"],src:"ข้อฝึก ต2.2"},
 {th:["ผ้าพันคอ","ไหม","ไทย","สวย"],en:["beautiful","Thai","silk","scarf"],map:[3,2,1,0],role:["ความเห็น","ที่มา","วัสดุ","คำนามหลัก"],src:"ข้อฝึก ต2.2"}];
var WO={i:0,en:false};
function woSlot(n,j){var W=100/n;return {w:"calc("+W+"% - 20px)",x:(j*W)+"%"}}
R.worder=function(){var ex=WOX[WO.i],n=ex.th.length,pos={};ex.map.forEach(function(t,i){pos[t]=i});
 var chips=ex.th.map(function(w,t){var sl=woSlot(n,WO.en?pos[t]:t),i=pos[t];return '<div class="wchip'+(i===n-1?" noun":"")+'" data-t="'+t+'" style="left:'+sl.x+';width:'+sl.w+';transition-delay:'+(t*90)+'ms"><span class="th">'+esc(w)+'</span><span class="en">'+esc(ex.en[i])+'</span><i>'+ex.role[i]+'</i></div>'}).join("");
 return '<div class="slide" style="--tc:'+T.T22.color+'">'+eyebrow("T22",T.T22.code+" · Word order in motion")+'<h2 class="t">ดูคำสลับที่: จากภาษาไทย → ภาษาอังกฤษ</h2>'+
 '<div class="wotabs">'+WOX.map(function(x,i){return '<button data-wo="'+i+'" class="'+(i===WO.i?"on":"")+'">'+(i+1)+'</button>'}).join("")+'<span class="wsrc">ที่มา: '+ex.src+'</span></div>'+
 '<div class="wstage'+(WO.en?" en":"")+'"><div class="wlabel">'+(WO.en?"🇬🇧 English: คำขยาย + คำนามหลักไว้ท้าย":"🇹🇭 ภาษาไทย: คำนามหลักขึ้นก่อน แล้วตามด้วยคำขยาย")+'</div><div class="wrow">'+chips+'</div></div>'+
 '<div class="woctl"><button class="btn big" data-wo="go">'+(WO.en?"↺ กลับเป็นภาษาไทย":"▶ เรียงแบบภาษาอังกฤษ")+'</button><button class="btn ghost big" data-wo="next">ตัวอย่างถัดไป →</button></div>'+
 '<p class="worule">กฎจำง่าย: <b>คำนามหลักไปอยู่ท้ายสุด</b> แล้วเรียงคำขยายด้านหน้าตาม <b>O</b>pinion · <b>S</b>ize · <b>A</b>ge · <b>S</b>hape · <b>C</b>olour · <b>O</b>rigin · <b>M</b>aterial · <b>P</b>urpose</p></div>'};
function woFlip(){var ex=WOX[WO.i],n=ex.th.length,pos={};ex.map.forEach(function(t,i){pos[t]=i});WO.en=!WO.en;var stg=document.querySelector(".wstage");if(!stg){draw();return}
 stg.classList.toggle("en",WO.en);stg.querySelector(".wlabel").textContent=WO.en?"🇬🇧 English: คำขยาย + คำนามหลักไว้ท้าย":"🇹🇭 ภาษาไทย: คำนามหลักขึ้นก่อน แล้วตามด้วยคำขยาย";
 stg.querySelectorAll(".wchip").forEach(function(c){var t=+c.dataset.t;c.style.left=woSlot(n,WO.en?pos[t]:t).x});
 var b=document.querySelector('[data-wo="go"]');if(b)b.textContent=WO.en?"↺ กลับเป็นภาษาไทย":"▶ เรียงแบบภาษาอังกฤษ";sfx(WO.en?"pop":"tick")}
R.blueprint=function(){
 var cells=STRANDS.map(function(sd){var c="";sd.topics.forEach(function(k){for(var i=0;i<T[k].items;i++)c+='<div style="--c:'+T[k].color+'" class="'+(k==="T11"&&i===T[k].items-1?"ord":"")+'" title="'+T[k].code+'"></div>'});
  return '<div class="sgrp" style="flex:'+sd.items+';--sc:'+sd.color+'"><div class="cells" style="grid-template-columns:repeat('+sd.items+',1fr)">'+c+'</div><div class="slab">สาระที่ '+sd.n+' · '+sd.name+' — '+sd.items+' ข้อ ('+sd.pts+' คะแนน)</div></div>'}).join("");
 var panels=STRANDS.map(function(sd){return '<div class="spanel" style="flex:'+(sd.n===1?3:2)+';--sc:'+sd.color+'"><div class="sphead">สาระที่ '+sd.n+' <span>'+sd.name+'</span></div><div class="bp" style="grid-template-columns:repeat('+sd.topics.length+',1fr)">'+sd.topics.map(function(k){var t=T[k];return '<div class="card" style="--c:'+t.color+'"><div class="eyebrow" style="--tc:'+t.color+'">มาตรฐาน '+t.code+'</div><h3>'+t.name+'</h3><div class="big">'+t.items+' <small>ข้อ · '+t.pts+' คะแนน</small></div><p>'+t.what+'</p></div>'}).join("")+'</div></div>'}).join("");
 return '<div class="slide">'+eyebrow("","Test Blueprint · ปีการศึกษา 2569")+'<h2 class="t">32 ข้อ · ข้อละ 3.125 คะแนน · 2 สาระ 5 มาตรฐาน</h2><div class="strip">'+cells+'</div><div class="panels">'+panels+'</div>'+
 '<p class="small">ช่องลายทาง = ข้อเรียงลำดับ 1 ข้อ (ไม่มีตัวเลือก จัดเรียงบนหน้าจอ) · อีก 31 ข้อเป็นปรนัย 4 ตัวเลือก 1 คำตอบ</p></div>'};
R.map=function(){var years=[2564,2565,2566,2567,2568],rows=[["ข้อ 1–3","c1"],["ข้อ 4–6","c2"],["ข้อ 7–9","c3"],["ข้อ 10","r1"],["ข้อ 11","r2"],["ข้อ 12–15","r3"],["ข้อ 16–19","r4"],["ข้อ 20–23","r5"],["ข้อ 24–27","w1"],["ข้อ 28–32","w2"]];
var h='<div class="map"><div class="h">ตำแหน่ง</div>'+years.map(function(y){return '<div class="h">'+y+'</div>'}).join("");
rows.forEach(function(r){h+='<div class="r">'+r[0]+'</div>';years.forEach(function(y){var id="y"+String(y).slice(2)+r[1];var s=SETS.filter(function(x){return x.id===id})[0];
h+=s?'<div class="c" style="--c:'+T[s.topic].color+'" data-go="'+s.id+'">'+esc(s.title)+'</div>':'<div></div>'})});
return '<div class="slide">'+eyebrow("","Exam map")+'<h2 class="t" style="font-size:46px">โครงสร้างเหมือนเดิมทุกปี: สนทนา 9 · อ่าน 14 · เขียน 9</h2><div class="hscroll">'+h+'</div></div><div class="legend">'+TOPIC_ORDER.map(function(k){return '<span style="--c:'+T[k].color+'"><i></i>'+T[k].code+'</span>'}).join("")+'<span class="small">· คลิกช่องเพื่อไปยังชุดข้อสอบ · ปี 2564: ข้อ 12–14 ข่าว, 15–17 joke, 18–20 ความเชื่อ, 21–23 บทความเหยี่ยว</span></div></div>'};
R.trends=function(){return '<div class="slide">'+eyebrow("","Trend analysis")+'<h2 class="t">5 ปีย้อนหลังบอกอะไรเรา</h2><div class="tipgrid">'+
'<div class="card"><h3>1 · โครงข้อสอบนิ่งมาก</h3><p>32 ข้อ เรียงแบบเดิมทุกปี บทสนทนา 3 ชุด → เรียงลำดับ → บรรยายภาพ → เรื่องขำขัน/นิทาน → ข่าว → feature story → เติมคำ 2 ชิ้น <b>(movie review ออกทุกปี)</b></p></div>'+
'<div class="card"><h3>2 · ปี 2568 เริ่มยากขึ้น</h3><p>ข้อ 10 เป็น <b>เรียงลำดับไม่มีตัวเลือก</b> (ตรงผังสอบ 2569), ข่าวอ่าน <b>2 แหล่ง</b> (News + Fact Sheet), เขียนบรรยาย <b>กราฟ</b></p></div>'+
'<div class="card"><h3>3 · วัฒนธรรมเปลี่ยนธีม</h3><p>ความเชื่อโชคลาง (64–66) → <b>เทศกาล/วันสำคัญ</b> (Boxing Day 67, Red Nose Day 68) — ควรรู้ Thanksgiving, Halloween, April Fools, Bonfire Night ฯลฯ</p></div>'+
'<div class="card"><h3>4 · ไวยากรณ์ที่วนกลับมา</h3><p>คำเชื่อม (although/while/because/however), <b>-ing/-ed</b>, V-ing หลังบุพบท, <b>Passive</b>, Present Perfect, who/which</p></div>'+
'<div class="card"><h3>5 · เรียงคำ 2 ข้อ/ปี</h3><p>คำนามหลักอยู่ท้าย: <i>gothic detective story · tense action scenes · latest all-in-one models</i> ตรงกับ ต2.2 (4 ข้อ)</p></div>'+
'<div class="card"><h3>6 · คำถามอ่านซ้ำแบบ</h3><p>mainly about · TRUE · happened first · inferred · what will happen next · best title · purpose of paragraph — ฝึกครบทุกแบบในสไลด์นี้</p></div></div></div>'};
R.schedule=function(){return '<div class="slide">'+eyebrow("","พุธ–พฤหัสฯ–ศุกร์ · 11 พ.ย. 2569 → 29 ม.ค. 2570")+'<h2 class="t" style="font-size:48px">แผนการติว 12 สัปดาห์ (36 คาบ)</h2><table class="tbl sm sched"><tr><th>สัปดาห์</th><th>วันที่</th><th>เนื้อหา</th><th>หัวข้อ</th></tr>'+
SCHEDULE.map(function(r){var c=T[r[3]]?T[r[3]].color:(r[3]==="HW"?"#6b7590":"#16213a");var lb=T[r[3]]?T[r[3]].code:(r[3]==="HW"?"การบ้าน":"รวม");return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td><span class="pill" style="--c:'+c+'">'+lb+'</span></td></tr>'}).join("")+'</table></div>'};
R.examtips=function(){return '<div class="slide">'+eyebrow("","O-NET ม.3 ปีการศึกษา 2569 · Digital Testing")+'<h2 class="t">สอบผ่านคอมพิวเตอร์: ต้องรู้อะไรบ้าง</h2>'+
'<div class="facts"><div><b>1–8 ก.พ. 2570</b><span>ช่วงวันสอบ ม.3</span></div><div><b>15.00–16.30</b><span>วิชาภาษาอังกฤษ 90 นาที</span></div><div><b>8 ม.ค. 2570</b><span>ประกาศเลขที่นั่งสอบ–สนามสอบ</span></div><div><b>19 มี.ค. 2570</b><span>ประกาศผลสอบ</span></div></div>'+
'<div class="timeline"><div style="--c:#c2410c;flex:10">บทสนทนา<small>10 นาที</small></div><div style="--c:#2f6fd6;flex:8">เรียงลำดับ + ภาพ<small>8 นาที</small></div><div style="--c:#7a4bd1;flex:15">เติมคำ<small>15 นาที</small></div><div style="--c:#1d5bb8;flex:45">บทอ่าน<small>45 นาที</small></div><div style="--c:#157a52;flex:12">ทวนข้อที่ปักธง<small>12 นาที</small></div></div>'+
'<div class="tipgrid"><div class="card"><h3>🖱️ บนหน้าจอ</h3><p>บทอ่านอยู่ซ้าย คำถามอยู่ขวา เลื่อน (scroll) อ่านให้ครบ ใช้ <b>ปักธง</b> ข้อที่ไม่แน่ใจ แล้วกลับมาทวนจากแผงเลขข้อ</p></div>'+
'<div class="card"><h3>🔢 ข้อเรียงลำดับ</h3><p>ไม่มีตัวเลือก ต้องจัดเรียงตัวอักษรเองบนจอ ตรวจให้ครบทุกช่องก่อนไปข้อถัดไป</p></div>'+
'<div class="card"><h3>✅ ก่อนกดส่ง</h3><p>ดูหน้าสรุป: ห้ามมีข้อที่ยังไม่ตอบ (ไม่หักคะแนนเมื่อผิด) และเปิดดูข้อที่ปักธงอีกครั้ง</p></div>'+
'<div class="card"><h3>🪪 กฎห้องสอบ</h3><p>ต้องมีเลขที่นั่งสอบ · บัตรประชาชน/บัตรที่มีรูปถ่ายของราชการ · ไปให้ถูกสนาม · สายเกิน 30 นาทีหมดสิทธิ์</p></div>'+
'<div class="card"><h3>⌚ นำเข้าห้องสอบ</h3><p>เฉพาะปากกาสำหรับเซ็นชื่อ และนาฬิกาธรรมดา (ห้าม Smartwatch) · ต้องอยู่ในห้องจนหมดเวลา</p></div>'+
'<div class="card"><h3>🧠 ฝึกให้ชินมือ</h3><p>ใช้ <b>ห้องสอบจำลอง</b> ในสไลด์ถัดไป สุ่มข้อใหม่ทุกครั้ง จับเวลาจริง และดูผลแยกสาระ</p></div></div>'+
'<p class="small">ข้อมูลกำหนดการจากประกาศ สทศ. ที่สื่อเผยแพร่ (ก.ย. 2569) — ควรตรวจสอบกับโรงเรียนและ niets.or.th อีกครั้ง</p></div>'};
R.strand=function(o){var sd=o.sd;return '<div class="slide strand" style="--sc:'+sd.color+'"><div class="strandmascot">'+MASCOT(170)+'</div><div class="snum">'+sd.n+'</div><div class="eyebrow" style="--tc:#f2b230"><span class="bar"></span>สาระที่ '+sd.n+' · '+sd.en+'</div><h1>'+sd.name+'</h1>'+
 '<div class="meta"><div><b>'+sd.items+'</b>ข้อ</div><div><b>'+sd.pts+'</b>คะแนน จาก 100</div></div><p class="what">'+sd.desc+'</p>'+
 '<div class="stdlist">'+sd.topics.map(function(k){var t=T[k];return '<button data-topic="'+k+'" style="--c:'+t.color+'"><span class="ic">'+ICON[t.icon]+'</span><b>มาตรฐาน '+t.code+'</b>'+t.name+'<i>'+t.items+' ข้อ · '+t.pts+' คะแนน</i></button>'}).join("")+'</div></div>'};
R.cbtl=function(){return '<div class="slide strand" style="--sc:#c2410c"><div class="eyebrow" style="--tc:#f2b230"><span class="bar"></span>Digital Testing Simulator</div><h1>ห้องสอบจำลองบนคอมพิวเตอร์</h1>'+
 '<p class="what">หน้าจอแบบสอบออนไลน์: บทอ่านซ้าย คำถามขวา แผงเลขข้อ ปักธงทบทวน นาฬิกานับถอยหลัง และหน้าสรุปก่อนส่ง · สุ่มข้อจากคลัง '+(160+PRACTICE.reduce(function(a,s){return a+s.qs.length},0))+' ข้อ ตามสัดส่วนผังสอบ 2569 ทุกครั้ง · ผลคะแนนแยกตามสาระและมาตรฐาน พร้อมเฉลย</p>'+
 '<div class="stdlist">'+
 '<button data-cbt="full" style="--c:#c2410c"><span class="ic">'+ICON.pen+'</span><b>เต็มฉบับ</b>2 สาระ · 32 ข้อ<i>90 นาที</i></button>'+
 STRANDS.map(function(sd){return '<button data-cbt="s'+sd.n+'" style="--c:'+sd.color+'"><span class="ic">'+ICON[sd.n===1?"read":"globe"]+'</span><b>สาระที่ '+sd.n+'</b>'+sd.name+' · '+sd.items+' ข้อ<i>'+Math.round(sd.items*90/32)+' นาที</i></button>'}).join("")+'</div></div>'};
R.topic=function(o){var t=T[o.k];var n=SETS.filter(function(s){return s.topic===o.k}).reduce(function(a,s){return a+s.qs.length},0),tagged=0;SETS.forEach(function(s){s.qs.forEach(function(q){if(q.t===o.k)tagged++})});
return '<div class="slide topic" style="--tc:'+t.lt+'"><div class="eyebrow" style="--tc:#f2b230"><span class="bar"></span>สาระที่ '+o.strand+'</div><div class="ticon tmascot">'+MASCOT(440,"happy",null,PROP[o.k])+'</div><div class="code">'+t.code+'</div><h1>'+t.name+'</h1><div class="en">'+t.en+'</div>'+
'<div class="meta"><div><b>'+t.items+'</b>ข้อในผังสอบ 2569</div><div><b>'+t.pts+'</b>คะแนน</div><div><b>'+(n+tagged)+'</b>ข้อจริงในชุดนี้</div></div><p class="what">'+t.what+'<br><span style="color:#9fb0d4">พบในข้อสอบเก่า: '+t.where+'</span></p></div>'};
R.strat=function(o){return '<div class="slide" style="--tc:'+T[o.k].color+'">'+eyebrow(o.k,T[o.k].code+" · กลยุทธ์")+'<h2 class="t">'+o.st.title+'</h2>'+o.st.html+'</div>'};
R.pintro=function(o){var t=T[o.k];return '<div class="slide topic" style="--tc:'+t.lt+';background:#1d2a48"><div class="ticon tmascot">'+MASCOT(400,"",null,PROP[o.k])+'</div><div class="eyebrow" style="--tc:#f2b230"><span class="bar"></span>Practice</div><h1>ข้อฝึกแต่งใหม่<br>'+t.code+' '+t.name+'</h1><div class="meta"><div><b>'+o.n+'</b>ข้อ</div></div><p class="what">แต่งตามผังสอบ 2569 และรูปแบบที่ออกจริง ใช้เป็นการบ้านหรือทดสอบท้ายคาบ</p></div>'};
R.end=function(){return '<div class="slide cover" style="justify-content:center"><div class="covermascot">'+MASCOT(150,"happy")+'<span>Good luck! 🍀</span></div>'+COVERART.replace('<svg','<svg class="coverart"')+'<h1>Good luck,<br><em>you\'ve got this!</em></h1><p class="sub">ขอให้นักเรียนทำข้อสอบ O-NET ได้เต็มความสามารถ · ทวนคลังสำนวน คำเชื่อม และ Culture cards ก่อนวันสอบ</p><div class="endcredit">'+LOGO(56)+'<div><b>KRUBENZ</b><span>Facebook: '+FB+'</span></div></div></div>'};

function passHTML(s,cur,done,opt){opt=opt||{};var lines=s.pass.split("\n"),out="",li=-1,ev=opt.kw?(EV[s.id+"_"+cur]||[]):[],tr=(typeof TR!=="undefined")?TR[s.id]:null;
 lines.forEach(function(l){if(!l.trim()){out+='<div style="height:10px"></div>';return}li++;
 var raw=esc(l),t=raw;ev.forEach(function(p){var e=esc(p),k=t.toLowerCase().indexOf(e.toLowerCase());if(k>-1)t=t.slice(0,k)+"\u0001"+t.slice(k,k+e.length)+"\u0002"+t.slice(k+e.length)});
 t=t.replace(/\u0001/g,'<mark class="kw">').replace(/\u0002/g,'</mark>');
 t=t.replace(/___\((\d+)\)___/g,function(m,n){return '<span class="blank'+(+n===cur?" cur":"")+(done[n]?" done":"")+'" data-b="'+n+'">('+n+')</span>'});
 var dm=raw.match(/^([A-Z][A-Za-z.\s]{1,14}):\s(.*)$/),cls=opt.trOn&&tr?' tln':'',dl=' data-ln="'+li+'"';
 if(/^(NEWS REPORT|ALGAE FACT SHEET)$/.test(l.trim()))out+='<h4 class="'+cls+'"'+dl+'>'+t+'</h4>';
 else if(dm&&t.indexOf(dm[1]+":")===0)out+='<p class="dl'+cls+'"'+dl+'><b>'+dm[1]+':</b>'+t.slice(dm[1].length+1)+'</p>';else out+='<p class="'+cls+'"'+dl+'>'+t+'</p>';
 if(tr&&tr[li]&&(opt.trAll||(opt.trSet&&opt.trSet[li])))out+='<div class="tl">🇹🇭 '+esc(tr[li])+'</div>'});return out}
function miniChart(c){var max=45,w=300,h=150;return c.opts.map(function(v,i){var bars=v.map(function(x,j){var bh=x/max*(h-30);return '<rect x="'+(20+j*70)+'" y="'+(h-20-bh)+'" width="46" height="'+bh+'" rx="4" fill="'+["#2f6fd6","#c2410c","#157a52","#9a6200"][j]+'"/><text x="'+(43+j*70)+'" y="'+(h-24-bh)+'" font-size="15" text-anchor="middle" fill="#16213a">'+x+'</text>'}).join("");
 return '<div><h5>Chart '+(i+1)+'</h5><svg viewBox="0 0 '+w+' '+h+'" width="100%" role="img" aria-label="Chart '+(i+1)+'"><line x1="10" y1="'+(h-20)+'" x2="'+(w-10)+'" y2="'+(h-20)+'" stroke="#9aa6bf"/>'+bars+c.labels.map(function(l,j){return '<text x="'+(43+j*70)+'" y="'+(h-4)+'" font-size="13" text-anchor="middle" fill="#5d6882">'+l+'</text>'}).join("")+'</svg></div>'}).join("")}

function canHelp(a){return PREF.role==="teacher"||!!(a&&(a.tries||a.solved||a.wrong))}
function popt(s,q,a){var ok=canHelp(a);st.trLines=st.trLines||{};return {kw:ok&&st.kw,trAll:ok&&st.trAll,trSet:ok?(st.trLines[s.id]||{}):{},trOn:ok}}
function toolRow(s,q,a){var thai=/[฀-๿]/.test(s.pass),ok=canHelp(a),hasEV=!!EV[s.id+"_"+q.n],hasTR=!!TR[s.id],lock=ok?"":' disabled title="ตอบข้อนี้ก่อน จึงดูได้ (หรือเปลี่ยนเป็นโหมดครูที่ปุ่ม Aa)"',b="";
 if(!thai)b+='<button class="tbtn say0" data-act="listen">🔊 ฟังบทอ่าน</button>';
 if(hasEV)b+='<button class="tbtn kwb'+(st.kw&&ok?" on":"")+'" data-act="kw"'+lock+'>🔑 คีย์เวิร์ด</button>';
 if(hasTR)b+='<button class="tbtn trb'+(st.trAll&&ok?" on":"")+'" data-act="tr"'+lock+'>🇹🇭 แปลทั้งหมด</button>';
 b+='<button class="tbtn fz'+(st.focus?" on":"")+'" data-act="focus">'+(st.focus?"↩ กลับไปที่คำถาม":"⛶ ขยายบทอ่าน")+'</button>';return '<div class="toolrow">'+b+(hasTR&&ok?'<span class="hint2">แตะประโยคเพื่อดูคำแปลทีละบรรทัด</span>':(!ok&&(hasEV||hasTR)?'<span class="hint2">🔒 ตอบก่อนจึงดูคีย์เวิร์ด/คำแปลได้</span>':''))+'</div>'}
R.set=function(o){var s=o.set,t=T[s.topic],qi=st.qi[s.id]||0,q=s.qs[qi],k=key(s,q),a=st.ans[k];
 var done={};s.qs.forEach(function(x){var r=st.ans[key(s,x)];if(r&&r.solved)done[x.n]=1});
 var long=s.pass.length>900,img="";
 if(s.img)img='<div class="pic" style="--ph:'+(long?"190px":(s.pass.length>500?"280px":"370px"))+'"><img src="'+s.img+'" alt="ภาพประกอบจากข้อสอบ '+esc(s.title)+'"></div>';
 if(s.chart)img='<div class="minich">'+miniChart(s.chart)+'</div>';
 if(s.faces)img='<div class="minich faces">'+faceOpts(s.faces)+'</div><div class="small">ภาพวาดใหม่โดย KRUBENZ แทนภาพการ์ตูนบุคคลมีชื่อเสียงในข้อสอบจริง</div>';
 var pf=s.pass.length>2200?"20px":(s.pass.length>1500?"22px":"25px");if(st.focus)pf=s.pass.length>2200?"30px":(s.pass.length>1500?"33px":"38px");
 var tabs=s.qs.map(function(x,i){var r=st.ans[key(s,x)];return '<button class="tab'+(i===qi?" on":"")+(r?(r.first?" ok":" bad"):"")+'" data-q="'+i+'">'+x.n+'</button>'}).join("");
 var body="";
 if(q.type==="order"){var seq=(a&&a.seq)||(st.tmp&&st.tmp.k===k?st.tmp.seq:"");
  body='<div class="qtext">'+esc(q.q)+'</div><div class="slots">'+q.items.map(function(x,i){return '<span class="'+(seq[i]?"f":"")+'">'+(seq[i]||"")+'</span>'}).join("")+'</div><div class="ord">'+q.items.map(function(x){return '<button data-ord="'+x+'"'+(seq.indexOf(x)>-1||(a&&a.solved)?" disabled":"")+'>'+x+'</button>'}).join("")+'</div>'+
  '<div class="acts" style="margin-top:0"><button class="btn" data-act="ocheck">ตรวจคำตอบ</button><button class="btn ghost" data-act="oclear">ล้าง</button></div>';
  if(a&&(a.solved||a.wrong))body+='<div class="fb'+(a.solved?"":" wrong")+'"><h4>'+(a.solved?(a.first?pickStr(CHEER,k):"เฉลย"):"ยังไม่ถูก ลองอีกครั้ง 💪")+'</h4>'+(a.solved?esc(q.ex):"")+'</div>';
 } else {
  body='<div class="qtext">'+esc(q.q)+(q.t?'<span class="qsub" style="background:'+T[q.t].color+'">'+T[q.t].code+' ลำดับคำ</span>':'')+'</div><div class="opts">'+q.o.map(function(x,i){var c="";if(a){if(a.picked&&a.picked.indexOf(i+1)>-1)c=(i+1===q.a?" ok":" bad");if(a.solved&&i+1===q.a)c=" ok";if(a.solved&&c==="")c=" dim"}return '<button class="opt'+c+'" data-o="'+(i+1)+'"><i>'+(i+1)+'</i><span>'+esc(x)+'</span></button>'}).join("")+'</div>';
  if(a&&a.solved)body+='<div class="fb">'+(a.first?MASCOT(64,"happy","jump"):'')+'<div><h4>'+(a.first?pickStr(CHEER,k):"คำตอบ: ข้อ "+q.a)+'</h4>'+esc(q.ex)+'</div></div>';
  else if(a)body+='<div class="fb wrong">'+MASCOT(56,"","nod")+'<div><h4>'+pickStr(TRY,k+a.tries)+'</h4>ย้อนกลับไปอ่านประโยครอบ ๆ ช่องว่าง หรือคีย์เวิร์ดในคำถามอีกรอบ</div></div>';
 }
 return '<div class="slide" style="--tc:'+t.color+'"><div class="sethead"><div><div class="tags"><span class="tag '+(s.y==="NEW"?"new":"y")+'">'+yl(s.y)+'</span>'+(s.y==="NEW"?'':'<span class="tag ok">✔ เฉลยตรงกับ สทศ.</span>')+'<span class="tag st">สาระที่ '+(o.strand||"")+'</span><span class="tag t">'+t.code+' '+t.name+'</span><span class="tag">'+esc(s.kind)+'</span></div><h2>'+esc(s.title)+'</h2></div><div class="srcline">'+(s.y==="NEW"?'แต่งใหม่โดย KRUBENZ':'ที่มา: ข้อสอบ O-NET ม.3 ปีการศึกษา '+s.y+' · สทศ.')+'</div></div>'+
 '<div class="setbody'+(st.focus?" focus":"")+'"><div class="left">'+(s.sit?'<div class="sit">Situation: '+esc(s.sit)+'</div>':'')+toolRow(s,q,a)+img+'<div class="pass" style="--pf:'+pf+'">'+passHTML(s,q.n,done,popt(s,q,a))+'</div><div class="vlabel">คำศัพท์สำคัญ <small>· แตะคำเพื่อฟังเสียง</small></div><div class="vocab">'+s.vocab.map(function(v){return '<span data-say="'+esc(v[0])+'" role="button" tabindex="0"><b>'+esc(v[0])+'</b>'+esc(v[1])+'</span>'}).join("")+'</div></div>'+
 '<div class="right"><div class="tabs">'+tabs+'</div>'+body+'<div class="acts">'+((PREF.role==="teacher"||(a&&(a.tries||a.wrong)))&&!(a&&a.solved)?'<button class="btn ghost" data-act="reveal">เฉลย</button>':'')+(qi<s.qs.length-1?'<button class="btn" data-act="nextq">ข้อถัดไป →</button>':'')+'</div></div></div></div>'};

R.drill=function(o){return '<div class="slide" style="--tc:'+T.T22.color+'">'+eyebrow("T22",T.T22.code+" · Word-order drill "+o.part)+'<h2 class="t" style="font-size:46px">ข้อเรียงคำจากข้อสอบจริง — ฝึกเร็ว 5 ข้อ</h2><div class="drill">'+
 o.items.map(function(d,ix){var k=key(d.s,d.q),a=st.ans[k];return '<div class="drow"><div class="src">ปี '+d.s.y+'<br>ข้อ '+d.q.n+'</div><div><div class="sen">'+esc(d.sen).replace(/___\((\d+)\)___/,'<u>(  ?  )</u>').replace(/___\((\d+)\)___/g,"___")+'</div><div class="os">'+
 d.q.o.map(function(x,i){var c="";if(a&&a.picked&&a.picked.indexOf(i+1)>-1)c=i+1===d.q.a?"ok":"bad";if(a&&a.solved&&i+1===d.q.a)c="ok";return '<button class="'+c+'" data-dr="'+d.s.id+'|'+d.q.n+'|'+(i+1)+'">'+esc(x)+'</button>'}).join("")+'</div>'+(a&&a.solved?'<div class="why">✔ '+esc(d.q.ex)+'</div>':'')+'</div></div>'}).join("")+'</div></div>'};

/* ---------- navigation ---------- */
var stage=$("#stage"),view=$("#view"),sizer=$("#sizer");
var PREF={mode:"auto",ts:1,role:"teacher",sound:true};try{var pp=JSON.parse(localStorage.getItem("krubenz_view2")||"null");if(pp){for(var kk in pp)PREF[kk]=pp[kk]}}catch(e){}
function curMode(){if(PREF.mode!=="auto")return PREF.mode;var w=innerWidth,h=innerHeight;return (w<900||h>w*1.05)?"fluid":(w/h<1.5?"43":"169")}
var GEO={};
function geom(availW,availH){var m=curMode(),c=document.body.classList;c.toggle("fluid",m==="fluid");c.remove("mid","narrow");
 if(m==="fluid"){var vw=Math.max(640,Math.min(1920,availW*1.75))/PREF.ts;var s=availW/vw;if(vw<1300)c.add("narrow");else if(vw<1700)c.add("mid");return {m:m,w:vw,h:null,s:s}}
 var W=m==="43"?1600:1920,H=m==="43"?1200:1080;if(m==="43")c.add("mid");var s2=Math.min((availW-24)/W,(availH-24)/H);return {m:m,w:W,h:H,s:s2}}
function fit(){var nav=$("#nav").offsetHeight||64,tb=$("#tabs").offsetHeight||0;document.documentElement.style.setProperty("--navh",nav+"px");document.documentElement.style.setProperty("--tabh",tb+"px");
 var aw=innerWidth,ah=innerHeight-nav-tb;GEO=geom(aw,ah);document.documentElement.style.setProperty("--ts",curMode()==="fluid"?1:PREF.ts);
 stage.style.width=GEO.w+"px";stage.style.transform="scale("+GEO.s+")";
 if(GEO.m==="fluid"){stage.style.height="auto";stage.style.setProperty("--vh",(ah/GEO.s)+"px");sizer.style.width=aw+"px";sizer.style.height=(stage.offsetHeight*GEO.s)+"px"}
 else{stage.style.height=GEO.h+"px";sizer.style.width=(GEO.w*GEO.s)+"px";sizer.style.height=(GEO.h*GEO.s)+"px"}
 if(CBT.on)fitCbt()}
function fitCbt(){var inn=$("#cbtin"),f=GEO.m==="fluid",bh=$("#cbtbar").classList.contains("on")?64:0,IH=innerHeight-bh,vw=f?GEO.w:1920,s=f?GEO.s:Math.min(innerWidth/1920,IH/1080);
 $("#cbt").style.bottom=bh+"px";
 if(!f&&GEO.m==="43"){vw=1600;s=Math.min(innerWidth/1600,IH/1200)}
 var vh=f?null:(GEO.m==="43"?1200:1080);inn.style.width=vw+"px";inn.style.transform="scale("+s+")";
 if(f){inn.style.height="auto";inn.style.minHeight=(IH/s)+"px";$("#cbt").style.height="";inn.parentNode.style.setProperty("--x",0)}
 else{inn.style.height=vh+"px";inn.style.minHeight="";inn.style.left=Math.max(0,(innerWidth-vw*s)/2)+"px";inn.style.top=Math.max(0,(IH-vh*s)/2)+"px"}
 if(f){inn.style.left="0";inn.style.top="0";var spacer=$("#cbtsp");if(!spacer){spacer=document.createElement("div");spacer.id="cbtsp";$("#cbt").appendChild(spacer)}spacer.style.height=(inn.offsetHeight*s)+"px"}
 else{var sp=$("#cbtsp");if(sp)sp.remove()}}
addEventListener("resize",fit);
if(window.ResizeObserver)new ResizeObserver(function(){if(GEO.m==="fluid")sizer.style.height=(stage.offsetHeight*GEO.s)+"px"}).observe(stage);
/* settings panel */
function syncSeg(){document.querySelectorAll("#segMode button").forEach(function(b){b.classList.toggle("on",b.dataset.mode===PREF.mode)});document.querySelectorAll("#segText button").forEach(function(b){b.classList.toggle("on",+b.dataset.ts===PREF.ts)});document.querySelectorAll("#segRole button").forEach(function(b){b.classList.toggle("on",b.dataset.role===PREF.role)});document.querySelectorAll("#segSound button").forEach(function(b){b.classList.toggle("on",(b.dataset.sound==="1")===!!PREF.sound)});
 var m=curMode();$("#hint").textContent="ตอนนี้แสดงแบบ: "+({"169":"สไลด์ 16:9","43":"สไลด์ 4:3","fluid":"เลื่อนอ่าน (พอดีความกว้างจอ)"})[m]+(PREF.mode==="auto"?" (อัตโนมัติ)":"")+" · ขนาดตัวอักษร"+(m==="fluid"?"ปรับทั้งหน้า":"ปรับเฉพาะบทอ่านและคำถาม")+" · การตั้งค่าจำไว้ในเบราว์เซอร์นี้"}
function savePref(){try{localStorage.setItem("krubenz_view2",JSON.stringify(PREF))}catch(e){}fit();syncSeg();if(CBT.on)cbtDraw()}
$("#bs").onclick=function(){syncSeg();$("#settings").classList.add("on")};
$("#sc").onclick=function(){$("#settings").classList.remove("on")};
$("#settings").addEventListener("click",function(e){var b;if(e.target.id==="settings"){$("#settings").classList.remove("on");return}
 if(b=e.target.closest("[data-mode]")){PREF.mode=b.dataset.mode;savePref()}if(b=e.target.closest("[data-ts]")){PREF.ts=+b.dataset.ts;savePref()}if(b=e.target.closest("[data-role]")){PREF.role=b.dataset.role;savePref();draw()}if(b=e.target.closest("[data-sound]")){PREF.sound=b.dataset.sound==="1";savePref();if(PREF.sound)sfx("ok")}});
/* swipe */
(function(){var x0=null,y0=0;view.addEventListener("touchstart",function(e){var t=e.touches[0];x0=t.clientX;y0=t.clientY},{passive:true});
 view.addEventListener("touchend",function(e){if(x0===null)return;var t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;x0=null;
  if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.6&&!e.target.closest(".hscroll,.pass,.ord")){go(st.i+(dx<0?1:-1))}},{passive:true})})();
function draw(){var o=S[st.i],anim=st.nav!==false;st.nav=false;$("#slide").innerHTML=R[o.type](o)+(o.type==="cover"?"":'<div class="brand'+(DARK[o.type]?" lt":"")+'">'+LOGO(40)+'<b>KRUBENZ</b></div>');if(anim){var sl=document.querySelector("#slide .slide");if(sl)sl.classList.add("enter")}if(typeof inkDraw==="function")setTimeout(inkDraw,0);$("#cnt").textContent=(st.i+1)+" / "+S.length;$("#sec").textContent=o.sec+" · "+o.title;$("#progress").firstChild.style.width=((st.i+1)/S.length*100)+"%";score();fit();if(GEO.m==="fluid")view.scrollTop=0;
 document.querySelectorAll("#menu a").forEach(function(a){a.classList.toggle("cur",+a.dataset.i===st.i)});
 document.querySelectorAll("#tabs [data-tab]").forEach(function(b){var on=b.dataset.tab===o.sk;b.classList.toggle("on",on);if(on&&b.scrollIntoView)try{b.scrollIntoView({block:"nearest",inline:"nearest"})}catch(_){}});
 var cur=document.querySelector(".pass .blank.cur");if(cur)cur.scrollIntoView({block:"nearest"})}
function go(i){stopSpeak();st.nav=true;st.focus=false;zoomClose();if(typeof szReset==='function')szReset();st.i=Math.max(0,Math.min(S.length-1,i));st.tmp=null;try{history.replaceState(null,"","#s"+(st.i+1))}catch(e){location.hash="s"+(st.i+1)}draw()}
function fromHash(){var m=location.hash.match(/^#s(\d+)$/);if(m)st.i=Math.max(0,Math.min(S.length-1,+m[1]-1))}
addEventListener("hashchange",function(){fromHash();draw()});
$("#bp").onclick=function(){go(st.i-1)};$("#bn").onclick=function(){go(st.i+1)};
$("#br").onclick=function(){st.ans={};st.qi={};save();draw()};
$("#bf").onclick=function(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(function(){})}catch(e){}};
function menu(on){$("#menu").classList.toggle("on",on)}
$("#bm").onclick=function(){menu(true)};$("#mc").onclick=function(){menu(false)};
(function(){var g={},ord=[],sn={};S.forEach(function(o,i){if(!g[o.sec]){g[o.sec]=[];ord.push(o.sec);sn[o.sec]=o.strand||0}g[o.sec].push('<a data-i="'+i+'">'+(i+1)+". "+esc(o.title)+'</a>')});
 $("#mlist").innerHTML=ord.map(function(s){return '<div class="grp'+(sn[s]?" s"+sn[s]:"")+'"><h3>'+esc(s)+'</h3>'+g[s].join("")+'</div>'}).join("");
 $("#mlist").onclick=function(e){var a=e.target.closest("a");if(a){menu(false);go(+a.dataset.i)}}})();
addEventListener("keydown",function(e){if(e.target.tagName==="INPUT"||CBT.on)return;
 if((e.key==="Enter"||e.key===" ")&&e.target.dataset&&e.target.dataset.say){speak(e.target.dataset.say);e.preventDefault();return}
 if(INK.on&&e.key==="Escape"){inkMode(false);return}
 if(e.key==="p"||e.key==="P"){inkMode(!INK.on);return}
 if(SZ.on&&e.key==="Escape"){szMode(false);return}
 if(e.key==="z"||e.key==="Z"){szMode(!SZ.on);return}
 if($("#zoom").classList.contains("on")){if(e.key==="Escape"||e.key===" ")zoomClose();e.preventDefault();return}
 if($("#settings").classList.contains("on")){if(e.key==="Escape")$("#settings").classList.remove("on");return}
 if(e.key==="+"||e.key==="="){textStep(1);return}if(e.key==="-"||e.key==="_"){textStep(-1);return}
 if(e.key==="ArrowRight"||e.key==="PageDown"){go(st.i+1);e.preventDefault()}else if(e.key==="ArrowLeft"||e.key==="PageUp"){go(st.i-1);e.preventDefault()}
 else if(e.key==="m"||e.key==="M")menu(!$("#menu").classList.contains("on"));else if(e.key==="Escape")menu(false);else if(e.key==="f"||e.key==="F")$("#bf").onclick();
 else if(/^[1-4]$/.test(e.key)&&S[st.i].type==="set"){var b=document.querySelector('.opt[data-o="'+e.key+'"]');if(b)b.click()}});

/* ---------- answering ---------- */
$("#slide").addEventListener("click",function(e){var o=S[st.i],b;
 if(o.type==="worder"&&(b=e.target.closest("[data-wo]"))){var v=b.dataset.wo;if(v==="go"){woFlip();return}if(v==="next"){WO.i=(WO.i+1)%WOX.length;WO.en=false}else{WO.i=+v;WO.en=false}draw();return}
 if(b=e.target.closest(".pic img")){zoomOpen('<img src="'+b.getAttribute("src")+'" alt="'+esc(b.alt||"")+'">');return}
 if((b=e.target.closest(".minich"))&&!CBT.on){zoomOpen('<div class="zgrid">'+b.innerHTML+'</div>');return}
 if(b=e.target.closest("[data-say]")){speak(b.dataset.say,b.classList.contains("say")?b:null);return}
 if(b=e.target.closest("[data-act='listen']")){speak(passSpeech(o.set),b);return}
 if(o.type==="flash"){var redraw=true;
  if(b=e.target.closest("[data-ff]")){FL.f=b.dataset.ff;FL.i=0;FL.order=null;FL.flip=false;FL.quiz=null;FL.mt=null}
  else if(b=e.target.closest("[data-fm]")){FL.mode=b.dataset.fm;FL.quiz=null;FL.flip=false;FL.mt=null}
  else if(b=e.target.closest("[data-ml]")){var M=FL.mt;if(!M.start){M.start=Date.now();clearInterval(FL.mtiv);FL.mtiv=setInterval(mtClock,100)}M.sel=+b.dataset.ml;sfx("tick")}
  else if(b=e.target.closest("[data-mr]")){var M=FL.mt,r=+b.dataset.mr;if(M.sel===null){toast("แตะคำภาษาอังกฤษก่อน แล้วค่อยแตะคำแปล");redraw=false}else if(r===M.sel){M.done[r]=1;M.sel=null;sfx("ok");confetti(e.clientX,e.clientY);if(Object.keys(M.done).length===M.pairs.length){M.end=Date.now();clearInterval(FL.mtiv);var sec=(M.end-M.start)/1000,bk="krubenz_best_"+FL.f;try{var bst=parseFloat(localStorage.getItem(bk));if(!bst||sec<bst){localStorage.setItem(bk,sec);M.newBest=!!bst}}catch(_){}sfx("win")}}else{M.miss++;sfx("bad");draw();fxOpt('[data-mr="'+r+'"]',false);return}}
  else if(b=e.target.closest("[data-fq]")){var it=FL.quiz.items[FL.quiz.i];if(!it.pick){it.pick=it.opts[+b.dataset.fq];if(it.pick===it.v.th){confetti(e.clientX,e.clientY);sfx("ok")}else sfx("bad")}}
  else if(b=e.target.closest("[data-fl]")){var c=b.dataset.fl,n=flPool().length;
   if(c==="flip")FL.flip=!FL.flip;if(c==="next"){FL.i=(FL.i+1)%n;FL.flip=false}if(c==="prev"){FL.i=(FL.i-1+n)%n;FL.flip=false}
   if(c==="shuffle"){FL.order=shuffle(flOrder());FL.i=0;FL.flip=false;toast("สุ่มลำดับบัตรคำแล้ว 🔀")}
   if(c==="known"){var v=flPool()[flOrder()[FL.i]];FL.known[v.en]=1;confetti(e.clientX,e.clientY);sfx("pop");FL.i=(FL.i+1)%n;FL.flip=false}
   if(c==="qnext")FL.quiz.i++;if(c==="again")flQuiz();if(c==="mnew")mtNew()}
  else redraw=false;if(redraw)draw();return}
 if(b=e.target.closest("[data-cbt]")){cbtStart(b.dataset.cbt);return}
 if(b=e.target.closest("[data-strand]")){go(S.findIndex(function(x){return x.type==="strand"&&x.sd.n==b.dataset.strand}));return}
 if(b=e.target.closest("[data-topic]")){go(S.findIndex(function(x){return x.type==="topic"&&x.k===b.dataset.topic}));return}
 if(b=e.target.closest("[data-go]")){var idx=S.findIndex(function(x){return x.set&&x.set.id===b.dataset.go});if(idx>-1)go(idx);return}
 if(b=e.target.closest("[data-dr]")){var p=b.dataset.dr.split("|"),s=ALL.filter(function(x){return x.id===p[0]})[0],q=s.qs.filter(function(x){return x.n==p[1]})[0];pick(s,q,+p[2]);if(+p[2]===q.a){confetti(e.clientX,e.clientY);sfx("ok")}else sfx("bad");draw();return}
 if(o.type!=="set")return;var s=o.set,qi=st.qi[s.id]||0,q=s.qs[qi],k=key(s,q);
 if(b=e.target.closest("[data-act='kw']")){st.kw=!st.kw;draw();return}
 if(b=e.target.closest("[data-act='focus']")){st.focus=!st.focus;draw();return}
 if(b=e.target.closest("[data-act='tr']")){st.trAll=!st.trAll;if(!st.trAll&&st.trLines)st.trLines[s.id]={};draw();return}
 if((b=e.target.closest(".tln"))&&!e.target.closest(".blank")){st.trLines=st.trLines||{};var m=st.trLines[s.id]=st.trLines[s.id]||{},ln=+b.dataset.ln;m[ln]=!m[ln];draw();return}
 if(b=e.target.closest(".tab")){st.qi[s.id]=+b.dataset.q;st.tmp=null;draw();return}
 if(b=e.target.closest(".opt")){var already=st.ans[k]&&st.ans[k].solved;pick(s,q,+b.dataset.o);var good=+b.dataset.o===q.a;if(!already){if(good){confetti(e.clientX,e.clientY);sfx("ok")}else sfx("bad")}draw();if(!already)fxOpt('.opt[data-o="'+b.dataset.o+'"]',good);return}
 if(b=e.target.closest("[data-ord]")){var cur=st.tmp&&st.tmp.k===k?st.tmp.seq:"";if(cur.length<q.items.length)st.tmp={k:k,seq:cur+b.dataset.ord};draw();return}
 if(b=e.target.closest("[data-act]")){var act=b.dataset.act;
  if(act==="nextq"){st.qi[s.id]=qi+1;st.tmp=null}
  if(act==="oclear"){st.tmp=null;if(st.ans[k]&&!st.ans[k].solved)st.ans[k].seq=""}
  if(act==="ocheck"){var seq=st.tmp&&st.tmp.k===k?st.tmp.seq:"";if(seq.length===q.items.length){var r=st.ans[k]||{tries:0};r.tries++;r.seq=seq;if(seq===q.ans){r.solved=true;if(r.tries===1)r.first=true;confetti(e.clientX,e.clientY);sfx("win")}else{sfx("bad");r.wrong=true;st.tmp=null;r.seq=""}st.ans[k]=r;save()}}
  if(act==="reveal"){var r2=st.ans[k]||{tries:0,picked:[]};r2.solved=true;if(q.type==="order")r2.seq=q.ans;st.ans[k]=r2;save()}
  draw()}});
function pick(s,q,n){var k=key(s,q),r=st.ans[k]||{tries:0,picked:[]};if(r.solved)return;r.picked=r.picked||[];if(r.picked.indexOf(n)<0)r.picked.push(n);r.tries++;if(n===q.a){r.solved=true;if(r.tries===1)r.first=true}st.ans[k]=r;save()}

/* ---------- Digital Testing simulator ---------- */
var CBT={on:false};
var STR_OF={};STRANDS.forEach(function(sd){sd.topics.forEach(function(k){STR_OF[k]=sd.n})});
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function rank(e){if(e.q.type==="order")return 1;var k=e.s.kind||"";if(/Conversation|Functions/.test(k))return 0;if(/Writing|ลำดับคำ|วรรคตอน/.test(k))return 3;return 2}
function cbtBuild(mode){
 var plan=mode==="s1"?{T11:12,T12:7,T13:7}:mode==="s2"?{T21:2,T22:4}:{T11:12,T12:7,T13:7,T21:2,T22:4};
 var pool=[];ALL.forEach(function(s){s.qs.forEach(function(q){pool.push({s:s,q:q,tp:q.t||s.topic})})});
 var out=[];
 Object.keys(plan).forEach(function(k){var n=plan[k],cand=pool.filter(function(e){return e.tp===k});
  if(k==="T11"){var o=shuffle(cand.filter(function(e){return e.q.type==="order"}))[0];out.push(o);n--;cand=cand.filter(function(e){return e.q.type!=="order"})}
  shuffle(cand).slice(0,n).forEach(function(e){out.push(e)})});
 out.sort(function(a,b){return rank(a)-rank(b)||(a.s.id<b.s.id?-1:a.s.id>b.s.id?1:a.q.n-b.q.n)});
 return out.map(function(e){return {s:e.s,q:e.q,tp:e.tp,ans:null,flag:false}});
}
function cbtStart(mode){CBT={on:true,mode:mode,screen:"start",items:cbtBuild(mode),cur:0,name:CBT.name||""};
 CBT.mins=mode==="full"?90:Math.round(CBT.items.length*90/32);$("#cbt").classList.add("on");cbtDraw()}
function cbtClose(){clearInterval(CBT.timer);CBT.on=false;$("#cbt").classList.remove("on");$("#cbtbar").classList.remove("on");$("#cbt").scrollTop=0}
function fmt(sec){sec=Math.max(0,sec);var m=Math.floor(sec/60),s=sec%60;return (m<10?"0":"")+m+":"+(s<10?"0":"")+s}
function tick(){var left=Math.round((CBT.end-Date.now())/1000);var el=$("#cbtTime");if(el){el.textContent=fmt(left);el.classList.toggle("warn",left<600)}if(left<=0){clearInterval(CBT.timer);cbtSubmit()}}
function isRight(it){return it.q.type==="order"?it.ans===it.q.ans:it.ans===it.q.a}
function resultFx(){var el=document.querySelector(".cbtres .score b");if(!el)return;var target=parseFloat(el.textContent),bars=document.querySelectorAll(".brow .bar i");
 bars.forEach(function(x){x.dataset.w=x.style.width;x.style.width="0"});
 if(REDUCE){el.textContent=target.toFixed(2);bars.forEach(function(x){x.style.width=x.dataset.w});return}
 var t0=performance.now(),D=1200;(function step(t){var p=Math.min(1,(t-t0)/D),e=1-Math.pow(1-p,3);el.textContent=(target*e).toFixed(2);if(p<1)requestAnimationFrame(step);else{var full=CBT.items.length*3.125;if(target/full>=.8){for(var i=0;i<4;i++)setTimeout(function(){confetti(innerWidth*(.2+Math.random()*.6),innerHeight*(.25+Math.random()*.3))},i*180)}}})(t0);
 setTimeout(function(){bars.forEach(function(x){x.style.width=x.dataset.w})},60)}
function cbtSummary(){var n=CBT.items.length,tot=CBT.items.filter(isRight).length,L=[];
 L.push("ผลสอบจำลอง O-NET ม.3 ภาษาอังกฤษ · KRUBENZ");L.push("ผู้สอบ: "+(CBT.name||"นักเรียน")+" · "+new Date().toLocaleDateString("th-TH",{day:"numeric",month:"short",year:"numeric"}));
 L.push("ชุด: "+(CBT.mode==="full"?"เต็มฉบับ 32 ข้อ":CBT.mode==="s1"?"สาระที่ 1":"สาระที่ 2"));
 L.push("คะแนน: "+(tot*3.125).toFixed(2)+" / "+(n*3.125).toFixed(2)+" (ถูก "+tot+"/"+n+" ข้อ)");
 [1,2].forEach(function(k){var xs=CBT.items.filter(function(x){return STR_OF[x.tp]===k});if(xs.length)L.push("• สาระที่ "+k+": "+xs.filter(isRight).length+"/"+xs.length)});
 TOPIC_ORDER.forEach(function(k){var xs=CBT.items.filter(function(x){return x.tp===k});if(xs.length)L.push("  - "+T[k].code+" "+T[k].name+": "+xs.filter(isRight).length+"/"+xs.length)});
 var w=[];CBT.items.forEach(function(x,i){if(!isRight(x))w.push(i+1)});L.push("ข้อที่ผิด: "+(w.length?w.join(", "):"ไม่มี"));return L.join("\n")}
function cbtSubmit(){clearInterval(CBT.timer);CBT.animated=false;CBT.screen="result";CBT.review=false;cbtDraw()}
function head(){var lbl=CBT.mode==="full"?"เต็มฉบับ · 2 สาระ":(CBT.mode==="s1"?"สาระที่ 1 ภาษาเพื่อการสื่อสาร":"สาระที่ 2 ภาษาและวัฒนธรรม");
 return '<div class="cbthead">'+LOGO(46)+'<div class="ct"><b>KRUBENZ Mock O-NET · ภาษาอังกฤษ ม.3 (93)</b><span>ระบบสอบจำลอง Digital Testing · '+lbl+'</span></div>'+
 (CBT.screen==="exam"?'<div class="who">ผู้สอบ: <b>'+esc(CBT.name||"นักเรียน")+'</b></div><div class="clock">⏱ <span id="cbtTime">'+fmt(Math.round((CBT.end-Date.now())/1000))+'</span></div>':'')+
 '<button class="x" data-c="close">ออกจากห้องสอบ ✕</button></div>'}
function palette(){return '<div class="pal"><h4>แผงเลขข้อ</h4><div class="pgrid">'+CBT.items.map(function(it,i){var c="";if(CBT.review)c=isRight(it)?" r":" w";else{if(it.ans!==null&&it.ans!=="")c=" a";if(it.flag)c+=" f"}if(i===CBT.cur)c+=" cur";return '<button class="pb'+c+'" data-go2="'+i+'">'+(i+1)+'</button>'}).join("")+'</div>'+
 (CBT.review?'<div class="plg"><span class="r"></span>ถูก <span class="w"></span>ผิด</div>':'<div class="plg"><span class="a"></span>ตอบแล้ว <span class="f"></span>ปักธง <span></span>ยังไม่ตอบ</div><div class="pcount">ตอบแล้ว '+CBT.items.filter(function(x){return x.ans!==null&&x.ans!==""}).length+' / '+CBT.items.length+'</div>')+'</div>'}
function cbtDraw(){var h="",it;CBT.bar="";
 if(CBT.screen==="start"){h=head()+'<div class="cbtstart"><div class="card"><h2>คำชี้แจงก่อนเริ่มสอบ</h2><ol class="big">'+
  '<li>ข้อสอบมี <b>'+CBT.items.length+' ข้อ</b> เวลา <b>'+CBT.mins+' นาที</b> สุ่มจากคลังข้อสอบจริง 5 ปี + ข้อฝึกใหม่ ตามสัดส่วนผังสอบ 2569</li>'+
  '<li>ปรนัย 4 ตัวเลือก: คลิกเลือกคำตอบ เปลี่ยนคำตอบได้จนกว่าจะส่ง'+(CBT.mode!=="s2"?' · ข้อเรียงลำดับ: คลิกตัวอักษรเรียงตามลำดับ':'')+'</li>'+
  '<li>ใช้ปุ่ม <b>⚑ ปักธงทบทวน</b> กับข้อที่ไม่แน่ใจ และแผงเลขข้อด้านขวาเพื่อข้ามไปมา</li><li>เมื่อหมดเวลา ระบบจะส่งคำตอบอัตโนมัติ</li></ol>'+
  '<p class="small">🔒 ชื่อและคะแนนเก็บในเครื่องนี้เท่านั้น ไม่มีการส่งข้อมูลออกไป</p><label for="cbtName" class="lbl">ชื่อผู้สอบ</label><input id="cbtName" value="'+esc(CBT.name)+'" placeholder="พิมพ์ชื่อนักเรียน" maxlength="40">'+
  '<div class="row"><button class="btn big" data-c="begin">เริ่มทำข้อสอบ ▶</button></div></div></div>'}
 else if(CBT.screen==="exam"||CBT.screen==="view"){it=CBT.items[CBT.cur];var s=it.s,q=it.q,img="";
  if(s.img)img='<div class="pic" style="--ph:'+(s.pass.length>900?"170px":"300px")+'"><img src="'+s.img+'" alt="ภาพประกอบ"></div>';if(s.chart)img='<div class="minich">'+miniChart(s.chart)+'</div>';if(s.faces)img='<div class="minich faces">'+faceOpts(s.faces)+'</div>';
  var body;
  if(q.type==="order"){var seq=it.ans||"";body='<div class="slots">'+q.items.map(function(x,i){return '<span class="'+(seq[i]?"f":"")+'">'+(seq[i]||"")+'</span>'}).join("")+'</div>'+(CBT.review?'':'<div class="ord">'+q.items.map(function(x){return '<button data-co="'+x+'"'+(seq.indexOf(x)>-1?" disabled":"")+'>'+x+'</button>'}).join("")+'</div><div class="row"><button class="btn ghost" data-c="oclr">ล้างลำดับ</button></div>')}
  else body='<div class="ropts">'+q.o.map(function(x,i){var c=it.ans===i+1?" sel":"";if(CBT.review){if(i+1===q.a)c+=" ok";else if(it.ans===i+1)c+=" bad"}return '<button class="ro'+c+'" data-ca="'+(i+1)+'"><i></i><span>'+(i+1)+'.</span>'+esc(x)+'</button>'}).join("")+'</div>';
  if(CBT.review)body+='<div class="fb'+(isRight(it)?"":" wrong")+'"><h4>'+(isRight(it)?"ตอบถูก ✔":"ตอบผิด ✘ — คำตอบที่ถูก: "+(q.type==="order"?q.ans.split("").join("-"):"ข้อ "+q.a))+'</h4>'+esc(q.ex)+'</div>';
  h=head()+'<div class="cbtmain"><div class="cp">'+(s.sit?'<div class="sit">'+esc(s.sit)+'</div>':'')+img+'<div class="pass" style="--pf:'+(s.pass.length>1800?"20px":"23px")+'">'+passHTML(s,q.n,{})+'</div></div>'+
   '<div class="cq"><div class="qno">ข้อ '+(CBT.cur+1)+' <span>จาก '+CBT.items.length+'</span>'+(it.flag&&!CBT.review?'<em>⚑ ปักธงไว้</em>':'')+'<small style="background:'+T[it.tp].color+'">'+T[it.tp].code+'</small></div><div class="qtext">'+esc(q.q)+'</div>'+body+'</div>'+palette()+'</div>'+
   '';CBT.bar='<button class="btn ghost" data-c="prev"'+(CBT.cur?"":" disabled")+'>◀ <span class="lbx">ข้อก่อนหน้า</span></button>'+(CBT.review?'<button class="btn" data-c="result">ผลสอบ</button>':'<button class="btn flag'+(it.flag?" on":"")+'" data-c="flag">⚑ <span class="lbx">'+(it.flag?"เอาธงออก":"ปักธงทบทวน")+'</span></button><button class="btn submit" data-c="check">ส่งคำตอบ</button>')+'<button class="btn" data-c="next"'+(CBT.cur<CBT.items.length-1?"":" disabled")+'><span class="lbx">ข้อถัดไป</span> ▶</button>'}
 else if(CBT.screen==="check"){var un=[],fl=[];CBT.items.forEach(function(x,i){if(x.ans===null||x.ans==="")un.push(i);if(x.flag)fl.push(i)});
  var ln=function(a){return a.length?a.map(function(i){return '<button class="pb" data-go2="'+i+'">'+(i+1)+'</button>'}).join(""):'<span class="small">ไม่มี</span>'};
  h=head()+'<div class="cbtstart"><div class="card"><h2>ตรวจทานก่อนส่งคำตอบ</h2><p>ตอบแล้ว <b>'+(CBT.items.length-un.length)+'</b> จาก '+CBT.items.length+' ข้อ · เวลาคงเหลือ <b id="cbtTime">'+fmt(Math.round((CBT.end-Date.now())/1000))+'</b></p>'+
  '<h3>ข้อที่ยังไม่ได้ตอบ</h3><div class="pgrid wide">'+ln(un)+'</div><h3>ข้อที่ปักธงไว้</h3><div class="pgrid wide">'+ln(fl)+'</div>'+
  (un.length?'<p class="warnline">ยังมีข้อที่ไม่ได้ตอบ — การตอบผิดไม่หักคะแนน ควรตอบให้ครบทุกข้อ</p>':'')+
  '<div class="row"><button class="btn ghost big" data-c="back">กลับไปทำต่อ</button><button class="btn submit big" data-c="submit">ยืนยันส่งคำตอบ</button></div></div></div>'}
 else if(CBT.screen==="result"){var tot=CBT.items.filter(isRight).length,n=CBT.items.length,pct=Math.round(tot/n*1000)/10;
  var by=function(keyf,keys,lab,col){return keys.map(function(k){var xs=CBT.items.filter(function(x){return keyf(x)==k});if(!xs.length)return "";var r=xs.filter(isRight).length;return '<div class="brow"><span>'+lab(k)+'</span><div class="bar"><i style="width:'+(r/xs.length*100)+'%;background:'+col(k)+'"></i></div><b>'+r+'/'+xs.length+'</b></div>'}).join("")};
  h=head()+'<div class="cbtres"><div class="card score">'+MASCOT(110,"happy")+'<span>'+esc(CBT.name||"นักเรียน")+'</span><b>'+(tot*3.125).toFixed(2)+'</b><i>คะแนน (เต็ม '+(n*3.125).toFixed(2)+')</i><p>ถูก '+tot+' จาก '+n+' ข้อ · '+pct+'%</p></div>'+
  '<div class="card"><h3>ผลรายสาระ</h3>'+by(function(x){return STR_OF[x.tp]},[1,2],function(k){return "สาระที่ "+k},function(k){return STRANDS[k-1].color})+'<h3>ผลรายมาตรฐาน</h3>'+by(function(x){return x.tp},TOPIC_ORDER,function(k){return T[k].code+" "+T[k].name},function(k){return T[k].color})+'</div>'+
  '<div class="card"><h3>ดูเฉลยรายข้อ</h3><p class="small">คลิกเลขข้อเพื่อดูคำตอบที่ถูกพร้อมคำอธิบาย</p><div class="pgrid">'+CBT.items.map(function(x,i){return '<button class="pb '+(isRight(x)?"r":"w")+'" data-rv="'+i+'">'+(i+1)+'</button>'}).join("")+'</div><div class="row"><button class="btn big submit" data-c="copy">📋 คัดลอกผลส่งครู</button><button class="btn big" data-c="again">สุ่มข้อสอบใหม่</button><button class="btn ghost big" data-c="close">ปิด</button></div></div></div>'}
 $("#cbtin").innerHTML=h;if(CBT.screen==="result"&&!CBT.animated){CBT.animated=true;resultFx()}var bar=$("#cbtbar"),showBar=(CBT.screen==="exam"||CBT.screen==="view");bar.innerHTML=showBar?CBT.bar:"";bar.classList.toggle("on",showBar&&CBT.on);fitCbt();
}
function cbtClick(e){var b,it=CBT.items[CBT.cur];
 if(b=e.target.closest("[data-go2]")){CBT.cur=+b.dataset.go2;if(CBT.screen==="check")CBT.screen="exam";cbtDraw();return}
 if(b=e.target.closest("[data-rv]")){CBT.cur=+b.dataset.rv;CBT.review=true;CBT.screen="view";cbtDraw();return}
 if(b=e.target.closest("[data-ca]")){if(CBT.review)return;it.ans=+b.dataset.ca;cbtDraw();return}
 if(b=e.target.closest("[data-co]")){if(CBT.review)return;var sq=it.ans||"";if(sq.length<it.q.items.length)it.ans=sq+b.dataset.co;cbtDraw();return}
 if(!(b=e.target.closest("[data-c]")))return;var c=b.dataset.c;
 if(c==="close"){if(CBT.screen==="exam"||CBT.screen==="check"){if(!b.dataset.sure){b.dataset.sure=1;b.textContent="กดอีกครั้งเพื่อออก (คำตอบจะหาย)";return}}cbtClose();return}
 if(c==="begin"){var nm=$("#cbtName");CBT.name=nm?nm.value.trim():"";CBT.screen="exam";CBT.end=Date.now()+CBT.mins*60000;clearInterval(CBT.timer);CBT.timer=setInterval(tick,1000)}
 if(c==="prev"&&CBT.cur>0)CBT.cur--;
 if(c==="next"&&CBT.cur<CBT.items.length-1)CBT.cur++;
 if(c==="flag")it.flag=!it.flag;
 if(c==="oclr")it.ans=null;
 if(c==="check")CBT.screen="check";
 if(c==="back")CBT.screen="exam";
 if(c==="submit"){cbtSubmit();return}
 if(c==="result"){CBT.screen="result";CBT.review=false}
 if(c==="again"){cbtStart(CBT.mode);return}
 if(c==="copy"){var txt=cbtSummary();var done=function(){b.textContent="✔ คัดลอกแล้ว วางใน LINE ได้เลย"};var fail=function(){if(document.querySelector(".copybox"))return;var ta=document.createElement("textarea");ta.className="copybox";ta.value=txt;ta.readOnly=true;b.parentNode.parentNode.appendChild(ta);ta.select();b.textContent="เลือกข้อความด้านล่างแล้วคัดลอก"};
  try{navigator.clipboard.writeText(txt).then(done,fail)}catch(err){fail()}return}
 cbtDraw()}
$("#cbt").addEventListener("click",cbtClick);$("#cbtbar").addEventListener("click",cbtClick);
addEventListener("keydown",function(e){if(!CBT.on||e.target.tagName==="INPUT")return;if(CBT.screen==="exam"||CBT.screen==="view"){if(e.key==="ArrowRight"&&CBT.cur<CBT.items.length-1){CBT.cur++;cbtDraw()}else if(e.key==="ArrowLeft"&&CBT.cur>0){CBT.cur--;cbtDraw()}else if(/^[1-4]$/.test(e.key)&&CBT.screen==="exam"){var it=CBT.items[CBT.cur];if(it.q.type!=="order"){it.ans=+e.key;cbtDraw()}}}});

/* ---------- zoom ---------- */
function zoomOpen(html){var z=$("#zoom");z.innerHTML='<div class="zin">'+html+'</div><div class="zcap">แตะที่ใดก็ได้ หรือกด Esc เพื่อปิด</div>';z.classList.add("on")}
function zoomClose(){var z=document.getElementById("zoom");if(z)z.classList.remove("on")}
document.getElementById("zoom").addEventListener("click",zoomClose);
var TS=[0.9,1,1.15,1.3,1.5];
function textStep(d){var i=TS.indexOf(PREF.ts);if(i<0)i=1;i=Math.max(0,Math.min(TS.length-1,i+d));PREF.ts=TS[i];savePref();if(!CBT.on)draw();toast("ขนาดตัวอักษร "+Math.round(PREF.ts*100)+"%")}
$("#bminus").onclick=function(){textStep(-1)};$("#bplus").onclick=function(){textStep(1)};
function fxOpt(sel,good){if(REDUCE)return;var el=document.querySelector(sel);if(!el)return;el.classList.add(good?"bounce":"shake");setTimeout(function(){el.classList.remove("bounce","shake")},600)}
/* ---------- pen & laser ---------- */
var INK={on:false,tool:"pen",color:"#e0303a",data:{},cur:null,laser:[],raf:0};
var inkC=document.getElementById("ink"),ictx=inkC.getContext("2d");
function inkSize(){var d=window.devicePixelRatio||1;inkC.width=innerWidth*d;inkC.height=innerHeight*d;inkC.style.width=innerWidth+"px";inkC.style.height=innerHeight+"px";ictx.setTransform(d,0,0,d,0,0);inkDraw()}
function srect(){return stage.getBoundingClientRect()}
function toN(x,y){var r=srect();return [(x-r.left)/r.width,(y-r.top)/r.height]}
function toS(p){var r=srect();return [r.left+p[0]*r.width,r.top+p[1]*r.height]}
function strokePath(s){var r=srect(),sc=r.width/1920;ictx.save();ictx.lineCap="round";ictx.lineJoin="round";ictx.strokeStyle=s.color;ictx.globalAlpha=s.tool==="hl"?.35:1;ictx.lineWidth=(s.tool==="hl"?26:5)*Math.max(.5,sc*1.6);ictx.beginPath();s.pts.forEach(function(p,i){var q=toS(p);if(i)ictx.lineTo(q[0],q[1]);else ictx.moveTo(q[0],q[1])});if(s.pts.length===1){var q=toS(s.pts[0]);ictx.lineTo(q[0]+.1,q[1])}ictx.stroke();ictx.restore()}
function inkDraw(){ictx.clearRect(0,0,innerWidth,innerHeight);(INK.data[st.i]||[]).forEach(strokePath);if(INK.cur)strokePath(INK.cur);
 var now=performance.now();INK.laser=INK.laser.filter(function(p){return now-p.t<500});INK.laser.forEach(function(p,i){var a=1-(now-p.t)/500;ictx.beginPath();ictx.fillStyle="rgba(255,40,40,"+(a*.85)+")";ictx.arc(p.x,p.y,4+a*7,0,Math.PI*2);ictx.fill()});
 if(INK.laser.length){var h=INK.laser[INK.laser.length-1];ictx.beginPath();ictx.fillStyle="rgba(255,60,60,.35)";ictx.arc(h.x,h.y,18,0,Math.PI*2);ictx.fill();cancelAnimationFrame(INK.raf);INK.raf=requestAnimationFrame(inkDraw)}}
function inkBar(){var cols=["#e0303a","#2f6fd6","#1f9a6a","#f2b230","#16213a"];$("#inkbar").innerHTML=
 '<button data-ink="pen" class="'+(INK.tool==="pen"?"on":"")+'" title="ปากกา">✏️</button><button data-ink="hl" class="'+(INK.tool==="hl"?"on":"")+'" title="ปากกาเน้นข้อความ">🖍</button><button data-ink="laser" class="'+(INK.tool==="laser"?"on":"")+'" title="เลเซอร์พอยน์เตอร์">🔴</button><span class="sep"></span>'+
 cols.map(function(c){return '<button data-col="'+c+'" class="dot'+(INK.color===c?" on":"")+'" style="--c:'+c+'" aria-label="สี"></button>'}).join("")+'<span class="sep"></span><button data-ink="undo" title="ย้อนกลับ">↶</button><button data-ink="clear" title="ล้างหน้านี้">🗑</button><button data-ink="close" title="ปิดปากกา (P)">✕</button>'}
function inkMode(on){INK.on=on;if(on&&SZ.on)szMode(false);document.body.classList.toggle("inking",on);$("#bpen").classList.toggle("on",on);$("#inkbar").classList.toggle("on",on);inkBar();inkDraw();if(on)toast("✏️ วาดบนสไลด์ได้เลย · เปลี่ยนสไลด์แล้วเส้นจะอยู่กับหน้านั้น · P ปิด")}
inkC.addEventListener("pointerdown",function(e){if(!INK.on)return;inkC.setPointerCapture(e.pointerId);if(INK.tool==="laser"){INK.laser.push({x:e.clientX,y:e.clientY,t:performance.now()});inkDraw();return}INK.cur={tool:INK.tool,color:INK.color,pts:[toN(e.clientX,e.clientY)]};inkDraw()});
inkC.addEventListener("pointermove",function(e){if(!INK.on)return;if(INK.tool==="laser"){if(e.buttons||e.pointerType==="mouse"){INK.laser.push({x:e.clientX,y:e.clientY,t:performance.now()});inkDraw()}return}if(INK.cur){INK.cur.pts.push(toN(e.clientX,e.clientY));inkDraw()}});
function inkEnd(){if(INK.cur){(INK.data[st.i]=INK.data[st.i]||[]).push(INK.cur);INK.cur=null;inkDraw()}}
inkC.addEventListener("pointerup",inkEnd);inkC.addEventListener("pointercancel",inkEnd);
$("#inkbar").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var c=b.dataset.ink;
 if(b.dataset.col){INK.color=b.dataset.col;if(INK.tool==="laser")INK.tool="pen"}
 if(c==="pen"||c==="hl"||c==="laser")INK.tool=c;
 if(c==="undo"){(INK.data[st.i]||[]).pop()}
 if(c==="clear"){INK.data[st.i]=[]}
 if(c==="close"){inkMode(false);return}
 inkBar();inkDraw()});
$("#bpen").onclick=function(){inkMode(!INK.on)};
addEventListener("resize",inkSize);view.addEventListener("scroll",inkDraw,{passive:true});inkSize();
/* ---------- spot zoom ---------- */
var SZ={on:false,z:0,lvl:2.2};
function szApply(x,y){var sl=$("#slide"),r=stage.getBoundingClientRect(),ox=Math.max(0,Math.min(100,(x-r.left)/r.width*100)),oy=Math.max(0,Math.min(100,(y-r.top)/r.height*100));sl.style.transformOrigin=ox+"% "+oy+"%";sl.style.transform="scale("+SZ.lvl+")"}
function szReset(){var sl=document.getElementById("slide");if(sl){sl.style.transform="";}SZ.z=0;document.body.classList.remove("zoomed")}
function szMode(on){if(on&&INK.on)inkMode(false);SZ.on=on;szReset();document.body.classList.toggle("szmode",on);$("#bzoom").classList.toggle("on",on);if(on)toast("🔍 ซูมจุด: แตะตรงที่อยากขยาย · แตะอีกครั้งเพื่อย่อ · Esc ออก")}
$("#bzoom").onclick=function(){szMode(!SZ.on)};
$("#slide").addEventListener("click",function(e){if(!SZ.on)return;e.stopPropagation();e.preventDefault();
 if(SZ.z){szReset()}else{SZ.z=1;document.body.classList.add("zoomed");szApply(e.clientX,e.clientY)}},true);
$("#slide").addEventListener("pointermove",function(e){if(SZ.on&&SZ.z&&e.pointerType==="mouse")szApply(e.clientX,e.clientY)});
/* ---------- name wheel ---------- */
var WH={rooms:{},room:"",out:true,gone:[],ang:0};
try{var wr=JSON.parse(localStorage.getItem("krubenz_rooms")||"null");if(wr){WH.rooms=wr.rooms||{};WH.room=wr.last||""}}catch(e){}
function whSave(){try{localStorage.setItem("krubenz_rooms",JSON.stringify({rooms:WH.rooms,last:WH.room}))}catch(e){}}
function whRead(){var room=($("#whRoom").value||"ห้องของฉัน").trim(),names=$("#whNames").value.split("\n").map(function(x){return x.trim()}).filter(Boolean);if(room!==WH.room)WH.gone=[];WH.room=room;WH.out=$("#whOut").checked;WH.rooms[room]=names;whSave();return names}
function whDraw(cv,names,ang){var c=cv.getContext("2d"),S=cv.width,r=S/2-8,n=names.length,cols=["#ff7a59","#f2b230","#2f6fd6","#157a52","#7a4bd1","#ff6f91","#16a3b8","#c2410c"];c.clearRect(0,0,S,S);c.save();c.translate(S/2,S/2);c.rotate(ang);
 for(var i=0;i<n;i++){var a0=i*2*Math.PI/n,a1=(i+1)*2*Math.PI/n;c.beginPath();c.moveTo(0,0);c.arc(0,0,r,a0,a1);c.closePath();c.fillStyle=cols[i%cols.length];if(n%cols.length===1&&i===n-1)c.fillStyle=cols[3];c.fill();c.strokeStyle="#fff";c.lineWidth=3;c.stroke();
  c.save();c.rotate((a0+a1)/2);c.fillStyle="#fff";c.font="600 "+Math.max(12,Math.min(30,560/n))+"px Mitr, Prompt, sans-serif";c.textAlign="right";c.textBaseline="middle";var nm=names[i];if(nm.length>16)nm=nm.slice(0,15)+"…";c.fillText(nm,r-16,0);c.restore()}
 c.restore();c.beginPath();c.arc(S/2,S/2,34,0,Math.PI*2);c.fillStyle="#16213a";c.fill();c.strokeStyle="#fff";c.lineWidth=4;c.stroke()}
function whSpin(){var names=whRead();var pool=WH.out?names.filter(function(x){return WH.gone.indexOf(x)<0}):names.slice();if(pool.length<2){if(names.length<2){toast("ใส่ชื่ออย่างน้อย 2 คน");return}WH.gone=[];pool=names.slice();toast("สุ่มครบทุกคนแล้ว เริ่มรอบใหม่")}
 $("#tools").classList.remove("on");var ov=$("#wwheel");ov.innerHTML='<div class="whbox"><div class="whptr"></div><canvas id="whcv" width="560" height="560"></canvas><div class="whres" id="whres">กำลังหมุน…</div><div class="whbtns"><button class="btn" data-tk="whagain" disabled>หมุนอีกครั้ง</button><button class="btn ghost" data-tk="whclose">ปิด</button></div></div>';ov.classList.add("on");
 var cv=$("#whcv"),n=pool.length,pick=Math.floor(Math.random()*n),seg=2*Math.PI/n,target=-Math.PI/2-(pick+.5)*seg,base=WH.ang%(2*Math.PI),spins=REDUCE?0:6,end=target-2*Math.PI*spins;while(end>base-2*Math.PI*spins)end-=2*Math.PI;
 var D=REDUCE?10:4200,t0=performance.now(),last=-1;(function step(t){var p=Math.min(1,(t-t0)/D),e=1-Math.pow(1-p,4),ang=base+(end-base)*e;WH.ang=ang;whDraw(cv,pool,ang);var idx=Math.floor(((-Math.PI/2-ang)%(2*Math.PI)+4*Math.PI)%(2*Math.PI)/seg);if(idx!==last){last=idx;sfx("tick")}
  if(p<1)requestAnimationFrame(step);else{var who=pool[pick];if(WH.out)WH.gone.push(who);$("#whres").innerHTML=MASCOT(84,"happy","jump")+'<b>'+esc(who)+'</b>';sfx("win");confetti(innerWidth/2,innerHeight*.35);var ag=document.querySelector('[data-tk="whagain"]');if(ag)ag.disabled=false}})(t0)}
/* ---------- teacher toolkit ---------- */
var TK={sec:180,left:180,run:false,iv:null,teams:[0,0],names:["ทีม A","ทีม B","ทีม C","ทีม D"],tcol:["#2f6fd6","#c2410c","#157a52","#7a4bd1"],showT:false,showS:false,used:[]};
function beep(){try{var C=window.AudioContext||window.webkitAudioContext;if(!C)return;TK.ac=TK.ac||new C();var o=TK.ac.createOscillator(),g=TK.ac.createGain();o.frequency.value=880;o.connect(g);g.connect(TK.ac.destination);g.gain.setValueAtTime(.25,TK.ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,TK.ac.currentTime+1.2);o.start();o.stop(TK.ac.currentTime+1.2)}catch(e){}}
function tkTimer(){var w=$("#wtimer");w.classList.toggle("on",TK.showT);w.classList.toggle("done",TK.left<=0);
 w.innerHTML='<b>'+fmt(TK.left)+'</b><div><button data-tk="tgo">'+(TK.run?"⏸":"▶")+'</button><button data-tk="treset">↺</button><button data-tk="tclose">✕</button></div>'}
function tkTick(){TK.left--;if(TK.left<=0){TK.left=0;TK.run=false;clearInterval(TK.iv);beep();toast("⏰ หมดเวลา!")}tkTimer()}
function tkScore(){var w=$("#wscore");w.classList.toggle("on",TK.showS);
 w.innerHTML=TK.teams.map(function(v,i){return '<div class="tm" style="--c:'+TK.tcol[i]+'"><span>'+TK.names[i]+'</span><b>'+v+'</b><button data-tk="minus" data-i="'+i+'">−</button><button data-tk="plus" data-i="'+i+'">+</button></div>'}).join("")+'<button class="x" data-tk="sclose">✕</button>'}
function tkPanel(){$("#toolsbox").innerHTML='<div class="shead"><b>🧰 เครื่องมือครู</b><button data-tk="close" aria-label="ปิด">✕</button></div>'+
 '<p class="sl">⏱ จับเวลากิจกรรม</p><div class="seg five">'+[1,2,3,5,10].map(function(m){return '<button data-tk="tset" data-m="'+m+'"><b>'+m+'</b><span>นาที</span></button>'}).join("")+'</div>'+
 '<p class="sl">🎲 สุ่มเลขที่นักเรียน</p><div class="pickrow"><label for="pickN">จำนวนนักเรียน</label><input id="pickN" type="number" min="2" max="60" value="'+(TK.n||30)+'"><label class="chk"><input id="pickNo" type="checkbox"'+(TK.norep!==false?" checked":"")+'> ไม่ซ้ำคนเดิม</label><button class="btn" data-tk="pick">สุ่มเลย 🎲</button></div><p class="hint">'+(TK.used.length?'สุ่มไปแล้ว: '+TK.used.join(", ")+' <button class="lnk" data-tk="pclear">ล้าง</button>':'ยังไม่ได้สุ่ม')+'</p>'+
 '<p class="sl">🎡 วงล้อสุ่มชื่อ</p><div class="whrow"><label for="whRoom">ห้อง</label><input id="whRoom" list="whRooms" value="'+esc(WH.room)+'" placeholder="เช่น ม.3/1"><datalist id="whRooms">'+Object.keys(WH.rooms).map(function(r){return '<option value="'+esc(r)+'">'}).join("")+'</datalist><label class="chk"><input id="whOut" type="checkbox"'+(WH.out?" checked":"")+'> ไม่สุ่มซ้ำ</label></div><textarea id="whNames" rows="4" placeholder="พิมพ์ชื่อนักเรียน บรรทัดละ 1 คน">'+esc((WH.rooms[WH.room]||[]).join("\n"))+'</textarea><div class="whrow"><button class="btn" data-tk="wheel">หมุนวงล้อ 🎡</button><span class="hint">'+(WH.gone.length?'สุ่มไปแล้ว '+WH.gone.length+' คน <button class="lnk" data-tk="whreset">เริ่มใหม่</button>':'รายชื่อเก็บในเครื่องนี้เท่านั้น')+'</span></div>'+
 '<p class="sl">🏆 แข่งขันเป็นทีม</p><div class="seg three">'+[2,3,4].map(function(n){return '<button data-tk="teams" data-n="'+n+'" class="'+(TK.teams.length===n&&TK.showS?"on":"")+'"><b>'+n+' ทีม</b><span>แสดงกระดานคะแนน</span></button>'}).join("")+'</div><p class="hint">กระดานคะแนนและนาฬิกาลอยอยู่มุมขวาบน ใช้ได้ทุกสไลด์ · กด ✕ เพื่อซ่อน</p>'}
function tkPick(){var n=Math.max(2,Math.min(60,+($("#pickN").value)||30)),nr=$("#pickNo").checked;TK.n=n;TK.norep=nr;var pool=[];for(var i=1;i<=n;i++)if(!nr||TK.used.indexOf(i)<0)pool.push(i);if(!pool.length){TK.used=[];pool=[];for(i=1;i<=n;i++)pool.push(i)}
 var pick=pool[Math.floor(Math.random()*pool.length)],ov=$("#wpick");$("#tools").classList.remove("on");ov.classList.add("on");var c=0,iv=setInterval(function(){ov.innerHTML='<div class="pk"><span>เลขที่</span><b>'+(1+Math.floor(Math.random()*n))+'</b></div>';sfx("tick");if(++c>=(REDUCE?1:14)){clearInterval(iv);ov.innerHTML='<div class="pk fin"><span>เลขที่</span><b>'+pick+'</b>'+MASCOT(110,"happy","jump")+'<em>แตะเพื่อปิด</em></div>';TK.used.push(pick);confetti(innerWidth/2,innerHeight/2);sfx("win")}},70)}
document.addEventListener("click",function(e){var b=e.target.closest("[data-tk]");if(e.target.id==="wwheel"){$("#wwheel").classList.remove("on");return}if(e.target.id==="wpick"||e.target.closest("#wpick")){$("#wpick").classList.remove("on");return}if(e.target.id==="tools"){$("#tools").classList.remove("on");return}if(!b)return;var c=b.dataset.tk;
 if(c==="close")$("#tools").classList.remove("on");
 if(c==="tset"){TK.sec=TK.left=+b.dataset.m*60;TK.showT=true;TK.run=true;clearInterval(TK.iv);TK.iv=setInterval(tkTick,1000);$("#tools").classList.remove("on");tkTimer()}
 if(c==="tgo"){if(TK.left<=0)TK.left=TK.sec;TK.run=!TK.run;clearInterval(TK.iv);if(TK.run)TK.iv=setInterval(tkTick,1000);tkTimer()}
 if(c==="treset"){TK.left=TK.sec;TK.run=false;clearInterval(TK.iv);tkTimer()}
 if(c==="tclose"){TK.showT=false;TK.run=false;clearInterval(TK.iv);tkTimer()}
 if(c==="teams"){var n=+b.dataset.n;TK.teams=[];for(var i=0;i<n;i++)TK.teams.push(0);TK.showS=true;$("#tools").classList.remove("on");tkScore()}
 if(c==="plus"){TK.teams[+b.dataset.i]++;tkScore();sfx("pop");var r=b.getBoundingClientRect();confetti(r.left+r.width/2,r.top)}
 if(c==="minus"){TK.teams[+b.dataset.i]=Math.max(0,TK.teams[+b.dataset.i]-1);tkScore()}
 if(c==="sclose"){TK.showS=false;tkScore()}
 if(c==="pick")tkPick();
 if(c==="pclear"){TK.used=[];tkPanel()}
 if(c==="wheel")whSpin();
 if(c==="whagain"){$("#wwheel").classList.remove("on");tkPanel();setTimeout(whSpin,30)}
 if(c==="whclose")$("#wwheel").classList.remove("on");
 if(c==="whreset"){WH.gone=[];tkPanel()}});
$("#btk").onclick=function(){tkPanel();$("#tools").classList.add("on")};
tkTimer();tkScore();
fromHash();draw();
})();
