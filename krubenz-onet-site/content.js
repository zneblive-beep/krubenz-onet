// โครงสร้างผังสอบ 2569 + กลยุทธ์รายหัวข้อ
var TOPICS = {
 T11:{code:"ต 1.1",name:"อ่าน–ตีความ–ปฏิบัติตามคำสั่ง",en:"Reading & Interpreting",items:12,pts:"37.50",color:"#2a62c4",lt:"#9fbdf5",icon:"read",
  what:"ปฏิบัติตามคำแนะนำ/ขั้นตอน (เรียงลำดับ), ถ่ายโอนข้อมูลจากภาพ กราฟ แผนภูมิ, จับใจความสำคัญ รายละเอียด และอนุมานจากเรื่องสั้น ข่าว บทความ",
  where:"ข้อสอบเก่า ข้อ 10–19 (เรียงลำดับ, บรรยายภาพ, เรื่องขำขัน/นิทาน, ข่าว)",note:"มีข้อ ‘เรียงลำดับ’ แบบไม่มีตัวเลือก 1 ข้อ (31 ข้อปรนัย + 1 ข้อเรียงลำดับ)",strand:1},
 T12:{code:"ต 1.2",name:"สนทนา–สื่อสารระหว่างบุคคล",en:"Conversation & Functions",items:7,pts:"21.875",color:"#c2410c",lt:"#ff9f86",icon:"chat",
  what:"ทักทาย ขอบคุณ ขอโทษ ชมเชย ชักชวน ขอร้อง เสนอ–ตอบรับ–ปฏิเสธความช่วยเหลือ ขอ/ให้ข้อมูล แสดงความรู้สึกและความคิดเห็นพร้อมเหตุผล",
  where:"ข้อสอบเก่า ข้อ 1–9 (บทสนทนา 3 ชุด)"},
 T13:{code:"ต 1.3",name:"เขียนบรรยาย–สรุป–แสดงความคิดเห็น",en:"Writing: Describe, Summarise, Give Opinions",items:7,pts:"21.875",color:"#7a4bd1",lt:"#a99bf0",icon:"pen",
  what:"บรรยายตนเอง ประสบการณ์ เหตุการณ์ (diary, announcement, กราฟ), แสดงความคิดเห็นพร้อมเหตุผล (movie review) — วัดคำศัพท์ คำเชื่อม tense และไวยากรณ์ในบริบท",
  where:"ข้อสอบเก่า ข้อ 24–32 (เติมคำในข้อความ 2 ชิ้น)"},
 T21:{code:"ต 2.1",name:"ภาษาและวัฒนธรรมเจ้าของภาษา",en:"Language & Culture",items:2,pts:"6.25",color:"#9a6200",lt:"#f6c86a",icon:"globe",
  what:"เลือกภาษา น้ำเสียง กิริยาท่าทางให้เหมาะกับบุคคลและโอกาส, ชีวิตความเป็นอยู่ ขนบธรรมเนียม ประเพณีของเจ้าของภาษา",
  where:"บทสนทนาเชิงวัฒนธรรม + ข้อ 20–23 (feature story: ความเชื่อ เทศกาล)",note:"เป็นตัวชี้วัดร่วมกับ ต1.1 และ ต1.2 จึงแฝงอยู่ในบทสนทนาและบทอ่าน"},
 T22:{code:"ต 2.2",name:"เปรียบเทียบภาษาอังกฤษ–ภาษาไทย",en:"Comparing English & Thai",items:4,pts:"12.50",color:"#157a52",lt:"#7fd8b6",icon:"swap",
  what:"การออกเสียงประโยคชนิดต่าง ๆ, เครื่องหมายวรรคตอน, การลำดับคำ (word order) ตามโครงสร้างประโยค",
  where:"ข้อ ‘เรียงคำ’ ในพาร์ต Writing ปีละ 2 ข้อ (เช่น gothic detective story, the more likely they were)"}
};
var TOPIC_ORDER=["T11","T12","T13","T21","T22"];
var STRANDS=[
 {n:1,name:"ภาษาเพื่อการสื่อสาร",en:"Language for Communication",topics:["T11","T12","T13"],items:26,pts:"81.25",color:"#2a62c4",
  desc:"เข้าใจและตีความเรื่องที่ฟัง–อ่าน (ต1.1) · สนทนาแลกเปลี่ยนข้อมูล ความรู้สึก ความคิดเห็น (ต1.2) · นำเสนอข้อมูล ความคิดรวบยอด และความคิดเห็นด้วยการเขียน (ต1.3)"},
 {n:2,name:"ภาษาและวัฒนธรรม",en:"Language and Culture",topics:["T21","T22"],items:6,pts:"18.75",color:"#9a6200",
  desc:"ใช้ภาษาให้เหมาะกับวัฒนธรรมเจ้าของภาษา (ต2.1) · เปรียบเทียบความเหมือน–ต่างระหว่างภาษาอังกฤษกับภาษาไทย: การออกเสียง วรรคตอน ลำดับคำ (ต2.2)"}
];

