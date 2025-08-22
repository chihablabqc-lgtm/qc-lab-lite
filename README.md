"></div>
            <div id="labAuth" class="muted"></div>
          </div>
        </div>
        <div style="text-align:right"><div class="muted" data-i="ref">Réf. rapport</div><div id="repRef" style="font-weight:600"></div><div id="repDate" class="muted"></div></div>
      </div>
    </div>

    <div class="card">
      <div style="font-weight:600;margin-bottom:6px" data-i="ident">Identification de l'échantillon</div>
      <div class="grid g3" id="repIdent"></div>
    </div>

    <div class="card" id="repResults"></div>
    <div class="card" id="repLawRef" style="display:none"></div>
    <div class="card" id="repConclusion"></div>
    <div class="card" id="repNotes" style="display:none"></div>

    <div class="card">
      <div style="font-weight:600;margin-bottom:6px" data-i="validation">Validation</div>
      <div class="grid g2">
        <div><table><tbody>
          <tr><td data-i="validatedby">Validé par</td><td id="vBy">—</td></tr>
          <tr><td data-i="role">Fonction</td><td id="vRole">—</td></tr>
          <tr><td data-i="date">Date</td><td id="vDate">—</td></tr>
        </tbody></table></div>
        <div style="border:1px dashed #aaa;border-radius:10px;height:90px;display:flex;align-items:center;justify-content:center" class="muted" data-i="stamp">Cachet & signature</div>
      </div>
      <div class="muted" style="margin-top:6px" data-i="iso">Rapport conforme ISO/CEI 17025. Reproduction interdite sauf accord écrit.</div>
    </div>
  </div>
</div></div>

<!-- Modale VALIDATEUR -->
<div class="modal-bg" id="mValidator"><div class="modal">
  <div class="row"><div style="font-weight:600">Validateur</div><button class="btn no-print" data-close="#mValidator">✕</button></div>
  <div class="grid g2">
    <div><div class="muted">Nom</div><input class="input" id="val_name"/></div>
    <div><div class="muted">Fonction</div><input class="input" id="val_role"/></div>
  </div>
  <div class="row no-print" style="justify-content:flex-end"><button class="btn btn-primary" id="btnSaveValidator">Enregistrer</button></div>
</div></div>

<!-- Modale PARAMÈTRES LABO -->
<div class="modal-bg" id="mSettings"><div class="modal">
  <div class="row"><div style="font-weight:600" data-i="labid">Identité du laboratoire</div><button class="btn no-print" data-close="#mSettings">✕</button></div>
  <div class="grid g2">
    <div><div class="muted" data-i="labname">Nom</div><input class="input" id="st_name" value="Laboratoire Contrôle Qualité"/></div>
    <div><div class="muted" data-i="authnum">N° autorisation ministérielle</div><input class="input" id="st_auth"/></div>
    <div><div class="muted" data-i="address">Adresse</div><input class="input" id="st_addr"/></div>
    <div><div class="muted" data-i="phone">Téléphone</div><input class="input" id="st_phone"/></div>
    <div style="grid-column:1/span 2"><div class="muted">Email</div><input class="input" id="st_email"/></div>
  </div>
  <div class="muted" style="margin-top:6px" data-i="logo">Logo (PNG/JPG/SVG)</div><input type="file" id="st_logo" accept="image/*"/>
  <div class="logoBox" style="margin-top:6px"><img id="st_logoPrev" style="max-height:80px;max-width:260px;display:none"/></div>
  <div class="row no-print" style="justify-content:flex-end"><button class="btn btn-primary" id="btnSaveSettings" data-i="save">Enregistrer</button></div>
</div></div>

<!-- Modale CLIENTS -->
<div class="modal-bg" id="mClients"><div class="modal">
  <div class="row"><div style="font-weight:600" data-i="clients">Clients</div><button class="btn no-print" data-close="#mClients">✕</button></div>
  <div class="grid g3">
    <div><div class="muted" data-i="name">Nom *</div><input class="input" id="cl_name"/></div>
    <div><div class="muted" data-i="address">Adresse</div><input class="input" id="cl_addr"/></div>
    <div><div class="muted" data-i="phone">Téléphone</div><input class="input" id="cl_phone"/></div>
    <div style="grid-column:1/span 3"><div class="muted">Email</div><input class="input" id="cl_email"/></div>
  </div>
  <div class="row no-print" style="justify-content:flex-end;gap:6px">
    <button class="btn btn-primary" id="btnSaveClient" data-i="save">Enregistrer</button>
    <button class="btn" id="btnCancelClientEdit" style="display:none" data-i="canceledit">Annuler édition</button>
  </div>
  <div id="clientsList" style="margin-top:8px"></div>
</div></div>

<!-- Modale CATALOGUE -->
<div class="modal-bg" id="mCatalog"><div class="modal">
  <div class="row"><div style="font-weight:600" data-i="products">Produits & services</div><button class="btn no-print" data-close="#mCatalog">✕</button></div>
  <div class="grid g3">
    <div><div class="muted" data-i="product">Produit *</div><input class="input" id="pr_name" placeholder="ex. Lait"/></div>
    <div><div class="muted" data-i="service">Service</div><select class="input" id="pr_service"><option>Physico-chimie</option><option>Microbiologie</option></select></div>
    <div style="display:flex;align-items:flex-end"><button class="btn" id="btnAddService" data-i="addsvc">Ajouter service</button></div>

    <div><div class="muted" data-i="param">Paramètre *</div><input class="input" id="pr_param"/></div>
    <div><div class="muted" data-i="unit">Unité</div><input class="input" id="pr_unit"/></div>
    <div><div class="muted" data-i="method">Méthode/Norme</div><input class="input" id="pr_method"/></div>
    <div><div class="muted" data-i="limit">Limite / Référence</div><input class="input" id="pr_ref" placeholder="ex. 6.6–6.8, ≤ 0.8"/></div>
    <div><div class="muted" data-i="lock">Verrouiller norme</div><select class="input" id="pr_locked"><option value="1" selected>Oui</option><option value="0">Non</option></select></div>
    <div><div class="muted" data-i="law">Réf. législative (produit)</div><input class="input" id="pr_law" placeholder="ex. Codex STAN 206-1999"/></div>
    <div style="display:flex;align-items:flex-end"><button class="btn" id="btnAddParam" data-i="addparam">Ajouter paramètre</button></div>
  </div>
  <div class="muted" style="margin-top:6px" data-i="locknote">Les normes verrouillées seront en lecture seule dans les rapports.</div>
  <div id="prodList" style="margin-top:8px"></div>
