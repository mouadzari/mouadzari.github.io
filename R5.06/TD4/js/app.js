"use strict";
/* ============================================================
   DATA
   ============================================================ */
const MON = [
 {id:"eiffel", name:"Eiffel Tower", city:"Paris", country:"France", region:"Europe", lat:48.8584, lon:2.2945, tz:"Europe/Paris",
  year:"1889", h:330, hLabel:"330 m", by:"Gustave Eiffel's company", wiki:"Eiffel_Tower",
  desc:"Built as the entrance arch of the 1889 World's Fair, it was only meant to stand for 20 years. Its value as a radio antenna saved it from demolition.",
  fact:"The iron expands in summer heat, so the top can move up to about 15 cm."},
 {id:"liberty", name:"Statue of Liberty", city:"New York", country:"United States", region:"Americas", lat:40.6892, lon:-74.0445, tz:"America/New_York",
  year:"1886", h:93, hLabel:"93 m with pedestal", by:"Frédéric Bartholdi; frame by Gustave Eiffel", wiki:"Statue_of_Liberty",
  desc:"A gift from the people of France to the United States, unveiled on Liberty Island in 1886. An internal iron frame holds up the thin copper skin.",
  fact:"The copper skin is about 2.4 mm thick. Its green colour is a patina that formed over roughly 30 years."},
 {id:"forbidden", name:"Forbidden City", city:"Beijing", country:"China", region:"Asia", lat:39.9163, lon:116.3972, tz:"Asia/Shanghai",
  year:"1420", h:35, hLabel:"35 m (Hall of Supreme Harmony)", by:"Yongle Emperor, Ming dynasty", wiki:"Forbidden_City",
  desc:"The imperial palace of the Ming and Qing dynasties for almost 500 years, home to 24 emperors.",
  fact:"Yellow roof tiles were reserved for the emperor. The palace covers 72 hectares with around 980 buildings."},
 {id:"pyramid", name:"Great Pyramid of Giza", city:"Giza", country:"Egypt", region:"Africa", lat:29.9792, lon:31.1342, tz:"Africa/Cairo",
  year:"c. 2560 BC", h:139, hLabel:"139 m (146.6 m originally)", by:"Pharaoh Khufu, 4th dynasty", wiki:"Great_Pyramid_of_Giza",
  desc:"The tomb of the pharaoh Khufu, assembled from roughly 2.3 million stone blocks. It is the oldest of the Seven Wonders of the Ancient World.",
  fact:"It was the tallest human-made structure on Earth for about 3,800 years."},
 {id:"taj", name:"Taj Mahal", city:"Agra", country:"India", region:"Asia", lat:27.1751, lon:78.0421, tz:"Asia/Kolkata",
  year:"1653", h:73, hLabel:"73 m", by:"Emperor Shah Jahan; Ustad Ahmad Lahauri", wiki:"Taj_Mahal",
  desc:"A white marble mausoleum commissioned by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
  fact:"The four minarets lean slightly outward, so in an earthquake they would fall away from the tomb."},
 {id:"colosseum", name:"Colosseum", city:"Rome", country:"Italy", region:"Europe", lat:41.8902, lon:12.4922, tz:"Europe/Rome",
  year:"AD 80", h:48, hLabel:"48 m", by:"Emperors Vespasian and Titus", wiki:"Colosseum",
  desc:"The largest amphitheatre ever built in the Roman world, opened under Emperor Titus in AD 80 for gladiator fights and public spectacles.",
  fact:"It held an estimated 50,000 spectators, shaded by a huge retractable awning called the velarium."},
 {id:"bigben", name:"Big Ben", city:"London", country:"United Kingdom", region:"Europe", lat:51.5007, lon:-0.1246, tz:"Europe/London",
  year:"1859", h:96, hLabel:"96 m", by:"Augustus Pugin and Charles Barry", wiki:"Big_Ben",
  desc:"The clock tower at the north end of the Palace of Westminster. Strictly speaking, Big Ben is the name of its great bell.",
  fact:"The tower was renamed Elizabeth Tower in 2012 for Queen Elizabeth II's Diamond Jubilee."},
 {id:"christ", name:"Christ the Redeemer", city:"Rio de Janeiro", country:"Brazil", region:"Americas", lat:-22.9519, lon:-43.2105, tz:"America/Sao_Paulo",
  year:"1931", h:38, hLabel:"38 m with pedestal", by:"Paul Landowski; Heitor da Silva Costa", wiki:"Christ_the_Redeemer_(statue)",
  desc:"An Art Deco statue standing on the 700 m summit of Corcovado mountain, arms open over Rio de Janeiro.",
  fact:"Its concrete is covered in thousands of small triangular soapstone tiles. Lightning strikes it several times a year."},
 {id:"sydney", viewAz:Math.PI/2, name:"Sydney Opera House", city:"Sydney", country:"Australia", region:"Oceania", lat:-33.8568, lon:151.2153, tz:"Australia/Sydney",
  year:"1973", h:65, hLabel:"65 m", by:"Jørn Utzon", wiki:"Sydney_Opera_House",
  desc:"A performing arts centre on Bennelong Point whose roof is a cluster of white shells. It became a UNESCO World Heritage Site in 2007.",
  fact:"The shells are covered with just over one million glazed tiles made in Sweden."},
 {id:"goldengate", name:"Golden Gate Bridge", city:"San Francisco", country:"United States", region:"Americas", lat:37.8199, lon:-122.4783, tz:"America/Los_Angeles",
  year:"1937", h:227, hLabel:"227 m towers", by:"Joseph Strauss; Charles Ellis; Irving Morrow", wiki:"Golden_Gate_Bridge",
  desc:"A suspension bridge across the strait that links San Francisco Bay to the Pacific. Its 1,280 m main span was the world's longest when it opened.",
  fact:"Its colour, International Orange, was chosen to stay visible through the bay's fog."},
 {id:"stbasil", name:"Saint Basil's Cathedral", city:"Moscow", country:"Russia", region:"Europe", lat:55.7525, lon:37.6231, tz:"Europe/Moscow",
  year:"1561", h:47.5, hLabel:"47.5 m", by:"Ivan the Terrible; Postnik Yakovlev", wiki:"Saint_Basil%27s_Cathedral",
  desc:"Commissioned by Ivan the Terrible on Red Square to mark the capture of Kazan.",
  fact:"It is really nine chapels around a central one, each topped by its own dome."},
 {id:"burj", name:"Burj Khalifa", city:"Dubai", country:"United Arab Emirates", region:"Asia", lat:25.1972, lon:55.2744, tz:"Asia/Dubai",
  year:"2010", h:828, hLabel:"828 m", by:"Skidmore, Owings & Merrill (Adrian Smith)", wiki:"Burj_Khalifa",
  desc:"The tallest building in the world since its opening in 2010, rising 828 m above the desert.",
  fact:"Its Y-shaped plan, inspired by a desert flower, breaks up the wind forces on the tower."},
 {id:"chichen", name:"Chichén Itzá", city:"Yucatán", country:"Mexico", region:"Americas", lat:20.6829, lon:-88.5686, tz:"America/Merida",
  year:"c. 1000", h:30, hLabel:"30 m", by:"The Maya", wiki:"El_Castillo,_Chichen_Itza",
  desc:"El Castillo, the Temple of Kukulcán, is the stepped pyramid at the heart of the Maya city of Chichén Itzá.",
  fact:"Around the equinoxes, the afternoon sun casts a shadow like a serpent sliding down the north staircase."},
 {id:"moai", name:"Moai of Rapa Nui", city:"Easter Island", country:"Chile", region:"Oceania", lat:-27.1258, lon:-109.2766, tz:"Pacific/Easter",
  year:"c. 1250–1500", h:10, hLabel:"up to 10 m", by:"The Rapa Nui people", wiki:"Moai",
  desc:"Monolithic figures carved by the Rapa Nui people, most of them from the volcanic tuff of the Rano Raraku quarry.",
  fact:"Nearly 900 moai are known. Most of those on platforms face inland, watching over the villages."},
 {id:"machu", name:"Machu Picchu", city:"Cusco Region", country:"Peru", region:"Americas", lat:-13.1631, lon:-72.5450, tz:"America/Lima",
  year:"c. 1450", h:null, hLabel:"ridge at 2,430 m altitude", by:"Inca emperor Pachacuti", wiki:"Machu_Picchu",
  desc:"A 15th-century Inca citadel on a mountain ridge above the Urubamba river valley.",
  fact:"Its finest walls are ashlar masonry: stones cut so precisely they fit together without mortar."},
 {id:"angkor", name:"Angkor Wat", city:"Siem Reap", country:"Cambodia", region:"Asia", lat:13.4125, lon:103.8670, tz:"Asia/Phnom_Penh",
  year:"c. 1150", h:65, hLabel:"65 m central tower", by:"King Suryavarman II, Khmer Empire", wiki:"Angkor_Wat",
  desc:"Built in the 12th century as a Hindu temple to Vishnu, it gradually became a Buddhist temple.",
  fact:"It is the largest religious monument in the world, and its silhouette appears on Cambodia's flag."},
 {id:"himeji", name:"Himeji Castle", city:"Himeji", country:"Japan", region:"Asia", lat:34.8394, lon:134.6939, tz:"Asia/Tokyo",
  year:"1609", h:46.4, hLabel:"46.4 m incl. stone base", by:"Ikeda Terumasa", wiki:"Himeji_Castle",
  desc:"Japan's largest surviving original castle, nicknamed the White Heron Castle for its brilliant white plaster walls and layered roofs.",
  fact:"In 1993 it became one of the first two places in Japan listed as UNESCO World Heritage Sites."},
 {id:"itsukushima", viewAz:-Math.PI/2, name:"Itsukushima Torii", city:"Miyajima", country:"Japan", region:"Asia", lat:34.2959, lon:132.3197, tz:"Asia/Tokyo",
  year:"1875 (current gate)", h:16.6, hLabel:"16.6 m", by:"Itsukushima Shrine (founded 6th century)", wiki:"Itsukushima_Shrine",
  desc:"The vermilion gate of Itsukushima Shrine stands in the sea off Miyajima island. At high tide it seems to float on the water.",
  fact:"It is not buried in the seabed: the gate stays upright under its own weight of about 60 tonnes."},
 {id:"skytree", name:"Tokyo Skytree", city:"Tokyo", country:"Japan", region:"Asia", lat:35.7101, lon:139.8107, tz:"Asia/Tokyo",
  year:"2012", h:634, hLabel:"634 m", by:"Nikken Sekkei", wiki:"Tokyo_Skytree",
  desc:"A broadcasting and observation tower in Sumida, the tallest tower in the world. Its plan shifts from a triangle at the base to a circle at the top.",
  fact:"634 can be read 'mu-sa-shi' in Japanese, the old name of the region around Tokyo."},
 {id:"kinkaku", name:"Kinkaku-ji", city:"Kyoto", country:"Japan", region:"Asia", lat:35.0394, lon:135.7292, tz:"Asia/Tokyo",
  year:"1955 (original 1397)", h:12.5, hLabel:"12.5 m", by:"Shogun Ashikaga Yoshimitsu", wiki:"Kinkaku-ji",
  desc:"The Golden Pavilion, a Zen temple whose upper two floors are covered in gold leaf, mirrored in the Kyōko-chi pond.",
  fact:"The original pavilion was burned down in 1950 by a young monk. The current one is a 1955 reconstruction."},
 {id:"parthenon", name:"Parthenon", city:"Athens", country:"Greece", region:"Europe", lat:37.9715, lon:23.7267, tz:"Europe/Athens",
  year:"438 BC", h:13.7, hLabel:"13.7 m", by:"Ictinus and Callicrates; sculptor Phidias", wiki:"Parthenon",
  desc:"The temple of Athena on the Acropolis, the high point of classical Greek architecture.",
  fact:"Its columns bulge slightly in the middle, a trick called entasis, so they look perfectly straight from below."},
 {id:"pisa", name:"Leaning Tower of Pisa", city:"Pisa", country:"Italy", region:"Europe", lat:43.7230, lon:10.3966, tz:"Europe/Rome",
  year:"1372 (begun 1173)", h:56, hLabel:"56 m", by:"Several architects over two centuries", wiki:"Leaning_Tower_of_Pisa",
  desc:"The bell tower of Pisa Cathedral, which began to lean during construction because of soft ground on one side.",
  fact:"Engineers reduced the tilt from about 5.5° to under 4° between 1990 and 2001. The model exaggerates it."},
 {id:"sagrada", name:"Sagrada Família", city:"Barcelona", country:"Spain", region:"Europe", lat:41.4036, lon:2.1744, tz:"Europe/Madrid",
  year:"Under construction since 1882", h:172.5, hLabel:"172.5 m (Tower of Jesus, planned)", by:"Antoni Gaudí", wiki:"Sagrada_Fam%C3%ADlia",
  desc:"Antoni Gaudí's basilica, a forest of spindle-shaped towers that has been under construction for more than 140 years.",
  fact:"Gaudí kept the main tower just below the height of Montjuïc hill, believing his work should not exceed God's."},
 {id:"neuschwanstein", name:"Neuschwanstein Castle", city:"Schwangau", country:"Germany", region:"Europe", lat:47.5576, lon:10.7498, tz:"Europe/Berlin",
  year:"1886 (never finished)", h:65, hLabel:"about 65 m", by:"King Ludwig II of Bavaria", wiki:"Neuschwanstein_Castle",
  desc:"A 19th-century Romanesque Revival castle on a rocky ridge in the Bavarian Alps, built as a retreat for King Ludwig II.",
  fact:"Ludwig II lived there for under 200 days. It opened to the public just weeks after his death in 1886."},
 {id:"stonehenge", name:"Stonehenge", city:"Wiltshire", country:"United Kingdom", region:"Europe", lat:51.1789, lon:-1.8262, tz:"Europe/London",
  year:"c. 2500 BC", h:7.3, hLabel:"7.3 m tallest trilithon", by:"Neolithic Britons", wiki:"Stonehenge",
  desc:"A prehistoric ring of standing stones on Salisbury Plain, with huge sarsen uprights capped by lintels.",
  fact:"Its axis lines up with sunrise at the summer solstice and sunset at the winter solstice."},
 {id:"brandenburg", name:"Brandenburg Gate", city:"Berlin", country:"Germany", region:"Europe", lat:52.5163, lon:13.3777, tz:"Europe/Berlin",
  year:"1791", h:26, hLabel:"26 m", by:"Carl Gotthard Langhans", wiki:"Brandenburg_Gate",
  desc:"An 18th-century neoclassical gate that became a symbol of Germany's division and of its reunification.",
  fact:"Napoleon took the Quadriga, the chariot statue on top, to Paris in 1806. It came back in 1814."},
 {id:"hagia", name:"Hagia Sophia", city:"Istanbul", country:"Turkey", region:"Europe", lat:41.0086, lon:28.9802, tz:"Europe/Istanbul",
  year:"AD 537", h:55.6, hLabel:"55.6 m to the dome", by:"Emperor Justinian I; Anthemius and Isidorus", wiki:"Hagia_Sophia",
  desc:"Built as the cathedral of Constantinople, it later became a mosque, then a museum, and since 2020 a mosque again.",
  fact:"For nearly a thousand years it was the largest cathedral in the world."},
 {id:"petra", name:"Petra Treasury", city:"Petra", country:"Jordan", region:"Asia", lat:30.3222, lon:35.4516, tz:"Asia/Amman",
  year:"1st century AD", h:39, hLabel:"about 39 m", by:"The Nabataeans", wiki:"Al-Khazneh",
  desc:"Al-Khazneh, a tomb facade carved straight into a rose-red sandstone cliff, reached through a narrow gorge called the Siq.",
  fact:"Legend said a pharaoh's treasure was hidden in the stone urn at the top, which is pitted with bullet marks."},
 {id:"greatwall", name:"Great Wall (Jiayuguan)", city:"Jiayuguan", country:"China", region:"Asia", lat:39.8011, lon:98.2131, tz:"Asia/Shanghai",
  year:"1372", h:10, hLabel:"walls about 10 m", by:"Ming dynasty", wiki:"Jiayu_Pass",
  desc:"The fortified pass at the western end of the Ming Great Wall, which guarded travellers on the Silk Road.",
  fact:"China's 2012 survey measured all Great Wall sections together at about 21,000 km."},
 {id:"petronas", name:"Petronas Towers", city:"Kuala Lumpur", country:"Malaysia", region:"Asia", lat:3.1579, lon:101.7123, tz:"Asia/Kuala_Lumpur",
  year:"1998", h:452, hLabel:"452 m", by:"César Pelli", wiki:"Petronas_Towers",
  desc:"Twin 88-floor skyscrapers whose floor plan is based on an eight-pointed Islamic star.",
  fact:"They were the world's tallest buildings from 1998 to 2004. A two-storey skybridge links them at floors 41 and 42."},
 {id:"cntower", name:"CN Tower", city:"Toronto", country:"Canada", region:"Americas", lat:43.6426, lon:-79.3871, tz:"America/Toronto",
  year:"1976", h:553, hLabel:"553 m", by:"Canadian National Railway; John Andrews", wiki:"CN_Tower",
  desc:"A concrete communications and observation tower on the shore of Lake Ontario.",
  fact:"It was the world's tallest freestanding structure for 32 years, until the Burj Khalifa passed it in 2007."},
 {id:"djenne", name:"Great Mosque of Djenné", city:"Djenné", country:"Mali", region:"Africa", lat:13.9053, lon:-4.5550, tz:"Africa/Bamako",
  year:"1907", h:16, hLabel:"about 16 m", by:"Master mason Ismaila Traoré", wiki:"Great_Mosque_of_Djenn%C3%A9",
  desc:"The largest mud-brick building in the world, on a raised platform in the floodplain of the Bani river.",
  fact:"Every year the town replasters the whole mosque with fresh mud in a festival called the Crépissage."}
];
const REGIONS = ["All","Europe","Asia","Africa","Americas","Oceania"];
const ABBR = {himeji:"HIM",itsukushima:"MYJ",skytree:"TYO",kinkaku:"KYO",parthenon:"ATH",pisa:"PSA",sagrada:"BCN",neuschwanstein:"NSW",stonehenge:"STH",brandenburg:"BER",hagia:"IST",petra:"PET",greatwall:"JGN",petronas:"KUL",cntower:"YYZ",djenne:"DJE",eiffel:"PAR",liberty:"NYC",forbidden:"PEK",pyramid:"GIZ",taj:"AGR",colosseum:"ROM",bigben:"LON",christ:"RIO",sydney:"SYD",goldengate:"SFO",stbasil:"MOW",burj:"DXB",chichen:"YUC",moai:"EAS",machu:"CUZ",angkor:"REP"};

