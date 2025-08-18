let samples=[];
function render(){
  const tbody=document.querySelector("#samples tbody");
  tbody.innerHTML="";
  samples.forEach((s,i)=>{
    let tr=document.createElement("tr");
    tr.innerHTML=`<td>${s.code}</td><td>${s.client}</td><td>${s.product}</td><td>${s.service}</td>
    <td contenteditable="true">${s.conclusion}</td>`;
    tbody.appendChild(tr);
  });
}
function newSample(){
  let code="PH-"+String(samples.length+1).padStart(3,'0')+"/"+new Date().getFullYear();
  samples.push({code:code,client:"Client",product:"Produit",service:"Physico-chimie",conclusion:"Conforme"});
  render();
}
function exportPDF(){
  let w=window.open("","_blank");
  w.document.write("<h1>Rapport PDF</h1><pre>"+JSON.stringify(samples,null,2)+"</pre>");
  w.print();
}
function exportWord(){
  let content="Rapport Word\n\n"+JSON.stringify(samples,null,2);
  let blob=new Blob([content],{type:"application/msword"});
  let a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="rapport.doc";
  a.click();
}
function backup(){
  let blob=new Blob([JSON.stringify(samples)],{type:"application/json"});
  let a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="backup.json";
  a.click();
}
function restore(e){
  let file=e.target.files[0];
  let reader=new FileReader();
  reader.onload=function(){
    samples=JSON.parse(reader.result);render();
  };
  reader.readAsText(file);
}