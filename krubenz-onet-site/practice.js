// ข้อสอบฝึกใหม่ (แต่งใหม่ตามผังสอบ 2569) — PRACTICE
var PRACTICE = [

// ---------- T12 Conversation ----------
{id:"p12a",y:"NEW",topic:"T12",kind:"Practice Conversation A (3 ข้อ)",title:"Planning a weekend trip",sit:"Two friends are planning a trip to Chiang Mai.",
pass:`Mint: I'm thinking of going to Chiang Mai this weekend. ___(1)___?
Ben: I'd love to! But I have to finish my science project first.
Mint: ___(2)___? I'm good at science.
Ben: Really? That would be a big help. Thanks a lot!
Mint: ___(3)___. Then we can leave on Saturday morning.`,
vocab:[["I'm thinking of + V-ing","ฉันกำลังคิดจะ…"],["I'd love to","อยากไปมาก (ตอบรับคำชวน)"],["a big help","ช่วยได้มาก"],["Anytime","ยินดีเสมอ"]],
qs:[
{n:1,q:"(1)",o:["Where have you been","Would you like to come along","How did you get there","What do you think of it"],a:2,ex:"Ben ตอบ I'd love to! = ตอบรับ ‘คำชวน’ → Would you like to come along? (อยากไปด้วยกันไหม) ✔"},
{n:2,q:"(2)",o:["Why don't you give up","Shall I help you with it","Can you help me with mine","Do you like science"],a:2,ex:"Ben ตอบ ‘That would be a big help. Thanks’ = รับข้อเสนอความช่วยเหลือ → Shall I help you with it? ✔"},
{n:3,q:"(3)",o:["Anytime","Same to you","Never mind","I'm afraid not"],a:1,ex:"ตอบรับคำขอบคุณ: Anytime / You're welcome / No problem ✔ (Same to you ใช้ตอบคำอวยพร)"}]},

{id:"p12b",y:"NEW",topic:"T12",kind:"Practice Conversation B (3 ข้อ)",title:"At the school nurse's room",sit:"A student visits the school nurse.",
pass:`Nurse: Hello, Ploy. ___(4)___?
Ploy: I have a terrible headache, and I feel a bit dizzy.
Nurse: ___(5)___. Did you have breakfast this morning?
Ploy: No, I didn't. I was late for school.
Nurse: You should eat something. Here's some bread and water. Lie down for a while.
Ploy: Thank you. ___(6)___.`,
vocab:[["headache","ปวดหัว"],["dizzy","เวียนหัว"],["lie down","นอนลง"],["for a while","สักพัก"],["I feel much better","รู้สึกดีขึ้นมาก"]],
qs:[
{n:4,q:"(4)",o:["What's the matter","What do you do","How do you do","Where are you going"],a:1,ex:"พยาบาลถามอาการ → What's the matter? (เป็นอะไร) ✔ (What do you do = ทำอาชีพอะไร)"},
{n:5,q:"(5)",o:["Congratulations","I'm sorry to hear that","That sounds great","Good for you"],a:2,ex:"ได้ยินว่าป่วย = ข่าวร้าย → แสดงความเห็นใจ I'm sorry to hear that ✔"},
{n:6,q:"(6)",o:["I'm sure I'll feel better soon","Take care of yourself","Not at all","I don't think so"],a:1,ex:"ได้รับขนมปังและคำแนะนำให้นอนพัก → ขอบคุณและบอกว่า ‘คงจะดีขึ้นเร็ว ๆ นี้’ ✔ (Take care of yourself เป็นคำที่พยาบาลพูดกับนักเรียน ไม่ใช่นักเรียนพูดกับพยาบาล)"}]},

{id:"p12c",y:"NEW",topic:"T12",kind:"Practice: Functions (4 ข้อ เดี่ยว)",title:"Requests, offers, refusing politely",sit:"Choose the most appropriate response.",
pass:`Quick situations — เลือกคำตอบที่เหมาะสมที่สุด (ภาษาที่ใช้ขอร้อง เสนอ ตอบรับ ปฏิเสธ)`,
vocab:[["Could you…?","ช่วย…ได้ไหม (สุภาพ)"],["I'm afraid…","เกรงว่า… (ปฏิเสธสุภาพ)"],["Go right ahead","เชิญเลย"],["Would you mind + V-ing","จะรังเกียจไหมถ้า…"]],
qs:[
{n:7,q:"A: Could you lend me your dictionary?\nB: ______. I left it at home today.",o:["Sure, here you are","I'm afraid I can't","Go right ahead","With pleasure"],a:2,ex:"เหตุผลต่อมา ‘ลืมไว้ที่บ้าน’ → ปฏิเสธอย่างสุภาพ I'm afraid I can't ✔"},
{n:8,q:"A: Would you mind opening the window?\nB: ______. It's really hot in here.",o:["Yes, I would","Not at all","No, thanks","I'm full"],a:2,ex:"Would you mind…? ถ้ายินดีทำให้ ตอบ ‘Not at all’ (ไม่รังเกียจเลย) ✔ — ถ้าตอบ Yes = รังเกียจ (กับดักที่พบบ่อย)"},
{n:9,q:"A: May I use your phone for a minute?\nB: ______.",o:["Go right ahead","You're welcome","Same here","It doesn't matter to me"],a:1,ex:"ขออนุญาต (May I…?) → อนุญาต Go right ahead / Sure / Of course ✔"},
{n:10,q:"A: I passed the English exam with full marks!\nB: ______!",o:["Good luck","Congratulations","Take it easy","Cheer up"],a:2,ex:"ข่าวดี/ความสำเร็จ → Congratulations! ✔ (Good luck ใช้ ‘ก่อน’ สอบ)"}]},

// ---------- T11 Reading ----------
{id:"p11a",y:"NEW",topic:"T11",kind:"Practice Reading: เรียงลำดับ (แบบไม่มีตัวเลือก)",title:"How to make Thai iced tea",sit:"Read the text, then put sentences A–E in order.",
pass:`To make Thai iced tea, boil some water first. Then, add the tea leaves and let them steep for five minutes. After that, strain the tea into a jug. Next, stir in sugar and condensed milk while the tea is still hot. Finally, pour the tea over a glass full of ice and top it with a little evaporated milk.

A. Put sugar and condensed milk into the hot tea.
B. Heat water until it boils.
C. Pour the tea into a glass of ice.
D. Leave the tea leaves in the water for 5 minutes.
E. Remove the tea leaves using a strainer.`,
vocab:[["boil","ต้ม"],["steep","แช่ (ใบชา)"],["strain / strainer","กรอง / ที่กรอง"],["stir in","คนให้เข้ากัน"],["condensed milk","นมข้นหวาน"],["evaporated milk","นมข้นจืด"]],
qs:[{n:1,type:"order",q:"Arrange A–E in the correct order.",items:["A","B","C","D","E"],ans:"BDEAC",ex:"First (boil)=B → Then (steep)=D → After that (strain)=E → Next (sugar & milk)=A → Finally (pour over ice)=C → B-D-E-A-C ✔ คำบอกลำดับคือแผนที่ของคำตอบ!"}]},

{id:"p11b",y:"NEW",topic:"T11",kind:"Practice Reading: อ่านคำบรรยายกราฟ",title:"Students' favourite sports",sit:"Read the description and choose the matching bar chart.",chart:{labels:["Football","Badminton","Basketball","Swimming"],opts:[[40,25,20,15],[35,30,25,10],[30,35,20,15],[35,30,10,25]]},
pass:`The bar chart shows the favourite sports of 100 Grade 9 students. Football is the most popular sport, but only five students more than badminton. Basketball comes third. Swimming is the least popular, chosen by just ten students.`,
vocab:[["favourite","ที่ชื่นชอบ"],["the most popular","นิยมที่สุด"],["comes third","อยู่อันดับสาม"],["the least popular","นิยมน้อยที่สุด"],["just / only","เพียง"]],
qs:[{n:2,q:"Which chart is described above?",o:["Chart 1","Chart 2","Chart 3","Chart 4"],a:2,ex:"① ฟุตบอลมากสุดและมากกว่าแบดฯ 5 คน → Chart 2 (35/30) หรือ 4 (35/30) ② บาสฯ อันดับ 3 และว่ายน้ำ 10 คน น้อยสุด → Chart 2 ✔ (Chart 4 ว่ายน้ำ 25 มากกว่าบาส)"}]},

{id:"p11c",y:"NEW",topic:"T11",kind:"Practice Reading: เรื่องขำขัน (4 ข้อ)",title:"The smart parrot",sit:"Read the joke.",
pass:`A woman went to a pet shop to buy a parrot. The shopkeeper showed her three birds. "The first one costs 500 dollars because it can speak three languages," he said. "The second one costs 1,000 dollars because it can sing and use a computer."
"What about the third one?" asked the woman. "It's 3,000 dollars," said the shopkeeper.
"Wow! What can it do?" she asked.
"I have no idea," the shopkeeper replied. "I've never seen it do anything, but the other two call it 'Boss'."`,
vocab:[["parrot","นกแก้ว"],["pet shop","ร้านขายสัตว์เลี้ยง"],["shopkeeper","เจ้าของร้าน"],["cost","มีราคา"],["I have no idea","ไม่รู้เลย"],["boss","เจ้านาย หัวหน้า"]],
qs:[
{n:3,q:"Where does the story take place?",o:["At a zoo","At a pet shop","At a computer shop","At a school"],a:2,ex:"‘went to a pet shop to buy a parrot’ ✔"},
{n:4,q:"Why is the second parrot more expensive than the first one?",o:["It is older.","It can speak more languages.","It can sing and use a computer.","It is the boss of the other birds."],a:3,ex:"‘costs 1,000 dollars because it can sing and use a computer’ ✔ (because = เหตุผล)"},
{n:5,q:"Which word best describes the shopkeeper's answer about the third parrot?",o:["Angry","Surprising","Scary","Sad"],a:2,ex:"ตัวที่แพงที่สุดกลับ ‘ไม่เคยเห็นทำอะไรเลย’ = น่าประหลาดใจ (นี่คือมุก) ✔"},
{n:6,q:"What can be inferred from the joke?",o:["The third parrot can speak four languages.","The shopkeeper wants to sell the cheapest bird.","The other parrots think the third one is their leader.","The woman bought the first parrot."],a:3,ex:"นกอีกสองตัวเรียกมันว่า ‘Boss’ → นกทั้งสองมองว่าตัวที่ 3 เป็นหัวหน้า (เลยแพงที่สุด) ✔ — มุกล้อว่าหัวหน้าไม่ต้องทำงาน!"}]},

{id:"p11d",y:"NEW",topic:"T11",kind:"Practice Reading: ข่าว (4 ข้อ)",title:"Baby elephant rescued from a well",sit:"Read the news report.",
pass:`NAKHON NAYOK — A three-month-old baby elephant was rescued on Tuesday after falling into a two-metre-deep well near Khao Yai National Park.
Park rangers found the calf at about 6 a.m. while its mother and other elephants were waiting nearby. Because the walls of the well were too steep, the calf was unable to climb out by itself.
Rescuers used a digger to break one side of the well and make a slope. The calf walked out safely after almost five hours. A park vet checked the baby and said it had only small cuts on its legs.
Officials said they would cover all old wells in the area to prevent similar accidents in the future.`,
vocab:[["well","บ่อน้ำ"],["calf","ลูกช้าง"],["park ranger","เจ้าหน้าที่อุทยาน"],["steep","ชัน"],["digger","รถขุด"],["slope","ทางลาด"],["vet","สัตวแพทย์"],["prevent","ป้องกัน"]],
qs:[
{n:7,q:"What is the news mainly about?",o:["The dangers of old wells in Thailand","The rescue of a baby elephant","A vet who treats wild animals","Elephant families in Khao Yai"],a:2,ex:"ประโยคแรก (lead) = ลูกช้างได้รับการช่วยเหลือ ✔"},
{n:8,q:"Why couldn't the calf get out of the well?",o:["It was badly injured.","Its mother was not there.","The walls were too steep.","The well was full of water."],a:3,ex:"‘Because the walls of the well were too steep’ ✔"},
{n:9,q:"Which statement is TRUE?",o:["The rescue took about five hours.","The calf was seriously hurt.","The calf was found at night.","The mother elephant pushed the calf out."],a:1,ex:"‘walked out safely after almost five hours’ ✔ (แผลเล็กน้อย, พบตอน 6 โมงเช้า)"},
{n:10,q:"What will likely happen next?",o:["The national park will be closed.","Old wells near the park will be covered.","The calf will be sent to a zoo.","More elephants will fall into wells."],a:2,ex:"ย่อหน้าสุดท้าย: ‘would cover all old wells’ ✔ (ข่าวมักจบด้วยมาตรการต่อไป)"}]},

// ---------- T21 Culture ----------
{id:"p21a",y:"NEW",topic:"T21",kind:"Practice Culture: Conversation (3 ข้อ)",title:"A Thanksgiving invitation",sit:"Kaew, a Thai exchange student, talks with her host mother in the USA.",
pass:`Mrs. Brown: Kaew, we're having turkey and pumpkin pie on Thursday. It's Thanksgiving.
Kaew: ___(1)___? I've never celebrated it before.
Mrs. Brown: It's a day for families to get together and say thanks for the good things in their lives.
Kaew: That sounds lovely. ___(2)___?
Mrs. Brown: That's sweet of you! You could make a Thai dessert.
Kaew: ___(3)___. I'll make mango sticky rice!`,
vocab:[["Thanksgiving","วันขอบคุณพระเจ้า (อเมริกา: พฤหัสฯ ที่ 4 ของ พ.ย.)"],["turkey","ไก่งวง"],["pumpkin pie","พายฟักทอง"],["get together","มารวมตัวกัน"],["That's sweet of you","คุณน่ารักจัง"],["dessert","ของหวาน"]],
qs:[
{n:1,q:"(1)",o:["What is it about","Where is the turkey","When is your birthday","Why don't you come"],a:1,ex:"Kaew ไม่รู้จักวันนี้ จึงถาม ‘มันเกี่ยวกับอะไร’ แล้วอีกฝ่ายอธิบายความหมาย ✔"},
{n:2,q:"(2)",o:["Can I bring anything","Do I have to pay","Is it too late","Can you cook for me"],a:1,ex:"มารยาทตะวันตก: เมื่อถูกเชิญกินข้าว ควร ‘เสนอ’ นำอาหาร/ของหวานไปด้วย → Can I bring anything? ✔ และอีกฝ่ายตอบ That's sweet of you"},
{n:3,q:"(3)",o:["Good idea","No way","I'm afraid not","It's up to you"],a:1,ex:"ตอบรับข้อเสนอแนะ ‘ความคิดดี’ แล้วบอกว่าจะทำข้าวเหนียวมะม่วง ✔"}]},

{id:"p21b",y:"NEW",topic:"T21",kind:"Practice Culture: Feature story (4 ข้อ)",title:"April Fools' Day",sit:"Read the feature story.",
pass:`(1) April Fools' Day is celebrated on the 1st of April in many Western countries. On this day, people play harmless jokes, called pranks, on their friends and family. When the trick works, the joker shouts, "April Fool!"
(2) Nobody knows exactly how the day began. One popular theory says that in the 1500s, France moved New Year's Day from the end of March to the 1st of January. People who did not hear the news and still celebrated in spring were laughed at and called "April fools."
(3) Today, even newspapers and TV channels join in. In 1957, a British TV programme reported that Swiss farmers were picking spaghetti from trees. Many viewers believed it and called the station to ask how to grow their own spaghetti trees!
(4) In the UK, there is one important rule: pranks should only be played before noon. Anyone who plays a trick in the afternoon becomes the fool.`,
vocab:[["harmless","ไม่เป็นอันตราย"],["prank / trick","การแกล้งหยอก"],["theory","ทฤษฎี ข้อสันนิษฐาน"],["laugh at","หัวเราะเยาะ"],["join in","เข้าร่วม"],["viewer","ผู้ชม"],["noon","เที่ยงวัน"]],
qs:[
{n:4,q:"What is the passage mainly about?",o:["Famous TV jokes in the UK","April Fools' Day: its origin and traditions","Why New Year moved to January","How to play pranks on friends"],a:2,ex:"มีทั้งที่มา (ย่อหน้า 2) และธรรมเนียมปัจจุบัน (ย่อหน้า 1,3,4) ✔ ตัวเลือกอื่นแคบเกินไป"},
{n:5,q:"According to paragraph 2, who were the first 'April fools'?",o:["Farmers who grew spaghetti","People who still celebrated New Year in spring","French kings who changed the calendar","Children who played tricks at school"],a:2,ex:"คนที่ไม่รู้ข่าวและยังฉลองปีใหม่ช่วงปลายมีนาคม-เมษายน ถูกเรียกว่า April fools ✔"},
{n:6,q:"What can be inferred from paragraph 3?",o:["Spaghetti really grows on trees in Switzerland.","The TV programme was a planned April Fools' joke.","The viewers were angry with the TV station.","British farmers wanted to grow spaghetti."],a:2,ex:"เรื่องนี้ยกเป็นตัวอย่างของสื่อที่ ‘join in’ การแกล้งวัน April Fools → เป็นมุกที่ตั้งใจ ✔"},
{n:7,q:"According to the rule in paragraph 4, who breaks the rule and becomes the fool?",o:["Tom, who tricks his sister at 9 a.m.","Amy, who plays a joke on her teacher at 10 a.m.","Jack, who plays a prank on his friend at 3 p.m.","Lily, who shouts 'April Fool!' at 11 a.m."],a:3,ex:"กฎ: แกล้งได้ ‘ก่อนเที่ยง’ เท่านั้น ใครแกล้งตอนบ่ายจะกลายเป็นคนโง่เอง → Jack (3 p.m.) ✔ ข้อ application แบบเดียวกับปี 2565 ข้อ 22"}]},

// ---------- T13 Writing ----------
{id:"p13a",y:"NEW",topic:"T13",kind:"Practice Writing: บันทึกประจำวัน (4 ข้อ)",title:"Dear Diary: Sports Day",sit:"Choose the best word/words to complete the text.",
pass:`Dear Diary,
Today was our school's Sports Day. I ___(1)___ in the 100-metre race. I was really nervous, ___(2)___ I tried my best and finished second! My friends cheered for me the whole time. I'm very proud of ___(3)___. Next year, I'm looking forward to ___(4)___ in the relay race too.`,
vocab:[["take part in","เข้าร่วม"],["nervous","ประหม่า"],["try my best","พยายามอย่างดีที่สุด"],["cheer for","เชียร์"],["be proud of","ภูมิใจใน"],["relay race","วิ่งผลัด"]],
qs:[
{n:1,q:"(1)",o:["take part","took part","will take part","am taking part"],a:2,ex:"Today was… = เล่าเรื่องที่เกิดขึ้นแล้ว → Past simple: took part ✔ (สังเกตคำบอกเวลาและ tense ของประโยครอบข้าง)"},
{n:2,q:"(2)",o:["so","because","but","or"],a:3,ex:"‘ประหม่ามาก แต่ก็พยายามเต็มที่’ = ความขัดแย้ง → but ✔"},
{n:3,q:"(3)",o:["me","my","myself","mine"],a:3,ex:"ประธานคือ I และกรรมคือตัวเอง → reflexive pronoun: myself ✔"},
{n:4,q:"(4)",o:["run","running","to run","ran"],a:2,ex:"look forward to + V-ing → running ✔ (ออกสอบจริงปี 2566!)"}]},

{id:"p13b",y:"NEW",topic:"T13",kind:"Practice Writing: รีวิว (4 ข้อ)",title:"Review: A new animated film",sit:"Choose the best word/words to complete the movie review.",
pass:`"Ocean Hearts" is one of the most ___(5)___ animated films of the year. The story is about a little turtle ___(6)___ tries to find her way home after a storm. The animation is colourful and beautiful, ___(7)___ the story is a bit too long for young children. The film ___(8)___ by a small studio in Bangkok, and it has already won two international awards.`,
vocab:[["animated film","ภาพยนตร์แอนิเมชัน"],["turtle","เต่าทะเล"],["find her way home","หาทางกลับบ้าน"],["storm","พายุ"],["studio","สตูดิโอ ผู้สร้าง"],["award","รางวัล"]],
qs:[
{n:5,q:"(5)",o:["touched","touching","touch","touches"],a:2,ex:"หนัง ‘ทำให้’ ซึ้ง → -ing adjective: touching (ซึ้งใจ) ✔"},
{n:6,q:"(6)",o:["who","whom","whose","where"],a:1,ex:"แทนตัวละคร (turtle เป็นตัวเอก) ที่เป็นประธานของ tries → who (หรือ that) ✔"},
{n:7,q:"(7)",o:["so","because","although","therefore"],a:3,ex:"ข้อดี (สวย) ↔ ข้อเสีย (ยาวไป) → although ✔ (คล้ายปี 2566 ข้อ 32)"},
{n:8,q:"(8)",o:["made","was made","is making","has made"],a:2,ex:"หนัง ‘ถูกสร้าง’ โดยสตูดิโอ → Passive: was made by ✔"}]},

// ---------- T22 Word order / language comparison ----------
{id:"p22a",y:"NEW",topic:"T22",kind:"Practice: ลำดับคำ (Word order) 6 ข้อ",title:"Put the words in the right order",sit:"Choose the correct word order.",
pass:`ภาษาไทย: คำนาม + คำขยาย  (กระเป๋า ใบใหญ่ สีแดง)
English:  คำขยาย + คำนาม  (a big red bag)
จำคำนามหลักไว้ ‘ท้ายสุด’ แล้วค่อยเรียงคำขยายด้านหน้า`,
vocab:[["opinion","ความคิดเห็น (beautiful)"],["size","ขนาด (big)"],["age","อายุ (old)"],["colour","สี (red)"],["origin","ที่มา (Thai)"],["material","วัสดุ (wooden)"],["purpose","จุดประสงค์ (sleeping bag)"]],
qs:[
{n:1,q:"My grandmother gave me ______.",o:["a silk beautiful Thai scarf","a beautiful Thai silk scarf","a Thai beautiful silk scarf","a scarf beautiful Thai silk"],a:2,ex:"Opinion (beautiful) → Origin (Thai) → Material (silk) → Noun (scarf) ✔"},
{n:2,q:"We stayed in ______ near the beach.",o:["a lovely small wooden house","a wooden small lovely house","a small lovely wooden house","a house lovely small wooden"],a:1,ex:"Opinion (lovely) → Size (small) → Material (wooden) → house ✔"},
{n:3,q:"She ______ late for class.",o:["is never","never is","never be","does never be"],a:1,ex:"Adverb ความถี่อยู่ ‘หลัง’ verb to be แต่อยู่ ‘หน้า’ กริยาแท้: She is never late. / She never comes late. ✔"},
{n:4,q:"The more you practise, ______.",o:["the better you become","you become the better","better the you become","the you better become"],a:1,ex:"The + comparative…, the + comparative + ประธาน + กริยา (ยิ่ง…ยิ่ง…) ✔ ออกสอบปี 2568"},
{n:5,q:"Can you tell me ______?",o:["where is the library","where the library is","is where the library","the library where is"],a:2,ex:"Embedded question (คำถามซ้อนในประโยค): Wh- + ประธาน + กริยา → where the library is ✔ (ไม่สลับเหมือนคำถามตรง)"},
{n:6,q:"______ you finish your homework, you can play games.",o:["Once","You once","Once you can","Can once"],a:1,ex:"Conjunction (Once/When/As soon as) วางต้นอนุประโยค + ประธาน + กริยา ✔ (ปี 2567 ข้อ 27)"}]},

{id:"p22b",y:"NEW",topic:"T22",kind:"Practice: วรรคตอน/ชนิดประโยค/การออกเสียง (3 ข้อ)",title:"Punctuation, sentence types and intonation",sit:"Choose the best answer.",
pass:`• Yes/No question → เสียงสูงขึ้นท้ายประโยค ↗  (Are you ready? ↗)
• Wh-question → เสียงลงท้ายประโยค ↘  (Where do you live? ↘)
• Statement → เสียงลง ↘
ภาษาไทยใช้คำลงท้าย ‘ไหม / หรือ / ครับ / คะ’ แทนการขึ้นเสียง และไม่มีเครื่องหมาย ? หรือ จุด (.)`,
vocab:[["intonation","ทำนองเสียงขึ้น-ลง"],["rising","เสียงขึ้น"],["falling","เสียงลง"],["comma","จุลภาค ( , )"],["apostrophe","อะพอสทรอฟี ( ' )"],["compound sentence","ประโยคความรวม"],["complex sentence","ประโยคความซ้อน"]],
qs:[
{n:7,q:"Which sentence should be spoken with a RISING intonation at the end?",o:["What time is it?","Where did you go yesterday?","Do you like spicy food?","Please close the door."],a:3,ex:"Yes/No question (Do you…?) → เสียงขึ้นท้ายประโยค ✔ ส่วน Wh-question และคำสั่งใช้เสียงลง"},
{n:8,q:"Which sentence is punctuated correctly?",o:["However I still want to go.","My sister's bag is on the table.","Its a beautiful day isn't it?","I bought apples oranges and bananas."],a:2,ex:"sister's = ‘ของ’ พี่สาว (’s แสดงความเป็นเจ้าของ) ✔ — ข้อ 1 ต้องเป็น However, ; ข้อ 3 ต้องเป็น It's … day, isn't it? ; ข้อ 4 ต้องมี comma คั่นรายการ"},
{n:9,q:"Which one is a COMPLEX sentence?",o:["I like tea, but my brother likes coffee.","She was tired because she worked all day.","Tom plays the guitar.","Come here and sit down."],a:2,ex:"Complex sentence = ประโยคหลัก + อนุประโยคที่ขึ้นด้วย because / although / when / if … ✔ ข้อ 1 เป็น compound (เชื่อมด้วย but)"}]}
];