/* ============================================================
   GEO HELPERS
   ============================================================ */
const DEG = Math.PI/180, UP = new THREE.Vector3(0,1,0), EARTH_KM = 6371;
function ll2v(lat, lon, r=1){
  const phi=(90-lat)*DEG, th=(lon+180)*DEG;
  return new THREE.Vector3(-r*Math.sin(phi)*Math.cos(th), r*Math.cos(phi), r*Math.sin(phi)*Math.sin(th));
}
function v2ll(v){
  const n=v.clone().normalize();
  const lat=90-Math.acos(Math.max(-1,Math.min(1,n.y)))/DEG;
  let lon=Math.atan2(n.z,-n.x)/DEG-180; if(lon<-180) lon+=360;
  return {lat, lon};
}
function haversine(a,b){
  const dLat=(b.lat-a.lat)*DEG, dLon=(b.lon-a.lon)*DEG;
  const s=Math.sin(dLat/2)**2+Math.cos(a.lat*DEG)*Math.cos(b.lat*DEG)*Math.sin(dLon/2)**2;
  return 2*EARTH_KM*Math.asin(Math.sqrt(s));
}
function dms(v, pos, neg){
  const h=v>=0?pos:neg; v=Math.abs(v);
  const d=Math.floor(v), m=Math.floor((v-d)*60), s=Math.round(((v-d)*60-m)*60);
  return `${h} ${d}°${String(m).padStart(2,"0")}′${String(s%60).padStart(2,"0")}″`;
}
const fmtKm = km => km<10 ? km.toFixed(1)+" km" : Math.round(km).toLocaleString("en-US")+" km";
// unwrap a flat [lon,lat,...] ring across the antimeridian; polar rings get closed via the pole
function unwrap(flat){
  const pts=[]; let off=0, prev=null;
  for(let i=0;i<flat.length;i+=2){
    let x=flat[i]+off;
    if(prev!==null){ const d=x-prev; if(d>180){off-=360;x-=360;} else if(d<-180){off+=360;x+=360;} }
    pts.push([x,flat[i+1]]); prev=x;
  }
  if(pts.length>2){
    const span=pts[pts.length-1][0]-pts[0][0];
    if(Math.abs(span)>300){
      const pole = pts.reduce((s,p)=>s+p[1],0)/pts.length < 0 ? -90 : 90;
      pts.push([pts[pts.length-1][0],pole],[pts[0][0],pole]);
    }
  }
  return pts;
}

/* ============================================================
   TEXTURES (procedural from embedded Natural Earth data)
   ============================================================ */
function landPath(W, H){
  const p=new Path2D();
  for(const poly of LAND) for(const ring of poly){
    const pts=unwrap(ring);
    for(const off of [-360,0,360]){
      pts.forEach(([x,y],i)=>{ const X=(x+off+180)/360*W, Y=(90-y)/180*H; i?p.lineTo(X,Y):p.moveTo(X,Y); });
      p.closePath();
    }
  }
  return p;
}
function borderPath(W,H){
  const p=new Path2D();
  for(const line of BORDERS){
    const pts=unwrap(line);
    for(const off of [-360,0,360]) pts.forEach(([x,y],i)=>{ const X=(x+off+180)/360*W, Y=(90-y)/180*H; i?p.lineTo(X,Y):p.moveTo(X,Y); });
  }
  return p;
}
let seed=7; const rnd=()=>{ seed=(seed*16807)%2147483647; return (seed-1)/2147483646; };
function noiseCanvas(w,h,alpha){
  const c=document.createElement("canvas"); c.width=w; c.height=h; const x=c.getContext("2d");
  const img=x.createImageData(w,h);
  for(let i=0;i<img.data.length;i+=4){ const v=rnd()*255; img.data[i]=img.data[i+1]=img.data[i+2]=v; img.data[i+3]=alpha; }
  x.putImageData(img,0,0); return c;
}
function buildTextures(W){
  const H=W/2, land=landPath(W,H);
  // ---- day
  const day=document.createElement("canvas"); day.width=W; day.height=H; let c=day.getContext("2d");
  let g=c.createLinearGradient(0,0,0,H);
  g.addColorStop(0,"#2a4a66"); g.addColorStop(.18,"#173a62"); g.addColorStop(.5,"#123a68"); g.addColorStop(.82,"#173a60"); g.addColorStop(1,"#2c4a62");
  c.fillStyle=g; c.fillRect(0,0,W,H);
  c.save(); c.globalAlpha=.22; c.imageSmoothingEnabled=true; c.globalCompositeOperation="soft-light"; c.drawImage(noiseCanvas(96,48,255),0,0,W,H); c.restore();
  // shallow shelves
  c.lineJoin="round";
  [[W/110,"rgba(80,160,190,.10)"],[W/220,"rgba(90,175,200,.14)"],[W/500,"rgba(120,195,210,.20)"]].forEach(([w,col])=>{c.strokeStyle=col;c.lineWidth=w;c.stroke(land);});
  // land coloured by climate band
  g=c.createLinearGradient(0,0,0,H);
  const band=(lat,col)=>g.addColorStop((90-lat)/180,col);
  band(90,"#eef1f2"); band(72,"#e6eae9"); band(66,"#9aa48c"); band(58,"#56704a"); band(46,"#6a8450"); band(36,"#a39a68");
  band(26,"#c9ab72"); band(17,"#b8a067"); band(10,"#4f7a3f"); band(-8,"#467338"); band(-18,"#a99a66"); band(-28,"#b9a06a");
  band(-38,"#6f8752"); band(-52,"#7e8a6c"); band(-60,"#e2e6e6"); band(-90,"#f4f6f6");
  c.fillStyle=g; c.fill(land,"evenodd");
  // relief: clip to land, overlay noise at two scales
  c.save(); c.clip(land,"evenodd"); c.imageSmoothingEnabled=true;
  c.globalCompositeOperation="soft-light"; c.globalAlpha=.22; c.drawImage(noiseCanvas(512,256,255),0,0,W,H);
  c.globalAlpha=.3; c.drawImage(noiseCanvas(2048,1024,255),0,0,W,H);
  c.restore();
  c.strokeStyle="rgba(30,26,18,.45)"; c.lineWidth=Math.max(1,W/2600); c.stroke(borderPath(W,H));
  c.strokeStyle="rgba(15,22,30,.35)"; c.lineWidth=Math.max(1,W/3000); c.stroke(land);
  // graticule, 15°
  c.strokeStyle="rgba(227,181,90,.13)"; c.lineWidth=Math.max(1,W/4000); c.beginPath();
  for(let lo=-180;lo<=180;lo+=15){const X=(lo+180)/360*W;c.moveTo(X,0);c.lineTo(X,H);}
  for(let la=-75;la<=75;la+=15){const Y=(90-la)/180*H;c.moveTo(0,Y);c.lineTo(W,Y);}
  c.stroke();
  c.strokeStyle="rgba(227,181,90,.28)"; c.beginPath(); c.moveTo(0,H/2); c.lineTo(W,H/2); c.stroke();

  // ---- land mask (low res) for lights + specular
  const MW=1024, MH=512;
  const mask=document.createElement("canvas"); mask.width=MW; mask.height=MH; const mc=mask.getContext("2d");
  mc.fillStyle="#fff"; mc.fillRect(0,0,MW,MH); mc.setTransform(MW/W,0,0,MH/H,0,0); mc.fillStyle="#000"; mc.fill(land,"evenodd");
  const md=mc.getImageData(0,0,MW,MH).data;
  const isLand=(lon,lat)=>{const x=Math.floor((lon+180)/360*MW)%MW, y=Math.min(MH-1,Math.floor((90-lat)/180*MH)); return md[(y*MW+x)*4]<128;};

  // ---- night
  const night=document.createElement("canvas"); night.width=W; night.height=H; c=night.getContext("2d");
  c.fillStyle="#03060d"; c.fillRect(0,0,W,H); c.fillStyle="#0a1020"; c.fill(land,"evenodd");
  const weight=lat=> lat>62||lat<-50 ? .04 : lat>22&&lat<58 ? 1 : lat>-40&&lat<-12 ? .45 : .35;
  let placed=0, tries=0; const N = W>=4096 ? 14000 : 8000;
  while(placed<N && tries<N*40){
    tries++;
    const lon=rnd()*360-180, lat=Math.asin(rnd()*2-1)/DEG;
    if(rnd()>weight(lat) || !isLand(lon,lat)) continue;
    const X=(lon+180)/360*W, Y=(90-lat)/180*H, r=(rnd()**4)*W/2600+W/9000;
    c.fillStyle=`rgba(255,${190+Math.floor(rnd()*50)},${110+Math.floor(rnd()*60)},${.35+rnd()*.5})`;
    c.beginPath(); c.arc(X,Y,r,0,Math.PI*2); c.fill(); placed++;
  }
  for(const m of MON){
    const X=(m.lon+180)/360*W, Y=(90-m.lat)/180*H, R=W/300;
    const rg=c.createRadialGradient(X,Y,0,X,Y,R); rg.addColorStop(0,"rgba(255,220,140,.9)"); rg.addColorStop(1,"rgba(255,180,90,0)");
    c.fillStyle=rg; c.beginPath(); c.arc(X,Y,R,0,Math.PI*2); c.fill();
  }
  return {day, night, spec:mask};
}

/* ============================================================
   SCENE
   ============================================================ */
const stage=document.getElementById("stage");
const renderer=new THREE.WebGLRenderer({antialias:true, alpha:false});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setClearColor(0x060911,1);
stage.appendChild(renderer.domElement);
const canvas=renderer.domElement;
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(42, 1, 0.01, 200);
camera.position.copy(ll2v(28,18,3.3));
const controls=new THREE.OrbitControls(camera, canvas);
controls.enablePan=false; controls.enableDamping=true; controls.dampingFactor=.07;
controls.minDistance=1.22; controls.maxDistance=6; controls.zoomSpeed=.7;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
controls.autoRotate=!reduceMotion; controls.autoRotateSpeed=.35;

// stars
{
  const n=3500, pos=new Float32Array(n*3), col=new Float32Array(n*3);
  for(let i=0;i<n;i++){
    const v=new THREE.Vector3(rnd()*2-1,rnd()*2-1,rnd()*2-1).normalize().multiplyScalar(60+rnd()*40);
    pos.set([v.x,v.y,v.z],i*3); const t=.55+rnd()*.45, warm=rnd();
    col.set([t, t*(.9+warm*.1), t*(.8+(1-warm)*.25)],i*3);
  }
  const g=new THREE.BufferGeometry(); g.setAttribute("position",new THREE.BufferAttribute(pos,3)); g.setAttribute("color",new THREE.BufferAttribute(col,3));
  scene.add(new THREE.Points(g,new THREE.PointsMaterial({size:1.3,sizeAttenuation:false,vertexColors:true,transparent:true,opacity:.85,depthWrite:false})));
}

// earth
const sunDir=new THREE.Vector3(1,0,0);
const earthUniforms={dayMap:{value:null},nightMap:{value:null},specMap:{value:null},sunDir:{value:sunDir},camPos:{value:camera.position}};
const earth=new THREE.Mesh(new THREE.SphereGeometry(1,160,96), new THREE.ShaderMaterial({
  uniforms:earthUniforms,
  vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vW;
    void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
  fragmentShader:`uniform sampler2D dayMap,nightMap,specMap; uniform vec3 sunDir,camPos; varying vec2 vUv; varying vec3 vN; varying vec3 vW;
    void main(){
      vec3 n=normalize(vN); float d=dot(n,sunDir);
      float dayMix=smoothstep(-.14,.2,d);
      vec3 day=texture2D(dayMap,vUv).rgb*(.42+.8*max(d,0.));
      vec3 night=texture2D(nightMap,vUv).rgb*1.5;
      vec3 col=mix(night,day,dayMix);
      vec3 V=normalize(camPos-vW); vec3 H=normalize(sunDir+V);
      float spec=pow(max(dot(n,H),0.),48.)*texture2D(specMap,vUv).r*dayMix*.55;
      col+=vec3(1.,.92,.78)*spec;
      col+=vec3(1.,.42,.16)*(smoothstep(-.22,0.,d)-smoothstep(0.,.22,d))*.10;
      float rim=pow(1.-max(dot(V,n),0.),3.);
      col+=vec3(.35,.62,1.)*rim*.42*(.25+dayMix);
      gl_FragColor=vec4(col,1.);
    }`
}));
earth.visible=false;
scene.add(earth);
// atmosphere
scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.075,96,64), new THREE.ShaderMaterial({
  uniforms:{sunDir:{value:sunDir}}, side:THREE.BackSide, blending:THREE.AdditiveBlending, transparent:true, depthWrite:false,
  vertexShader:`varying vec3 vN; varying vec3 vW; void main(){ vN=normalize(normalMatrix*normal); vW=normalize((modelMatrix*vec4(position,1.)).xyz); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`,
  fragmentShader:`uniform vec3 sunDir; varying vec3 vN; varying vec3 vW; void main(){ float i=pow(max(.72-dot(vN,vec3(0,0,1.)),0.),3.2); float lit=.35+.65*smoothstep(-.4,.4,dot(vW,sunDir)); gl_FragColor=vec4(vec3(.32,.58,1.)*i*1.6*lit,1.); }`
})));

const sunLight=new THREE.DirectionalLight(0xfff1dc,1.5); scene.add(sunLight);
scene.add(new THREE.AmbientLight(0x8090b0,.55));
scene.add(new THREE.HemisphereLight(0xbfd4ff,0x2a2016,.35));
const headLight=new THREE.DirectionalLight(0xffe2b0,0); scene.add(headLight);

/* ============================================================
   MONUMENT MODELS (hand-built low-poly, each on a themed ground)
   Units: ground disc radius 0.5, ground top at y = P.
   ============================================================ */
const V3=(x,y,z)=>new THREE.Vector3(x,y,z);
const P=.03;
const MATS={};
function mat(color, o={}){ const k=String(color)+JSON.stringify(o,(k,v)=>v&&v.isTexture?v.uuid:v); return MATS[k]||(MATS[k]=new THREE.MeshStandardMaterial(Object.assign({color,roughness:.78,metalness:.04,flatShading:true},o))); }
const smooth=(c,o={})=>mat(c,Object.assign({flatShading:false},o));
function mesh(geo, c, x=0,y=0,z=0, o){ const m=new THREE.Mesh(geo, c && c.isMaterial ? c : mat(c,o)); m.position.set(x,y,z); return m; }
const box=(w,h,d,c,x=0,y=0,z=0,o)=>mesh(new THREE.BoxGeometry(w,h,d),c,x,y+h/2,z,o);
const cyl=(rt,rb,h,c,x=0,y=0,z=0,seg=12,o)=>mesh(new THREE.CylinderGeometry(rt,rb,h,seg),c,x,y+h/2,z,o);
const sqf=(rt,rb,h,c,x=0,y=0,z=0,o)=>{const m=cyl(rt*Math.SQRT2,rb*Math.SQRT2,h,c,x,y,z,4,o); m.rotation.y=Math.PI/4; return m;};
const cone=(r,h,c,x=0,y=0,z=0,seg=12,o)=>mesh(new THREE.ConeGeometry(r,h,seg),c,x,y+h/2,z,o);
const pyr=(r,h,c,x=0,y=0,z=0,o)=>{const m=cone(r*Math.SQRT2,h,c,x,y,z,4,o); m.rotation.y=Math.PI/4; return m;};
const sph=(r,c,x=0,y=0,z=0,sy=1,o)=>{const m=mesh(new THREE.SphereGeometry(r,16,12),c,x,y,z,o); m.scale.y=sy; return m;};
const lathe=(prof,c,x=0,y=0,z=0,seg=16,o)=>mesh(new THREE.LatheGeometry(prof.map(([a,b])=>new THREE.Vector2(a,b)),seg),c,x,y,z,o);
function beam(a,b,r,c,seg=4){ const d=new THREE.Vector3().subVectors(b,a), L=d.length(); const m=mesh(new THREE.CylinderGeometry(r,r,L,seg),c); m.position.copy(a).addScaledVector(d,.5); m.quaternion.setFromUnitVectors(UP,d.normalize()); return m; }
function slab(a,b,w,t,c){ const d=new THREE.Vector3().subVectors(b,a), L=d.length(); const m=mesh(new THREE.BoxGeometry(w,L,t),c); m.position.copy(a).addScaledVector(d,.5); m.quaternion.setFromUnitVectors(UP,d.normalize()); return m; }
function hip(w,h,d,c,y,x=0,z=0){ const m=mesh(new THREE.ConeGeometry(Math.SQRT1_2,1,4),c,x,y+h/2,z); m.rotation.y=Math.PI/4; m.scale.set(w,h,d); return m; }
// triangular prism (gable roof / pediment): width w along x, height h, depth d along z
function prism(w,h,d,c,x=0,y=0,z=0,ry=0){ const s=new THREE.Shape([new THREE.Vector2(-w/2,0),new THREE.Vector2(w/2,0),new THREE.Vector2(0,h)]); const g=new THREE.ExtrudeGeometry(s,{depth:d,bevelEnabled:false}); g.translate(0,0,-d/2); const m=mesh(g,c,x,y,z); m.rotation.y=ry; return m; }
// flat extruded outline (points in x/z), standing up from y
function flat(pts,h,c,y=0,o){ const s=new THREE.Shape(pts.map(([x,z])=>new THREE.Vector2(x,-z))); const g=new THREE.ExtrudeGeometry(s,{depth:h,bevelEnabled:false}); g.rotateX(-Math.PI/2); return mesh(g,c,0,y,0,o); }
function star(n,ro,ri,rot=0){ const p=[]; for(let i=0;i<n*2;i++){ const a=rot+i*Math.PI/n, r=i%2?ri:ro; p.push([Math.cos(a)*r,Math.sin(a)*r]); } return p; }
function circlePts(r,n=40,a0=0,a1=Math.PI*2){ const p=[]; for(let i=0;i<=n;i++){ const a=a0+(a1-a0)*i/n; p.push([Math.cos(a)*r,Math.sin(a)*r]); } return p; }
// rough rock / mountain: cone with jittered vertices
function rock(r,h,c,x=0,y=0,z=0,seg=8,jit=.18,seed0=1){
  const g=new THREE.ConeGeometry(r,h,seg,3); const p=g.attributes.position; let s=seed0;
  const rr=()=>{ s=(s*16807)%2147483647; return s/2147483647-.5; };
  for(let i=0;i<p.count;i++){ const yy=p.getY(i); if(yy<-h/2+1e-4) continue; p.setX(i,p.getX(i)*(1+rr()*jit*2)); p.setZ(i,p.getZ(i)*(1+rr()*jit*2)); p.setY(i,yy+rr()*h*jit*.4); }
  g.computeVertexNormals(); return mesh(g,c,x,y+h/2,z);
}
const G=(...ch)=>{const g=new THREE.Group(); ch.flat().forEach(c=>c&&g.add(c)); return g;};

