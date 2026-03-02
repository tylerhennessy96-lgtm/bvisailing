// ━━━ ITINERARY DATA: Day 0–8 ━━━
const DAYS=[
{day:0,date:'Fri, March 6',iso:'2026-03-06',label:'Road Town',
title:'Road Town — Arrival & Provisioning',
route:'Arrive at The Moorings Yacht Club, Road Town, Tortola',
nm:'—',sail:'Arrival day',lat:18.4268,lng:-64.6165,
desc:'Arrive in Tortola and check in at The Moorings Yacht Club in Road Town. Meet the crew, provision the boat, do a safety briefing, and get familiar with your 52-foot catamaran. Head into Road Town for supplies, explore the marina, and settle in — tomorrow we sail.',
tips:["Provision at Bobby's Supermarket or Riteway near the marina.","Stock up on ice, sunscreen, and cash for mooring ball tenders.","Do a thorough boat check with the Moorings team before signing off.","Dinner at the marina or a short walk into Road Town."],
pois:[{name:'The Moorings Yacht Club',type:'landmark',lat:18.4268,lng:-64.6165,icon:'⚓',note:'Home base — departure & return'},{name:'Road Town Waterfront',type:'restaurant',lat:18.4280,lng:-64.6200,icon:'🍽',note:'Several restaurants for arrival dinner'}],
wx:{wind:'12–15 kts',dir:'ENE',deg:67,temp:'81°F',seas:'Calm in harbour'}},

{day:1,date:'Sat, March 7',iso:'2026-03-07',label:'Norman Is.',
title:'Norman Island — Treasure Island',
route:'The Moorings → Norman Island (The Bight)',
nm:'~12 nm',sail:'Beam reach',lat:18.3195,lng:-64.6189,
desc:'Depart The Moorings at 9–10 am. Beam reach south to Norman Island — the legendary Treasure Island. Grab moorings at The Bight, then dinghy to snorkel Treasure Point and The Caves: three sea caves you can swim into, teeming with fish and sea turtles.',
tips:['Mooring balls at The Bight are plentiful — easiest anchorage.','The Caves are best snorkeled before midday.','Fuel up at The Moorings before departure.'],
pois:[{name:'Treasure Point / The Caves',type:'snorkel',lat:18.3160,lng:-64.6250,icon:'🤿',note:'Three swim-through sea caves; bring underwater light'},{name:'Pirates Bight',type:'restaurant',lat:18.3200,lng:-64.6180,icon:'🍽',note:'Beach restaurant at The Bight'},{name:'Willy T',type:'bar',lat:18.3190,lng:-64.6175,icon:'🍹',note:'Famous floating bar — jump from the upper deck'}],
wx:{wind:'15–18 kts',dir:'ENE',deg:67,temp:'82°F',seas:'1–2 ft'}},

{day:2,date:'Sun, March 8',iso:'2026-03-08',label:'Cooper Is.',
title:'The Indians & Cooper Island',
route:'Norman Island → The Indians → Cooper Island',
nm:'~8 nm',sail:'Short easy sail NE',lat:18.3830,lng:-64.5120,
desc:"Detour to The Indians — four dramatic volcanic rock pinnacles with the BVI's finest snorkeling. Then a short sail to Cooper Island's Manchioneel Bay. The Beach Club is one of the best restaurants in the BVI, with craft rum and a microbrewery.",
tips:['Call Cooper Island Beach Club to reserve mooring and dinner.','Try their house-made rum — exceptional.','Snorkeling off the beach here is excellent.'],
pois:[{name:'The Indians',type:'snorkel',lat:18.3357,lng:-64.5990,icon:'🤿',note:'Four volcanic pinnacles — BVI crown jewel snorkeling'},{name:'Cooper Island Beach Club',type:'restaurant',lat:18.3835,lng:-64.5115,icon:'🍽',note:'Reserve dinner in advance'}],
wx:{wind:'14–17 kts',dir:'ENE',deg:70,temp:'83°F',seas:'1 ft'}},

{day:3,date:'Mon, March 9',iso:'2026-03-09',label:'Virgin Gorda',
title:'The Baths & North Sound',
route:'Cooper Island → The Baths → North Sound, Virgin Gorda',
nm:'~14 nm',sail:'Most spectacular day',lat:18.4900,lng:-64.3550,
desc:"Your most breathtaking day. Sail to The Baths — enormous granite boulders forming cathedral-like grottos and swim-throughs. Go early before ferries. Then into North Sound, one of the Caribbean's most protected lagoons. Bitter End Yacht Club for dinner, Saba Rock for happy hour 4–6 pm.",
tips:['Pre-book Bitter End moorings and dinner.','Saba Rock happy hour 4–6 pm — don\'t miss.','Water shoes helpful for The Baths.'],
pois:[{name:'The Baths',type:'snorkel',lat:18.4310,lng:-64.4430,icon:'🤿',note:'Cathedral granite grottos and swim-throughs'},{name:'Bitter End Yacht Club',type:'restaurant',lat:18.4920,lng:-64.3380,icon:'🍽',note:'Pre-book dinner — fills fast in March'},{name:'Saba Rock',type:'bar',lat:18.4902,lng:-64.3510,icon:'🍹',note:'Happy hour 4–6 pm; rum cocktails & sunset'}],
wx:{wind:'16–20 kts',dir:'E',deg:90,temp:'83°F',seas:'1–2 ft'}},

{day:4,date:'Tue, March 10',iso:'2026-03-10',label:'Anegada',
title:'Anegada — The Adventure Day',
route:'North Sound, Virgin Gorda → Anegada',
nm:'~14 nm',sail:'Lively sail north',lat:18.7270,lng:-64.3350,
desc:"A flat coral atoll barely 28 ft above sea level, ringed by one of the Caribbean's largest barrier reefs. Lively sail north — follow channel markers carefully. Rent golf carts: flamingos in salt ponds, deserted Loblolly Bay, pristine reef snorkeling. Pre-order lobster.",
tips:['Pre-book mooring via BVI National Parks Trust — required.','Call Flash of Beauty to pre-order lobster.','Book a local snorkel guide for conch & reef tours.'],
pois:[{name:'Loblolly Bay',type:'snorkel',lat:18.7400,lng:-64.3550,icon:'🤿',note:'Deserted north shore; extraordinary visibility'},{name:'Anegada Barrier Reef',type:'snorkel',lat:18.7350,lng:-64.3200,icon:'🤿',note:"One of Caribbean's largest reefs — turtles, rays"},{name:'Flash of Beauty',type:'restaurant',lat:18.7230,lng:-64.3300,icon:'🍽',note:'Pre-order fresh lobster — world famous'},{name:'Flamingo Ponds',type:'landmark',lat:18.7180,lng:-64.3530,icon:'⚓',note:'Pink flamingos in the salt ponds'}],
wx:{wind:'18–22 kts',dir:'ENE',deg:65,temp:'82°F',seas:'2–3 ft'}},

{day:5,date:'Wed, March 11',iso:'2026-03-11',label:'Trellis Bay',
title:'Trellis Bay — Rest & Resupply',
route:'Anegada → Trellis Bay, Tortola',
nm:'~14 nm',sail:'Downwind run',lat:18.4430,lng:-64.5320,
desc:'A rewarding downwind run south. Trellis Bay on Beef Island is a relaxed anchorage near the BVI airport — convenient for restocking, laundry, or crew swaps. Several casual beach bars. Your intentional breather day.',
tips:['Riteway grocery nearby for provisioning.','Check full moon calendar — Trellis Bay party is a BVI institution.'],
pois:[{name:'Trellis Bay Beach Bars',type:'bar',lat:18.4435,lng:-64.5310,icon:'🍹',note:'Several casual beach bars'},{name:'Riteway Grocery',type:'landmark',lat:18.4450,lng:-64.5350,icon:'⚓',note:'Provisioning top-ups'}],
wx:{wind:'15–18 kts',dir:'E',deg:85,temp:'84°F',seas:'1–2 ft'}},

{day:6,date:'Thu, March 12',iso:'2026-03-12',label:'White Bay',
title:'Jost Van Dyke — White Bay',
route:'Trellis Bay → Jost Van Dyke: White Bay',
nm:'~18 nm',sail:'Most social day',lat:18.4380,lng:-64.7530,
desc:"Sail west to JVD. White Bay is a perfect crescent of white sand with the Soggy Dollar Bar — birthplace of the Painkiller, where you swim ashore because there's no dock. Ivan's Stress Free Bar for legendary conch fritters. Arrive by noon — most competitive anchorage in the BVI.",
tips:['Moored by noon — balls disappear fast.',"Painkiller: Pusser's rum, cream of coconut, pineapple, OJ, nutmeg.","Ivan's conch fritters — do not skip."],
pois:[{name:'Soggy Dollar Bar',type:'bar',lat:18.4385,lng:-64.7540,icon:'🍹',note:'Birthplace of the Painkiller — swim ashore'},{name:"Ivan's Stress Free Bar",type:'bar',lat:18.4375,lng:-64.7525,icon:'🍹',note:'Legendary conch fritters & fish tacos'}],
wx:{wind:'16–19 kts',dir:'ENE',deg:68,temp:'83°F',seas:'1–2 ft'}},

{day:7,date:'Fri, March 13',iso:'2026-03-13',label:'JVD Explore',
title:'Great Harbour & Little Jost Van Dyke',
route:'White Bay → Little Jost Van Dyke → Great Harbour',
nm:'~3 nm',sail:'Relaxed exploration',lat:18.4480,lng:-64.7680,
desc:"Leisurely day on JVD. Dinghy to Little Jost for lunch at Foxy's Taboo — reserve lobster in advance. Diamond Cay next door has the best snorkeling on JVD: sea turtles and spotted eagle rays. Evening at the legendary Foxy's Main Bar in Great Harbour.",
tips:["Call Foxy's Taboo for lobster: +1 284-340-0703.","Foxy himself is a BVI legend — improvised calypso.","Diamond Cay: eagle rays spotted here more than almost anywhere."],
pois:[{name:'Diamond Cay',type:'snorkel',lat:18.4530,lng:-64.7750,icon:'🤿',note:'Eagle rays & sea turtles — most reliable spot'},{name:"Foxy's Taboo",type:'restaurant',lat:18.4510,lng:-64.7720,icon:'🍽',note:'Pre-order lobster; +1 284-340-0703'},{name:"Foxy's Main Bar",type:'bar',lat:18.4425,lng:-64.7520,icon:'🍹',note:"One of the Caribbean's great institutions"}],
wx:{wind:'14–17 kts',dir:'E',deg:80,temp:'84°F',seas:'1 ft'}},

{day:8,date:'Sat, March 14–15',iso:'2026-03-14',label:'Return',
title:'Return to Road Town',
route:'Jost Van Dyke → The Moorings, Road Town',
nm:'~9 nm',sail:'Closing the loop',lat:18.4268,lng:-64.6165,
desc:"A pleasant 9 nm sail east closes the loop. Return the boat to The Moorings by mid-morning March 15. Farewell lunch on Road Town's waterfront, souvenirs at the marina, and toast an extraordinary week.",
tips:['Arrive by 10–11 am for check-in.','Moorings dock team handles the process.','A final Painkiller at the marina bar is practically tradition.'],
pois:[{name:'The Moorings Yacht Club',type:'landmark',lat:18.4268,lng:-64.6165,icon:'⚓',note:'Return by 10–11 am March 15'}],
wx:{wind:'15–18 kts',dir:'ENE',deg:72,temp:'83°F',seas:'1–2 ft'}}
];