</div></div>

<!-- Modale RESTAURATION -->
<div class="modal-bg" id="mRestore"><div class="modal">
  <div class="row"><div style="font-weight:600" data-i="restore">Restaurer</div><button class="btn no-print" data-close="#mRestore">✕</button></div>
  <div class="grid g2">
    <div style="grid-column:1/span 2"><input type="file" id="restoreFile" accept=".json,.qclab,.qclab.json"/></div>
    <div><div class="muted" data-i="mode">Mode</div><select class="input" id="restoreMode"><option value="replace" data-i="replace">Remplacer</option><option value="merge" data-i="merge">Fusionner</option></select></div>
    <div id="restoreMsg" class="muted"></div>
  </div>
  <div class="row no-print" style="justify-content:flex-end"><button class="btn" id="btnDoRestore" data-i="restorebtn">Restaurer</button></div>
</div></div>

<footer class="muted">QC Lab Lite v3.0 FULL+</footer>
<div id="diag"></div>

<script>
/* ===== DIAG ===== */
const showDiag=(m)=>{const d=document.getElementById('diag');d.style.display='block';d.innerHTML=m;};
window.addEventListener('error',e=>showDiag('<b>Erreur JS</b>: '+(e.message||'')+' @ '+(e.filename||'')+':'+(e.lineno||'?')));
window.addEventListener('unhandledrejection',e=>showDiag('<b>Rejet</b>: '+(e.reason&&e.reason.message?e.reason.message:String(e.reason))));

/* ===== I18N ===== */
let LANG = localStorage.getItem('qcl_lang') || 'fr';
const TR = {
  fr:{'stats.samples':'Échantillons','stats.soon':'Échéance ≤48h','stats.year':'Année courante',search:'Recherche',service:'Service',priority:'Priorité',all:'Tous',allf:'Toutes',
      code:'Code',intcode:'Code interne',client:'Client',prodsvc:'Produit/Service',sampler:'Préleveur',recv:'Réception',due:'Échéance',prio:'Priorité',actions:'Actions',
      newsample:'Nouvel échantillon',new:'Nouveau',clientaddr:'Adresse client',product:'Produit',brand:'Nom commercial',qty:'Poids / Qté',temp:'Température (°C)',loc:'Lieu prélèvement',labtech:'Technicien labo',notes:'Notes',
      mfg:'Fabrication',exp:'Expiration',tests:'Tests',addtest:'+ Test',cancel:'Annuler',save:'Enregistrer',report:'Rapport',printpdf:'Imprimer / PDF',exportword:'Exporter Word',validate:'Valider rapport',unvalidate:'Annuler validation',
      ref:'Réf. rapport',ident:"Identification de l'échantillon",validation:'Validation',validatedby:'Validé par',role:'Fonction',date:'Date',stamp:'Cachet & signature',
      iso:'Rapport conforme ISO/CEI 17025. Reproduction interdite sauf accord écrit.',labid:'Identité du laboratoire',labname:'Nom',authnum:'N° autorisation ministérielle',address:'Adresse',phone:'Téléphone',logo:'Logo (PNG/JPG/SVG)',
      clients:'Clients',canceledit:'Annuler édition',products:'Produits & services',param:'Paramètre',unit:'Unité',method:'Méthode/Norme',limit:'Limite / Référence',lock:'Verrouiller norme',law:'Réf. législative (produit)',addsvc:'Ajouter service',addparam:'Ajouter paramètre',locknote:'Les normes verrouillées seront en lecture seule dans les rapports.',
      restore:'Restaurer',mode:'Mode',replace:'Remplacer',merge:'Fusionner',restorebtn:'Restaurer',lawref:'Référence législative'
  },
  ar:{'stats.samples':'العينات','stats.soon':'الآجال ≤ ٤٨ ساعة','stats.year':'سنة جارية',search:'بحث',service:'الخدمة',priority:'الأولوية',all:'الكل',allf:'الكل',
      code:'المرجع',intcode:'الرمز الداخلي',client:'الزبون',prodsvc:'المنتج/الخدمة',sampler:'الآخذ',recv:'الاستقبال',due:'الأجل',prio:'الأولوية',actions:'إجراءات',
      newsample:'عينة جديدة',new:'جديد',clientaddr:'عنوان الزبون',product:'المنتج',brand:'الاسم التجاري',qty:'الكمية / الوزن',temp:'الحرارة (°C)',loc:'مكان السحب',labtech:'تقني المخبر',notes:'ملاحظات',
      mfg:'تاريخ التصنيع',exp:'تاريخ الانتهاء',tests:'التحاليل',addtest:'+ تحليل',cancel:'إلغاء',save:'حفظ',report:'تقرير',printpdf:'طباعة / PDF',exportword:'تصدير Word',validate:'اعتماد التقرير',unvalidate:'إلغاء الاعتماد',
      ref:'مرجع التقرير',ident:'تعريف العينة',validation:'التثبيت',validatedby:'المعتمد','role':'الوظيفة','date':'التاريخ','stamp':'الختم و التوقيع',
      iso:'تقرير مطابق لمعيار ISO/IEC 17025. يمنع النسخ دون ترخيص كتابي.',labid:'هوية المخبر',labname:'الاسم',authnum:'رقم ترخيص الوزارة',address:'العنوان',phone:'الهاتف',logo:'الشعار (PNG/JPG/SVG)',
      clients:'الزبائن',canceledit:'إلغاء التعديل',products:'المنتجات والخدمات',param:'المؤشر',unit:'الوحدة',method:'الطريقة/المعيار',limit:'الحد / المرجع',lock:'قفل المعيار',law:'المرجع القانوني',
      addsvc:'إضافة خدمة',addparam:'إضافة مؤشر',locknote:'المعايير المقفلة للقراءة فقط داخل التقرير.',restore:'استرجاع',mode:'الوضع',replace:'استبدال',merge:'دمج',restorebtn:'استرجاع',lawref:'المرجع القانوني'
  }
};
function applyLang(){
  document.documentElement.lang = LANG;
  document.documentElement.dir  = (LANG==='ar')?'rtl':'ltr';
  document.getElementById('btnLang').textContent = (LANG==='ar')?'AR':'FR';
  document.querySelectorAll('[data-i]').forEach(el=>{
    const k=el.getAttribute('data-i'); if(TR[LANG][k]) el.textContent=TR[LANG][k];
  });
}