/* ---------- textures for windows, stripes ---------- */
function canvasTex(w,h,draw,rx=1,ry=1){ const c=document.createElement("canvas"); c.width=w; c.height=h; draw(c.getContext("2d"),w,h); const t=new THREE.CanvasTexture(c); t.wrapS=t.wrapT=THREE.RepeatWrapping; t.repeat.set(rx,ry); return t; }
const TEX={};
TEX.glass=canvasTex(32,64,(x,w,h)=>{ x.fillStyle="#9fb2c4"; x.fillRect(0,0,w,h); for(let j=0;j<h;j+=4) for(let i=0;i<w;i+=4){ const v=150+Math.random()*80|0; x.fillStyle=`rgb(${v-40},${v-15},${v+10})`; x.fillRect(i,j,3,3); } },3,8);
TEX.stripes=(a,b)=>canvasTex(64,64,(x,w,h)=>{ x.fillStyle=a; x.fillRect(0,0,w,h); x.fillStyle=b; for(let i=-h;i<w;i+=16){ x.beginPath(); x.moveTo(i,0); x.lineTo(i+8,0); x.lineTo(i+8+h,h); x.lineTo(i+h,h); x.fill(); } },2,1);
TEX.zig=(a,b)=>canvasTex(64,64,(x,w,h)=>{ x.fillStyle=a; x.fillRect(0,0,w,h); x.strokeStyle=b; x.lineWidth=5; for(let j=6;j<h;j+=14){ x.beginPath(); for(let i=0;i<=w;i+=8) x.lineTo(i,j+((i/8)%2?5:-5)); x.stroke(); } },2,1);
TEX.brick=canvasTex(64,32,(x,w,h)=>{ x.fillStyle="#a8473d"; x.fillRect(0,0,w,h); x.strokeStyle="rgba(240,220,200,.35)"; x.lineWidth=1; for(let j=0;j<h;j+=8){ x.beginPath(); x.moveTo(0,j); x.lineTo(w,j); x.stroke(); for(let i=(j/8)%2*8;i<w;i+=16){ x.beginPath(); x.moveTo(i,j); x.lineTo(i,j+8); x.stroke(); } } },3,2);

/* ---------- grounds ---------- */
const GROUND={grass:"#56803f",forest:"#3f6a38",sand:"#d2b47c",paved:"#a59a88",stone:"#9b927f",snow:"#dfe5e8",rose:"#c98d6e",city:"#787b80"};
const WATER=()=>mat("#2f6f9a",{roughness:.22,metalness:.25,flatShading:false});
function ground(kind){ return mesh(new THREE.CylinderGeometry(.5,.51,P,48), kind==="water"?WATER():mat(GROUND[kind]||kind,{flatShading:false}),0,P/2,0); }
// land piece cut by a straight shoreline: keeps the part of the disc where x < off, then rotates about y
function shore(kind,off,ry=0,h=P*1.4){
  const a=Math.acos(Math.max(-1,Math.min(1,off/.5))); const pts=circlePts(.5,40,a,Math.PI*2-a);
  const m=flat(pts,h,mat(GROUND[kind]||kind,{flatShading:false}),0); m.rotation.y=ry; return m;
}
const trees=(pts,c="#2f5a2e",h=.06,r=.022)=>pts.map(([x,z])=>cone(r,h,c,x,P,z,6));

/* ---------- merge meshes per material (fewer draw calls) ---------- */
function bake(root){
  root.updateMatrixWorld(true);
  const buckets=new Map();
  root.traverse(o=>{
    if(!o.isMesh) return;
    let g=o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    g.applyMatrix4(o.matrixWorld);
    for(const k of Object.keys(g.attributes)) if(!["position","normal","uv"].includes(k)) g.deleteAttribute(k);
    if(!g.attributes.uv) g.setAttribute("uv",new THREE.BufferAttribute(new Float32Array(g.attributes.position.count*2),2));
    g.clearGroups();
    if(!buckets.has(o.material)) buckets.set(o.material,[]);
    buckets.get(o.material).push(g);
  });
  const out=new THREE.Group();
  for(const [m,gs] of buckets) out.add(new THREE.Mesh(THREE.BufferGeometryUtils.mergeBufferGeometries(gs),m));
  return out;
}