// ━━━ DATE AWARENESS (timezone-safe) ━━━
function parseLocalDate(iso){
  const [y,m,d]=iso.split('-').map(Number);
  return new Date(y,m-1,d);
}
function todayLocal(){
  const d=new Date();
  d.setHours(0,0,0,0);
  return d;
}
function getTodayIdx(){
  const today=todayLocal(),s=parseLocalDate(DAYS[0].iso),e=parseLocalDate('2026-03-15');
  const todayISO=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
  for(let i=0;i<DAYS.length;i++)if(DAYS[i].iso===todayISO)return i;
  if(todayISO==='2026-03-15')return DAYS.length-1;
  if(today>=s&&today<=e){for(let i=DAYS.length-1;i>=0;i--)if(parseLocalDate(DAYS[i].iso)<=today)return i}
  return 0;
}
function tripStatus(){
  const today=todayLocal(),s=parseLocalDate(DAYS[0].iso),e=parseLocalDate('2026-03-15');
  return today<s?'before':today>e?'after':'during';
}
const todayIdx=getTodayIdx();

// ━━━ MOON PHASE CALCULATOR ━━━
function getMoonPhase(isoDate){
  const [y,m,d]=isoDate.split('-').map(Number);
  // Reference: New Moon ~Feb 28, 2026 00:45 UTC (preceding the March 14 full moon)
  const refNewMoon=Date.UTC(2026,1,28,0,45);
  const SYNODIC=29.530588853;
  // Use 20:00 UTC (~8pm Caribbean evening, prime moon viewing)
  const dateMs=Date.UTC(y,m-1,d,20,0);
  const daysSinceNew=(dateMs-refNewMoon)/86400000;
  let age=daysSinceNew%SYNODIC;
  if(age<0)age+=SYNODIC;
  const illum=(1-Math.cos(2*Math.PI*age/SYNODIC))/2;
  const pct=Math.round(illum*100);
  // 8-phase system: each phase spans 1/8 of the synodic month
  const norm=age/SYNODIC;
  let idx;
  if(norm<0.0625)idx=0;       // New Moon
  else if(norm<0.1875)idx=1;  // Waxing Crescent
  else if(norm<0.3125)idx=2;  // First Quarter
  else if(norm<0.4375)idx=3;  // Waxing Gibbous
  else if(norm<0.5625)idx=4;  // Full Moon
  else if(norm<0.6875)idx=5;  // Waning Gibbous
  else if(norm<0.8125)idx=6;  // Third Quarter
  else if(norm<0.9375)idx=7;  // Waning Crescent
  else idx=0;                  // New Moon (end of cycle)
  const phases=[
    {emoji:'🌑',name:'New Moon'},
    {emoji:'🌒',name:'Waxing Crescent'},
    {emoji:'🌓',name:'First Quarter'},
    {emoji:'🌔',name:'Waxing Gibbous'},
    {emoji:'🌕',name:'Full Moon'},
    {emoji:'🌖',name:'Waning Gibbous'},
    {emoji:'🌗',name:'Third Quarter'},
    {emoji:'🌘',name:'Waning Crescent'}
  ];
  return {...phases[idx],illumination:pct,age:Math.round(age*10)/10};
}