/* ===== UTILS / STORAGE ===== */
const K_S='qcl_v30_samples',K_T='qcl_v30_settings',K_C='qcl_v30_clients',K_P='qcl_v30_products',K_SEQ='qcl_v30_seq';
const uid=()=>Math.random().toString(36).slice(2,10);
const tISO=()=>new Date().toISOString().slice(0,10);
const fmt=(d)=>{ if(!d) return ''; const x=new Date(d); return String(x.getDate()).padStart(2,'0')+'/'+String(x.getMonth()+1).padStart(2,'0')+'/'+x.getFullYear(); };
const fmtTime=(t)=>!t?'':String(t).slice(0,5);
const fmtDT=(d,t)=> (fmt(d)+(t?(' '+fmtTime(t)):''));
const get=(k,d)=>{ try{return JSON.parse(localStorage.getItem(k)||'null')||d}catch(e){return d} };
const set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const esc=(s)=>String(s||'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');

/* ===== STATE ===== */
let samples, settings, clients, products, seq;
let editingId=null, currentReportId=null, editingClientId=null;

/* ===== INIT ===== */
function initState(){
  samples = get(K_S,[]);
  settings= get(K_T,{name:'Laboratoire Contrôle Qualité',addr:'',phone:'',email:'',auth:'',logo:null});
  clients = get(K_C,[]);
  products= get(K_P,[]);
  seq     = get(K_SEQ,{});
  if(!products.length){
    const u=uid;
    products=[
      {id:u(),name:'Lait reconstitué',lawRef:'Codex STAN 206-1999; Décret Algérien 09-219',services:[
        {id:u(),name:'Physico-chimie',params:[
          {id:u(),name:'pH',unit:'',method:'ISO 10523',ref:'6.6–6.8',locked:true},
          {id:u(),name:'Acidité',unit:'°D',method:'ISO 6091',ref:'15–18',locked:true},
          {id:u(),name:'Densité',unit:'g/cm³',method:'ISO 12185',ref:'1.030–1.035',locked:true}
        ]}
      ]},
      {id:u(),name:"Huile d'olive",lawRef:'Codex STAN 33; Règlement (CEE) n°2568/91',services:[
        {id:u(),name:'Physico-chimie',params:[
          {id:u(),name:"Indice d'acidité",unit:'% ac. oléique',method:'COI/T.20/Doc. 34',ref:'≤ 0.8',locked:true},
          {id:u(),name:'Indice de peroxyde',unit:'meq O₂/kg',method:'COI/T.20/Doc. 35',ref:'≤ 20',locked:true}
        ]}
      ]},
      {id:u(),name:'Eau potable',lawRef:'WHO Guidelines 2017; Décret Algérien 93-159',services:[
        {id:u(),name:'Physico-chimie',params:[
          {id:u(),name:'pH',unit:'',method:'ISO 10523',ref:'6.5–8.5',locked:true},
          {id:u(),name:'Nitrates',unit:'mg/L',method:'ISO 7890-3',ref:'≤ 50',locked:true}
        ]},
        {id:u(),name:'Microbiologie',params:[
          {id:u(),name:'Coliformes totaux',unit:'UFC/100mL',method:'ISO 9308-1',ref:'= 0',locked:true}
        ]}
      ]}
    ];
    set(K_P,products);
  }
}
function refreshHeader(){
  document.getElementById('labNameHdr').textContent=settings.name||'QC Lab Lite';
  document.getElementById('labMetaHdr').textContent=[settings.addr,settings.phone,settings.email].filter(Boolean).join(' • ');
  const lg=document.getElementById('labLogoSmall'); lg.src=settings.logo||''; lg.style.display=settings.logo?'block':'none';
}

/* ===== RENDER LISTE ===== */
function filtered(){
  const q=(document.getElementById('q').value||'').toLowerCase();
  const s=document.getElementById('fService').value;
  const p=document.getElementById('fPriority').value;
  return (samples||[]).filter(x=>{
    const hay=[x.sampleCode,x.internalCode,x.clientName,x.productType,x.serviceName].map(v=>(v||'').toLowerCase());
    const mq=!q || hay.some(v=>v.indexOf(q)>=0);
    const ms=s==='Tous' || s==='الكل' || x.serviceName===s;
    const mp=p==='Toutes' || p==='الكل' || x.priority===p;
    return mq&&ms&&mp;
  });
}
function render(){
  const tbody=document.getElementById('rows'); tbody.innerHTML='';
  const list=filtered();
  if(!list.length){ tbody.innerHTML='<tr><td colspan="11" style="text-align:center;color:#666;padding:20px">—</td></tr>'; }
  else list.forEach(x=>{
    const tr=document.createElement('tr');
    tr.innerHTML=
      `<td>${esc(x.sampleCode||'')}</td>
       <td>${esc(x.internalCode||'')}</td>
       <td>${esc(x.clientName||'')}</td>
       <td>${esc(x.productType||'')}${x.serviceName?(' • '+esc(x.serviceName)):''
       }</td><td>${esc(x.samplerType||'')}</td>
       <td>${fmtDT(x.receivedDate,x.receivedTime)}</td>
       <td>${fmt(x.mfgDate)}</td><td>${fmt(x.expDate)}</td>
       <td>${fmt(x.dueDate)}</td>
       <td><span class="chip">${esc(x.priority||'')}</span></td>
       <td class="no-print" style="text-align:right">
         <button class="btn" data-action="report" data-id="${x.id}">${LANG==='ar'?'تقرير':'Rapport'}</button>
         <button class="btn" data-action="edit" data-id="${x.id}">${LANG==='ar'?'تعديل':'Éditer'}</button>
         <button class="btn" data-action="del" data-id="${x.id}">${LANG==='ar'?'حذف':'Supprimer'}</button>
       </td>`;
    tbody.appendChild(tr);
  });
  document.getElementById('statTotal').textContent=samples.length;
  document.getElementById('statSoon').textContent=samples.filter(x=>x.dueDate && new Date(x.dueDate)<=new Date(Date.now()+2*24*3600*1000)).length;
  const y=new Date().getFullYear();
  document.getElementById('statYear').textContent=samples.filter(x=>x.receivedDate && new Date(x.receivedDate).getFullYear()===y).length;
}

