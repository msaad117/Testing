// chrome.browserAction.onClicked.addListener(function(activeTab){
//     // var newURL = "http://stackoverflow.com/";
//     chrome.tabs.create({ 'url': "chrome://newtab" });
//   });

let p=document.querySelectorAll('table tr');
for (let i=0;i<p.length;i++){
  if(p[i].querySelectorAll('td.b-table__amount > span')[0]!=undefined){
    console.log("Date is",p[i].querySelectorAll('td.b-table__date')[0].innerText)
    console.log("Amount is",p[i].querySelectorAll('td.b-table__amount > span')[0].innerHTML)
    console.log("Fee is",p[i].querySelectorAll('td.b-table__fee > span')[0].innerHTML)
    console.log("Description is",p[i].querySelectorAll('td.b-table__desc > span')[0].innerText)
    
  }
}
// p.map( p=>{
//   console.log("the data is",p.querySelectorAll('td'))
// } )
console.log("in chorme",p.length)
console.log("in ",p)