// Inject moon phase data into each day
DAYS.forEach(d=>{d.wx.moon=getMoonPhase(d.iso)});

// ━━━ MAP (maxZoom capped at 13, zoom control top-right below legend) ━━━
const map=L.map('map',{center:[18.50,-64.55],zoom:11,zoomControl:false,maxZoom:13});
L.control.zoom({position:'topright'}).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',{
  attribution:'Tiles &copy; Esri &mdash; GEBCO, NOAA, National Geographic',
  maxZoom:13
}).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Reference/MapServer/tile/{z}/{y}/{x}',{
  attribution:'',maxZoom:13
}).addTo(map);

// ━━━ ROUTE LINES (straight between stops, prominent with glow + tooltips) ━━━
const allStopCoords=DAYS.map(d=>[d.lat,d.lng]);

// Shadow glow line (wide, faint gold)
L.polyline(allStopCoords,{color:'#d4a843',weight:12,opacity:0.1,lineCap:'round',lineJoin:'round'}).addTo(map);
// Full route line (visible coral)
L.polyline(allStopCoords,{color:'#ff8a6e',weight:3.5,opacity:0.35,lineCap:'round',lineJoin:'round'}).addTo(map);

// Per-leg hit-area polylines with popups (day info, distance, wind, temp)
const legHitLines=[];
for(let i=0;i<DAYS.length-1;i++){
  const fromDay=DAYS[i],toDay=DAYS[i+1];
  const seg=[[fromDay.lat,fromDay.lng],[toDay.lat,toDay.lng]];
  const hitLine=L.polyline(seg,{color:'#ff6b4a',weight:18,opacity:0,interactive:true}).addTo(map);
  hitLine.bindPopup(`
    <strong>Day ${fromDay.day} → Day ${toDay.day}</strong><br>
    ${fromDay.label} → ${toDay.label}<br>
    <span style="color:var(--teal)">${toDay.nm}</span> · ${toDay.sail}<br>
    <span style="color:var(--wind-blue)">Wind: ${toDay.wx.wind} ${toDay.wx.dir}</span> · <span style="color:var(--gold)">${toDay.wx.temp}</span><br>
    <span style="color:var(--teal)">Seas: ${toDay.wx.seas}</span>
  `);
  legHitLines.push(hitLine);
}