/* ===== NUMÉROTATION ===== */
function nextCode(serviceName, receivedDate){
  const y = receivedDate ? new Date(receivedDate).getFullYear() : new Date().getFullYear();
  const pref = serviceName === 'Physico-chimie' ? 'PH' : (serviceName === 'Microbiologie' ? 'MC' : 'XX');
  const key = `${pref}-${y}`; const cur = (seq[key] || 0) + 1; seq[key] = cur; set(K_SEQ, seq);
  return `${pref}-${String(cur).padStart(3,'0')}/${y}`;
}
function nextInternalCode(receivedDate){
  const y = receivedDate ? new Date(receivedDate).getFullYear() : new Date().getFullYear();
  const key = `INT-${y}`; const cur = (seq[key] || 0) + 1; seq[key] = cur; set(K_SEQ, seq);
  return `INT-${String(cur).padStart(4,'0')}/${y}`;
}

/* ===== CLIENTS ===== */
function populateClients(selected){
  const s=document.getElementById('s_client'); let html='<option value="">—</option>';
  (clients||[]).forEach(c=>{ html+=`<option value="${c.id}" ${selected===c.id?'selected':''}>${esc(c.name)}</option>`; });
  s.innerHTML=html;
}
function renderClients(){
  const box=document.getElementById('clientsList'); if(!clients.length){ box.innerHTML='<div class="muted">—</div>'; return; }
  let html=''; clients.forEach(c=>{
    html+=`<div class="row"><div><b>${esc(c.name)}</b> <span class="muted">• ${esc(c.addr||'')}${c.phone?(' • '+esc(c.phone)):''
      }${c.email?(' • '+esc(c.email)):''
      }</span></div><div>
      <button class="btn" data-client-edit="${c.id}">${LANG==='ar'?'تعديل':'Éditer'}</button>
      <button class="btn" data-client-del="${c.id}">${LANG==='ar'?'حذف':'Supprimer'}</button></div></div>`;
  });
  box.innerHTML=html;
}
function saveClient(){
  const name=document.getElementById('cl_name').value.trim(); if(!name){alert(LANG==='ar'?'اسم الزبون إجباري':'Nom client obligatoire');return;}
  const v={name,addr:cl_addr.value.trim(),phone:cl_phone.value.trim(),email:cl_email.value.trim()};
  if(editingClientId){
    clients=clients.map(x=>x.id===editingClientId?Object.assign({},x,v):x);
    editingClientId=null; document.getElementById('btnCancelClientEdit').style.display='none';
  }else{
    clients=[].concat(clients,[Object.assign({id:uid()},v)]);
  }
  set(K_C,clients); renderClients(); populateClients('');
  cl_name.value=''; cl_addr.value=''; cl_phone.value=''; cl_email.value='';
}
function editClient(id){
  const c=clients.find(x=>x.id===id); if(!c) return;
  editingClientId=id; document.getElementById('btnCancelClientEdit').style.display='inline-block';
  cl_name.value=c.name||''; cl_addr.value=c.addr||''; cl_phone.value=c.phone||''; cl_email.value=c.email||'';
}
function cancelClientEdit(){ editingClientId=null; document.getElementById('btnCancelClientEdit').style.display='none'; cl_name.value=''; cl_addr.value=''; cl_phone.value=''; cl_email.value=''; }
function delClient(id){ if(!confirm(LANG==='ar'?'حذف؟':'Supprimer ?')) return; clients=clients.filter(x=>x.id!==id); set(K_C,clients); renderClients(); populateClients(''); }

/* ===== CATALOGUE ===== */
function populateProducts(selected){
  const s=document.getElementById('s_product'); let html='<option value="">—</option>';
  (products||[]).forEach(p=>{ html+=`<option value="${p.id}" ${selected===p.id?'selected':''}>${esc(p.name)}</option>`; });
  s.innerHTML=html;
}
function renderCatalog(){
  const box=document.getElementById('prodList'); if(!box) return;
  if(!products.length){ box.innerHTML='<div class="muted">—</div>'; return; }
  let html=''; products.forEach(p=>{
    html+=`<div class="row"><div><b>${esc(p.name)}</b> <span class="muted">(${(p.services||[]).length} service)</span>${p.lawRef?(' • <span class="muted">'+esc(p.lawRef)+'</span>'):''}</div></div>`;
    (p.services||[]).forEach(s=>{
      html+=`<div class="row" style="padding-left:28px"><div><b>${esc(s.name)}</b> <span class="muted">• ${s.params.length} paramètre(s)</span></div></div>`;
      s.params.forEach(t=>{
        html+=`<div class="row" style="padding-left:56px"><div>${esc(t.name)} <span class="muted">• ${esc(t.unit||'')} • ${esc(t.method||'')} • ${esc(t.ref||'')}${t.locked?' • 🔒':''}</span></div></div>`;
      });
    });
  });
  box.innerHTML=html;
}
function addService(){
  const pn=pr_name.value.trim(); if(!pn){alert(LANG==='ar'?'المنتج إجباري':'Produit obligatoire');return;}
  const sn=pr_service.value;
  let p=products.find(x=>x.name.toLowerCase()===pn.toLowerCase());
  if(!p){p={id:uid(),name:pn,lawRef:pr_law.value.trim(),services:[]}; products.push(p);}
  let sv=(p.services||[]).find(x=>x.name===sn);
  if(!sv){sv={id:uid(),name:sn,params:[]}; p.services.push(sv);}
  p.lawRef = pr_law.value.trim() || p.lawRef || '';
  set(K_P,products); renderCatalog();
}
function addParam(){
  const pn=pr_name.value.trim(); const sn=pr_service.value; const t=pr_param.value.trim();
  if(!pn||!t){alert(LANG==='ar'?'المنتج والمؤشر إجباريان':'Produit et paramètre obligatoires');return;}
  const unit=pr_unit.value.trim(); const method=pr_method.value.trim(); const ref=pr_ref.value.trim(); const locked=(pr_locked.value==='1'); const law=pr_law.value.trim();
  let p=products.find(x=>x.name.toLowerCase()===pn.toLowerCase());
  if(!p){p={id:uid(),name:pn,lawRef:law,services:[]}; products.push(p);}
  let sv=(p.services||[]).find(x=>x.name===sn);
  if(!sv){sv={id:uid(),name:sn,params:[]}; p.services.push(sv);}
  sv.params.push({id:uid(),name:t,unit,method,ref,locked});
  if(law) p.lawRef=law;
  set(K_P,products); renderCatalog();
}

