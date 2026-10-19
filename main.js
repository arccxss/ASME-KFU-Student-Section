const T={ar:{home:"الرئيسية",posts:"المنشورات العلمية",mag:"المجلة العلمية",courses:"الدورات وورش العمل",tag:"منشورات علمية ومجلة ودورات من نادي ASME في جامعة الملك فيصل",latest:"أحدث المنشورات",issue:"أحدث إصدار",upc:"أحدث الدورات والورش",all:"عرض الكل",read:"قراءة",dl:"تحميل PDF",no:"العدد",reg:"سجّل الآن",by:"المقدم: ",when:"الموعد: ",where:"المكان: ",empty:"لا يوجد محتوى حالياً.",lang:"EN",top:"للأعلى"},
en:{home:"Home",posts:"Scientific Posts",mag:"Magazine",courses:"Courses & Workshops",tag:"Weekly posts, our magazine, and workshops from ASME at King Faisal University",latest:"Latest posts",issue:"Latest issue",upc:"Latest courses & workshops",all:"View all",read:"Read",dl:"Download PDF",no:"Issue",reg:"Register",by:"Presenter: ",when:"When: ",where:"Where: ",empty:"Nothing here yet.",lang:"عربي",top:"Back to top"}};
const lg=localStorage.lang==="en"?"en":"ar",t=k=>T[lg][k];
const page=document.body.dataset.p,$=s=>document.querySelector(s);
document.documentElement.lang=lg;document.documentElement.dir=lg==="ar"?"rtl":"ltr";
document.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap">');
if(SITE.gaId){const s=document.createElement("script");s.async=1;s.src="https://www.googletagmanager.com/gtag/js?id="+SITE.gaId;document.head.append(s);window.dataLayer=[];window.gtag=function(){dataLayer.push(arguments)};gtag("js",new Date);gtag("config",SITE.gaId)}
const pages=[["home","index.html"],["posts","posts.html"],["mag","magazine.html"],["courses","courses.html"]];
$("header").innerHTML=`<div class="w hd"><a href="index.html"><img src="assets/logo-white.png" alt="ASME KFU Student Section"></a><button class="lang" id="lb">${t("lang")}</button><nav>${pages.map(p=>`<a href="${p[1]}" class="${p[0]===page?"on":""}">${t(p[0])}</a>`).join("")}</nav></div>`;
$("#lb").onclick=()=>{localStorage.lang=lg==="ar"?"en":"ar";location.reload()};
const pager=pages.filter(p=>(p[0]==="home"||p[0]==="posts")&&p[0]!==page).map(p=>`<a class="btn" href="${p[1]}">${t(p[0])}</a>`).join("");
$("footer").innerHTML=`<div class="w"><div class="pager">${pager}<a class="btn o" href="#">${t("top")}</a></div><div class="soc">${Object.entries(SITE.socials).map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</div><small>© ${new Date().getFullYear()} ASME KFU Student Section</small></div>`;
const img=s=>s?`<img loading="lazy" src="${s}" alt="" onerror="this.outerHTML='<div class=ph></div>'">`:'<div class="ph"></div>';
const post=p=>`<article class="card">${img(p.img)}<div class="b"><small>${p.date||""}</small><h3>${p.title}</h3><p>${p.text}</p></div></article>`;
const issue=i=>`<article class="card">${img(i.cover)}<div class="b"><small>${i.date||""}</small><h3>${t("no")} ${i.no}: ${i.title}</h3><div class="acts"><a class="btn" href="${i.pdf}" target="_blank" rel="noopener">${t("read")}</a><a class="btn o" href="${i.pdf}" download>${t("dl")}</a></div></div></article>`;
const course=c=>`<article class="card">${img(c.img)}<div class="b"><h3>${c.title}</h3><div class="meta"><span><b>${t("by")}</b>${c.presenter}</span><span><b>${t("when")}</b>${c.date} - ${c.time}</span><span><b>${t("where")}</b>${c.place}</span></div><div class="acts"><a class="btn" href="${c.link}" target="_blank" rel="noopener">${t("reg")}</a></div></div></article>`;
const grid=(a,f)=>a.length?`<div class="grid">${a.map(f).join("")}</div>`:`<p class="empty">${t("empty")}</p>`;
const sec=(k,a,f,href,n)=>`<section class="sec"><div class="sh"><h2>${t(k)}</h2><a class="btn o" href="${href}">${t("all")}</a></div>${grid(a.slice(0,n),f)}</section>`;
const m=$("#m");
if(page==="home"){
  m.innerHTML=`<section class="hero"><h1>ASME KFU Student Section</h1><p>${t("tag")}</p><div class="stack" id="st">${SLIDES.map(s=>`<div class="c">${img(s.img)}</div>`).join("")}</div><div class="cap" id="cp"></div><div class="dots" id="dt">${SLIDES.map(()=>"<i></i>").join("")}</div></section>`+sec("latest",POSTS,post,"posts.html",3)+sec("issue",ISSUES,issue,"magazine.html",1)+sec("upc",COURSES,course,"courses.html",2);
  const cs=[...document.querySelectorAll("#st .c")],ds=[...document.querySelectorAll("#dt i")],n=cs.length,sg=lg==="ar"?-1:1;let cur=0,tm;
  const show=()=>{cs.forEach((c,i)=>{const p=(i-cur+n)%n;c.style.zIndex=n-p;c.style.opacity=p>2?0:1;c.style.transform=`translate(${p*sg*18}px,${p*-12}px) scale(${1-p*.06}) rotate(${p*sg*2.5}deg)`});ds.forEach((d,i)=>d.className=i===cur?"on":"");$("#cp").textContent=SLIDES[cur].title};
  const go=d=>{cur=(cur+d+n)%n;show();clearInterval(tm);tm=setInterval(()=>go(1),4000)};
  let x0,sw=0;const st=$("#st");st.onclick=()=>{if(!sw)go(1);sw=0};st.ontouchstart=e=>x0=e.touches[0].clientX;st.ontouchend=e=>{const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){sw=1;go(d>0?-1:1)}};
  if(n){show();tm=setInterval(()=>go(1),4000)}
}else{
  const d={posts:[POSTS,post],mag:[ISSUES,issue],courses:[COURSES,course]}[page];
  m.innerHTML=`<h1>${t(page)}</h1>`+grid(d[0],d[1]);
}