// สไลด์กลยุทธ์ (HTML ภายใน)
var STRATEGY = {
T11:[
{title:"4 แบบอ่านที่ออกซ้ำทุกปี",html:`
<div class="grid4">
 <div class="card"><div class="num">ข้อ 10</div><h3>เรียงลำดับขั้นตอน</h3><p>สูตรอาหาร, วิธีใช้เครื่องใช้, ขั้นตอนเดินทาง</p><ul><li>วงคำบอกลำดับ <b>First → Then → Next → After that → Finally</b></li><li>จับคู่ ‘กริยา’ กับภาพ (rinse = wash)</li><li>ดูข้อแรก–ข้อสุดท้ายก่อน ตัดตัวเลือกเร็ว</li><li>ปี 68 และผังสอบ 69 เป็นแบบ <b>ไม่มีตัวเลือก</b> ต้องจัดเรียงเองบนหน้าจอ</li></ul></div>
 <div class="card"><div class="num">ข้อ 11</div><h3>อ่านบรรยาย → เลือกภาพ/กราฟ</h3><p>คน (cartoon), บ้าน, หอคอย, แผนภูมิวงกลม</p><ul><li>ขีดเส้นใต้ ‘ลักษณะ’ ทุกตัว</li><li>ตัดภาพที่ขัดกับลักษณะเด่นที่สุดก่อน</li><li>กราฟ: เช็กลำดับ (the third), ผลต่าง, ผลรวม</li></ul></div>
 <div class="card"><div class="num">ข้อ 12–15</div><h3>เรื่องขำขัน / นิทาน</h3><p>Joke, เรื่องสั้นให้ข้อคิด</p><ul><li><b>มุกอยู่ประโยคสุดท้าย</b> — ข้อ inference ถามมุกเสมอ</li><li>‘happened first’ = ดูต้นเรื่อง (past continuous)</li><li>ถาม title → เลือกที่ครอบคลุมข้อคิด</li></ul></div>
 <div class="card"><div class="num">ข้อ 16–19</div><h3>ข่าว (News report)</h3><p>อุบัติเหตุ ภัยพิบัติ สัตว์ สิ่งแวดล้อม</p><ul><li>ใจความหลัก = ประโยคแรก (lead)</li><li>‘What happens next?’ → ย่อหน้าสุดท้าย (investigation → release findings)</li><li>ระวังตัวเลข: more than = over</li></ul></div>
</div>`},
{title:"ประเภทคำถาม & วิธีหาคำตอบ",html:`
<table class="tbl"><tr><th>คำถามที่เจอ</th><th>ถามอะไร</th><th>วิธีหา</th></tr>
<tr><td><b>mainly about / main idea / best title</b></td><td>ใจความหลักทั้งเรื่อง</td><td>ตัวเลือกต้อง ‘ไม่กว้างไป–ไม่แคบไป’ ครอบคลุมทุกย่อหน้า</td></tr>
<tr><td><b>According to… / Which is TRUE?</b></td><td>รายละเอียด</td><td>หาคีย์เวิร์ดในเรื่อง แล้วเทียบ ‘ความหมาย’ ไม่ใช่คำเหมือน</td></tr>
<tr><td><b>…NOT mentioned / NOT offered</b></td><td>สิ่งที่ไม่มี</td><td>ติ๊กถูกตัวเลือกที่เจอในเรื่อง ตัวที่เหลือคือคำตอบ</td></tr>
<tr><td><b>can be inferred / most likely</b></td><td>อนุมาน (ไม่ได้เขียนตรง ๆ)</td><td>ต้องมีหลักฐานรองรับ; ห้ามเลือกที่ ‘ฟังดูดี’ แต่ไม่มีในเรื่อง</td></tr>
<tr><td><b>happened first</b></td><td>ลำดับเหตุการณ์</td><td>เรียงเหตุการณ์ตามเวลา ไม่ใช่ตามตัวเลือก</td></tr>
<tr><td><b>purpose of the last paragraph</b></td><td>หน้าที่ของย่อหน้า</td><td>to suggest a solution / to explain / to give an example</td></tr>
<tr><td><b>Which question can be answered?</b></td><td>มีข้อมูลตอบได้</td><td>ลองหาคำตอบให้ทุกตัวเลือก ตัวที่ตอบได้จริงคือคำตอบ</td></tr>
<tr><td><b>Who is most likely to…?</b></td><td>นำกฎไปใช้</td><td>เทียบเงื่อนไขทีละคน ระวัง ‘give’ vs ‘receive’</td></tr></table>`},
{title:"กับดัก Paraphrase ที่ออกจริง",html:`
<div class="two">
<table class="tbl"><tr><th>ในเรื่องเขียนว่า</th><th>ในตัวเลือกเขียนว่า</th></tr>
<tr><td>leaving the scene of the accident</td><td>not staying at the crash site</td></tr>
<tr><td>killed more than 2,900 people</td><td>over 2,900</td></tr>
<tr><td>doing maintenance work</td><td>repair workers</td></tr>
<tr><td>any disruption to the water</td><td>the disturbance of their reflections</td></tr>
<tr><td>raise funds for those in need</td><td>raise funds for the needy</td></tr>
<tr><td>rinse the lettuce</td><td>wash some lettuce</td></tr>
<tr><td>the findings have yet to be released</td><td>police will release their findings</td></tr></table>
<div class="card warn"><h3>คำอันตรายในตัวเลือก</h3><p>ตัวเลือกที่มีคำเหล่านี้ มักผิด เพราะ ‘เกินจริง’ กว่าในเรื่อง</p><div class="chips big"><span>only</span><span>all</span><span>never</span><span>always</span><span>mainly</span><span>every</span><span>completely</span></div><p class="small">ตัวอย่าง: ‘<i>Only</i> adult female sea lions have been affected’ ผิด เพราะข่าวเขียนว่า <i>largely</i> affecting (ส่วนใหญ่)</p></div></div>`},
{title:"คลังคำ: บรรยายรูปลักษณ์และกราฟ",html:`
<div class="two">
<div class="card"><h3>ใบหน้า & รูปร่าง (ข้อ 11)</h3><table class="tbl sm">
<tr><td>oval / round / square-shaped face</td><td>หน้ารูปไข่ / กลม / เหลี่ยม</td></tr>
<tr><td>high cheekbones · pointed chin</td><td>โหนกแก้มสูง · คางแหลม</td></tr>
<tr><td>deep-set / big eyes</td><td>ตาลึก / ตาโต</td></tr>
<tr><td>thick / thin eyebrows</td><td>คิ้วหนา / บาง</td></tr>
<tr><td>upturned nose · thin / large lips</td><td>จมูกเชิด · ปากบาง / หนา</td></tr>
<tr><td>long wavy · curly · straight · shoulder-length hair</td><td>ผมยาวลอน · หยิก · ตรง · ประบ่า</td></tr>
<tr><td>beard · moustache</td><td>เครา · หนวด</td></tr>
<tr><td>curved legs · cone-like · arches</td><td>ขาโค้ง · ทรงกรวย · ซุ้มโค้ง</td></tr></table></div>
<div class="card"><h3>กราฟ & แผนภูมิ</h3><table class="tbl sm">
<tr><td>increase / rise / grow</td><td>เพิ่มขึ้น</td></tr>
<tr><td>decrease / drop / fall</td><td>ลดลง</td></tr>
<tr><td>the majority (of)</td><td>ส่วนใหญ่</td></tr>
<tr><td>the most / the least popular</td><td>นิยมมากที่สุด / น้อยที่สุด</td></tr>
<tr><td>the third most popular</td><td>นิยมเป็นอันดับสาม</td></tr>
<tr><td>account for 10%</td><td>คิดเป็น 10%</td></tr>
<tr><td>a 3 percent difference</td><td>ต่างกัน 3%</td></tr>
<tr><td>overall · in general</td><td>โดยรวม · โดยทั่วไป</td></tr></table></div></div>`}
],
T12:[
{title:"บทสนทนา: ทำ 3 ขั้น ตอบถูกเกือบทุกข้อ",html:`
<div class="steps">
 <div class="step"><b>1</b><h3>อ่าน Situation</h3><p>ใครคุยกับใคร ที่ไหน เรื่องอะไร — บอกน้ำเสียง (สุภาพ/เป็นกันเอง) และหัวข้อ</p></div>
 <div class="step"><b>2</b><h3>อ่านประโยค ‘หลัง’ ช่องว่าง</h3><p><b>คำตอบซ่อนอยู่ในประโยคถัดไปเสมอ</b> เช่น ตอบว่า <i>Ten.</i> → ช่องว่างต้องถามเวลา, ตอบว่า <i>Could you? Thank you.</i> → ช่องว่างคือการเสนอช่วย</p></div>
 <div class="step"><b>3</b><h3>เลือกตาม ‘หน้าที่’ ของประโยค</h3><p>ถามว่าช่องว่างทำหน้าที่อะไร: ทักทาย? ชวน? ขอร้อง? ปลอบ? ยินดี? แล้วเลือกสำนวนที่ทำหน้าที่นั้นและเข้ากับข่าวดี/ข่าวร้าย</p></div>
</div>
<div class="card tip"><b>ตัวอย่างจริง (ปี 2567):</b> Emma: And ___? &nbsp; Claire: <u>Ten.</u> → ต้องเป็น <b>when were we supposed to meet?</b> เพราะคำตอบคือเวลา</div>`},
{title:"คลังสำนวนตามหน้าที่ (Functions)",html:`
<table class="tbl sm"><tr><th>หน้าที่</th><th>พูดว่า</th><th>ตอบว่า</th></tr>
<tr><td>ถามสารทุกข์</td><td>What's up? · How are things going? · What's the matter?</td><td>Couldn't be better! · Not so good.</td></tr>
<tr><td>เสนอความช่วยเหลือ</td><td>Can I give you a hand? · Shall I help you? · Need some help?</td><td>Could you? That'd be great. / Thanks, but I can manage.</td></tr>
<tr><td>ขอร้อง</td><td>Could you…? · Would you mind + V-ing? · I'd appreciate it if…</td><td>Sure. · Certainly. · Not at all. / I'm afraid I can't.</td></tr>
<tr><td>ขออนุญาต</td><td>May I…? · Can I…?</td><td>Go right ahead. · Please do. · Of course.</td></tr>
<tr><td>ชักชวน / แนะนำ</td><td>Why don't you…? · Let's… · How about + V-ing? · You'd better…</td><td>Good idea! · I'd love to. / I'm afraid I can't.</td></tr>
<tr><td>ขอบคุณ</td><td>Thanks for your advice. · Thank you so much.</td><td>No problem. · My pleasure. · Anytime.</td></tr>
<tr><td>ขอโทษ</td><td>Oops! Sorry. · Forgive me.</td><td>It happens. · Never mind. · That's all right.</td></tr>
<tr><td>ยินดี / เห็นใจ</td><td>(ข่าวดี) Congratulations! · That's great!</td><td>(ข่าวร้าย) Sorry to hear that. · Get well soon.</td></tr>
<tr><td>ความเห็น</td><td>I think… · I believe… · It's a must-see. · That sounds complicated.</td><td>I agree. · I'm not sure. · I have no idea.</td></tr></table>`},
{title:"สำนวนที่ออกสอบแล้ว (จำเป็นชุด)",html:`
<div class="idioms">
<div><b>on cloud nine</b><span>มีความสุขมาก</span></div><div><b>give someone a hand</b><span>ช่วยเหลือ</span></div>
<div><b>couldn't be better</b><span>ดีสุด ๆ</span></div><div><b>I can't help it</b><span>ห้ามตัวเองไม่ได้</span></div>
<div><b>make ends meet</b><span>หาเงินพอใช้</span></div><div><b>Either will do</b><span>อันไหนก็ได้</span></div>
<div><b>Suit yourself</b><span>ตามใจเธอ</span></div><div><b>Knock it off</b><span>หยุดได้แล้ว</span></div>
<div><b>That's the ticket</b><span>นั่นแหละใช่เลย</span></div><div><b>I give up</b><span>ยอมแพ้</span></div>
<div><b>a must-see</b><span>ต้องดูให้ได้</span></div><div><b>It happens</b><span>เรื่องแบบนี้เกิดขึ้นได้</span></div>
<div><b>keep my fingers crossed</b><span>ขอให้โชคดี</span></div><div><b>break a leg</b><span>ขอให้แสดงได้ดี</span></div>
<div><b>better late than never</b><span>มาช้าดีกว่าไม่มา</span></div><div><b>That's unbelievable!</b><span>ไม่น่าเชื่อ!</span></div>
</div>`}
],
T13:[
{title:"พาร์ตเขียน: 4 รูปแบบข้อความ + วิธีเติมคำ",html:`
<div class="two">
<div class="card"><h3>ข้อความที่ออก (ข้อ 24–32)</h3><table class="tbl sm">
<tr><td><b>Diary</b> 2564–66</td><td>เล่าเรื่องตัวเอง → ระวัง tense อดีต / look forward to + V-ing</td></tr>
<tr><td><b>Announcement</b> 2567</td><td>ประกาศ → provide…with, from…onward, Once…</td></tr>
<tr><td><b>Chart description</b> 2568</td><td>บรรยายกราฟ → increased, However, came from</td></tr>
<tr><td><b>Movie review</b> ทุกปี</td><td>ความเห็น → -ing/-ed, although, Passive, who/which</td></tr></table></div>
<div class="card"><h3>4 คำถามก่อนเลือกคำตอบ</h3><ol class="big">
<li>ช่องว่างต้องการ <b>คำชนิดไหน</b>? (noun / verb / adj / conjunction)</li>
<li>ถ้าเป็นกริยา: <b>tense</b> อะไร? Active หรือ Passive?</li>
<li>ถ้าเป็นคำเชื่อม: ประโยคสองข้าง <b>ขัดแย้ง / เหตุผล / ผลลัพธ์ / เวลา</b>?</li>
<li>ถ้าเป็นคำศัพท์: แปลแล้ว <b>เข้าความหมาย</b> และคำคู่ (collocation) ไหม?</li></ol></div></div>`},
{title:"Grammar hit list จาก 5 ปีย้อนหลัง",html:`
<table class="tbl sm"><tr><th>เรื่อง</th><th>ตัวอย่างที่ออกจริง</th><th>จำสั้น ๆ</th></tr>
<tr><td><b>คำเชื่อม</b> (ออกทุกปี)</td><td>while · therefore · as · although · As soon as · However · because</td><td>ดูความสัมพันธ์สองประโยค</td></tr>
<tr><td><b>-ing / -ed adjective</b></td><td>is disappointing · was pleasantly surprised · interesting</td><td>สิ่งที่ทำให้รู้สึก = -ing · คนรู้สึก = -ed</td></tr>
<tr><td><b>V-ing หลัง preposition</b></td><td>look forward to going · worried about me spending</td><td>to ใน look forward to = บุพบท</td></tr>
<tr><td><b>Passive</b></td><td>is interrupted · was nominated · (the best movie) released in 2023</td><td>ประธาน ‘ถูกกระทำ’ → be + V3</td></tr>
<tr><td><b>Tense</b></td><td>have learned · the best… I have seen · increased (2011–2016)</td><td>ever/the best → Present Perfect</td></tr>
<tr><td><b>Relative pronoun</b></td><td>Tom Cruise, who plays… · against which</td><td>คน = who · สิ่งของ = which · หลังบุพบทห้าม that</td></tr>
<tr><td><b>Collocation</b></td><td>pay attention to · stand out · provide A with B · from… onward · live action</td><td>คำคู่ต้องท่องเป็นชุด</td></tr>
<tr><td><b>Infinitive of purpose</b></td><td>sent away to spend some time</td><td>‘เพื่อ…’ = to + V1</td></tr></table>`},
{title:"แผนที่คำเชื่อม (Conjunctions & Connectives)",html:`
<div class="conj">
<div style="--c:#c2410c"><h3>ขัดแย้ง</h3><p>but · although · though · while · however, · even though</p><small>ข้อดี ↔ ข้อเสีย</small></div>
<div style="--c:#2a62c4"><h3>เหตุผล</h3><p>because · as · since</p><small>ผล + because + เหตุ</small></div>
<div style="--c:#157a52"><h3>ผลลัพธ์</h3><p>so · therefore, · as a result,</p><small>เหตุ ; therefore, ผล</small></div>
<div style="--c:#7a4bd1"><h3>เวลา</h3><p>when · before · after · as soon as · once · until</p><small>As soon as Cait arrives, …</small></div>
<div style="--c:#9a6200"><h3>เงื่อนไข</h3><p>if · unless (= if not)</p><small>If you know…, it does not matter…</small></div>
<div style="--c:#555"><h3>ลำดับ</h3><p>First, · Then, · Next, · After that, · Finally,</p><small>ใช้ในข้อเรียงลำดับ</small></div>
</div>
<div class="card tip"><b>เครื่องหมายช่วยตัดสิน:</b> <i>However,</i> และ <i>therefore,</i> ตามด้วย comma (หรืออยู่หลัง ;) ส่วน <i>although / because</i> ตามด้วยประโยค (ประธาน + กริยา) ทันที</div>`}
],
T21:[
{title:"วัฒนธรรมในข้อสอบ: แนวโน้ม 5 ปี",html:`
<div class="two">
<div class="card"><h3>Feature story (ข้อ 20–23)</h3><table class="tbl sm">
<tr><td>2564</td><td>ความเชื่อเรื่องรถขนศพ (hearse)</td></tr>
<tr><td>2565</td><td>ห้ามกางร่มในบ้าน</td></tr>
<tr><td>2566</td><td>กระจกแตก โชคร้าย 7 ปี</td></tr>
<tr><td>2567</td><td>Boxing Day (26 ธ.ค.)</td></tr>
<tr><td>2568</td><td>Red Nose Day (การกุศล)</td></tr></table>
<p class="small">แนวโน้ม: ความเชื่อโชคลาง 3 ปี → <b>วันสำคัญ/เทศกาลของเจ้าของภาษา</b> 2 ปีล่าสุด</p></div>
<div class="card"><h3>บทสนทนาเชิงวัฒนธรรม</h3><table class="tbl sm">
<tr><td>2565</td><td>มารยาทการทานซุปของชาวตะวันตก (ตักออกจากตัว)</td></tr>
<tr><td>2566</td><td>ให้กำลังใจ: keep my fingers crossed</td></tr>
<tr><td>2567</td><td>การตรงต่อเวลา = ให้เกียรติผู้อื่น</td></tr>
<tr><td>2568</td><td>คำอุทาน Oops! + ขอโทษ</td></tr>
<tr><td>2568</td><td>การประชด (sarcasm) อ่านจากสีหน้า–น้ำเสียง</td></tr></table></div></div>`},
{title:"Culture cards: เทศกาลที่ควรรู้ก่อนสอบ",html:`
<div class="cult">
<div><b>Boxing Day</b><i>26 Dec · UK</i><span>วันหลังคริสต์มาส ให้ของขวัญลูกจ้าง/คนยากไร้ ปัจจุบันเป็นวันลดราคา</span></div>
<div><b>Red Nose Day</b><i>มี.ค. · UK/US</i><span>ซื้อจมูกแดงพลาสติก รายได้เข้าการกุศล เริ่มจาก Comic Relief 1985</span></div>
<div><b>Thanksgiving</b><i>พฤหัสฯ ที่ 4 ของ พ.ย. · US</i><span>ครอบครัวรวมตัว ทานไก่งวง ขอบคุณสิ่งดี ๆ ในชีวิต</span></div>
<div><b>Halloween</b><i>31 Oct</i><span>แต่งชุดผี เด็ก ๆ trick-or-treat ขอขนม แกะสลักฟักทอง (jack-o'-lantern)</span></div>
<div><b>April Fools' Day</b><i>1 Apr</i><span>แกล้งกันแบบไม่อันตราย (prank) ที่อังกฤษแกล้งได้ถึงเที่ยงวัน</span></div>
<div><b>Bonfire Night</b><i>5 Nov · UK</i><span>Guy Fawkes Night จุดกองไฟและพลุ รำลึกแผนวางระเบิดรัฐสภาปี 1605</span></div>
<div><b>Pancake Day</b><i>Shrove Tuesday · UK</i><span>กินแพนเค้กก่อนเข้าช่วงถือศีล Lent มีการแข่งวิ่งพลิกแพนเค้ก</span></div>
<div><b>St Patrick's Day</b><i>17 Mar · Ireland</i><span>แต่งชุดสีเขียว สัญลักษณ์ใบโคลเวอร์ (shamrock) ขบวนพาเหรด</span></div>
</div>
<p class="small">มารยาทที่ควรรู้: small talk เรื่องดินฟ้าอากาศ · ตรงต่อเวลา · ต่อคิว (queue) · ให้ทิป (tip) ในอเมริกา · สบตาเวลาคุย · ไม่ถามอายุ/เงินเดือน</p>`}
],
T22:[
{title:"ลำดับคำ: อังกฤษ ‘กลับด้าน’ กับไทย",html:`
<div class="two">
<div class="card"><h3>คำนาม + คำขยาย</h3>
<div class="flip"><div>ไทย</div><p>ภาพยนตร์ <u>แอ็กชัน</u> <u>ระทึกใจ</u></p><div>อังกฤษ</div><p><u>tense</u> <u>action</u> <b>scenes</b></p></div>
<p>คำนามหลักอยู่ <b>ท้ายสุด</b> เสมอ คำขยายเรียงตาม <b>OSASCOMP</b>:</p>
<div class="osas"><span>Opinion<i>beautiful</i></span><span>Size<i>big</i></span><span>Age<i>old</i></span><span>Shape<i>round</i></span><span>Colour<i>red</i></span><span>Origin<i>Thai</i></span><span>Material<i>silk</i></span><span>Purpose<i>detective</i></span><span class="n">NOUN<i>story</i></span></div></div>
<div class="card"><h3>รูปแบบอื่นที่ออกสอบ</h3><table class="tbl sm">
<tr><td>Modal + adverb + V</td><td>we <b>should really never forget</b></td></tr>
<tr><td>come off as + adj</td><td>comes off <b>as kind of awkward</b></td></tr>
<tr><td>The + comp…, the + comp…</td><td>the younger…, <b>the more likely they were</b></td></tr>
<tr><td>Conjunction + S + V</td><td><b>Once you are registered</b>, …</td></tr>
<tr><td>Embedded question</td><td>Can you tell me <b>where the library is</b>?</td></tr>
<tr><td>Adverb ความถี่</td><td>She <b>is never</b> late. / She <b>never comes</b> late.</td></tr></table></div></div>`},
{title:"ออกเสียงประโยค & เครื่องหมายวรรคตอน: ไทย vs อังกฤษ",html:`
<div class="two">
<div class="card"><h3>Intonation (ทำนองเสียง)</h3><table class="tbl sm">
<tr><td>Yes/No question</td><td>Are you ready? <b>↗</b></td><td>ไทยใช้ ‘ไหม’ แทน</td></tr>
<tr><td>Wh-question</td><td>Where do you live? <b>↘</b></td><td>เสียงลง</td></tr>
<tr><td>Statement / Command</td><td>I like tea. <b>↘</b></td><td>เสียงลง</td></tr>
<tr><td>Or-question</td><td>Tea <b>↗</b> or coffee <b>↘</b>?</td><td>ขึ้นก่อน ลงท้าย</td></tr>
<tr><td>Tag question (ยืนยัน)</td><td>It's hot, isn't it? <b>↘</b></td><td>คล้าย ‘…นะ’</td></tr></table></div>
<div class="card"><h3>Punctuation</h3><table class="tbl sm">
<tr><td>. ? !</td><td>อังกฤษต้องปิดประโยค · ไทยเว้นวรรคแทน</td></tr>
<tr><td>,  (comma)</td><td>คั่นรายการ / หลัง However, / หน้า isn't it</td></tr>
<tr><td>'  (apostrophe)</td><td>sister's (ของ) · it's = it is · its = ของมัน</td></tr>
<tr><td>" "  (quotation)</td><td>คำพูดตรง: "Oops!" she said.</td></tr>
<tr><td>;  (semicolon)</td><td>เชื่อมสองประโยค: …concern; therefore, …</td></tr>
<tr><td>Capital letter</td><td>ต้นประโยค ชื่อเฉพาะ วัน เดือน ภาษา (Thai, Monday)</td></tr></table></div></div>`}
]
};

