(() => {
  'use strict';
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  const root=document.documentElement;
  const saved=localStorage.getItem('un-theme');
  root.dataset.theme=saved||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  addEventListener('load',()=>setTimeout(()=>$('#preloader')?.classList.add('hide'),350));
  setTimeout(()=>$('#preloader')?.classList.add('hide'),2300);
  $('#themeBtn')?.addEventListener('click',()=>{const n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;localStorage.setItem('un-theme',n)});

  const liveTime=$('#liveTime'), liveDate=$('#liveDate');
  function updateLiveTime(){
    const now=new Date();
    if(liveTime)liveTime.textContent=new Intl.DateTimeFormat('en-LK',{timeZone:'Asia/Colombo',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true}).format(now);
    if(liveDate)liveDate.textContent=new Intl.DateTimeFormat('en-LK',{timeZone:'Asia/Colombo',weekday:'short',day:'2-digit',month:'short'}).format(now);
  }
  updateLiveTime();
  setInterval(updateLiveTime,1000);

  const menu=$('#mobilePanel'), menuBtn=$('#menuBtn');
  function closeMenu(){menu?.classList.remove('open');menuBtn?.classList.remove('on');menuBtn?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-hidden','true');document.body.classList.remove('menu-open')}
  menuBtn?.addEventListener('click',()=>{const o=!menu.classList.contains('open');menu.classList.toggle('open',o);menuBtn.classList.toggle('on',o);menuBtn.setAttribute('aria-expanded',o);menu.setAttribute('aria-hidden',!o);document.body.classList.toggle('menu-open',o)});
  $$('#mobilePanel a').forEach(a=>a.addEventListener('click',closeMenu));
  addEventListener('resize',()=>{if(innerWidth>1080)closeMenu()});

  const topBtn=$('#toTop'), header=$('#siteHeader');
  function scrollState(){header?.classList.toggle('scrolled',scrollY>24);topBtn?.classList.toggle('visible',scrollY>560)}
  addEventListener('scroll',scrollState,{passive:true});scrollState();
  topBtn?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

  const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');ro.unobserve(e.target)}}),{threshold:.12});
  $$('.reveal').forEach(x=>ro.observe(x));
  const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const x=e.target,t=+x.dataset.count,s=x.dataset.suffix||'',st=performance.now();function run(n){const p=Math.min((n-st)/1500,1),v=Math.floor(t*(1-Math.pow(1-p,3)));x.textContent=(t>=1000?v.toLocaleString():v)+s;if(p<1)requestAnimationFrame(run)}requestAnimationFrame(run);co.unobserve(x)}),{threshold:.45});
  $$('[data-count]').forEach(x=>co.observe(x));

  $$('.faq-q').forEach(b=>b.addEventListener('click',()=>{const f=b.closest('.faq'),list=f.parentElement;$$('.faq',list).forEach(x=>{if(x!==f){x.classList.remove('open');$('.faq-q',x)?.setAttribute('aria-expanded','false')}});const o=f.classList.toggle('open');b.setAttribute('aria-expanded',o)}));

  const track=$('#testimonialTrack');
  if(track){const slides=$$('.slide',track),dots=$('#dots');let i=0,timer;slides.forEach((_,n)=>{const d=document.createElement('button');d.className='dot'+(n===0?' active':'');d.setAttribute('aria-label',`Show testimonial ${n+1}`);d.onclick=()=>go(n);dots.appendChild(d)});function go(n){i=(n+slides.length)%slides.length;track.style.transform=`translateX(-${i*100}%)`;$$('.dot',dots).forEach((d,k)=>d.classList.toggle('active',k===i));clearInterval(timer);timer=setInterval(()=>go(i+1),6000)}$('#prev')?.addEventListener('click',()=>go(i-1));$('#next')?.addEventListener('click',()=>go(i+1));timer=setInterval(()=>go(i+1),6000)}

  $$('[data-filter-group]').forEach(group=>{const cards=$$(group.dataset.target);$$('[data-filter]',group).forEach(btn=>btn.addEventListener('click',()=>{$$('[data-filter]',group).forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(c=>c.classList.toggle('hidden-card',f!=='all'&&c.dataset.category!==f))}))});

  const lb=$('#lightbox'),lbImg=$('#lightboxImage'),lbCap=$('#lightboxCaption');
  function closeLight(){lb?.classList.remove('open');lb?.setAttribute('aria-hidden','true')}
  $$('.gallery-item').forEach(x=>x.addEventListener('click',()=>{if(!lb)return;const im=$('img',x);lbImg.src=im.src;lbImg.alt=im.alt;lbCap.textContent=x.dataset.caption||im.alt;lb.classList.add('open');lb.setAttribute('aria-hidden','false')}));
  $('#lightboxClose')?.addEventListener('click',closeLight);lb?.addEventListener('click',e=>{if(e.target===lb)closeLight()});

  $$('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return}const s=$('.form-status',form);if(s)s.textContent='Thank you. Your enquiry has been prepared. Connect this form to your email or CRM endpoint for live submissions.';form.reset()}));

  const panel=$('#chatPanel'),launcher=$('#chatLauncher'),messages=$('#messages'),input=$('#chatInput');
  const rules=[
    [['course','program','study','available'],'UN Campus offers pathways in Computing & IT, Business Management, English & Languages, Teacher Education, Health & Care, Accounting, Hospitality and Creative Design. Open the Courses page for the full catalogue.'],
    [['apply','admission','enroll','register','join'],'Use the Enroll Now form on the Contact page. Choose your course area and branch, then the admissions team can follow up. WhatsApp is also available for a quick enquiry.'],
    [['fee','price','cost','payment'],'Fees vary by programme and duration. Ask admissions for the current fee schedule and available instalment plans for your selected course.'],
    [['branch','location','where','map'],'UN Campus has two branches in Trincomalee. Open the Contact page or the footer maps for the exact pins and turn-by-turn directions.'],
    [['time','open','hour','schedule'],'Sample office hours are Monday to Friday, 8:30 AM–5:30 PM, and Saturday, 9:00 AM–2:00 PM. Replace these with your confirmed hours.'],
    [['online','distance','remote'],'Selected programmes may support blended or online study. Availability depends on the course and intake.'],
    [['staff','teacher','lecturer'],'The Staff page presents academic leaders, lecturers and student-support specialists across the main subject areas.'],
    [['hello','hi','hey'],'Hello! I’m Unexa, your UN Campus assistant. Ask me about courses, admissions, fees, branches or study options.'],
    [['contact','phone','email'],'Call or WhatsApp +94 77 000 0000, email info@uncampus.edu.lk, or use the Contact page form.']
  ];
  const time=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  function add(text,type='bot'){if(!messages)return;const d=document.createElement('div');d.className=`message ${type}`;d.textContent=text;const tm=document.createElement('time');tm.textContent=time();d.appendChild(tm);messages.appendChild(d);messages.scrollTop=messages.scrollHeight}
  function answer(q){q=q.toLowerCase();let best=null,score=0;rules.forEach(([keys,text])=>{const s=keys.filter(k=>q.includes(k)).length;if(s>score){score=s;best=text}});return best||'I can help with courses, admissions, fees, branches, staff and study modes. For a personalised answer, please contact the admissions team.'}
  function openChat(){panel?.classList.add('open');panel?.setAttribute('aria-hidden','false');launcher?.classList.add('active');launcher?.setAttribute('aria-expanded','true');document.body.classList.add('chat-open');if(messages&&!messages.children.length)add('Welcome to UN Campus! I’m Unexa. How can I help you today?');setTimeout(()=>input?.focus(),200)}
  function closeChat(){panel?.classList.remove('open');panel?.setAttribute('aria-hidden','true');launcher?.classList.remove('active');launcher?.setAttribute('aria-expanded','false');document.body.classList.remove('chat-open')}
  function send(q){q=(q||'').trim();if(!q)return;add(q,'user');input.value='';const typing=document.createElement('div');typing.className='message bot typing';typing.innerHTML='<i></i><i></i><i></i>';messages.appendChild(typing);messages.scrollTop=messages.scrollHeight;setTimeout(()=>{typing.remove();add(answer(q))},650+Math.random()*400)}
  launcher?.addEventListener('click',openChat);$('#chatClose')?.addEventListener('click',closeChat);$$('[data-open-chat]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openChat()}));$('#chips')?.addEventListener('click',e=>{const b=e.target.closest('[data-msg]');if(b)send(b.dataset.msg)});$('#chatForm')?.addEventListener('submit',e=>{e.preventDefault();send(input.value)});
  addEventListener('keydown',e=>{if(e.key==='Escape'){closeLight();closeMenu();closeChat()}});
  $$('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
})();