// Active route (fills per day) - glow + main
const activeGlow=L.polyline([],{color:'#d4a843',weight:10,opacity:0.15,lineCap:'round',lineJoin:'round'}).addTo(map);
const activeLine=L.polyline([],{color:'#ff6b4a',weight:4.5,opacity:.9,lineCap:'round',lineJoin:'round'}).addTo(map);

// ━━━ DAY STOP MARKERS ━━━
const stopMk=[];
DAYS.forEach((d,i)=>{
  const ic=L.divIcon({className:'',html:`<div class="ms ${d.day===0?'d0m':''}" id="s${i}">${d.day}</div>`,iconSize:[30,30],iconAnchor:[15,15]});
  const m=L.marker([d.lat,d.lng],{icon:ic,zIndexOffset:100}).addTo(map);
  m.bindPopup(`<strong>Day ${d.day}: ${d.title}</strong><br>${d.date}<br>${d.nm} · ${d.sail}`);
  m.on('click',()=>setDay(i));
  stopMk.push(m);
});

// ━━━ POI MARKERS (with hover tooltips) ━━━
const poiMk=[];
DAYS.forEach((d,di)=>{
  d.pois.forEach(p=>{
    const tc=p.type==='snorkel'?'mp-sn':p.type==='bar'?'mp-br':p.type==='restaurant'?'mp-rs':'mp-lm';
    const ic=L.divIcon({className:'',html:`<div class="mp ${tc}">${p.icon}</div>`,iconSize:[24,24],iconAnchor:[12,12]});
    const m=L.marker([p.lat,p.lng],{icon:ic,zIndexOffset:50}).addTo(map);
    m.bindTooltip(`<strong>${p.name}</strong><br>${p.note}`,{direction:'top',offset:[0,-8]});
    m.bindPopup(`<strong>${p.name}</strong><br>${p.note}<br><em>Day ${d.day}</em>`);
    m.di=di;poiMk.push(m);
  });
});

// ━━━ TIMELINE DOTS (with Day N: prefix) ━━━
const dotRow=document.getElementById('dotRow');
DAYS.forEach((d,i)=>{
  const dot=document.createElement('div');
  dot.className='tl-dot'+(d.day===0?' d0':'');
  dot.innerHTML=`<div class="tl-dot-lbl">${d.day===0?'D0: Start':'D'+d.day+': '+d.label}</div>`;
  dot.onclick=()=>setDay(i);
  dotRow.appendChild(dot);
});

// ━━━ STATE ━━━
let curDay=0;
const isMob=()=>window.innerWidth<=768;