// แผนการสอน พ–ศ (11 พ.ย. 2569 – 29 ม.ค. 2570)
var SCHEDULE = [
["สัปดาห์ 1","11–13 พ.ย.","ปฐมนิเทศ + Pre-test ใน ‘ห้องสอบจำลอง Digital Testing’ (32 ข้อ) · ผังสอบ 2569 แยกสาระ · ฝึกใช้หน้าจอสอบ","ALL"],
["สัปดาห์ 2","18–20 พ.ย.","ต1.2 บทสนทนา: 3 ขั้นตอน + คลังสำนวน · ชุด 2564–2565","T12"],
["สัปดาห์ 3","25–27 พ.ย.","ต1.2 ต่อ: ชุด 2566–2568 + ฝึกใหม่ (Functions) · Quiz สำนวน","T12"],
["สัปดาห์ 4","2–4 ธ.ค.","ต1.1 ข้อ 10–11: เรียงลำดับ + บรรยายภาพ/กราฟ (ทุกปี) + ฝึกใหม่","T11"],
["สัปดาห์ 5","9–11 ธ.ค.","ต1.1 เรื่องขำขัน/นิทาน + ประเภทคำถาม (10 ธ.ค. วันรัฐธรรมนูญ — นัดชดเชยหรือให้การบ้าน)","T11"],
["สัปดาห์ 6","16–18 ธ.ค.","ต1.1 ข่าว + Paraphrase traps + ข่าว/Fact sheet ปี 2568","T11"],
["สัปดาห์ 7","23–25 ธ.ค.","สาระที่ 2 · ต2.1 วัฒนธรรม: บทสนทนาเชิงวัฒนธรรม + Feature story + Culture cards (ธีมคริสต์มาส/Boxing Day)","T21"],
["สัปดาห์ 8","30 ธ.ค.–1 ม.ค.","ช่วงปีใหม่ (31 ธ.ค., 1 ม.ค. วันหยุด) · การบ้าน: ทำชุดฝึกใหม่ทั้งหมดด้วยตัวเอง","HW"],
["สัปดาห์ 9","6–8 ม.ค.","ต1.3 เขียน (8 ม.ค. สทศ. ประกาศเลขที่นั่งสอบ–สนามสอบ): Diary/Announcement/Chart + Grammar hit list + คำเชื่อม","T13"],
["สัปดาห์ 10","13–15 ม.ค.","ต1.3 Movie review + ต2.2 ลำดับคำ, วรรคตอน, ทำนองเสียง","T22"],
["สัปดาห์ 11","20–22 ม.ค.","Mock test ห้องสอบจำลองบนคอมพิวเตอร์ 90 นาที · ดูผลแยกสาระ/มาตรฐาน · ซ่อมจุดอ่อนรายสาระ","ALL"],
["สัปดาห์ 12","27–29 ม.ค.","Mock test รอบสุดท้าย (สุ่มข้อใหม่) + ทบทวนสำนวน/คำศัพท์ · กฎห้องสอบ · ให้กำลังใจ","ALL"]
];