const BUILD={
  /* ---------------- EUROPE ---------------- */
  eiffel(){
    const c="#7b5a3d", g=G(ground("grass"), box(.16,.004,.46,"#79a85a",0,P,.12), box(.1,.004,.12,"#8aa6c0",0,P,.38));
    const hw=y=>.25*Math.exp(-y*3.6)+.012, Y=y=>P+y, legs=[[1,1],[1,-1],[-1,-1],[-1,1]];
    for(const [sx,sz] of legs){
      const pts=[]; for(let i=0;i<=14;i++){ const y=i/14*.6; pts.push(V3(sx*hw(y),Y(y),sz*hw(y))); }
      g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),28,.015,4),mat(c)));
    }
    const lv=[.02,.09,.17,.26,.35,.45,.55];
    for(let k=0;k<lv.length-1;k++){ const y1=lv[k],y2=lv[k+1],w1=hw(y1),w2=hw(y2);
      for(let f=0;f<4;f++){ const [ax,az]=legs[f],[bx,bz]=legs[(f+1)%4];
        g.add(beam(V3(ax*w1,Y(y1),az*w1),V3(bx*w2,Y(y2),bz*w2),.0045,c), beam(V3(bx*w1,Y(y1),bz*w1),V3(ax*w2,Y(y2),az*w2),.0045,c));
        g.add(beam(V3(ax*w2,Y(y2),az*w2),V3(bx*w2,Y(y2),bz*w2),.005,c)); } }
    for(const rot of [0,Math.PI/2]) for(const s of [-1,1]){ const t=mesh(new THREE.TorusGeometry(.16,.01,4,20,Math.PI),c); t.position.set(rot?s*hw(.06):0,P-.04,rot?0:s*hw(.06)); t.rotation.y=rot; g.add(t); }
    g.add(box(2*hw(.17)+.05,.022,2*hw(.17)+.05,c,0,Y(.16),0), box(2*hw(.35)+.03,.018,2*hw(.35)+.03,c,0,Y(.345),0));
    g.add(sqf(.012,hw(.55),.32,c,0,Y(.55),0), box(.034,.024,.034,c,0,Y(.86),0), cyl(.003,.007,.14,"#cfc6b8",0,Y(.884),0,6));
    return g;
  },
  colosseum(){
    const st="#d8c39a", dk="#4f3f2b", g=G(ground("paved"));
    const ringM=c=>mat(c,{side:THREE.DoubleSide});
    const ring=(r,h,y,ts,tl,c,rt=r)=>{const m=mesh(new THREE.CylinderGeometry(rt,r,h,48,1,true,ts,tl),ringM(c)); m.position.y=y+h/2; return m;};
    const inner=G(cyl(.44,.44,.006,"#c8ae84",0,P,0,40), ring(.42,.25,P,0,Math.PI*1.35,st), ring(.42,.15,P,Math.PI*1.35,Math.PI*.65,st),
      ring(.3,.15,P,0,Math.PI*2,"#c4ad80",.41), ring(.3,.06,P,0,Math.PI*2,st), cyl(.24,.24,.012,"#b4925f",0,P,0,40));
    for(let i=0;i<6;i++) inner.add(box(.42,.006,.012,"#8a6d45",0,P+.012,-.15+i*.06));
    for(let row=0;row<3;row++) for(let i=0;i<44;i++){ const a=i/44*Math.PI*2; if(row===2 && a>Math.PI*1.35) continue;
      const m=box(.03,.046,.012,dk,Math.sin(a)*.423,P+.02+row*.072,Math.cos(a)*.423); m.rotation.y=a; inner.add(m); }
    inner.add(ring(.425,.012,P+.2,0,Math.PI*1.35,"#c8b388"), ring(.425,.012,P+.13,0,Math.PI*2,"#c8b388"), ring(.425,.012,P+.06,0,Math.PI*2,"#c8b388"));
    inner.scale.z=.8; g.add(inner); return g;
  },
  bigben(){
    const sd="#d6b26f", sl="#3d4852", g=G(ground("water"), shore("grass",.2,0));
    const tx=-.02, tz=-.3, y0=P*1.4;
    g.add(box(.11,.48,.11,sd,tx,y0,tz));
    for(const sx of [-1,1]) for(const sz of [-1,1]) g.add(box(.016,.5,.016,"#c9a35e",tx+sx*.055,y0,tz+sz*.055));
    for(let k=0;k<5;k++) g.add(box(.112,.006,.112,"#b8924f",tx,y0+.08+k*.08,tz));
    g.add(box(.135,.12,.135,sd,tx,y0+.48,tz));
    for(let k=0;k<4;k++){ const a=k*Math.PI/2, dx=Math.sin(a)*.069, dz=Math.cos(a)*.069;
      const f=mesh(new THREE.CircleGeometry(.05,28),"#f8f1da",tx+dx,y0+.54,tz+dz,{emissive:"#ffe7a8",emissiveIntensity:.45}); f.rotation.y=a; g.add(f);
      const h1=box(.004,.035,.003,"#222",tx+dx*1.03,y0+.54,tz+dz*1.03); h1.rotation.y=a; g.add(h1);
      const h2=box(.026,.004,.003,"#222",tx+dx*1.03,y0+.54,tz+dz*1.03); h2.rotation.y=a; g.add(h2); }
    g.add(box(.12,.07,.12,sd,tx,y0+.6,tz));
    for(let k=0;k<4;k++){ const a=k*Math.PI/2; const o=box(.07,.05,.01,"#3a2c1c",tx+Math.sin(a)*.061,y0+.61,tz+Math.cos(a)*.061); o.rotation.y=a; g.add(o); }
    g.add(pyr(.072,.25,sl,tx,y0+.67,tz), cyl(.003,.006,.06,"#d9b25a",tx,y0+.92,tz,6));
    for(const sx of [-1,1]) for(const sz of [-1,1]) g.add(cone(.012,.07,sd,tx+sx*.058,y0+.67,tz+sz*.058,4));
    // Palace of Westminster along the river
    g.add(box(.12,.12,.56,sd,.08,y0,.02), prism(.12,.05,.56,sl,.08,y0+.12,.02,0));
    g.add(box(.08,.08,.3,"#cfaa66",-.06,y0,.08));
    for(let i=0;i<12;i++){ g.add(cone(.01,.06,sd,.14,y0+.12,-.24+i*.046,4), cone(.01,.06,sd,.02,y0+.12,-.24+i*.046,4)); }
    g.add(box(.12,.3,.12,sd,.08,y0,.36), pyr(.065,.06,sl,.08,y0+.3,.36));
    for(const sx of [-1,1]) for(const sz of [-1,1]) g.add(cyl(.01,.01,.34,sd,.08+sx*.06,y0,.36+sz*.06,6));
    return g;
  },
  stbasil(){
    const g=G(ground("paved"), box(.6,.004,.22,"#8f8a82",0,P,.3));
    const brick=mat("#ffffff",{map:TEX.brick}), trim="#f1e6cf";
    g.add(mesh(new THREE.BoxGeometry(.46,.12,.46),brick,0,P+.06,0), box(.48,.012,.48,trim,0,P+.12,0));
    g.add(cyl(.085,.1,.26,brick,0,P+.13,0,8), cyl(.09,.09,.02,trim,0,P+.36,0,8));
    g.add(cone(.085,.32,"#efe3c8",0,P+.38,0,8), sph(.026,"#e3b744",0,P+.72,0,1.4,{metalness:.6,roughness:.3}), cyl(.002,.002,.06,"#e3b744",0,P+.74,0,4));
    const pairs=[["#2d8b4f","#f1c84a"],["#c7372d","#f3efe6"],["#2557a8","#f3efe6"],["#2d8b4f","#c7372d"],["#e8b730","#2d8b4f"],["#c7372d","#2d8b4f"],["#2557a8","#e8b730"],["#e46a2e","#2d8b4f"]];
    const onion=[[0,0],[.045,0],[.06,.02],[.068,.05],[.064,.08],[.05,.11],[.03,.135],[.012,.155],[.003,.17],[0,.18]];
    for(let k=0;k<8;k++){
      const a=k*Math.PI/4+Math.PI/8, big=k%2===0, r=big?.2:.19, x=Math.sin(a)*r, z=Math.cos(a)*r;
      const tw=big?.05:.036, th=big?.22:.15, sc=big?1:.72;
      g.add(cyl(tw,tw*1.08,th,k%2?"#efe4cf":brick,x,P+.12,z,8), cyl(tw*1.15,tw*1.15,.012,trim,x,P+.12+th,z,8));
      const tex=k%2?TEX.zig(pairs[k][0],pairs[k][1]):TEX.stripes(pairs[k][0],pairs[k][1]);
      const d=lathe(onion.map(([a,b])=>[a*sc,b*sc]),smooth("#ffffff",{map:tex,roughness:.5}),x,P+.132+th,z,18); g.add(d);
      g.add(cone(.004,.03*sc,"#e3b744",x,P+.132+th+.18*sc,z,4));
    }
    return g;
  },
  parthenon(){
    const mb="#e9e2d3", g=G(ground("stone"), rock(.46,.06,"#a69c86",0,P-.03,0,10,.05,3));
    const y0=P+.03;
    g.add(box(.46,.015,.25,"#ddd5c4",0,y0,0), box(.44,.015,.23,"#e2dacb",0,y0+.015,0), box(.42,.015,.21,mb,0,y0+.03,0));
    const cy=y0+.045, ch=.12, nx=8, nz=15;
    const col=(x,z)=>g.add(cyl(.0105,.0125,ch,smooth(mb),x,cy,z,10), box(.028,.006,.028,mb,x,cy+ch,z));
    for(let i=0;i<nx;i++){ const x=-.19+i*(.38/(nx-1)); col(x,-.09); col(x,.09); }
    for(let j=1;j<nz-1;j++){ const z=-.09+j*(.18/(nz-1)); if(j===5||j===6) continue; col(-.19,z); col(.19,z); }
    g.add(box(.41,.028,.2,mb,0,cy+ch+.006,0), box(.42,.012,.21,"#dcd3c1",0,cy+ch+.034,0));
    g.add(prism(.21,.055,.02,mb,-.2,cy+ch+.046,0,Math.PI/2), prism(.21,.055,.02,mb,.2,cy+ch+.046,0,Math.PI/2));
    g.add(box(.22,.08,.1,"#d8cfbd",-.02,cy,0));
    return g;
  },
  pisa(){
    const wh="#f1ece2", g=G(ground("grass"), box(.5,.004,.06,"#b8b0a0",0,P,.32));
    const t=G(); let y=0;
    t.add(cyl(.07,.072,.06,smooth(wh),0,0,0,20)); y=.06;
    for(let k=0;k<6;k++){ t.add(cyl(.062,.062,.05,smooth("#e2dccf"),0,y,0,20), cyl(.075,.075,.008,smooth(wh),0,y+.05,0,20));
      for(let i=0;i<18;i++){ const a=i/18*Math.PI*2; t.add(cyl(.004,.004,.05,wh,Math.cos(a)*.07,y,Math.sin(a)*.07,5)); } y+=.058; }
    t.add(cyl(.05,.05,.05,smooth("#e2dccf"),0,y,0,18)); for(let i=0;i<12;i++){ const a=i/12*Math.PI*2; t.add(cyl(.004,.004,.05,wh,Math.cos(a)*.055,y,Math.sin(a)*.055,5)); }
    t.add(cyl(.058,.058,.008,smooth(wh),0,y+.05,0,18), cyl(.03,.035,.02,wh,0,y+.058,0,12));
    t.position.set(.2,P,-.16); t.rotation.z=-.11; g.add(t);
    // cathedral + baptistery
    const cat=G(box(.08,.08,.32,wh,0,0,0), prism(.08,.035,.32,"#a79d8a",0,.08,0), box(.26,.06,.07,wh,0,0,-.04), prism(.07,.03,.26,"#a79d8a",0,.06,-.04,Math.PI/2),
      cyl(.035,.035,.04,wh,0,.08,-.04,12), sph(.034,"#b5ad9c",0,.12,-.04,.8));
    for(let i=0;i<6;i++) cat.add(box(.082,.004,.32,"#8d867a",0,.012+i*.012,0));
    cat.position.set(-.12,P,.04); g.add(cat);
    g.add(cyl(.075,.075,.08,smooth(wh),-.14,P,.36-.04,20), sph(.06,smooth("#c9c1b0"),-.14,P+.08,.32,.7), cyl(.008,.012,.03,wh,-.14,P+.12,.32,8));
    return g;
  },
  sagrada(){
    const oc="#b79e78", g=G(ground("city"));
    for(const [x,z] of [[-.38,-.2],[.38,.18],[-.36,.24],[.32,-.28]]) g.add(box(.1,.08,.12,"#9b9488",x,P,z));
    g.add(box(.3,.12,.18,oc,0,P,0), prism(.18,.08,.3,"#9c8765",0,P+.12,0,Math.PI/2), box(.12,.14,.24,oc,0,P,0));
    const spindle=[[.03,0],[.031,.06],[.029,.14],[.025,.22],[.019,.29],[.012,.34],[.006,.375],[0,.4]];
    const sp=(x,z,s,fin)=>{ g.add(lathe(spindle.map(([a,b])=>[a*s*.9,b*s]),smooth(oc,{roughness:.9}),x,P,z,10));
      for(let k=1;k<6;k++) g.add(cyl(spindle[0][0]*s*.9*(1-k*.13)+.002,spindle[0][0]*s*.9*(1-k*.13)+.002,.004,"#8f7a59",x,P+k*.055*s,z,10));
      g.add(sph(.012*s,fin,x,P+.4*s,z,1,{flatShading:false,roughness:.4})); };
    [[-.09,.13],[-.03,.14],[.03,.14],[.09,.13]].forEach(([x,z],i)=>sp(x,z,i%3?1.05:.95,"#d4473a"));
    [[-.09,-.13],[-.03,-.14],[.03,-.14],[.09,-.13]].forEach(([x,z],i)=>sp(x,z,i%3?1.05:.95,"#e3b23c"));
    for(const [x,z] of [[-.06,-.04],[.06,-.04],[-.06,.05],[.06,.05]]) sp(x,z,1.38,"#3c7fc0");
    sp(0,-.08,1.45,"#f2efe6");
    sp(0,0,1.85,"#f2efe6"); g.add(box(.006,.05,.006,"#f2efe6",0,P+.74,0), box(.035,.006,.006,"#f2efe6",0,P+.755,0), box(.006,.006,.035,"#f2efe6",0,P+.755,0));
    return g;
  },
  neuschwanstein(){
    const wh="#efe9df", rf="#4b5b70", g=G(ground("forest"));
    g.add(...trees([[-.38,.1],[-.32,.25],[-.2,.38],[.36,.22],[.3,.34],[.4,-.05],[-.4,-.15],[.1,.42],[-.05,.43],[.38,-.25]],"#2b5230",.09,.03));
    g.add(rock(.3,.18,"#7d776b",0,P,0,9,.15,7));
    const y0=P+.16;
    g.add(box(.3,.03,.12,"#8a8478",0,y0,0));
    g.add(box(.08,.17,.07,wh,-.06,y0+.03,0), prism(.08,.07,.07,rf,-.06,y0+.2,0,Math.PI/2));
    g.add(box(.09,.12,.06,wh,.04,y0+.03,-.01), prism(.06,.05,.09,rf,.04,y0+.15,-.01,0));
    g.add(box(.07,.07,.07,"#c07a5c",.12,y0+.03,.02), prism(.07,.035,.07,rf,.12,y0+.1,.02,0));
    const tower=(x,z,r,h,cr)=>{ g.add(cyl(r,r,h,smooth(wh),x,y0+.03,z,14), cyl(r*1.15,r*1.15,.012,wh,x,y0+.03+h,z,14), cone(r*1.2,cr,rf,x,y0+.042+h,z,14)); };
    tower(-.01,.045,.022,.24,.09); tower(-.1,.04,.016,.2,.07); tower(-.11,-.04,.014,.16,.06); tower(.08,.04,.014,.14,.05); tower(.15,-.03,.012,.1,.045);
    for(let i=0;i<5;i++) g.add(box(.008,.012,.002,"#3a3f48",-.08+i*.012,y0+.14,.036));
    return g;
  },
  stonehenge(){
    const st="#8e897e", st2="#7d786e", g=G(ground("grass"));
    const bank=mesh(new THREE.TorusGeometry(.42,.012,4,48),"#6f9750",0,P,0); bank.rotation.x=Math.PI/2; g.add(bank);
    const N=30, R=.21;
    for(let i=0;i<N;i++){ const a=i/N*Math.PI*2; if([7,8,13,20,21,22,26].includes(i)) continue;
      const u=box(.03,.075,.018,i%3?st:st2,Math.cos(a)*R,P,Math.sin(a)*R); u.rotation.y=-a+Math.PI/2; g.add(u); }
    for(let i=0;i<N;i+=1){ if(i%2 || [6,8,12,20,22,26,24].includes(i)) continue; const a=(i+.5)/N*Math.PI*2;
      const l=box(.05,.014,.016,st,Math.cos(a)*R,P+.075,Math.sin(a)*R); l.rotation.y=-a+Math.PI/2; g.add(l); }
    const tri=[[-.6,.1],[-.25,.11],[Math.PI/2,.12],[Math.PI-.25,.11],[Math.PI+.6,.1]];
    tri.forEach(([a,h],k)=>{ const x=Math.cos(a)*.11, z=Math.sin(a)*.11;
      const grp=G(box(.026,h,.02,st2,-.018,0,0), box(.026,h,.02,st2,.018,0,0), k===2?null:box(.07,.016,.02,st,0,h,0)); grp.position.set(x,P,z); grp.rotation.y=-a+Math.PI/2; g.add(grp); });
    for(let i=0;i<14;i++){ const a=i/14*Math.PI*2; g.add(box(.012,.03,.01,"#6e7680",Math.cos(a)*.16,P,Math.sin(a)*.16)); }
    const fallen=box(.07,.016,.02,st,.05,P,.25); fallen.rotation.y=.6; g.add(fallen);
    g.add(box(.03,.06,.025,st2,.36,P,.16));
    return g;
  },
  brandenburg(){
    const sd="#dccca6", g=G(ground("paved"), box(1,.004,.14,"#8a857c",0,P,.18), box(1,.004,.14,"#8a857c",0,P,-.18));
    g.add(box(.42,.02,.13,"#cdbd98",0,P,0));
    for(let i=0;i<6;i++){ const x=-.175+i*.07; for(const z of [-.045,.045]) g.add(cyl(.0135,.015,.15,smooth(sd),x,P+.02,z,12)); }
    for(let i=0;i<5;i++) g.add(box(.012,.15,.1,"#cdbd98",-.14+i*.07,P+.02,0));
    g.add(box(.44,.045,.14,sd,0,P+.17,0), box(.44,.008,.142,"#c8b78f",0,P+.19,0), box(.22,.035,.11,sd,0,P+.215,0));
    for(const s of [-1,1]) g.add(box(.08,.11,.09,sd,s*.27,P,0), prism(.08,.03,.09,"#b9a882",s*.27,P+.11,0,Math.PI/2));
    const cu="#5f9a83", y0=P+.25;
    g.add(box(.035,.03,.04,cu,0,y0,-.01));
    for(let i=0;i<4;i++){ const x=-.045+i*.03; g.add(box(.012,.025,.05,cu,x,y0+.012,.03), box(.01,.022,.014,cu,x,y0+.03,.06)); for(const dz of [.01,.045]) g.add(box(.004,.016,.004,cu,x,y0-.004,dz)); }
    g.add(cyl(.006,.01,.05,cu,0,y0+.03,-.015,6), sph(.007,cu,0,y0+.085,-.015), beam(V3(0,y0+.07,-.015),V3(.02,y0+.11,-.02),.003,cu), box(.03,.02,.002,cu,0,y0+.065,-.025));
    return g;
  },
  hagia(){
    const wall="#c98f6c", lead="#7e8c92", wh="#efe8dc", g=G(ground("paved"));
    g.add(...trees([[-.4,.2],[.4,.22],[-.38,-.25],[.4,-.2],[0,.42]],"#3c6a3a",.06,.025));
    g.add(box(.36,.13,.3,wall,0,P,0));
    for(const s of [-1,1]){ g.add(box(.06,.17,.32,"#c08566",s*.15,P,0)); g.add(box(.36,.09,.04,"#c08566",0,P,s*.17)); }
    g.add(cyl(.12,.125,.05,wall,0,P+.13,0,24));
    for(let i=0;i<24;i++){ const a=i/24*Math.PI*2; const w=box(.012,.02,.003,"#3a2c22",Math.sin(a)*.123,P+.145,Math.cos(a)*.123); w.rotation.y=a; g.add(w); }
    const dome=mesh(new THREE.SphereGeometry(.13,28,12,0,Math.PI*2,0,Math.PI*.42),smooth(lead,{roughness:.45,metalness:.3}),0,P+.15,0); dome.scale.y=.8; g.add(dome);
    g.add(cyl(.003,.006,.04,"#d9b25a",0,P+.235,0,6));
    for(const s of [-1,1]){ const sd=mesh(new THREE.SphereGeometry(.1,20,8,s>0?0:Math.PI,Math.PI,0,Math.PI/2),smooth(lead,{roughness:.45,metalness:.3,side:THREE.DoubleSide}),0,P+.13,s*.12); sd.rotation.y=Math.PI/2; sd.scale.y=.7; g.add(sd); }
    for(const sx of [-1,1]) for(const sz of [-1,1]){ const x=sx*.24, z=sz*.2;
      g.add(cyl(.013,.016,.36,smooth(wh),x,P,z,10), cyl(.02,.02,.008,wh,x,P+.24,z,10), cyl(.02,.02,.008,wh,x,P+.3,z,10), cone(.016,.07,lead,x,P+.36,z,10)); }
    return g;
  },

  /* ---------------- AMERICAS ---------------- */
  liberty(){
    const cu="#68a78f", g=G(ground("water"));
    g.add(flat(star(11,.34,.27,Math.PI/2),.045,"#b7ac95",P*.6), cyl(.25,.25,.05,smooth("#6f9f55"),0,P*.6,0,30));
    const y0=P*.6+.05;
    g.add(box(.17,.03,.17,"#c9bca3",0,y0,0), sqf(.075,.085,.17,"#d2c5ab",0,y0+.03,0), box(.19,.025,.19,"#c9bca3",0,y0+.2,0), sqf(.06,.07,.07,"#d2c5ab",0,y0+.225,0));
    const s=y0+.295;
    g.add(lathe([[.0,0],[.055,0],[.052,.06],[.045,.13],[.038,.2],[.042,.24],[.03,.27],[.012,.285],[0,.29]],smooth(cu),0,s,0,16));
    g.add(cyl(.011,.013,.02,smooth(cu),0,s+.28,0,8), sph(.024,smooth(cu),0,s+.315,0,1.1));
    for(let i=0;i<7;i++){ const a=(i/6-.5)*Math.PI*1.2; const sp=mesh(new THREE.ConeGeometry(.005,.04,4),cu); sp.position.set(Math.sin(a)*.03,s+.335,Math.cos(a)*.03); sp.lookAt(Math.sin(a)*.3,s+.38,Math.cos(a)*.3); sp.rotateX(Math.PI/2); g.add(sp); }
    g.add(beam(V3(.03,s+.25,0),V3(.06,s+.44,0),.011,cu), cyl(.007,.014,.03,"#c9a53c",.062,s+.435,0,8,{metalness:.6,roughness:.3}));
    g.add(cone(.014,.04,"#ffcf5a",.062,s+.465,0,6,{emissive:"#ff9a2a",emissiveIntensity:1.3}));
    g.add(beam(V3(-.035,s+.24,0),V3(-.05,s+.17,.03),.01,cu)); const tab=box(.035,.065,.014,cu,-.06,s+.12,.035); tab.rotation.z=.25; g.add(tab);
    return g;
  },
  goldengate(){
    const o="#c3412f", g=G(ground("water"), shore("forest",-.3,0,P*2), shore("#6c8a4f",-.3,Math.PI,P*2));
    g.add(rock(.12,.1,"#5e7a46",-.42,P,0,7,.2,2), rock(.1,.08,"#6c8a4f",.42,P,0,7,.2,5));
    g.add(box(1.0,.022,.07,o,0,.12,0), box(1.0,.012,.06,"#3d3d3d",0,.142,0));
    for(const tx of [-.27,.27]){
      for(const z of [-.04,.04]){ g.add(box(.03,.18,.03,o,tx,P,z), box(.026,.14,.026,o,tx,P+.18,z), box(.022,.13,.022,o,tx,P+.32,z)); }
      for(const y of [.15,.28,.38,.44]) g.add(box(.024,.024,.1,o,tx,y,0));
      g.add(box(.06,.02,.12,"#9a948a",tx,P,0));
    }
    const cy=x=> Math.abs(x)<=.27 ? .16+.3*(x/.27)**2 : .46-.32*((Math.abs(x)-.27)/.23)**.8;
    for(const z of [-.042,.042]){
      const pts=[]; for(let i=0;i<=40;i++){ const x=-.5+i/40; pts.push(V3(x,cy(x),z)); }
      g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),80,.0045,5),mat(o)));
      for(let x=-.46;x<=.46;x+=.03){ const top=cy(x); if(top-.142>.01) g.add(beam(V3(x,.142,z),V3(x,top,z),.0016,o,3)); }
    }
    return g;
  },
  christ(){
    const w="#ece8dd", g=G(ground("forest"));
    g.add(...trees([[-.38,.2],[-.3,.32],[.35,.28],[.4,.1],[.22,.4],[-.42,-.1],[.38,-.22]],"#2e5a2e",.07,.03));
    g.add(rock(.36,.5,"#6a705c",0,P,0,9,.16,11), rock(.24,.3,"#55693f",-.16,P,.14,7,.2,4));
    const y0=P+.49;
    g.add(box(.05,.04,.05,"#d6d1c4",0,y0,0), box(.04,.04,.04,"#ddd8cb",0,y0+.04,0));
    const s=y0+.08;
    g.add(lathe([[0,0],[.026,0],[.024,.06],[.021,.12],[.026,.15],[.02,.17],[0,.18]],smooth(w),0,s,0,10));
    g.add(box(.26,.022,.024,smooth(w),0,s+.13,0), sph(.016,smooth(w),0,s+.2,0,1.1));
    return g;
  },
  chichen(){
    const st="#bcab88", g=G(ground("grass"));
    g.add(...trees([[-.42,.15],[-.38,-.25],[.4,.25],[.42,-.12],[.15,-.43],[-.1,.44]],"#2f5c2c",.06,.03));
    for(let i=0;i<9;i++){ const s=.31-i*.028; g.add(sqf(s-.006,s,.044,i%2?"#b1a07e":st,0,P+i*.044,0)); }
    const top=P+.396;
    g.add(box(.15,.09,.15,"#a8977a",0,top,0), box(.17,.016,.17,"#9c8b6e",0,top+.09,0), box(.04,.05,.01,"#3d342a",0,top,.076), box(.12,.012,.01,"#d8c9a6",0,top+.06,.077));
    for(const [x,z] of [[0,1],[0,-1],[1,0],[-1,0]]){ g.add(slab(V3(x*.34,P,z*.34),V3(x*.08,top,z*.08),.08,.03,"#cdbe9b"));
      g.add(box(x?.012:.1,.025,x?.1:.012,"#9e8e70",x*.32,P,z*.32)); }
    g.add(box(.025,.03,.035,"#8f7f62",-.04,P,.36), box(.025,.03,.035,"#8f7f62",.04,P,.36));
    return g;
  },
  machu(){
    const g=G(ground("forest"));
    g.add(rock(.3,.14,"#577545",.02,P,.08,9,.12,9));
    for(let i=0;i<5;i++) g.add(box(.46-i*.06,.022,.07,"#6f9150",.04,P+.08+i*.022,.28-i*.055));
    const y0=P+.14;
    for(const [x,z] of [[-.1,0],[.02,.02],[.14,-.02],[.06,-.1],[-.06,-.1],[.18,.08],[-.15,.1]]){ g.add(box(.05,.025,.04,"#a29a8b",x,y0,z), prism(.05,.025,.04,"#7d6d55",x,y0+.025,z)); }
    g.add(box(.18,.006,.06,"#9fb07e",0,y0,.08));
    g.add(rock(.15,.52,"#3e5c38",-.12,P,-.3,7,.12,13), rock(.09,.3,"#4a6a40",.2,P,-.32,6,.15,17));
    return g;
  },
  cntower(){
    const cn="#cac5bb", g=G(ground("water"), shore("city",.1,Math.PI/2));
    for(const [x,z] of [[-.25,-.25],[-.1,-.36],[.2,-.3],[.32,-.15],[-.34,-.08]]) g.add(box(.07,.08+Math.random()*.12,.07,mat("#ffffff",{map:TEX.glass,flatShading:true}),x,P*1.4,z));
    const y0=P*1.4;
    for(let k=0;k<3;k++){ const a=k*Math.PI*2/3; g.add(slab(V3(Math.sin(a)*.08,y0,Math.cos(a)*.08),V3(Math.sin(a)*.02,y0+.24,Math.cos(a)*.02),.035,.025,cn)); }
    g.add(cyl(.02,.034,.6,smooth(cn),0,y0,0,6));
    g.add(cyl(.07,.06,.02,"#d8d4cb",0,y0+.56,0,20), cyl(.075,.075,.035,"#4b5560",0,y0+.58,0,20,{metalness:.4,roughness:.3}), cyl(.06,.075,.025,"#d8d4cb",0,y0+.615,0,20));
    const tor=mesh(new THREE.TorusGeometry(.068,.01,6,24),"#d8d4cb",0,y0+.575,0); tor.rotation.x=Math.PI/2; g.add(tor);
    g.add(cyl(.016,.02,.12,smooth(cn),0,y0+.64,0,6), cyl(.03,.03,.02,"#4b5560",0,y0+.72,0,14));
    for(let i=0;i<6;i++) g.add(cyl(.008-i*.0009,.008-i*.0009,.04,i%2?"#d94030":"#f2f2f2",0,y0+.74+i*.04,0,6));
    return g;
  },
  moai(){
    const st="#4e4640", g=G(ground("water"), shore("grass",.22,-Math.PI/2));
    g.add(box(.62,.05,.14,"#6c6256",0,P*1.4,-.05));
    const xs=[-.27,-.18,-.09,0,.09,.18,.27];
    xs.forEach((x,i)=>{ const y0=P*1.4+.05, s=i===3?1.15:1;
      g.add(box(.07*s,.1*s,.055*s,st,x,y0,-.05), box(.066*s,.14*s,.07*s,st,x,y0+.1*s,-.045), box(.072*s,.018*s,.03*s,st,x,y0+.21*s,-.022),
        box(.018*s,.06*s,.028*s,st,x,y0+.15*s,-.003), box(.01*s,.07*s,.02*s,st,x-.038*s,y0+.14*s,-.04), box(.01*s,.07*s,.02*s,st,x+.038*s,y0+.14*s,-.04));
      if(i%3===0) g.add(cyl(.03*s,.034*s,.032*s,"#9b4a32",x,y0+.24*s,-.045,10)); });
    return g;
  },

  /* ---------------- ASIA ---------------- */
  forbidden(){
    const red="#a7322c", gold="#e0aa36", mb="#ece6da", g=G(ground("paved"));
    for(const s of [-1,1]){ g.add(box(.72,.006,.045,WATER(),0,P,s*.345), box(.045,.006,.72,WATER(),s*.345,P,0)); }
    for(const s of [-1,1]){ g.add(box(.62,.055,.03,red,0,P,s*.3), box(.03,.055,.62,red,s*.3,P,0)); }
    for(const sx of [-1,1]) for(const sz of [-1,1]){ g.add(box(.06,.06,.06,red,sx*.3,P+.05,sz*.3), hip(.09,.03,.09,gold,P+.11,sx*.3,sz*.3), hip(.06,.03,.06,gold,P+.135,sx*.3,sz*.3)); }
    g.add(box(.2,.08,.06,red,0,P+.05,.3), hip(.26,.05,.1,gold,P+.13,0,.3), box(.05,.06,.12,red,-.12,P+.05,.26), box(.05,.06,.12,red,.12,P+.05,.26));
    g.add(box(.42,.025,.3,mb,0,P,-.03), box(.36,.025,.25,mb,0,P+.025,-.03), box(.3,.025,.2,mb,0,P+.05,-.03));
    g.add(box(.24,.08,.12,red,0,P+.075,-.03), hip(.34,.05,.19,gold,P+.15,0,-.03), box(.18,.035,.09,red,0,P+.19,-.03), hip(.28,.075,.15,gold,P+.215,0,-.03));
    for(const sx of [-1,1]) for(const sz of [-1,1]) g.add(cone(.007,.02,gold,sx*.165,P+.15,-.03+sz*.092,4));
    g.add(box(.14,.06,.08,red,0,P,.15), hip(.2,.045,.12,gold,P+.06,0,.15));
    g.add(box(.18,.06,.07,red,0,P,-.22), hip(.24,.045,.11,gold,P+.06,0,-.22));
    for(let i=0;i<5;i++) g.add(box(.012,.002,.012,"#ddd2bd",-.05+i*.025,P,.23));
    return g;
  },
  taj(){
    const w="#f3eee4", gold="#d9b25a", g=G(ground("grass"));
    g.add(box(.06,.006,.4,WATER(),0,P,.26), box(.44,.004,.06,"#cfc6b2",0,P,.26));
    for(let i=0;i<6;i++){ g.add(cone(.012,.05,"#2e5a2e",-.06,P,.1+i*.065,6), cone(.012,.05,"#2e5a2e",.06,P,.1+i*.065,6)); }
    g.add(box(.6,.02,.22,"#b8664c",0,P,-.12), box(.46,.035,.46,"#ece6da",0,P,-.1));
    const y0=P+.035, cz=-.1;
    const core=cyl(.155,.155,.16,w,0,y0,cz,8); core.rotation.y=Math.PI/8; g.add(core);
    for(let k=0;k<4;k++){ const a=k*Math.PI/2; const ax=Math.sin(a)*.144, az=Math.cos(a)*.144;
      const arch=box(.07,.11,.008,"#d4cab5",ax,y0+.02,cz+az); arch.rotation.y=a; g.add(arch);
      const ar=box(.05,.06,.01,"#8d826e",ax*1.01,y0+.04,cz+az*1.01); ar.rotation.y=a; g.add(ar); }
    g.add(cyl(.075,.075,.04,w,0,y0+.16,cz,16));
    g.add(lathe([[0,0],[.08,0],[.098,.035],[.102,.07],[.093,.105],[.07,.14],[.042,.165],[.018,.185],[.004,.2],[0,.205]],smooth(w,{roughness:.55}),0,y0+.2,cz,22));
    g.add(cyl(.002,.006,.06,gold,0,y0+.4,cz,6,{metalness:.6,roughness:.3}), sph(.008,gold,0,y0+.43,cz,1,{metalness:.6,roughness:.3}));
    for(const sx of [-1,1]) for(const sz of [-1,1]){
      g.add(cyl(.024,.024,.045,w,sx*.1,y0+.16,cz+sz*.1,8), lathe([[0,0],[.028,0],[.03,.015],[.022,.035],[.008,.048],[0,.052]],smooth(w),sx*.1,y0+.205,cz+sz*.1,12));
      const mx=sx*.21, mz=cz+sz*.21;
      g.add(cyl(.013,.018,.3,smooth(w),mx,y0,mz,10), cyl(.024,.024,.008,w,mx,y0+.12,mz,10), cyl(.024,.024,.008,w,mx,y0+.22,mz,10), cyl(.022,.022,.008,w,mx,y0+.3,mz,10),
        lathe([[0,0],[.02,0],[.022,.012],[.015,.028],[.004,.038],[0,.04]],smooth(w),mx,y0+.31,mz,10)); }
    return g;
  },
  burj(){
    const glass=mat("#ffffff",{map:TEX.glass,metalness:.15,roughness:.35}), g=G(ground("sand"), cyl(.2,.2,.005,WATER(),.22,P,.22,24));
    for(const [x,z,h] of [[-.3,.2,.12],[-.36,-.08,.08],[.3,-.25,.1],[-.15,-.36,.07],[.05,.36,.06]]) g.add(box(.08,h,.08,glass,x,P,z));
    g.add(cyl(.03,.045,1.0,smooth("#d2dbe3",{metalness:.5,roughness:.25}),0,P,0,6));
    for(let k=0;k<3;k++){ const a=k*Math.PI*2/3;
      for(let i=0;i<9;i++){ const L=.16*(1-i/10)-(k*.012*(i>2?1:0)), h=.105, y=P+i*h; if(L<.03) continue;
        const b=mesh(new THREE.BoxGeometry(L,h,.055),glass,Math.cos(a)*L/2,y+h/2,-Math.sin(a)*L/2); b.rotation.y=a; g.add(b); } }
    g.add(cyl(.004,.02,.26,"#d2dbe3",0,P+1.0,0,6,{metalness:.6,roughness:.25}));
    return g;
  },
  angkor(){
    const s="#9a8f79", g=G(ground("water"));
    g.add(box(.7,.04,.7,"#5f7d48",0,0,0), box(.06,.042,.24,"#a59a84",0,0,.36));
    g.add(box(.56,.03,.56,"#8a7f69",0,.04,0), box(.48,.05,.48,s,0,.07,0), box(.36,.06,.36,"#958a74",0,.12,0), box(.26,.05,.26,s,0,.18,0));
    for(const t of [.24,.18]){ for(const sx of [-1,1]){ g.add(prism(.02,.02,t*2,"#6e6556",sx*t,t===.24?.12:.18,0), prism(.02,.02,t*2,"#6e6556",0,t===.24?.12:.18,sx*t,Math.PI/2)); } }
    const bud=[[.06,0],[.066,.05],[.062,.11],[.052,.17],[.038,.23],[.022,.27],[.008,.3],[0,.32]];
    const tw=(x,z,sc)=>{ g.add(lathe(bud.map(([a,b])=>[a*sc,b*sc]),s,x,.23,z,8)); for(let k=1;k<5;k++) g.add(cyl(bud[0][0]*sc*(1-k*.17),bud[0][0]*sc*(1-k*.17),.006,"#7d7363",x,.23+k*.06*sc,z,8)); };
    tw(0,0,1.35); for(const sx of [-1,1]) for(const sz of [-1,1]) tw(sx*.15,sz*.15,.82);
    return g;
  },
  stbasil_alias(){ return BUILD.stbasil(); },
  greatwall(){
    const g=G(ground("grass")), wc="#a59c86";
    const hgt=(x,z)=>{ const r=Math.hypot(x,z); const f=Math.max(0,1-r/.5); return (.16*Math.exp(-((x+.15)**2+(z+.05)**2)/.02)+.12*Math.exp(-((x-.18)**2+(z-.08)**2)/.018)+.05*Math.sin(x*14)*Math.cos(z*11)*.5+.03)*Math.min(1,f*2.2); };
    const tg=new THREE.RingGeometry(.001,.49,40,14).rotateX(-Math.PI/2); const tp=tg.attributes.position;
    for(let i=0;i<tp.count;i++){ tp.setY(i,P+hgt(tp.getX(i),tp.getZ(i))); } tg.computeVertexNormals(); g.add(mesh(tg,"#678a4a"));
    const path=[]; for(let i=0;i<=30;i++){ const t=i/30, x=-.42+t*.84, z=.12*Math.sin(t*Math.PI*2.2)-.02; path.push(V3(x,P+hgt(x,z)+.012,z)); }
    for(let i=0;i<path.length-1;i++){ const a=path[i], b=path[i+1], d=new THREE.Vector3().subVectors(b,a), L=d.length();
      const seg=mesh(new THREE.BoxGeometry(L+.004,.04,.04),wc); seg.position.copy(a).addScaledVector(d,.5); seg.rotation.y=-Math.atan2(d.z,d.x); seg.rotation.z=Math.atan2(d.y,Math.hypot(d.x,d.z)); g.add(seg);
      for(const s of [-1,1]){ const c=box(.008,.012,.004,"#958c76",0,0,0); c.position.set(seg.position.x-Math.sin(-seg.rotation.y)*s*.013,seg.position.y+.015,seg.position.z+Math.cos(-seg.rotation.y)*s*.013); g.add(c); } }
    for(let i=2;i<path.length;i+=7){ const p=path[i]; g.add(box(.055,.06,.055,"#b3aa93",p.x,p.y-.02,p.z), box(.06,.008,.06,"#8f866f",p.x,p.y+.04,p.z), prism(.05,.025,.05,"#6b5d4a",p.x,p.y+.048,p.z)); }
    return g;
  },
  petronas(){
    const glass=mat("#ffffff",{map:TEX.glass,metalness:.15,roughness:.3}), steel="#d7dde3", g=G(ground("city"));
    g.add(...trees([[-.38,.2],[-.3,.32],[.34,.3],[.4,.12],[0,.38]],"#2f6a33",.05,.025));
    const tower=x=>{ let y=P; [[.075,.36],[.068,.12],[.06,.08],[.052,.06],[.044,.05],[.035,.04]].forEach(([r,h])=>{ g.add(flat(star(8,r,r*.8,Math.PI/8),h,glass,y)); g.add(flat(star(8,r*1.02,r*.82,Math.PI/8),.006,steel,y+h)); y+=h+.006; });
      g.add(cone(.022,.06,steel,0,y,0,8), cyl(.003,.006,.14,steel,0,y+.05,0,6)); return y; };
    for(const x of [-.13,.13]){ const t=G(); const g0=g; const before=g.children.length; tower(); const added=g.children.splice(before); added.forEach(c=>{ c.position.x+=x; t.add(c); }); g.add(t); }
    g.add(box(.18,.025,.04,steel,0,P+.3,0), beam(V3(-.06,P+.2,0),V3(-.02,P+.3,0),.004,steel), beam(V3(.06,P+.2,0),V3(.02,P+.3,0),.004,steel));
    return g;
  },
  himeji(){
    const wh="#f5f3ee", rf="#5a6168", g=G(ground("grass"));
    g.add(...trees([[-.4,.15],[-.35,.3],[.38,.25],[.42,.05],[-.2,.42],[.25,-.38],[-.42,-.2]],"#2f5a30",.06,.028));
    g.add(sqf(.15,.2,.1,"#8a8375",0,P,0));
    const tiers=[[.28,.2,.065],[.24,.17,.055],[.2,.14,.05],[.155,.11,.05],[.11,.08,.045]];
    let y=P+.1;
    tiers.forEach(([w,d,h],i)=>{ g.add(box(w,h,d,wh,0,y,0)); for(let k=0;k<3;k++) g.add(box(.012,.012,.002,"#3b3b3b",-w/4+k*w/4,y+h*.5,d/2+.001));
      g.add(hip(w*1.25,.04,d*1.35,rf,y+h)); if(i%2===0) g.add(prism(w*.4,.035,.03,rf,0,y+h,d/2+.02)); else g.add(prism(d*.5,.03,.03,rf,w/2+.02,y+h,0,Math.PI/2)); y+=h+.028; });
    g.add(box(.008,.012,.008,"#d9b25a",-.03,y,0), box(.008,.012,.008,"#d9b25a",.03,y,0));
    for(const [x,z] of [[.22,-.1],[-.2,.12]]){ g.add(sqf(.06,.075,.06,"#8a8375",x,P,z), box(.1,.05,.08,wh,x,P+.06,z), hip(.13,.03,.1,rf,P+.11,x,z), box(.07,.04,.055,wh,x,P+.135,z), hip(.09,.03,.07,rf,P+.175,x,z)); }
    g.add(box(.3,.03,.02,wh,0,P,.3), box(.02,.03,.24,wh,-.3,P,.12));
    return g;
  },
  itsukushima(){
    const ver="#dc4a2e", blk="#1c1c1c", g=G(ground("water"), shore("forest",-.22,Math.PI,P*1.6));
    g.add(rock(.18,.16,"#355e34",.38,P,-.12,7,.2,21), rock(.12,.1,"#3e6a3a",.36,P,.18,7,.2,23));
    const tx=-.06, y0=P*.6;
    for(const s of [-1,1]){ g.add(cyl(.022,.026,.36,smooth(ver),tx,y0,s*.13,12)); for(const dz of [-.06,.06]) g.add(cyl(.013,.015,.22,smooth(ver),tx+dz,y0,s*.13,8), box(.012,.01,.012,ver,tx+dz,y0+.15,s*.13));
      g.add(box(.13,.012,.012,ver,tx,y0+.15,s*.13)); }
    g.add(box(.025,.024,.38,ver,tx,y0+.25,0), box(.03,.022,.42,ver,tx,y0+.34,0));
    const pts=[]; for(let i=0;i<=12;i++){ const t=i/12, z=-.25+t*.5; pts.push(V3(tx,y0+.37+.03*Math.pow(Math.abs(t-.5)*2,2.5),z)); }
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),24,.017,4),mat(blk)));
    g.add(box(.02,.06,.03,ver,tx,y0+.27,0), box(.012,.04,.024,"#e9e1c9",tx+.012,y0+.28,0));
    const sx=.24;
    for(let i=0;i<4;i++){ const z=-.24+i*.16; g.add(box(.12,.05,.06,ver,sx,P*1.6,z), hip(.15,.035,.08,"#6a6f74",P*1.6+.05,sx,z)); for(const dx of [-.05,.05]) g.add(cyl(.004,.004,P*1.6,blk,sx+dx,0,z+.025,4)); }
    g.add(box(.04,.012,.5,ver,sx-.08,P*1.6,0));
    return g;
  },
  skytree(){
    const wt="#eaf0f6", g=G(ground("city"));
    for(const [x,z,h] of [[-.3,-.2,.08],[-.36,.12,.1],[.3,.2,.07],[.34,-.18,.12],[.1,.38,.06],[-.1,-.38,.09],[.2,-.36,.05]]) g.add(box(.09,h,.09,mat("#ffffff",{map:TEX.glass}),x,P,z));
    const legs=[]; for(let k=0;k<3;k++){ const a=k*Math.PI*2/3; legs.push(V3(Math.sin(a)*.1,P,Math.cos(a)*.1)); }
    legs.forEach(L=>g.add(beam(L,V3(L.x*.35,P+.2,L.z*.35),.01,wt,6)));
    const shaftG=new THREE.CylinderGeometry(.028,.05,.62,12,8,true);
    g.add(mesh(shaftG,smooth(wt,{side:THREE.DoubleSide}),0,P+.33,0));
    g.add(mesh(new THREE.CylinderGeometry(.03,.053,.62,12,10,true),new THREE.MeshBasicMaterial({color:0x7fa6c8,wireframe:true}),0,P+.33,0));
    g.add(cyl(.065,.065,.045,"#9ab6cc",0,P+.42,0,20,{metalness:.5,roughness:.2}), cyl(.07,.07,.008,wt,0,P+.465,0,20));
    g.add(cyl(.05,.05,.03,"#9ab6cc",0,P+.58,0,20,{metalness:.5,roughness:.2}), cyl(.055,.055,.006,wt,0,P+.61,0,20));
    g.add(cyl(.018,.026,.1,smooth(wt),0,P+.64,0,12), cyl(.004,.012,.22,wt,0,P+.74,0,6));
    return g;
  },
  kinkaku(){
    let g; const gold=mat("#e6b93c",{metalness:.85,roughness:.28,emissive:"#5a3d00",emissiveIntensity:.25}), rf="#3b2f26"; g=G(ground("water"));
    g.add(shore("forest",-.18,0,P*1.5), cyl(.07,.07,P*1.2,"#4a7a3c",.12,0,.22,10), cyl(.05,.05,P*1.2,"#4a7a3c",.28,0,-.1,10));
    g.add(...trees([[-.35,.2],[-.4,-.05],[-.3,-.3],[-.25,.35],[.12,.22],[.28,-.1]].map(([x,z])=>[x,z]),"#2b5a2e",.08,.03));
    const x0=-.02, y0=P*1.2, pav=G(); const gg=g; g=pav;
    g.add(box(.2,.012,.16,"#5b4a3a",x0,y0,0));
    g.add(box(.18,.06,.14,"#efe6d4",x0,y0+.012,0)); for(let i=0;i<6;i++) g.add(box(.006,.06,.142,"#5b4a3a",x0-.075+i*.03,y0+.012,0));
    g.add(hip(.26,.025,.21,rf,y0+.072,x0));
    g.add(mesh(new THREE.BoxGeometry(.16,.055,.12),gold,x0,y0+.12,0));
    g.add(hip(.23,.025,.19,rf,y0+.147,x0));
    g.add(mesh(new THREE.BoxGeometry(.1,.05,.1),gold,x0,y0+.195,0));
    g.add(hip(.17,.06,.17,rf,y0+.22,x0));
    g.add(mesh(new THREE.ConeGeometry(.008,.02,4),gold,x0,y0+.29,0), mesh(new THREE.BoxGeometry(.02,.012,.004),gold,x0,y0+.305,0));
    pav.scale.setScalar(1.55); pav.position.set(.02,-y0*.55,0); gg.add(pav); return gg;
  },
  petra(){
    const rose="#c27d5f", face="#d89b7b", g=G(ground("rose"));
    g.add(rock(.22,.62,"#b46f53",0,P,-.36,8,.12,31));
    g.add(box(.5,.56,.16,"#bb7558",0,P,-.2));
    g.add(rock(.12,.5,"#a8664b",-.36,P,.06,6,.15,33), rock(.12,.46,"#b06c50",.36,P,.06,6,.15,35));
    const z0=-.1;
    g.add(box(.3,.02,.04,face,0,P,z0+.02));
    for(let i=0;i<6;i++){ const x=-.125+i*.05; g.add(cyl(.011,.012,.15,smooth(face),x,P+.02,z0+.03,10), box(.024,.012,.024,face,x,P+.17,z0+.03)); }
    g.add(box(.3,.03,.03,face,0,P+.182,z0+.03), prism(.18,.05,.025,face,0,P+.212,z0+.03));
    g.add(box(.34,.025,.03,face,0,P+.265,z0+.025));
    const y1=P+.29;
    g.add(cyl(.045,.045,.13,smooth(face),0,y1,z0+.02,16));
    for(let i=0;i<8;i++){ const a=i/8*Math.PI*2; if(Math.cos(a)<-.3) continue; g.add(cyl(.006,.006,.12,face,Math.sin(a)*.05,y1,z0+.02+Math.cos(a)*.05,6)); }
    g.add(cone(.055,.05,face,0,y1+.13,z0+.02,16), lathe([[0,0],[.014,0],[.016,.012],[.01,.03],[.003,.04],[0,.042]],smooth(face),0,y1+.18,z0+.02,10));
    for(const s of [-1,1]){ g.add(cyl(.009,.01,.13,face,s*.1,y1,z0+.03,8), cyl(.009,.01,.13,face,s*.14,y1,z0+.03,8), box(.08,.02,.03,face,s*.12,y1+.13,z0+.03));
      const hp=prism(.05,.035,.025,face,s*.12,y1+.15,z0+.03); g.add(hp); }
    g.add(box(.05,.09,.006,"#3a2018",0,P+.02,z0+.004));
    return g;
  },

  /* ---------------- AFRICA ---------------- */
  pyramid(){
    const sand="#dabd84", g=G(ground("sand"));
    g.add(pyr(.2,.4,sand,-.1,P,-.12), pyr(.165,.33,"#d4b47a",.18,P,.12), pyr(.07,.06,"#efe0bd",.18,P+.27,.12), pyr(.085,.16,"#cfae73",.33,P,.33));
    for(let i=0;i<3;i++) g.add(pyr(.03,.05,"#c9a86e",-.32+i*.07,P,.08));
    g.add(box(.045,.035,.13,"#c9a66a",-.26,P,.32), box(.035,.045,.035,"#c4a165",-.26,P+.03,.4), box(.012,.012,.05,"#c9a66a",-.278,P,.4), box(.012,.012,.05,"#c9a66a",-.242,P,.4));
    g.add(box(.02,.004,.3,"#b89b68",-.1,P,.17));
    return g;
  },
  djenne(){
    const mud="#b37a47", mud2="#a56d3d", g=G(ground("sand"));
    g.add(box(.62,.04,.44,"#bf9060",0,P,0));
    const y0=P+.04;
    g.add(box(.52,.11,.34,mud,0,y0,0));
    for(let i=0;i<14;i++){ const x=-.24+i*(.48/13); for(const s of [-1,1]){ g.add(sqf(.008,.013,.15,mud2,x,y0,s*.172), cone(.009,.03,mud2,x,y0+.15,s*.172,4)); } }
    for(let i=0;i<8;i++){ const z=-.14+i*.04; for(const s of [-1,1]) g.add(sqf(.008,.013,.14,mud2,s*.262,y0,z), cone(.009,.03,mud2,s*.262,y0+.14,z,4)); }
    for(const x of [-.15,0,.15]){ const big=x===0, h=big?.24:.2;
      g.add(sqf(.03,.048,h,mud,x,y0,.19), cone(.032,.06,mud2,x,y0+h,.19,4), sph(.012,"#e6dccb",x,y0+h+.06,.19));
      for(let k=0;k<5;k++) for(const dx of [-.025,0,.025]) g.add(beam(V3(x+dx,y0+.04+k*.04,.19+.045-k*.004),V3(x+dx,y0+.04+k*.04,.19+.075-k*.004),.002,"#6b4a2a",4)); }
    for(let i=0;i<30;i++){ const x=-.24+(i%15)*.034, z=i<15?.175:-.175; g.add(beam(V3(x,y0+.07,z),V3(x,y0+.07,z*1.15),.0018,"#6b4a2a",4)); }
    return g;
  },

  /* ---------------- OCEANIA ---------------- */
  sydney(){
    const w=mat("#f6f2e6",{side:THREE.DoubleSide,roughness:.45}), g=G(ground("water"), shore("city",-.1,Math.PI));
    g.add(flat([[-.36,-.2],[.2,-.2],[.32,0],[.2,.2],[-.36,.2]],.04,"#c8b498",0), box(.16,.02,.36,"#bca889",-.3,.04,0));
    const shell=(r,x,z,back=false)=>{ const h=r*1.7, tilt=.32;
      const m=new THREE.Mesh(new THREE.ConeGeometry(r,h,22,1,true,Math.PI,Math.PI),w);
      const p=new THREE.Group(); p.add(m); m.position.y=h/2; m.rotation.z=-tilt;
      p.position.set(x,.06,z); if(back) p.rotation.y=Math.PI; return p; };
    [[.17,-.18],[.15,-.06],[.12,.05],[.09,.14]].forEach(([r,x])=>g.add(shell(r,x,-.08))); g.add(shell(.08,-.28,-.08,true));
    [[.13,-.04],[.11,.06],[.085,.14]].forEach(([r,x])=>g.add(shell(r,x+.02,.1))); g.add(shell(.065,-.1,.1,true));
    g.add(box(.08,.04,.07,"#c8b498",.24,.04,.05));
    return g;
  }
};
delete BUILD.stbasil_alias;