function setDay(idx){
  curDay=idx;const d=DAYS[idx],ts=tripStatus(),isToday=idx===todayIdx&&ts==='during';

  // Dots
  dotRow.querySelectorAll('.tl-dot').forEach((dot,i)=>{
    dot.classList.remove('active','visited','today');
    if(i===idx){dot.classList.add('active');if(isToday)dot.classList.add('today')}
    else if(i<idx)dot.classList.add('visited');
  });

  // Track fill
  document.getElementById('trackFill').style.width=(DAYS.length>1?(idx/(DAYS.length-1))*100:0)+'%';

  // Label + badge (timezone-safe countdown)
  let badge='';
  if(ts==='during'&&isToday)badge='<span class="live-badge">TODAY</span>';
  else if(ts==='before'){
    const today=todayLocal(),start=parseLocalDate(DAYS[0].iso);
    const dl=Math.ceil((start-today)/864e5);
    console.log('[Countdown Debug]','today:',today.toISOString(),'start:',start.toISOString(),'diff ms:',(start-today),'days:',dl);
    badge=`<span class="live-badge future">${dl}d to go</span>`;
  }
  document.getElementById('tlLabel').innerHTML=`Day ${d.day} · ${d.title} ${badge} <span class="ds">${d.date}</span>`;

  // Weather chips (timeline)
  document.getElementById('tlWx').innerHTML=`
    <div class="wx-chip"><svg viewBox="0 0 24 24" fill="none" stroke="var(--wind-blue)" stroke-width="2" stroke-linecap="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg><span style="color:var(--wind-blue)">${d.wx.wind}</span></div>
    <div class="wind-arr" style="transform:rotate(${d.wx.deg+180}deg)" title="From ${d.wx.dir}"><svg viewBox="0 0 24 24"><path d="M12 2l6 10H6z"/></svg></div>
    <div class="wx-chip">${d.wx.dir}</div>
    <div class="wx-chip"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>${d.wx.temp}</div>
    <div class="wx-chip" style="color:var(--teal)">${d.wx.seas}</div>
    <div class="wx-chip" style="color:var(--sand-muted)">${d.wx.moon.emoji} ${d.wx.moon.illumination}%</div>`;
  updateWxCard(d.wx);
  wUpdate(d.wx);

  // Nav buttons
  document.getElementById('prevBtn').disabled=idx===0;
  document.getElementById('nextBtn').disabled=idx===DAYS.length-1;

  // Active route line (straight between stops up to current day)
  const activeCoords=DAYS.slice(0,idx+1).map(x=>[x.lat,x.lng]);
  activeLine.setLatLngs(activeCoords);
  activeGlow.setLatLngs(activeCoords);

  // Markers — stop markers highlight active; POI markers always fully visible
  stopMk.forEach((m,i)=>{const el=document.getElementById('s'+i);if(el)el.classList.toggle('active',i===idx)});

  // Fly (maxZoom capped at 12)
  if(d.pois.length>1){const b=L.latLngBounds([[d.lat,d.lng]]);d.pois.forEach(p=>b.extend([p.lat,p.lng]));map.flyToBounds(b.pad(.3),{duration:.8,maxZoom:12})}
  else map.flyTo([d.lat,d.lng],12,{duration:.8});

  // Card
  updateCard(d,isToday);

  // Mobile: do NOT auto-open drawer; user taps toggle button
}