/* ===== TESTS ===== */
function addTestRow(t){
  const zone=document.getElementById('testsZone');
  const div=document.createElement('div'); div.className='card'; div.style.display='grid'; div.style.gridTemplateColumns='repeat(6,1fr)'; div.style.gap='6px';
  div.setAttribute('data-locked', t && t.locked ? '1' : '0');
  div.innerHTML=
    "<input class='input' placeholder='"+(LANG==='ar'?"المؤشر":"Paramètre")+"' data-k='name' "+((t&&t.locked)?'readonly':'')+" value='"+esc(t?t.name:'')+"'/>"+
    "<input class='input' placeholder='"+(LANG==='ar'?"الوحدة":"Unité")+"' data-k='unit' "+((t&&t.locked)?'readonly':'')+" value='"+esc(t?t.unit:'')+"'/>"+
    "<input class='input' placeholder='"+(LANG==='ar'?"الطريقة/المعيار":"Méthode/Norme")+"' data-k='method' "+((t&&t.locked)?'readonly':'')+" value='"+esc(t?t.method:'')+"'/>"+
    "<input class='input' placeholder='"+(LANG==='ar'?"الحد/المرجع":"Limite / Référence")+"' data-k='ref' "+((t&&t.locked)?'readonly':'')+" value='"+esc(t?t.ref:'')+"'/>"+
    "<input class='input' placeholder='"+(LANG==='ar'?"النتيجة":"Résultat")+"' data-k='result' value='"+esc(t?t.result:'')+"'/>"+
    "<div style='text-align:right'><button type='button' class='btn btn-danger' data-remove-test>✕</button></div>";
  zone.appendChild(div);
}
function addTest(){ addTestRow({name:'',unit:'',method:'',ref:'',result:'',locked:false}) }
function loadParams(){
  const prodId=document.getElementById('s_product').value; const service=document.getElementById('s_service').value;
  const p=products.find(x=>x.id===prodId); const sv=p?(p.services||[]).find(s=>s.name===service):null;
  if(!sv){alert(LANG==='ar'?'اختر المنتج والخدمة':'Choisir produit + service');return;}
  document.getElementById('testsZone').innerHTML=''; (sv.params||[]).forEach(addTestRow);
}

/* ===== CONFORMITÉ ===== */
function toNum(s){ if(s==null) return null; const m=String(s).replace(',','.').match(/-?\d+(?:\.\d+)?/); return m?parseFloat(m[0]):null }
function isOk(result,ref){
  if(result==null||result==='') return null; if(!ref||!String(ref).trim()) return null;
  const r=toNum(result); if(r==null) return null; const R=String(ref).replace(',','.').trim();
  let m=R.match(/(-?\d+(?:\.\d+)?)\s*[–-]\s*(-?\d+(?:\.\d+)?)/); if(m) return r>=parseFloat(m[1])&&r<=parseFloat(m[2]);
  m=R.match(/^(?:<=|≤)\s*(-?\d+(?:\.\d+)?)/); if(m) return r<=parseFloat(m[1]);
  m=R.match(/^(?:>=|≥)\s*(-?\d+(?:\.\d+)?)/); if(m) return r>=parseFloat(m[1]);
  m=R.match(/^<\s*(-?\d+(?:\.\d+)?)/); if(m) return r<parseFloat(m[1]);
  m=R.match(/^>\s*(-?\d+(?:\.\d+)?)/); if(m) return r>parseFloat(m[1]);
  m=R.match(/^(?:=)?\s*(-?\d+(?:\.\d+)?)/); if(m) return r===parseFloat(m[1]);
  return null;
}