/* ============================================================
   PLACE MONUMENTS
   ============================================================ */
const monGroup=new THREE.Group(); scene.add(monGroup);
const ringGeo=new THREE.RingGeometry(.56,.64,48).rotateX(-Math.PI/2);
const discGeo=new THREE.CircleGeometry(.6,40).rotateX(-Math.PI/2);
const hitGeo=new THREE.SphereGeometry(.62,8,6);
const hits=[];
for(const m of MON){
  const holder=new THREE.Group();
  const n=ll2v(m.lat,m.lon).normalize();
  holder.position.copy(n.clone().multiplyScalar(1.0008));
  holder.quaternion.setFromUnitVectors(UP,n);
  const model=bake(BUILD[m.id]()); model.rotation.y=m.rot??.5;
  model.updateMatrixWorld(true); const bb=new THREE.Box3().setFromObject(model), bsz=bb.getSize(new THREE.Vector3());
  m.mh=bb.max.y; m.size=Math.max(bsz.x,bsz.y,bsz.z);
  holder.add(model);
  { const r=model.rotation.y; m.front=new THREE.Vector3(Math.sin(r),0,Math.cos(r)).applyQuaternion(holder.quaternion).normalize(); m.side=new THREE.Vector3().crossVectors(n,m.front).normalize(); }
  const disc=new THREE.Mesh(discGeo,new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:.32,depthWrite:false})); disc.position.y=.004; holder.add(disc);
  const ring=new THREE.Mesh(ringGeo,new THREE.MeshBasicMaterial({color:0xe3b55a,transparent:true,opacity:.5,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide})); ring.position.y=.01; holder.add(ring);
  const beacon=new THREE.Mesh(new THREE.CylinderGeometry(.015,.04,6,10,1,true),new THREE.MeshBasicMaterial({color:0xe3b55a,transparent:true,opacity:0,blending:THREE.AdditiveBlending,depthWrite:false})); beacon.position.y=3; holder.add(beacon);
  const hit=new THREE.Mesh(hitGeo); hit.position.y=.4; hit.visible=false; hit.userData.m=m; holder.add(hit); hits.push(hit);
  monGroup.add(holder);
  Object.assign(m,{holder,ring,beacon,normal:n,scale:.05,visibleByFilter:true});
}