function updateCard(d,isToday){
  const c=document.getElementById('dayCard');
  const pois=d.pois.map(p=>{
    const tc=p.type==='snorkel'?'sn':p.type==='bar'?'br':p.type==='restaurant'?'rs':'lm';
    return `<div class="poi-item"><div class="poi-i ${tc}">${p.icon}</div><div><div style="font-weight:500">${p.name}</div><div style="font-size:10px;color:var(--text-secondary);margin-top:1px">${p.note}</div></div></div>`;
  }).join('');
  const badge=isToday?' <span class="live-badge" style="font-size:9px">TODAY</span>':'';
  const closeBtn=isMob()?'<button class="dc-close" onclick="closeMobileCard()">✕</button>':'';
  c.innerHTML=`${closeBtn}
    <div class="dc-num">Day ${d.day} · ${d.sail}${badge}</div>
    <div class="dc-title">${d.title}</div>
    <div class="dc-route">${d.route} <span class="nm">${d.nm}</span></div>
    <div class="dc-desc">${d.desc}</div>
    <div class="dc-sec"><div class="dc-sec-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>Tonight's Moon</div>
      <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:8px;background:rgba(201,168,76,.03);border:1px solid rgba(201,168,76,.04)">
        <span style="font-size:26px;line-height:1">${d.wx.moon.emoji}</span>
        <div><div style="font-size:12px;font-weight:500;color:var(--sand)">${d.wx.moon.name}</div><div style="font-size:10px;color:var(--text-secondary);font-family:'JetBrains Mono',monospace">${d.wx.moon.illumination}% illuminated</div></div>
      </div>
    </div>
    <div class="dc-sec"><div class="dc-sec-t"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Points of Interest</div><div class="poi-list">${pois}</div></div>
    <div class="tip-box"><strong>Tips</strong><ul class="tip-list">${d.tips.map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
}

function nav(delta){const n=curDay+delta;if(n>=0&&n<DAYS.length)setDay(n)}

// Mobile drawer toggle
function toggleMobileCard(){
  const c=document.getElementById('dayCard');
  const h=document.getElementById('drawerHandle');
  const isOpen=c.classList.toggle('drawer-open');
  if(h){
    h.classList.toggle('open',isOpen);
    // Shift handle to sit at the edge of the open drawer
    h.style.left=isOpen?Math.min(window.innerWidth*0.8,340)+'px':'0px';
  }
}
function closeMobileCard(){
  document.getElementById('dayCard').classList.remove('drawer-open');
  const h=document.getElementById('drawerHandle');
  if(h){h.classList.remove('open');h.style.left='0px';}
}

// ━━━ SWIPE ━━━
let tx=0,ty=0;
document.querySelector('.tl-panel').addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
document.querySelector('.tl-panel').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){dx<0?nav(1):nav(-1)}},{passive:true});

// Keyboard
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowDown')nav(1);if(e.key==='ArrowLeft'||e.key==='ArrowUp')nav(-1)});

// ━━━ VIEW SWITCH ━━━
function showView(v){
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  if(v==='map'){
    document.getElementById('map-view').style.display='block';
    document.getElementById('itin-view').style.display='none';
    document.querySelectorAll('.nav-tab')[0].classList.add('active');
    setTimeout(()=>map.invalidateSize(),100);
  }else{
    document.getElementById('map-view').style.display='none';
    document.getElementById('itin-view').style.display='block';
    document.querySelectorAll('.nav-tab')[1].classList.add('active');
    buildItin();
  }
}

// ━━━ ITINERARY PAGE (with weather badges per day) ━━━
let itinBuilt=false;
function buildItin(){
  if(itinBuilt)return;itinBuilt=true;
  const c=document.getElementById('itinC'),ts=tripStatus();
  let sn='';
  if(ts==='before'){
    const today=todayLocal(),start=parseLocalDate(DAYS[0].iso);
    const dl=Math.ceil((start-today)/864e5);
    console.log('[Itinerary Countdown]','today:',today.toISOString(),'start:',start.toISOString(),'diff ms:',(start-today),'days:',dl);
    sn=`<div style="margin-top:12px"><span class="live-badge future" style="font-size:11px">${dl} days until departure</span></div>`;
  }
  else if(ts==='during')sn=`<div style="margin-top:12px"><span class="live-badge" style="font-size:11px">Trip in progress — Day ${DAYS[todayIdx].day}</span></div>`;

  let h=`<div class="ih"><h1>BVI Sailing Itinerary</h1><div class="sub">March 6–15, 2026 · 10 Guests · 52-foot Catamaran</div>${sn}<div class="meta"><span>⛵ THE MOORINGS, ROAD TOWN</span><span>🌊 15–20 KT TRADES</span><span>☀ 82–84°F</span></div></div>`;

  DAYS.forEach((d,i)=>{
    const it=i===todayIdx&&ts==='during',tb=it?' <span class="live-badge" style="font-size:9px">TODAY</span>':'';
    h+=`<div class="id" ${it?'id="itin-today"':''}>
      <div class="id-dot${d.day===0?' dz':''}">${d.day}</div>
      <div class="id-h"><div class="id-date">${d.date}${tb}</div><div class="id-tag">${d.nm} · ${d.sail}</div></div>
      <div class="id-route">${d.route}</div>
      <div class="id-wx">
        <span class="id-wx-chip">💨 ${d.wx.wind} ${d.wx.dir}</span>
        <span class="id-wx-chip">🌡 ${d.wx.temp}</span>
        <span class="id-wx-chip">🌊 ${d.wx.seas}</span>
        <span class="id-wx-chip">${d.wx.moon.emoji} ${d.wx.moon.name} · ${d.wx.moon.illumination}%</span>
      </div>
      <div class="id-body"><p>${d.desc}</p></div>
      <div class="id-tips"><h4>Tips & Notes</h4><ul>${d.tips.map(t=>`<li>${t}</li>`).join('')}</ul></div>
    </div>`;
  });

  h+=`<div class="is"><h2>Advance Bookings</h2><div class="tw"><table class="rt">
    <thead><tr><th>What</th><th>Where / Who</th><th>Priority</th></tr></thead><tbody>
    <tr><td>Anegada mooring balls</td><td>BVI National Parks Trust</td><td class="pc">CRITICAL</td></tr>
    <tr><td>Bitter End Yacht Club</td><td>beyc.com · 800-872-2392</td><td class="ph">High</td></tr>
    <tr><td>Cooper Island Beach Club dinner</td><td>cooperislandbeachclub.com</td><td class="ph">High</td></tr>
    <tr><td>Anegada lobster dinner</td><td>Flash of Beauty</td><td class="ph">High</td></tr>
    <tr><td>Foxy's Taboo lobster (Day 7)</td><td>+1 284-340-0703</td><td class="pm">Medium</td></tr>
    <tr><td>White Bay moorings, JVD</td><td>First-come — arrive by noon</td><td class="ph">Plan ahead</td></tr>
    </tbody></table></div></div>`;

  h+=`<div class="is"><h2>Top Snorkeling Spots</h2><div class="tw"><table class="rt">
    <thead><tr><th>Spot</th><th>Day</th><th>What to Expect</th></tr></thead><tbody>
    <tr><td>Treasure Point / The Caves</td><td>1</td><td>Three swim-through sea caves; fish & turtles</td></tr>
    <tr><td>The Indians Pinnacles</td><td>2</td><td>Four volcanic pinnacles; coral on all sides</td></tr>
    <tr><td>The Baths, Virgin Gorda</td><td>3</td><td>Crystal water around granite boulders</td></tr>
    <tr><td>Anegada Barrier Reef</td><td>4</td><td>Largest reef; turtles, rays, pristine coral</td></tr>
    <tr><td>Loblolly Bay, Anegada</td><td>4</td><td>Deserted north shore; extraordinary visibility</td></tr>
    <tr><td>Diamond Cay, Little JVD</td><td>7</td><td>Eagle rays and sea turtles reliably spotted</td></tr>
    </tbody></table></div></div>`;

  h+=`<div class="is"><h2>Restaurants & Bars</h2><div class="tw"><table class="rt">
    <thead><tr><th>Name</th><th>Island</th><th>Day</th></tr></thead><tbody>
    <tr><td>Pirates Bight / Willy T</td><td>Norman Island</td><td>Day 1</td></tr>
    <tr><td>Cooper Island Beach Club</td><td>Cooper Island</td><td>Day 2 — reserve</td></tr>
    <tr><td>Bitter End Yacht Club</td><td>Virgin Gorda</td><td>Day 3 — reserve</td></tr>
    <tr><td>Saba Rock</td><td>Virgin Gorda</td><td>Day 3 HH 4–6pm</td></tr>
    <tr><td>Flash of Beauty</td><td>Anegada</td><td>Day 4 — lobster</td></tr>
    <tr><td>Soggy Dollar Bar</td><td>Jost Van Dyke</td><td>Day 6</td></tr>
    <tr><td>Ivan's Stress Free Bar</td><td>Jost Van Dyke</td><td>Day 6</td></tr>
    <tr><td>Foxy's Taboo</td><td>Little JVD</td><td>Day 7 — lobster</td></tr>
    <tr><td>Foxy's Main Bar</td><td>Jost Van Dyke</td><td>Day 7 eve</td></tr>
    <tr><td>Road Town waterfront</td><td>Tortola</td><td>Day 0 & 8</td></tr>
    </tbody></table></div></div>`;

  h+=`<div class="is"><h2>Practical Info</h2><div class="tw"><table class="rt"><tbody>
    <tr><td style="font-weight:500;color:var(--sand);min-width:110px">Currency</td><td>US Dollar. Cards accepted; cash for mooring tenders.</td></tr>
    <tr><td style="font-weight:500;color:var(--sand)">Moorings</td><td>~$30/night. Arrive by 2–3 pm at popular spots.</td></tr>
    <tr><td style="font-weight:500;color:var(--sand)">Sailing</td><td>March trades: 15–20 kts ENE. 1–2 ft in channels.</td></tr>
    <tr><td style="font-weight:500;color:var(--sand)">Snorkel gear</td><td>BYO or rent in Road Town. Underwater light for Caves.</td></tr>
    <tr><td style="font-weight:500;color:var(--sand)">Tipping</td><td>15–20% at restaurants.</td></tr>
    <tr><td style="font-weight:500;color:var(--sand)">Emergency</td><td>VISAR: Ch 16 VHF · +1 284-494-4357</td></tr>
    </tbody></table></div></div>`;

  h+=`<div style="text-align:center;margin-top:48px;padding:24px;opacity:.35;font-size:13px;font-style:italic">Fair winds and following seas. ⛵</div>`;
  c.innerHTML=h;

  if(ts==='during'){const el=document.getElementById('itin-today');if(el)setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center'}),300)}
}

// ━━━ LEGEND POSITIONING (below weather card) ━━━
function positionLegend(){
  const wxCard=document.getElementById('wxCard');
  const legend=document.getElementById('legendCard');
  if(!wxCard||!legend||isMob())return;
  const wxRect=wxCard.getBoundingClientRect();
  legend.style.top=(wxRect.bottom+12)+'px';
  // Position zoom control below legend
  const legendRect=legend.getBoundingClientRect();
  const mapRect=document.getElementById('map').getBoundingClientRect();
  const zoomCtrl=document.querySelector('.leaflet-top.leaflet-right .leaflet-control-zoom');
  if(zoomCtrl)zoomCtrl.style.marginTop=(legendRect.bottom-mapRect.top+12)+'px';
}

// ━━━ RESIZE ━━━
let rt;window.addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{map.invalidateSize();wResize();positionLegend();if(!isMob()){document.getElementById('dayCard').classList.remove('drawer-open');const h=document.getElementById('drawerHandle');if(h){h.classList.remove('open');h.style.left='0px'}}},200)});

// ━━━ WEATHER CARD (Compass Rose) ━━━
function updateWxCard(wx){
  const m=wx.wind.match(/(\d+)[–-](\d+)/);
  const lo=m?m[1]:'?',hi=m?m[2]:'?';
  const deg=wx.deg;
  document.getElementById('wxCard').innerHTML=`
    <div class="wx-card-title">WIND</div>
    <div class="wx-card-main">
      <div class="wx-card-speed-wrap">
        <div class="wx-card-speed">${lo}<span class="wx-card-dash">–</span>${hi}</div>
        <div class="wx-card-unit">knots</div>
      </div>
      <div class="wx-card-compass">
        <svg viewBox="0 0 100 100" class="compass-svg">
          <circle cx="50" cy="50" r="46" fill="none" stroke="var(--brass)" stroke-width="1.5" opacity=".35"/>
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--brass)" stroke-width=".5" opacity=".2"/>
          <line x1="50" y1="4" x2="50" y2="12" stroke="var(--brass-light)" stroke-width="1.5" opacity=".5"/>
          <line x1="50" y1="88" x2="50" y2="96" stroke="var(--brass)" stroke-width="1" opacity=".3"/>
          <line x1="4" y1="50" x2="12" y2="50" stroke="var(--brass)" stroke-width="1" opacity=".3"/>
          <line x1="88" y1="50" x2="96" y2="50" stroke="var(--brass)" stroke-width="1" opacity=".3"/>
          <line x1="82" y1="18" x2="78" y2="22" stroke="var(--brass)" stroke-width=".8" opacity=".2"/>
          <line x1="82" y1="82" x2="78" y2="78" stroke="var(--brass)" stroke-width=".8" opacity=".2"/>
          <line x1="18" y1="82" x2="22" y2="78" stroke="var(--brass)" stroke-width=".8" opacity=".2"/>
          <line x1="18" y1="18" x2="22" y2="22" stroke="var(--brass)" stroke-width=".8" opacity=".2"/>
          <text x="50" y="22" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="8" font-weight="600" fill="var(--brass-light)">N</text>
          <text x="84" y="53.5" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="7" fill="var(--brass)" opacity=".5">E</text>
          <text x="50" y="86" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="7" fill="var(--brass)" opacity=".5">S</text>
          <text x="16" y="53.5" text-anchor="middle" font-family="'JetBrains Mono',monospace" font-size="7" fill="var(--brass)" opacity=".5">W</text>
          <g transform="rotate(${deg} 50 50)">
            <polygon points="50,18 54,46 46,46" fill="var(--wind-blue)" opacity=".9"/>
            <polygon points="50,82 54,54 46,54" fill="var(--wind-blue)" opacity=".2"/>
            <circle cx="50" cy="50" r="3" fill="var(--brass-light)" stroke="var(--brass)" stroke-width=".5"/>
          </g>
        </svg>
        <div class="wx-card-dir-lbl">${wx.dir}</div>
      </div>
    </div>
    <div class="wx-card-details">
      <div class="wx-card-row"><svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg><span class="val">${wx.temp}</span></div>
      <div class="wx-card-row"><svg viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round"><path d="M2 12c2-4 5-6 10-6s8 2 10 6"/><path d="M2 18c2-4 5-6 10-6s8 2 10 6"/></svg><span class="val">${wx.seas}</span></div>
    </div>`;
  // Reposition legend after wx card renders
  requestAnimationFrame(positionLegend);
}

// ━━━ WIND PARTICLES (Enhanced) ━━━
const wCvs=document.getElementById('windCanvas');
const wCtx=wCvs.getContext('2d');
let wParts=[],wAng=0,wSpd=15,wFrame=null;
const W_N=375,W_TL=20;

function wResize(){
  const dpr=window.devicePixelRatio||1;
  const r=wCvs.parentElement.getBoundingClientRect();
  wCvs.width=r.width*dpr;wCvs.height=r.height*dpr;
  wCvs.style.width=r.width+'px';wCvs.style.height=r.height+'px';
  wCtx.setTransform(dpr,0,0,dpr,0,0);
  wInitParts();
}

function wInitParts(){
  const w=wCvs.width/(window.devicePixelRatio||1),h=wCvs.height/(window.devicePixelRatio||1);
  wParts=[];
  for(let i=0;i<W_N;i++)wParts.push({
    x:Math.random()*w,y:Math.random()*h,
    age:Math.floor(Math.random()*80),
    mx:50+Math.random()*70,
    sp:.3+Math.random()*1.2,
    br:.4+Math.random()*.6,
    tr:[]
  });
}

function wUpdate(wx){
  wAng=((wx.deg+180)%360)*Math.PI/180;
  const m=wx.wind.match(/(\d+)[–-](\d+)/);
  wSpd=m?(parseInt(m[1])+parseInt(m[2]))/2:15;
  wInitParts();
}

function wAnimate(){
  const dpr=window.devicePixelRatio||1;
  const w=wCvs.width/dpr,h=wCvs.height/dpr;
  wCtx.clearRect(0,0,w,h);
  const sf=wSpd/15;
  const vx=Math.sin(wAng)*sf*2.8,vy=-Math.cos(wAng)*sf*2.8;

  for(let i=0;i<wParts.length;i++){
    const p=wParts[i];
    p.tr.push({x:p.x,y:p.y});
    if(p.tr.length>W_TL)p.tr.shift();
    p.x+=vx*p.sp;p.y+=vy*p.sp;p.age++;

    if(p.x<-20||p.x>w+20||p.y<-20||p.y>h+20||p.age>p.mx){
      p.x=Math.random()*w;p.y=Math.random()*h;
      p.age=0;p.mx=50+Math.random()*70;p.tr=[];
      continue;
    }

    if(p.tr.length>1){
      const life=Math.max(0,1-p.age/p.mx);

      // Trail segments
      for(let j=1;j<p.tr.length;j++){
        const a=life*p.br*(j/p.tr.length)*.65;
        wCtx.beginPath();
        wCtx.moveTo(p.tr[j-1].x,p.tr[j-1].y);
        wCtx.lineTo(p.tr[j].x,p.tr[j].y);
        wCtx.strokeStyle='rgba(77,184,255,'+a+')';
        wCtx.lineWidth=1.8;
        wCtx.stroke();
      }

      // Glow halo
      const ga=life*p.br*.15;
      wCtx.beginPath();
      wCtx.arc(p.x,p.y,5,0,Math.PI*2);
      wCtx.fillStyle='rgba(77,184,255,'+ga+')';
      wCtx.fill();

      // Bright head
      const ha=life*p.br*.85;
      wCtx.beginPath();
      wCtx.arc(p.x,p.y,2,0,Math.PI*2);
      wCtx.fillStyle='rgba(200,230,255,'+ha+')';
      wCtx.fill();
    }
  }
  wFrame=requestAnimationFrame(wAnimate);
}

// ━━━ INIT ━━━
wResize();wAnimate();
setDay(getTodayIdx());
positionLegend();