/* ===== RAPPORT ===== */
function openReport(id){
  currentReportId=id;
  const s=samples.find(x=>x.id===id); if(!s) return; openM('mReport');
  const lgs=document.getElementById('labLogo'); lgs.src=settings.logo||''; lgs.style.display=settings.logo?'block':'none';
  document.getElementById('labName').textContent=settings.name||((LANG==='ar')?'مخبر مراقبة الجودة':'Laboratoire Contrôle Qualité');
  document.getElementById('labMeta').textContent=[settings.addr,settings.phone,settings.email].filter(Boolean).join(' • ');
  document.getElementById('labAuth').textContent=settings.auth?((LANG==='ar')?'ترخيص وزارة: ':'Autorisation ministérielle : ')+settings.auth:'';
  document.getElementById('repRef').textContent=s.sampleCode||''; document.getElementById('repDate').textContent=(LANG==='ar'?'صادر بتاريخ ':'Émis le ')+fmt(new Date());
  document.getElementById('repIdent').innerHTML=
    "<div><div class='muted'>"+(LANG==='ar'?'الزبون':'Client')+"</div><div><b>"+esc(s.clientName||'')+"</b></div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'المنتج / الخدمة':'Produit / Service')+"</div><div><b>"+esc(s.productType||'')+(s.serviceName?(' • '+esc(s.serviceName)):'')+"</b></div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'الاسم التجاري':'Nom commercial')+"</div><div>"+esc(s.brandName||'—')+"</div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'الكمية':'Poids / Qté')+"</div><div>"+esc(s.quantity||'—')+"</div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'الحرارة':'Température')+"</div><div>"+esc(s.temperature||'—')+"</div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'الآخذ':'Préleveur')+"</div><div>"+esc(s.samplerType||'—')+"</div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'مكان السحب':'Lieu de prélèvement')+"</div><div>"+esc(s.samplingLocation||'—')+"</div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'الاستقبال / الأجل':'Réception / Échéance')+"</div><div>"+fmtDT(s.receivedDate,s.receivedTime)+" • "+fmt(s.dueDate)+"</div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'الرمز الداخلي':'Code interne')+"</div><div>"+esc(s.internalCode||'—')+"</div></div>"+
    "<div><div class='muted'>"+(LANG==='ar'?'التصنيع / الانتهاء':'Fabrication / Expiration')+"</div><div>"+fmt(s.mfgDate)+" • "+fmt(s.expDate)+"</div></div>";

  const res=document.getElementById('repResults');
  res.innerHTML='<div style="font-weight:600;margin-bottom:6px">'+(LANG==='ar'?'النتائج':'Résultats')+'</div><table style="width:100%"><thead><tr>'+
    '<th>'+(LANG==='ar'?'المؤشر':'Paramètre')+'</th>'+
    '<th>'+(LANG==='ar'?'الطريقة/المعيار':'Méthode/Norme')+'</th>'+
    '<th>'+(LANG==='ar'?'النتيجة':'Résultat')+'</th>'+
    '<th>'+(LANG==='ar'?'الوحدة':'Unité')+'</th>'+
    '<th>'+(LANG==='ar'?'الحد':'Limite')+'</th>'+
    '<th>'+(LANG==='ar'?'المطابقة':'Conformité')+'</th>'+
    '</tr></thead><tbody id="rBody"></tbody></table>';

  const tb=document.getElementById('rBody'); let ok=0,nc=0,total=0;
  (s.tests||[]).forEach(t=>{
    const conf=isOk(t.result,t.ref);
    const txt=conf==null?'—':(conf?(LANG==='ar'?'مطابق':'Conforme'):(LANG==='ar'?'غير مطابق':'Non conforme'));
    const tr=document.createElement('tr'); if(conf===false) tr.className='ncbg';
    tr.innerHTML=
      `<td>${esc(t.name||'')}</td><td>${esc(t.method||'')}</td><td>${esc(t.result||'')}</td>
       <td>${esc(t.unit||'')}</td><td>${esc(t.ref||'')}</td><td>${esc(txt)}${conf===false?' ⚠︎':''}</td>`;
    tb.appendChild(tr); total++; if(conf===true) ok++; else if(conf===false) nc++;
  });

  const repLaw=document.getElementById('repLawRef'); repLaw.style.display='none';
  const prod=products.find(pp=>pp.id===s.productId);
  if(prod && prod.lawRef){ repLaw.style.display='block'; repLaw.innerHTML='<div style="font-weight:600;margin-bottom:6px">'+(LANG==='ar'?'المرجع القانوني':'Référence législative')+'</div><div>'+esc(prod.lawRef)+'</div>'; }

  const concl=document.getElementById('repConclusion'); const isValidated=!!s.validated;
  let textAuto=(LANG==='ar'?'لم يتم تقييم المطابقة.':'Conformité non évaluée.');
  if(total>0 && (ok+nc)>0){
    textAuto=(nc>0)?(LANG==='ar'?'❌ عينة غير مطابقة للمتطلبات.':'❌ Échantillon NON CONFORME aux exigences.')
                   :(LANG==='ar'?'✅ عينة مطابقة للمتطلبات.':'✅ Échantillon CONFORME aux exigences.');
  }
  const textFinal=(s.conclusionManual!=null)?s.conclusionManual:textAuto;
  const cls=(s.conclusionManual!=null?((/NON CONFORME|غير مطابق/.test(s.conclusionManual))?'ncbg':'okbg'):(nc>0?'ncbg':'okbg'));
  concl.innerHTML =
    "<div style='font-weight:600;margin-bottom:6px'>"+(LANG==='ar'?'الخلاصة':'Conclusion')+"</div>"+
    "<div id='conclBox' class='card "+cls+"' style='padding:8px'>"+
      "<div id='conclText'>"+esc(textFinal)+"</div>"+
      "<div class='muted' style='margin-top:4px'>"+(LANG==='ar'?'قاعدة آلية: مطابق إذا كانت كل المعايير ضمن الحدود.':'Règle auto : conforme si tous les paramètres évaluables sont dans leur tolérance.')+"</div>"+
      "<div class='no-print' id='conclActions' style='margin-top:6px;"+(isValidated?'display:none':'')+"'>"+
        "<button class='btn' id='btnEditConcl'>"+(LANG==='ar'?'تعديل الخلاصة':'Modifier la conclusion')+"</button> "+
        "<button class='btn' id='btnResetConcl'>"+(LANG==='ar'?'الرجوع إلى التلقائي':'Revenir à l’auto')+"</button>"+
      </div>"+
    "</div>";

  document.getElementById('repNotes').style.display=s.notes?'block':'none';
  if(s.notes){ document.getElementById('repNotes').innerHTML="<div style='font-weight:600;margin-bottom:6px'>"+(LANG==='ar'?'ملاحظات':'Observations')+"</div><div>"+esc(s.notes)+"</div>"; }

  document.getElementById('vBy').textContent=s.validatorName||'—';
  document.getElementById('vRole').textContent=s.validatorRole||'—';
  document.getElementById('vDate').textContent=s.validatorDate?fmt(s.validatorDate):'—';

  document.getElementById('btnValidate').style.display = isValidated?'none':'inline-block';
  document.getElementById('btnUnvalidate').style.display = isValidated?'inline-block':'none';
}
function editConclusion(){
  const s=samples.find(x=>x.id===currentReportId); if(!s||s.validated) return;
  const box=document.getElementById('conclBox'); const txt=document.getElementById('conclText').textContent;
  box.innerHTML = "<textarea id='conclEdit' class='input' rows='3'>"+txt+"</textarea><div class='no-print' style='text-align:right;margin-top:6px'><button class='btn' id='btnSaveConcl'>"+(LANG==='ar'?'حفظ':'Enregistrer')+"</button></div>";
}
function saveConclusion(){ const s=samples.find(x=>x.id===currentReportId); if(!s) return; const v=document.getElementById('conclEdit').value.trim(); s.conclusionManual = v||null; set(K_S,samples); openReport(currentReportId) }
function resetConclusion(){ const s=samples.find(x=>x.id===currentReportId); if(!s) return; s.conclusionManual=null; set(K_S,samples); openReport(currentReportId) }
function validateReport(){ const s=samples.find(x=>x.id===currentReportId); if(!s) return; s.validated=true; s.validatorDate=new Date().toISOString().slice(0,10); set(K_S,samples); openReport(currentReportId) }
function unvalidateReport(){ const s=samples.find(x=>x.id===currentReportId); if(!s) return; if(!confirm(LANG==='ar'?'إلغاء الاعتماد؟':'Annuler la validation ?')) return; s.validated=false; set(K_S,samples); openReport(currentReportId) }

/* ===== LAB SETTINGS ===== */
function onLogoSelect(e){
  const f=e.target.files[0]; if(!f) return;
  const r=new FileReader(); r.onload=function(){
    settings.logo=r.result; set(K_T,settings);
    document.getElementById('st_logoPrev').src=r.result; document.getElementById('st_logoPrev').style.display='block';
    refreshHeader();
  }; r.readAsDataURL(f);
}
function saveSettings(){
  settings.name=st_name.value.trim(); settings.addr=st_addr.value.trim();
  settings.phone=st_phone.value.trim(); settings.email=st_email.value.trim(); settings.auth=st_auth.value.trim();
  set(K_T,settings); refreshHeader(); closeM('mSettings');
}