// keep neighbours from overlapping when zoomed out (e.g. Kyoto / Himeji)
for(const m of MON) m.cap=Math.min(...MON.filter(o=>o!==m).map(o=>m.normal.distanceTo(o.normal)))*1.1;
/* ============================================================
   STATE
   ============================================================ */
const MQ=matchMedia("(max-width:860px), (max-height:520px) and (pointer:coarse)");
const isMobile=()=>MQ.matches;
const globeDist=()=> innerWidth<innerHeight ? Math.min(5.2, 3.3*Math.max(1,(innerHeight/innerWidth)*.62)) : 3.3;
camera.position.setLength(globeDist());
const S={sheet:null, selected:null, hovered:null, region:"All", query:"", tour:false, tourIdx:0, quiz:null, you:null, sortNear:false, timeOffset:0, live:true};
const $=id=>document.getElementById(id);
function toast(msg,ms=3600){ const t=$("toast"); t.textContent=msg; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>t.hidden=true,ms); }

/* ============================================================
   CAMERA FLIGHT + ARCS
   ============================================================ */
/* Camera modes:
   globe     – OrbitControls around the Earth's centre
   fly       – great-circle flight between two points above the globe
   tween     – straight blend of position / look target / up vector (dive in, climb out)
   inspect   – orbiting one monument at street level, up = local vertical */
let mode="globe", fly=null, tween=null;
const ORIGIN=new THREE.Vector3(), currentLook=new THREE.Vector3(), INS=.02;
const insp={m:null,az:.6,el:.42,dist:.1,auto:true,idleAt:0};
let closeUps=true;
function setNear(){ const n = mode==="globe"||mode==="fly" ? .01 : .0012; if(camera.near!==n){ camera.near=n; camera.updateProjectionMatrix(); } }
function flyTo(lat,lon,dist,dur,onDone){
  if(mode==="inspect"||mode==="tween"){ exitInspect(()=>flyTo(lat,lon,dist,dur,onDone)); return; }
  const from=camera.position.clone();
  const toDir=ll2v(lat,lon).normalize();
  const ang=from.clone().normalize().angleTo(toDir);
  dur = dur ?? (reduceMotion?300:Math.min(2400, 900+ang*700));
  fly={t0:performance.now(),dur,fromDir:from.clone().normalize(),q:new THREE.Quaternion().setFromUnitVectors(from.clone().normalize(),toDir),d0:from.length(),d1:dist??Math.min(from.length(),2.1),ang,onDone};
  mode="fly"; controls.enabled=false;
}
const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
const easeOut=t=>1-Math.pow(1-t,3);
const I=new THREE.Quaternion();
function stepFly(now){
  if(!fly) return;
  const t=Math.min(1,(now-fly.t0)/fly.dur), e=ease(t);
  const q=new THREE.Quaternion().slerpQuaternions(I,fly.q,e);
  const bump=Math.sin(Math.PI*e)*Math.min(1.4,fly.ang*.55);
  camera.position.copy(fly.fromDir.clone().applyQuaternion(q).multiplyScalar(fly.d0+(fly.d1-fly.d0)*e+bump));
  camera.up.set(0,1,0); currentLook.set(0,0,0); camera.lookAt(currentLook);
  if(t>=1){ const cb=fly.onDone; fly=null; toGlobeMode(); cb&&cb(); }
}
function toGlobeMode(){ mode="globe"; camera.up.set(0,1,0); currentLook.set(0,0,0); controls.enabled=true; controls.update(); }
function cancelFlight(){ if(mode==="fly"){ fly=null; toGlobeMode(); } }
function frameOf(m){ return {n:m.normal, front:m.front, side:m.side, P:m.normal.clone().multiplyScalar(1.0008)}; }
function inspectPose(){
  const m=insp.m, {n,front,side,P}=frameOf(m);
  const hdir=front.clone().multiplyScalar(Math.cos(insp.az)).addScaledVector(side,Math.sin(insp.az));
  const dir=n.clone().multiplyScalar(Math.sin(insp.el)).addScaledVector(hdir,Math.cos(insp.el));
  const look=P.clone().addScaledVector(n,m.scale*m.mh*.42);
  return {pos:look.clone().addScaledVector(dir,insp.dist), look, up:n.clone()};
}
function startTween(target,dur,onDone){
  mode="tween"; controls.enabled=false;
  tween={t0:performance.now(),dur:reduceMotion?200:dur,from:{pos:camera.position.clone(),look:currentLook.clone(),up:camera.up.clone()},target,onDone};
}
function stepTween(now){
  if(!tween) return;
  const t=Math.min(1,(now-tween.t0)/tween.dur), e=easeOut(t), to=tween.target();
  camera.position.lerpVectors(tween.from.pos,to.pos,e);
  currentLook.lerpVectors(tween.from.look,to.look,e);
  camera.up.lerpVectors(tween.from.up,to.up,e).normalize();
  camera.lookAt(currentLook);
  if(t>=1){ const cb=tween.onDone; tween=null; cb&&cb(); }
}
function enterInspect(m){
  insp.m=m; insp.az=(m.viewAz||0)+(rnd()<.5?-1:1)*(.45+rnd()*.3); insp.el=.38; insp.dist=Math.max(.035,m.size*INS*2.5)*(isMobile()?1.35:1); insp.auto=true;
  startTween(inspectPose,1400,()=>{ mode="inspect"; clearArcs(); });
}
function exitInspect(then){
  if(mode!=="inspect" && mode!=="tween"){ then&&then(); return; }
  const n=(insp.m||S.selected).normal.clone();
  startTween(()=>({pos:n.clone().multiplyScalar(1.9),look:ORIGIN.clone(),up:new THREE.Vector3(0,1,0)}),900,()=>{ toGlobeMode(); then&&then(); });
}
function stepInspect(now){
  if(mode!=="inspect") return;
  if(!insp.auto && now-insp.idleAt>5000) insp.auto=true;
  if(insp.auto && !reduceMotion) insp.az+=.0022;
  const p=inspectPose(); camera.position.copy(p.pos); camera.up.copy(p.up); currentLook.copy(p.look); camera.lookAt(currentLook);
}
// inspect-mode gestures: drag to orbit, wheel / pinch to zoom, zoom far enough out to return to the globe
const ptrs=new Map(); let pinch0=0, dist0=0;
canvas.addEventListener("pointerdown",e=>{ ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY}); if(ptrs.size===2){ const [a,b]=[...ptrs.values()]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); dist0=insp.dist; } });
addEventListener("pointerup",e=>ptrs.delete(e.pointerId)); addEventListener("pointercancel",e=>ptrs.delete(e.pointerId));
canvas.addEventListener("pointermove",e=>{
  if(mode!=="inspect" || !ptrs.has(e.pointerId)) return;
  const p=ptrs.get(e.pointerId), dx=e.clientX-p.x, dy=e.clientY-p.y; ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
  insp.auto=false; insp.idleAt=performance.now();
  if(ptrs.size===2){ const [a,b]=[...ptrs.values()]; const d=Math.hypot(a.x-b.x,a.y-b.y); zoomInspect(dist0*pinch0/Math.max(20,d)-insp.dist); return; }
  insp.az-=dx*.007; insp.el=Math.max(.06,Math.min(1.4,insp.el+dy*.005));
});
canvas.addEventListener("wheel",e=>{ if(mode!=="inspect") return; e.preventDefault(); zoomInspect(insp.dist*e.deltaY*.0012); },{passive:false});
function zoomInspect(delta){
  const m=insp.m, min=m.size*INS*1.1, max=m.size*INS*7;
  insp.dist=Math.max(min,insp.dist+delta); insp.idleAt=performance.now(); insp.auto=false;
  if(insp.dist>max){ insp.dist=max; exitInspect(); updateViewBtn(); }
}
function updateViewBtn(){ const b=$("cView"); if(b) b.textContent = (mode==="inspect"||mode==="tween") ? "Globe view" : "Close-up"; }
const arcs=[];
function addArc(a,b,color=0xe3b55a){
  const va=ll2v(a.lat,a.lon).normalize(), vb=ll2v(b.lat,b.lon).normalize(), ang=va.angleTo(vb);
  if(ang<.002) return;
  const q=new THREE.Quaternion().setFromUnitVectors(va,vb), N=120, pts=[];
  for(let i=0;i<=N;i++){ const t=i/N; pts.push(va.clone().applyQuaternion(new THREE.Quaternion().slerpQuaternions(I,q,t)).multiplyScalar(1.003+Math.sin(Math.PI*t)*Math.min(.42,ang*.26))); }
  const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color,transparent:true,opacity:.95,depthWrite:false}));
  line.geometry.setDrawRange(0,0);
  const comet=new THREE.Mesh(new THREE.SphereGeometry(.008,10,8),new THREE.MeshBasicMaterial({color:0xfff2cc}));
  scene.add(line,comet);
  arcs.forEach(o=>o.fading=true);
  arcs.push({line,comet,pts,t0:performance.now(),dur:reduceMotion?10:1500,N,fading:false,op:.95});
}
function stepArcs(now){
  for(let i=arcs.length-1;i>=0;i--){
    const a=arcs[i], p=Math.min(1,(now-a.t0)/a.dur), k=Math.floor(ease(p)*a.N)+1;
    a.line.geometry.setDrawRange(0,k);
    a.comet.visible=p<1; if(p<1) a.comet.position.copy(a.pts[Math.min(k,a.N)]);
    if(a.fading){ a.op-=.02; a.line.material.opacity=Math.max(0,a.op);
      if(a.op<=0){ scene.remove(a.line,a.comet); a.line.geometry.dispose(); arcs.splice(i,1); } }
  }
}
function clearArcs(){ arcs.forEach(a=>a.fading=true); }