/* ===== EXPORT / BACKUP / RESTORE ===== */
function exportCSV(){
  const list=filtered();
  const head=['id','code','code_interne','client','produit','service','preleveur','reception','echeance','mfg','exp','priorite','tests','notes','validated','conclusion'];
  const rows=[head.join(',')];
  list.forEach(s=>{
    const tests=(s.tests||[]).map(t=>(t.name||'')+':'+(t.result||'')+' '+(t.unit||'')+' ['+(t.ref||'')+']').join(' | ');
    const arr=[s.id,s.sampleCode,s.internalCode,s.clientName,s.productType||'',s.serviceName||'',s.samplerType||'',(s.receivedDate||'')+' '+(s.receivedTime||''),s.dueDate||'',s.mfgDate||'',s.expDate||'',s.priority||'',tests,(s.notes||'').replaceAll('\n',' '),String(!!s.validated),s.conclusionManual||''];
    rows.push(arr.map(v=>'"'+String(v||'').replaceAll('"','""')+'"').join(','));
  });
  const blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='qc_lab_v30_full_plus_'+new Date().toISOString().slice(0,10)+'.csv'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),500);
}
function backupAll(){
  const payload={version:'3.0FULL+',exportedAt:new Date().toISOString(),settings,clients,samples,products,seq,lang:LANG};
  const def='qc_lab_backup_'+new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')+'.qclab.json';
  const name=prompt((LANG==='ar'?'اسم ملف الحفظ:':'Nom du fichier de sauvegarde :'),def)||def;
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8;'});
  const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(url),500);
}
function doRestore(){
  const f=restoreFile.files[0]; if(!f){restoreMsg.textContent=(LANG==='ar'?'لا يوجد ملف':'Aucun fichier');return;}
  const mode=restoreMode.value;
  const r=new FileReader();
  r.onload=function(){
    try{
      const data=JSON.parse(r.result);
      if(mode==='replace'){
        settings=data.settings||settings; clients=data.clients||[]; samples=data.samples||[]; products=data.products||products; seq=data.seq||seq; LANG=data.lang||LANG;
      } else {
        settings=Object.assign({},settings,data.settings||{}); clients=(clients||[]).concat(data.clients||[]);
        samples=(samples||[]).concat(data.samples||[]); products=(products||[]).concat(data.products||[]); seq=Object.assign({},seq,data.seq||{});
        LANG=data.lang||LANG;
      }
      set(K_T,settings); set(K_C,clients); set(K_S,samples); set(K_P,products); set(K_SEQ,seq); localStorage.setItem('qcl_lang',LANG);
      refreshHeader(); applyLang(); render(); restoreMsg.textContent=(LANG==='ar'?'تم الاسترجاع':'Restauration OK'); setTimeout(()=>closeM('mRestore'),600);
    }catch(e){ restoreMsg.textContent=(LANG==='ar'?'ملف غير صالح':'Fichier invalide'); }
  };
  r.readAsText(f,'utf-8');
}

/* ===== EXPORT WORD ===== */
function exportWord(){
  const node = document.getElementById('printable'); if(!node){ alert((LANG==='ar'?'لا يوجد تقرير للتصدير':'Aucun rapport à exporter')); return; }
  const dir = (LANG==='ar')?'rtl':'ltr';
  const pre = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>Rapport</title><style>body{font-family:Arial,Helvetica,sans-serif}table{border-collapse:collapse;width:100%}th,td{border:1px solid #000;padding:5px;font-size:11pt}</style></head><body dir="'+dir+'">';
  const post = '</body></html>';
  const html = pre + node.innerHTML + post;
  const url='data:application/vnd.ms-word;charset=utf-8,'+encodeURIComponent(html);
  const a = document.createElement('a'); a.href=url; a.download='rapport.doc'; document.body.appendChild(a); a.click(); a.remove();
}

/* ===== MODALES & FORM ===== */
function openM(id){ document.getElementById(id).style.display='flex' }
function closeM(id){ document.getElementById(id).style.display='none' }
function openSample(newItem){
  openM('mSample');
  const s=newItem?{
    id:uid(),sampleCode:'',internalCode:'',clientId:'',clientName:'',clientAddress:'',
    productId:'',productType:'',serviceName:'',brandName:'',quantity:'',temperature:'',
    samplingLocation:'',receivedDate:tISO(),receivedTime:'',dueDate:'',mfgDate:'',expDate:'',
    priority:'Normale',samplerType:(LANG==='ar'?'الزبون':'Client'),notes:'',tests:[],validated:false,conclusionManual:null,
    validatorName:'',validatorRole:'',validatorDate:''
  }:samples.find(x=>x.id===editingId);

  document.getElementById('mSampleTitle').textContent = editingId?(LANG==='ar'?'تعديل العينة':"Modifier l'échantillon"):(LANG==='ar'?'عينة جديدة':'Nouvel échantillon');
  populateClients(s.clientId); populateProducts(s.productId);
  s_code.value=s.sampleCode||''; s_int.value=s.internalCode||'';
  s_client.value=s.clientId||''; s_clientAddr.value=s.clientAddress||'';
  s_product.value=s.productId||''; s_service.value=s.serviceName||'';
  s_brand.value=s.brandName||''; s_qty.value=s.quantity||''; s_temp.value=s.temperature||'';
  s_loc.value=s.samplingLocation||''; s_sampler.value=s.samplerType||((LANG==='ar')?'الزبون':'Client');
  s_recv.value=s.receivedDate||tISO(); s_recvTime.value=s.receivedTime||''; s_due.value=s.dueDate||'';
  s_mfg.value=s.mfgDate||''; s_exp.value=s.expDate||'';
  s_priority.value=s.priority||'Normale'; s_notes.value=s.notes||'';
  const zone=document.getElementById('testsZone'); zone.innerHTML='';
  (s.tests||[]).forEach(addTestRow);
  window.__tempSample=s;
}
function editSample(id){ editingId=id; openSample(false); }
function delSample(id){ if(!confirm(LANG==='ar'?'حذف؟':'Supprimer ?')) return; samples=samples.filter(x=>x.id!==id); set(K_S,samples); render(); }

/* ===== BINDINGS ===== */
document.addEventListener('click',function(e){
  const c=e.target.closest('[data-close]'); if(c){ closeM(c.getAttribute('data-close').slice(1)); return; }

  const r=e.target.closest('button[data-action="report"]'); if(r){ openReport(r.getAttribute('data-id')); return; }
  const ed=e.target.closest('button[data-action="edit"]'); if(ed){ editSample(ed.getAttribute('data-id')); return; }
  const de=e.target.closest('button[data-action="del"]'); if(de){ delSample(de.getAttribute('data-id')); return; }

  if(e.target.matches('[data-remove-test]')){ e.target.closest('.card').remove(); return; }

  const ce=e.target.id==='btnEditConcl'; if(ce){ editConclusion(); return; }
  const cr=e.target.id==='btnResetConcl'; if(cr){ resetConclusion(); return; }
  const cs=e.target.id==='btnSaveConcl'; if(cs){ saveConclusion(); return; }
});

document.addEventListener('DOMContentLoaded',()=>{
  initState(); applyLang(); refreshHeader(); render(); renderCatalog();

  /* top */
  document.getElementById('btnLang').addEventListener('click',()=>{ LANG=(LANG==='fr')?'ar':'fr'; localStorage.setItem('qcl_lang',LANG); applyLang(); render(); });
  document.getElementById('btnNew').addEventListener('click',()=>{ editingId=null; openSample(true); });
  document.getElementById('btnSettings').addEventListener('click',()=> openM('mSettings'));
  document.getElementById('btnClients').addEventListener('click',()=>{ renderClients(); openM('mClients'); });
  document.getElementById('btnCatalog').addEventListener('click',()=>{ renderCatalog(); openM('mCatalog'); });
  document.getElementById('btnRestore').addEventListener('click',()=> openM('mRestore'));
  document.getElementById('btnExport').addEventListener('click',exportCSV);
  document.getElementById('btnBackup').addEventListener('click',backupAll);

  /* modales */
  document.querySelectorAll('.modal-bg').forEach(m=>m.addEventListener('click',e=>{ if(e.target===m) m.style.display='none'; }));

  /* échantillon */
  document.getElementById('btnAddTest').addEventListener('click',addTest);
  document.getElementById('btnLoadParams').addEventListener('click',loadParams);
  document.getElementById('btnNewClient').addEventListener('click',()=>{ renderClients(); openM('mClients'); });

  document.getElementById('s_client').addEventListener('change',function(){
    const c=clients.find(x=>x.id===this.value); document.getElementById('s_clientAddr').value=c?(c.addr||''):'';
  });

  document.getElementById('sampleForm').addEventListener('submit',function(e){
    e.preventDefault();
    const s=window.__tempSample||{};
    const cid=s_client.value; const c=clients.find(x=>x.id===cid);
    const pid=s_product.value; const p=products.find(x=>x.id===pid);
    const tests=[].slice.call(document.querySelectorAll('#testsZone .card')).map(row=>{
      const obj={}; [].slice.call(row.querySelectorAll('[data-k]')).forEach(inp=>{obj[inp.getAttribute('data-k')]=inp.value});
      obj.locked = row.getAttribute('data-locked')==='1'; return obj;
    });
    const v={
      sampleCode:s_code.value.trim(), internalCode:s_int.value.trim(),
      clientId:cid, clientName:c?c.name:'', clientAddress:s_clientAddr.value.trim(),
      productId:pid, productType:p?p.name:'', serviceName:s_service.value,
      brandName:s_brand.value.trim(), quantity:s_qty.value.trim(), temperature:s_temp.value.trim(),
      samplingLocation:s_loc.value.trim(), samplerType:s_sampler.value,
      receivedDate:s_recv.value||tISO(), receivedTime:s_recvTime.value||'',
      dueDate:s_due.value||'', mfgDate:s_mfg.value||'', expDate:s_exp.value||'',
      priority:s_priority.value, notes:s_notes.value, tests:tests
    };
    if(editingId){ samples=samples.map(x=>x.id===editingId?Object.assign({},x,v):x); }
    else { const id=s.id||uid(); samples=[Object.assign({id:id,validated:false,conclusionManual:null,validatorName:'',validatorRole:'',validatorDate:''},v)].concat(samples); }
    const sObj = editingId ? samples.find(x=>x.id===editingId) : samples[0];
    if(sObj && !sObj.sampleCode){ sObj.sampleCode = nextCode(sObj.serviceName, sObj.receivedDate); }
    if(sObj && !sObj.internalCode){ sObj.internalCode = nextInternalCode(sObj.receivedDate); }
    set(K_S,samples); render(); closeM('mSample');
  });

  /* rapport */
  document.getElementById('btnPrint').addEventListener('click',()=>window.print());
  document.getElementById('btnWord').addEventListener('click',exportWord);
  document.getElementById('btnValidate').addEventListener('click',validateReport);
  document.getElementById('btnUnvalidate').addEventListener('click',unvalidateReport);
  document.getElementById('btnValidator').addEventListener('click',()=>openM('mValidator'));

  /* validateur */
  document.getElementById('btnSaveValidator').addEventListener('click',function(){
    const s=samples.find(x=>x.id===currentReportId); if(!s) return;
    s.validatorName=val_name.value.trim(); s.validatorRole=val_role.value.trim();
    set(K_S,samples); closeM('mValidator'); openReport(currentReportId);
  });

  /* clients */
  document.getElementById('btnSaveClient').addEventListener('click',saveClient);
  document.getElementById('btnCancelClientEdit').addEventListener('click',cancelClientEdit);
  document.getElementById('clientsList').addEventListener('click',function(e){
    const ed=e.target.getAttribute('data-client-edit'); if(ed){ editClient(ed); return; }
    const dl=e.target.getAttribute('data-client-del'); if(dl){ delClient(dl); return; }
  });

  /* settings */
  document.getElementById('st_logo').addEventListener('change',onLogoSelect);
  document.getElementById('btnSaveSettings').addEventListener('click',saveSettings);

  /* restore */
  document.getElementById('btnDoRestore').addEventListener('click',doRestore);

  /* filtres */
  document.getElementById('q').addEventListener('input',render);
  document.getElementById('fService').addEventListener('change',render);
  document.getElementById('fPriority').addEventListener('change',render);
});
</script>
</body>
</html>