/* ============================================================
   PIN MARKERS (you / quiz guess)
   ============================================================ */
function makePin(color){
  const g=new THREE.Group(), mm=new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.6,flatShading:true});
  const c=new THREE.Mesh(new THREE.ConeGeometry(.12,.5,10),mm); c.rotation.x=Math.PI; c.position.y=.25; g.add(c);
  const s=new THREE.Mesh(new THREE.SphereGeometry(.17,14,10),mm); s.position.y=.6; g.add(s);
  const r=new THREE.Mesh(ringGeo,new THREE.MeshBasicMaterial({color,transparent:true,opacity:.6,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide})); r.position.y=.01; g.add(r); g.userData.ring=r;
  g.visible=false; scene.add(g); return g;
}
function placePin(pin,lat,lon){ const n=ll2v(lat,lon).normalize(); pin.position.copy(n.clone().multiplyScalar(1.001)); pin.quaternion.setFromUnitVectors(UP,n); pin.visible=true; }
const youPin=makePin(0x5fd4e6), guessPin=makePin(0xff7a59);

/* ============================================================
   SUN / TIME
   ============================================================ */
function simDate(){ return new Date(Date.now()+S.timeOffset*3600e3); }
function subsolar(d){
  const doy=(d-Date.UTC(d.getUTCFullYear(),0,0))/864e5;
  const decl=-23.44*Math.cos(2*Math.PI/365*(doy+10));
  const h=d.getUTCHours()+d.getUTCMinutes()/60+d.getUTCSeconds()/3600;
  let lon=-(h-12)*15; lon=((lon+540)%360)-180;
  return {lat:decl, lon};
}
function updateSun(){
  const d=simDate(), s=subsolar(d);
  sunDir.copy(ll2v(s.lat,s.lon).normalize());
  sunLight.position.copy(sunDir).multiplyScalar(10);
  const hh=String(d.getUTCHours()).padStart(2,"0"), mm=String(d.getUTCMinutes()).padStart(2,"0");
  $("sunTime").innerHTML=`${hh}:${mm} UTC<small>SUN OVER ${dms(s.lat,"N","S").split("′")[0]}′</small>`;
  if(S.selected) renderClock(S.selected);
}
$("timeRange").addEventListener("input",e=>{ S.timeOffset=+e.target.value; S.live=S.timeOffset===0; $("liveBtn").setAttribute("aria-pressed",S.live); updateSun(); });
$("liveBtn").addEventListener("click",()=>{ S.timeOffset=0; S.live=true; $("timeRange").value=0; $("liveBtn").setAttribute("aria-pressed","true"); updateSun(); });
setInterval(updateSun,15000);

/* ============================================================
   INDEX LIST + SKYLINE
   ============================================================ */
function filtered(){
  const q=S.query.trim().toLowerCase();
  let l=MON.filter(m=>(S.region==="All"||m.region===S.region) && (!q || (m.name+" "+m.city+" "+m.country).toLowerCase().includes(q)));
  if(S.sortNear && S.you) l=l.slice().sort((a,b)=>haversine(S.you,a)-haversine(S.you,b));
  return l;
}
$("chips").innerHTML=REGIONS.map(r=>`<button class="chip" aria-pressed="${r==="All"}" data-r="${r}">${r}</button>`).join("");
$("chips").addEventListener("click",e=>{ const b=e.target.closest(".chip"); if(!b) return; S.region=b.dataset.r; [...$("chips").children].forEach(c=>c.setAttribute("aria-pressed",c===b)); applyFilter(); });
$("search").addEventListener("input",e=>{ S.query=e.target.value; applyFilter(); });
$("sortBtn").addEventListener("click",()=>{ S.sortNear=!S.sortNear; $("sortBtn").textContent=S.sortNear?"A–Z order":"Nearest first"; renderList(); });
function applyFilter(){
  const set=new Set(filtered().map(m=>m.id));
  MON.forEach(m=>{ m.visibleByFilter=set.has(m.id); });
  renderList(); syncMiniMarkers();
}
function renderList(){
  const l=filtered();
  $("count").textContent=`${l.length} monument${l.length===1?"":"s"}`;
  $("list").innerHTML=l.map(m=>`<li><button data-id="${m.id}" class="${S.selected===m?"sel":""}"><span class="glyph">${ABBR[m.id]}</span><span class="nm">${m.name}</span>${S.you?`<span class="km">${fmtKm(haversine(S.you,m))}</span>`:"<span></span>"}<span class="sub">${m.city}, ${m.country}</span></button></li>`).join("") || `<li style="padding:14px 10px;color:var(--muted)">No monument matches “${S.query}”.</li>`;
}
$("list").addEventListener("click",e=>{ const b=e.target.closest("button[data-id]"); if(b){ stopTour(); select(MON.find(m=>m.id===b.dataset.id)); if(isMobile()) openSheet(null); } });
function renderSkyline(){
  const l=MON.filter(m=>m.h).sort((a,b)=>b.h-a.h), max=l[0].h;
  $("skyline").innerHTML=`<p>Heights to one scale. The Burj Khalifa is 2.5× the Eiffel Tower, and Stonehenge would be a single pixel next to it.</p>`+
    l.map(m=>`<button class="sky-row ${S.selected===m?"sel":""}" data-id="${m.id}"><span class="n">${m.name}</span><span class="bar" style="width:${Math.max(.5,m.h/max*100)}%"></span><span class="v">${m.h} m</span></button>`).join("");
}
$("skyline").addEventListener("click",e=>{ const b=e.target.closest("[data-id]"); if(b){ stopTour(); if(isMobile()) openSheet(null); select(MON.find(m=>m.id===b.dataset.id)); } });
function tab(which){
  const idx=which==="index";
  $("tabIndex").setAttribute("aria-selected",idx); $("tabSky").setAttribute("aria-selected",!idx);
  $("paneIndex").hidden=!idx; $("paneSky").hidden=idx; if(!idx) renderSkyline();
}
$("tabIndex").onclick=()=>tab("index"); $("tabSky").onclick=()=>tab("sky");

/* ============================================================
   DOSSIER CARD
   ============================================================ */
function renderClock(m){
  let local="";
  try{ local=new Intl.DateTimeFormat("en-GB",{timeZone:m.tz,hour:"2-digit",minute:"2-digit"}).format(simDate()); }catch(e){ local="--:--"; }
  const d=m.normal.dot(sunDir);
  const st= d>.05 ? ["day","☀ Daylight"] : d>-.12 ? ["twi","◐ Twilight"] : ["night","☾ Night"];
  $("cClock").innerHTML=`<span>Local ${local}</span><span class="pill ${st[0]}">${st[1]}</span>`;
}
function renderCard(m){
  const wasHidden=$("card").hidden;
  $("card").hidden=false; document.body.classList.add("card-open");
  if(wasHidden || S.tour) $("card").classList.remove("expanded");
  requestAnimationFrame(updateViewOffset);
  $("cEyebrow").textContent=`${m.city} · ${m.country}`;
  $("cName").textContent=m.name;
  renderClock(m);
  const rows=[["Completed",m.year],[m.h?"Height":"Setting",m.hLabel],["Built by",m.by],["Position",`${dms(m.lat,"N","S")}  ${dms(m.lon,"E","W")}`,"mono"]];
  if(S.you) rows.push(["From you",fmtKm(haversine(S.you,m)),"mono"]);
  $("cFacts").innerHTML=rows.map(([k,v,c])=>`<dt>${k}</dt><dd class="${c||""}">${v}</dd>`).join("");
  $("cDesc").textContent=m.desc;
  $("cFact").innerHTML=`<b>Did you know</b>${m.fact}`;
  $("cWiki").href="https://en.wikipedia.org/wiki/"+m.wiki;
  $("askOut").textContent=""; $("askInput").value="";
  const tb=$("tourbar"); tb.classList.remove("run"); void tb.offsetWidth; if(S.tour) tb.classList.add("run");
}
function closeCard(){
  $("card").hidden=true; document.body.classList.remove("card-open"); $("card").classList.remove("expanded"); updateViewOffset();
  exitInspect();
  S.selected=null; renderList(); syncMiniMarkers(); clearArcs();
}
$("cardClose").onclick=()=>{ stopTour(); closeCard(); };
function step(dir){
  const l=filtered(); if(!l.length) return;
  const i=S.selected?l.indexOf(S.selected):-1;
  select(l[(i+dir+l.length)%l.length]);
}
$("cPrev").onclick=()=>{ stopTour(); step(-1); };
$("cNext").onclick=()=>{ stopTour(); step(1); };
$("cView").onclick=()=>{
  stopTour(); const m=S.selected; if(!m) return;
  if(mode==="inspect"||mode==="tween"){ closeUps=false; exitInspect(); }
  else { closeUps=true; cancelFlight(); flyTo(m.lat,m.lon,1.75,undefined,()=>enterInspect(m)); }
};
/* keep the subject centred in the part of the screen the sheets and card leave visible */
const viewOff={x:0,y:0,tx:0,ty:0};
function updateViewOffset(){
  const w=innerWidth,h=innerHeight; viewOff.tx=viewOff.ty=0;
  if(!isMobile()) return;
  let el=null;
  if(S.sheet==="index") el=$("side"); else if(S.sheet==="map") el=$("mini"); else if(!$("card").hidden) el=$("card");
  if(!el) return;
  const r=el.getBoundingClientRect();
  if(r.width<w*.75) viewOff.tx=-r.right/2;          // landscape: panel on the left
  else viewOff.ty=Math.max(0,(h-r.top)/2-30);        // portrait: panel at the bottom
}
function stepViewOffset(){
  viewOff.x+=(viewOff.tx-viewOff.x)*.12; viewOff.y+=(viewOff.ty-viewOff.y)*.12;
  if(Math.abs(viewOff.x)<.5 && Math.abs(viewOff.y)<.5 && !viewOff.tx && !viewOff.ty){ if(camera.view && camera.view.enabled) camera.clearViewOffset(); return; }
  camera.setViewOffset(innerWidth,innerHeight,viewOff.x,viewOff.y,innerWidth,innerHeight);
}
function setExpanded(on){
  $("card").classList.toggle("expanded",on); $("cHandle").setAttribute("aria-label",on?"Show less":"Show details");
  if(!on) $("card").scrollTop=0;
  setTimeout(updateViewOffset,320);
}
$("cHandle").onclick=()=>setExpanded(!$("card").classList.contains("expanded"));
let cardDrag=null;
$("card").addEventListener("pointerdown",e=>{
  if(!isMobile() || e.target.closest("a,input,.card-actions,.close,#ask")) return;
  if($("card").classList.contains("expanded") && $("card").scrollTop>0) return;
  cardDrag={y:e.clientY};
});
$("card").addEventListener("pointerup",e=>{
  if(!cardDrag) return; const dy=e.clientY-cardDrag.y; cardDrag=null;
  const exp=$("card").classList.contains("expanded");
  if(dy<-24) setExpanded(true);
  else if(dy>24){ if(exp) setExpanded(false); else { stopTour(); closeCard(); } }
  else if(Math.abs(dy)<8 && !exp && !e.target.closest("#cHandle")) setExpanded(true);
});
$("card").addEventListener("pointercancel",()=>cardDrag=null);


function select(m,{flyCam=true}={}){
  if(!m) return;
  const prev=S.selected;
  S.selected=m;
  if(prev && prev!==m) addArc(prev,m);
  else if(!prev && S.you) addArc(S.you,m,0x5fd4e6);
  setRotate(false);
  if(flyCam){
    const dive=()=>{ if(S.selected===m && closeUps && !S.quiz) enterInspect(m); };
    const go=()=>flyTo(m.lat, m.lon, 1.75, undefined, dive);
    if(mode==="inspect"||mode==="tween") exitInspect(go); else { cancelFlight(); go(); }
  }
  renderCard(m); renderList(); syncMiniMarkers();
  if(!$("paneSky").hidden) renderSkyline();
}

/* ============================================================
   TOUR
   ============================================================ */
let tourTimer=null;
function startTour(){
  stopQuiz(); S.tour=true; $("btnTour").setAttribute("aria-pressed","true");
  const l=filtered(); if(!l.length){ stopTour(); return; }
  let i=S.selected?l.indexOf(S.selected)+1:0;
  const go=()=>{ const L=filtered(); if(!L.length){stopTour();return;} select(L[i%L.length]); i++; };
  go(); tourTimer=setInterval(go,10000);
}
function stopTour(){ if(!S.tour) return; S.tour=false; clearInterval(tourTimer); $("btnTour").setAttribute("aria-pressed","false"); $("tourbar").classList.remove("run"); }
$("btnTour").onclick=()=> S.tour?stopTour():startTour();

/* ============================================================
   QUIZ
   ============================================================ */
const ROUNDS=6;
function bestScore(){ try{ return +localStorage.getItem("atlas-best")||0; }catch(e){ return 0; } }
function startQuiz(){
  stopTour(); openSheet(null); if(S.selected) closeCard();
  const pool=MON.slice().sort(()=>rnd()-.5).slice(0,ROUNDS);
  S.quiz={pool, round:0, score:0, phase:"aim", results:[]};
  document.body.classList.add("quiz"); $("btnQuiz").setAttribute("aria-pressed","true");
  setRotate(false); flyTo(20,10,globeDist());
  renderQuiz(); syncMiniMarkers();
}
function stopQuiz(){
  if(!S.quiz) return; S.quiz=null;
  document.body.classList.remove("quiz"); $("btnQuiz").setAttribute("aria-pressed","false");
  $("quiz").hidden=true; guessPin.visible=false; clearArcs(); syncMiniMarkers(); canvas.classList.remove("aiming");
}
function renderQuiz(){
  const Q=S.quiz, el=$("quiz"); el.hidden=false;
  const target=Q.pool[Q.round];
  const meta=`<div class="q-meta"><span>ROUND ${Q.round+1}/${ROUNDS}</span><span>SCORE ${Q.score.toLocaleString("en-US")}</span></div>`;
  if(Q.phase==="aim"){
    canvas.classList.add("aiming");
    el.innerHTML=meta+`<h3>Where is <em>${target.name}</em>?</h3><p>Click the globe where you think it stands. Labels are hidden.</p><div class="q-actions"><button class="btn" id="qQuit">Quit</button></div>`;
  } else if(Q.phase==="reveal"){
    canvas.classList.remove("aiming");
    const r=Q.results[Q.results.length-1];
    const last=Q.round===ROUNDS-1;
    el.innerHTML=meta+`<h3>${target.name}, ${target.city}</h3><p>Your guess was <strong>${fmtKm(r.km)}</strong> away · +${r.pts} points</p><div class="q-actions"><button class="btn primary" id="qNext">${last?"See results":"Next round"}</button><button class="btn" id="qQuit">Quit</button></div>`;
  } else {
    const best=Math.max(bestScore(),Q.score); try{ localStorage.setItem("atlas-best",best); }catch(e){}
    const avg=Q.results.reduce((s,r)=>s+r.km,0)/Q.results.length;
    el.innerHTML=`<div class="q-meta"><span>FINAL</span><span>BEST ${best.toLocaleString("en-US")}</span></div><h3><em>${Q.score.toLocaleString("en-US")}</em> / ${(ROUNDS*1000).toLocaleString("en-US")}</h3><p>Average miss: <strong>${fmtKm(avg)}</strong></p><div class="q-actions"><button class="btn primary" id="qAgain">Play again</button><button class="btn" id="qQuit">Done</button></div>`;
  }
  $("qQuit") && ($("qQuit").onclick=stopQuiz);
  $("qNext") && ($("qNext").onclick=()=>{ Q.round++; if(Q.round>=ROUNDS){Q.phase="end";} else {Q.phase="aim"; guessPin.visible=false; clearArcs(); flyTo(20,camLL().lon,globeDist());} renderQuiz(); syncMiniMarkers(); });
  $("qAgain") && ($("qAgain").onclick=()=>{ stopQuiz(); startQuiz(); });
}
function quizGuess(ll){
  const Q=S.quiz; if(!Q||Q.phase!=="aim") return;
  const target=Q.pool[Q.round], km=haversine(ll,target), pts=Math.round(1000*Math.exp(-km/1500));
  Q.score+=pts; Q.results.push({km,pts}); Q.phase="reveal";
  placePin(guessPin,ll.lat,ll.lon); addArc(ll,target,0xff7a59);
  // camera to midpoint
  const mid=ll2v(ll.lat,ll.lon).normalize().add(ll2v(target.lat,target.lon).normalize());
  const mm=mid.lengthSq()<1e-4?target:v2ll(mid);
  flyTo(mm.lat,mm.lon,Math.min(globeDist()+.9,1.7+km/5000));
  renderQuiz(); syncMiniMarkers();
}
$("btnQuiz").onclick=()=> S.quiz?stopQuiz():startQuiz();

/* ============================================================
   LOCATE (works on phones once hosted, e.g. GitHub Pages)
   ============================================================ */
function clearLocation(){
  S.you=null; S.sortNear=false; youPin.visible=false; youMini.remove();
  $("sortBtn").hidden=true; $("sortBtn").textContent="Nearest first";
  $("btnLocate").innerHTML=$("btnLocate").dataset.html; $("btnLocate").setAttribute("aria-pressed","false"); $("btnLocate").title="Show distances from where you are";
  renderList(); if(S.selected) renderCard(S.selected);
  toast("Location cleared. Distances are hidden.");
}
$("btnLocate").onclick=()=>{
  if(S.you){ clearLocation(); return; }
  if(!navigator.geolocation){ toast("This browser has no geolocation."); return; }
  $("btnLocate").textContent="Locating…";
  navigator.geolocation.getCurrentPosition(p=>{
    S.you={lat:p.coords.latitude, lon:p.coords.longitude};
    $("btnLocate").innerHTML=$("btnLocate").dataset.html.replace("Locate me","Clear location"); $("btnLocate").setAttribute("aria-pressed","true"); $("btnLocate").title="Stop using your location";
    placePin(youPin,S.you.lat,S.you.lon); $("sortBtn").hidden=false;
    const near=MON.slice().sort((a,b)=>haversine(S.you,a)-haversine(S.you,b))[0];
    toast(`Nearest monument: ${near.name}, ${fmtKm(haversine(S.you,near))} away.`);
    flyTo(S.you.lat,S.you.lon,2.2); renderList(); syncMiniMarkers(); if(S.selected) renderCard(S.selected);
  },err=>{
    $("btnLocate").innerHTML=$("btnLocate").dataset.html;
    toast(err.code===1 ? "Location is blocked here. Allow it in the browser, or open the hosted version on your phone." : "Couldn't get a position fix. Try again outdoors or on Wi-Fi.",5000);
  },{enableHighAccuracy:false,timeout:10000,maximumAge:600000});
};
$("btnLocate").dataset.html=$("btnLocate").innerHTML;

/* ============================================================
   PHONE NAVIGATION (tab bar + sheets)
   ============================================================ */
function openSheet(name){
  S.sheet=name||null;
  for(const n of ["index","map","sun"]) document.body.classList.toggle("sheet-"+n,n===S.sheet);
  if(S.sheet==="map") setTimeout(()=>{ mini.invalidateSize(); const c=camLL(); mini.setView([Math.max(-60,Math.min(70,c.lat)),c.lon],1,{animate:false}); },320);
  if(S.sheet==="index") setTimeout(()=>{ const sel=$("list").querySelector(".sel"); sel && sel.scrollIntoView({block:"nearest"}); },320);
  syncNav(); setTimeout(updateViewOffset,320);
}
const toggleSheet=n=>openSheet(S.sheet===n?null:n);
$("mIndex").onclick=()=>toggleSheet("index");
$("mMap").onclick=()=>toggleSheet("map");
$("mSun").onclick=()=>toggleSheet("sun");
$("mTour").onclick=()=>{ openSheet(null); $("btnTour").click(); };
$("mQuiz").onclick=()=>{ openSheet(null); $("btnQuiz").click(); };
$("mLocate").onclick=()=>{ openSheet(null); $("btnLocate").click(); };
$("mSpin").onclick=()=>$("btnRotate").click();
$("scrim").onclick=()=>openSheet(null);
function syncNav(){
  const pr=(id,v)=>{ const e=$(id); if(e.getAttribute("aria-pressed")!==String(v)) e.setAttribute("aria-pressed",v); };
  pr("mIndex",S.sheet==="index"); pr("mMap",S.sheet==="map"); pr("mSun",S.sheet==="sun");
  pr("mTour",S.tour); pr("mQuiz",!!S.quiz); pr("mLocate",!!S.you); pr("mSpin",controls.autoRotate);
  const lbl=$("mLocate").lastChild, want=S.you?"Clear":"Me"; if(lbl.nodeValue!==want) lbl.nodeValue=want;
}
if(MQ.addEventListener) MQ.addEventListener("change",()=>{ if(!isMobile()) openSheet(null); $("card").classList.remove("expanded"); updateViewOffset(); });

/* ============================================================
   AUTO-ROTATE + KEYBOARD
   ============================================================ */
function setRotate(on){ controls.autoRotate=on; $("btnRotate").setAttribute("aria-pressed",on); }
$("btnRotate").onclick=()=>setRotate(!controls.autoRotate);
addEventListener("keydown",e=>{
  if(e.target.matches("input,textarea")) { if(e.key==="Escape") e.target.blur(); return; }
  if(e.key==="ArrowRight"){ stopTour(); step(1); }
  else if(e.key==="ArrowLeft"){ stopTour(); step(-1); }
  else if(e.key==="t"||e.key==="T") S.tour?stopTour():startTour();
  else if(e.key==="q"||e.key==="Q") S.quiz?stopQuiz():startQuiz();
  else if(e.key==="r"||e.key==="R") setRotate(!controls.autoRotate);
  else if(e.key==="Escape"){ if(S.sheet) openSheet(null); else if(S.quiz) stopQuiz(); else { stopTour(); if(S.selected) closeCard(); } }
});

/* ============================================================
   POINTER: hover, click, quiz guesses
   ============================================================ */
const ray=new THREE.Raycaster(), ndc=new THREE.Vector2();
let down=null;
function pick(ev){
  const r=canvas.getBoundingClientRect();
  ndc.set(((ev.clientX-r.left)/r.width)*2-1, -((ev.clientY-r.top)/r.height)*2+1);
  ray.setFromCamera(ndc,camera);
  const targets=[earth, ...(S.quiz?[]:hits.filter(h=>h.userData.m.visibleByFilter))];
  const hit=ray.intersectObjects(targets,false)[0];
  return hit;
}
canvas.addEventListener("pointermove",ev=>{
  if(ev.pointerType!=="mouse" || down) { $("tip").hidden=true; return; }
  const h=pick(ev), m=h && h.object!==earth ? h.object.userData.m : null;
  S.hovered=m; canvas.classList.toggle("hovering",!!m);
  const tip=$("tip");
  if(m){ tip.hidden=false; tip.style.left=ev.clientX+"px"; tip.style.top=ev.clientY+"px"; tip.innerHTML=`${m.name}<small>${m.city} · ${m.year}</small>`; }
  else tip.hidden=true;
});
canvas.addEventListener("pointerleave",()=>{ S.hovered=null; $("tip").hidden=true; });
canvas.addEventListener("pointerdown",ev=>{ down={x:ev.clientX,y:ev.clientY}; if(S.tour) stopTour(); cancelFlight(); });
canvas.addEventListener("pointerup",ev=>{
  if(!down) return; const moved=Math.hypot(ev.clientX-down.x,ev.clientY-down.y); down=null;
  if(moved>6) return;
  const h=pick(ev); if(!h) return;
  if(S.quiz){ if(h.object===earth) quizGuess(v2ll(h.point)); return; }
  if(h.object!==earth) select(h.object.userData.m);
});
canvas.addEventListener("dblclick",ev=>{ if(S.quiz||mode!=="globe") return; const h=pick(ev); if(h&&h.object===earth){ const ll=v2ll(h.point); flyTo(ll.lat,ll.lon,Math.max(1.3,camera.position.length()*.6)); } });
controls.addEventListener("start",()=>{ if(controls.autoRotate && !S.selected){} });

/* ============================================================
   LABELS
   ============================================================ */
const labelsEl=$("labels");
for(const m of MON){
  const el=document.createElement("button"); el.className="mlabel off"; el.textContent=m.name; el.tabIndex=-1;
  el.addEventListener("click",()=>{ stopTour(); select(m); });
  labelsEl.appendChild(el); m.label=el;
}
const _v=new THREE.Vector3();
function updateLabels(){
  const W=innerWidth, H=innerHeight, camDir=camera.position.clone().normalize(), placed=[];
  const order=MON.slice().sort((a,b)=>(b===S.selected)-(a===S.selected)||(b===S.hovered)-(a===S.hovered)||b.normal.dot(camDir)-a.normal.dot(camDir));
  for(const m of order){
    const facing=m.normal.dot(camDir);
    let show=!S.quiz && (mode==="globe"||mode==="fly") && m.visibleByFilter && facing>.25;
    if(show){
      _v.copy(m.normal).multiplyScalar(1+m.scale*1.05).project(camera);
      const x=(_v.x*.5+.5)*W+10, y=(-_v.y*.5+.5)*H-22;
      const w=m._w||(m._w=m.label.offsetWidth||90), h=20;
      const rect=[x,y,x+w,y+h];
      if(placed.some(p=>rect[0]<p[2]&&rect[2]>p[0]&&rect[1]<p[3]&&rect[3]>p[1])) show=false;
      else { placed.push(rect); m.label.style.transform=`translate(${x|0}px,${y|0}px)`; }
    }
    m.label.classList.toggle("off",!show);
    m.label.classList.toggle("sel",m===S.selected);
  }
}

/* ============================================================
   MINIMAP (Leaflet, vector countries — no tiles needed)
   ============================================================ */
const mini=L.map("minimap",{zoomControl:false,attributionControl:false,worldCopyJump:true,minZoom:0,maxZoom:7,zoomSnap:.25,inertia:true});
mini.setView([22,10],0.1);
const countryLayer=L.layerGroup().addTo(mini);
for(const [name,polys] of COUNTRIES){
  const ll=polys.map(p=>p.map(r=>unwrap(r).map(([x,y])=>[Math.max(-85,Math.min(85,y)),x])));
  L.polygon(ll,{color:"#0b1a30",weight:.6,fillColor:"#6f7f5c",fillOpacity:.9,interactive:false}).addTo(countryLayer);
}
const miniMarkers={};
for(const m of MON){
  miniMarkers[m.id]=L.circleMarker([m.lat,m.lon],{radius:4,color:"#1a1205",weight:1,fillColor:"#e3b55a",fillOpacity:1}).addTo(mini)
    .on("click",()=>{ if(!S.quiz){ stopTour(); if(isMobile()) openSheet(null); select(m); } });
}
const youMini=L.circleMarker([0,0],{radius:5,color:"#062028",weight:1.5,fillColor:"#5fd4e6",fillOpacity:1});
const viewCircle=L.circle([0,0],{radius:1,color:"#ece6d6",weight:1,opacity:.7,fill:true,fillOpacity:.06,dashArray:"3 4",interactive:false}).addTo(mini);
const guessMini=L.circleMarker([0,0],{radius:5,color:"#2a0c05",weight:1,fillColor:"#ff7a59",fillOpacity:1});
function syncMiniMarkers(){
  for(const m of MON){
    const mk=miniMarkers[m.id], sel=m===S.selected;
    const hide = !m.visibleByFilter || (S.quiz && !(S.quiz.phase!=="aim" && S.quiz.pool[S.quiz.round]===m));
    mk.setStyle({radius:sel?7:4,fillOpacity:hide?0:1,opacity:hide?0:1,weight:sel?2:1,color:sel?"#fff3d6":"#1a1205"});
  }
  if(S.you){ youMini.setLatLng([S.you.lat,S.you.lon]); youMini.addTo(mini); }
  if(S.quiz && S.quiz.phase==="reveal" && guessPin.visible){ const ll=v2ll(guessPin.position); guessMini.setLatLng([ll.lat,ll.lon]).addTo(mini); } else guessMini.remove();
}
mini.on("click",e=>{ if(S.quiz) return; stopTour(); let lon=((e.latlng.lng+540)%360)-180; flyTo(e.latlng.lat,lon,camera.position.length()); });
let miniDragging=false; mini.on("movestart",()=>miniDragging=true); mini.on("moveend",()=>miniDragging=false);
// optional street tiles: only reachable when hosted on the open web
let tiles=null;
$("tilesBtn").onclick=()=>{
  if(tiles){ mini.removeLayer(tiles); tiles=null; countryLayer.eachLayer(l=>l.setStyle({fillOpacity:.9})); $("tilesBtn").setAttribute("aria-pressed","false"); return; }
  tiles=L.tileLayer("https://{s}.basemap.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{subdomains:"abcd",maxZoom:19});
  let ok=false, fails=0;
  tiles.on("tileload",()=>{ ok=true; countryLayer.eachLayer(l=>l.setStyle({fillOpacity:0,opacity:0})); });
  tiles.on("tileerror",()=>{ if(++fails>2 && !ok){ mini.removeLayer(tiles); tiles=null; $("tilesBtn").setAttribute("aria-pressed","false"); toast("Map tiles can't load in this preview. They work once the page is hosted, e.g. on GitHub Pages."); } });
  tiles.addTo(mini).bringToBack(); $("tilesBtn").setAttribute("aria-pressed","true");
};
function camLL(){ return v2ll(camera.position); }
let lastMini=0;
function updateMini(now){
  if(now-lastMini<120) return; lastMini=now;
  const c=camLL(), d=camera.position.length();
  const capKm=Math.acos(Math.min(1,1/d))*EARTH_KM*.62;
  viewCircle.setLatLng([c.lat,c.lon]).setRadius(Math.min(4800,capKm)*1000);
  if(!miniDragging){
    const b=mini.getBounds().pad(-.25);
    if(!b.contains([c.lat,c.lon])) mini.panTo([Math.max(-60,Math.min(70,c.lat)),c.lon],{animate:true,duration:.5});
  }
  $("readout").innerHTML=`<b>${dms(c.lat,"N","S")}</b> · <b>${dms(c.lon,"E","W")}</b> · alt ${Math.round((d-1)*EARTH_KM).toLocaleString("en-US")} km`;
}

/* ============================================================
   ASK THE GUIDE (Claude, when the page runs as a claude.ai artifact)
   ============================================================ */
let guide=null;
(async()=>{
  try{ if(window.claude && window.claude.use){ guide=await window.claude.use("sample"); if(guide) document.body.classList.add("has-guide"); } }catch(e){}
})();
let askCtl=null;
$("askForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const q=$("askInput").value.trim(), m=S.selected; if(!q||!m||!guide) return;
  askCtl?.abort(); askCtl=new AbortController();
  $("askOut").textContent="Thinking…"; $("askBtn").disabled=true;
  const prompt=`You are a friendly, precise guide for a 3D world-monuments globe. The visitor is looking at: ${m.name} in ${m.city}, ${m.country} (completed ${m.year}; ${m.hLabel}; built by ${m.by}). Known facts: ${m.desc} ${m.fact}\n\nVisitor's question: ${q}\n\nAnswer in plain text, at most 90 words, no markdown. If you are unsure, say so.`;
  try{
    const r=await guide(prompt,{modelTier:"quick",signal:askCtl.signal,onText:({text})=>{ $("askOut").textContent=text; }});
    $("askOut").textContent=r.text;
  }catch(err){
    if(err && err.code==="not_granted"){ document.body.classList.remove("has-guide"); guide=null; }
    $("askOut").textContent = err && err.code==="rate_limited" ? "The guide needs a short break. Try again in a minute." : (err && err.code==="not_granted" ? "" : "The guide couldn't answer just now.");
  }finally{ $("askBtn").disabled=false; }
});

/* ============================================================
   LOOP
   ============================================================ */
function resize(){ const w=innerWidth,h=innerHeight; renderer.setSize(w,h,false); camera.aspect=w/h; camera.fov = w<h ? (w<500?56:50) : 42; camera.updateProjectionMatrix(); MON.forEach(m=>m._w=0); updateViewOffset(); }
addEventListener("resize",resize); resize();

function frame(now){
  requestAnimationFrame(frame);
  stepFly(now); stepTween(now); stepInspect(now); setNear(); updateViewBtn(); stepViewOffset();
  if((frame.n=(frame.n||0)+1)%12===0) syncNav();
  if(mode==="globe"){
    controls.update();
  }
  const d=camera.position.length(), surf=d-1;
  controls.rotateSpeed=.18+.32*Math.min(1,surf/2.5);
  const base= surf<.25 ? INS+(.016-INS)*(surf/.25) : .028*surf+.009, t=now/1000;
  // headlight so close-ups on the night side stay readable
  const close = mode==="inspect"||mode==="tween";
  const nightF = S.selected ? Math.max(0,Math.min(1,.5-S.selected.normal.dot(sunDir)*3)) : 0;
  headLight.intensity += ((close ? .25+.75*nightF : 0)-headLight.intensity)*.08;
  headLight.position.copy(camera.position).multiplyScalar(1.02);
  for(const m of MON){
    const hov=m===S.hovered, sel=m===S.selected && !close;
    const hidden=!m.visibleByFilter || (S.quiz && !(S.quiz.phase!=="aim" && S.quiz.pool[S.quiz.round]===m));
    let target=hidden?0.0001:base*(sel?1.25:hov?1.15:1)*(close && m!==S.selected ? .45 : 1);
    if(!(close && m===S.selected)) target=Math.min(target, m.cap*(hov?1.2:1));
    m.scale+= (target-m.scale)*.15;
    m.holder.scale.setScalar(m.scale); m.holder.visible=m.scale>.0005;
    m.ring.material.opacity = sel ? .55+.35*Math.sin(t*4) : hov ? .85 : .28+.12*Math.sin(t*1.6+m.lat);
    m.ring.scale.setScalar(sel?1+.15*Math.sin(t*4):1);
    m.beacon.material.opacity += ((sel?.32:0)-m.beacon.material.opacity)*.1; m.beacon.visible=!close;
  }
  for(const p of [youPin,guessPin]) if(p.visible){ p.scale.setScalar(base*.9); p.userData.ring.scale.setScalar(1+.6*((t*1.2)%1)); p.userData.ring.material.opacity=.7*(1-(t*1.2)%1); }
  stepArcs(now);
  updateLabels(); updateMini(now);
  renderer.render(scene,camera);
}

/* ============================================================
   BOOT
   ============================================================ */
renderList(); updateSun(); syncMiniMarkers();
requestAnimationFrame(frame);
setTimeout(()=>{
  const W = (isMobile() || renderer.capabilities.maxTextureSize<8192) ? 2048 : 4096;
  const tx=buildTextures(W);
  const mk=c=>{ const t=new THREE.CanvasTexture(c); t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy()); return t; };
  earthUniforms.dayMap.value=mk(tx.day); earthUniforms.nightMap.value=mk(tx.night); earthUniforms.specMap.value=mk(tx.spec);
  earth.visible=true;
  $("loader").classList.add("done");
  setTimeout(()=>{ mini.invalidateSize(); },50);
},30);
