var count=document.getElementById("count")
var total=document.getElementById("total")
var cont=document.querySelector(".container")
var movieselector=document.getElementById("movie")
var seatselector=document.querySelectorAll(".row .seat:not(.occupied)")  
var ticketprice=movieselector.value;
finalcalltoconsole();
function moviedata(indexone,valueone){
localStorage.setItem("indexnumber",indexone)
localStorage.setItem("valuonegeneral",valueone)
}
function updateclicklist(){
var selectedone=document.querySelectorAll( '.row .seat.selected');
var  selectedseatsindex=[...selectedone].map(function(seater){ 
    
    return [...seatselector].indexOf(seater);
});
console.log(selectedseatsindex);
localStorage.setItem("pastone",JSON.stringify(selectedseatsindex))

valueofselectedone=selectedone.length;
count.innerText=valueofselectedone;
total.innerText=valueofselectedone* ticketprice;
}
movieselector.addEventListener("change",updatingone);
function updatingone(e){
    moviedata(e.target.selectedIndex,e.target.value);
   ticketprice=e.target.value;
   updateclicklist();
}
function finalcalltoconsole(){
    var selectedthings=JSON.parse(localStorage.getItem("pastone"));
    console.log(selectedthings);
    if(selectedone!==null && selectedone.length>0){
        seater.forEach (function (seater,index){
               if(selectedone.indexof(index)>-1){
                   seater.classListadd('selected')
               }
        })
        }
    }
cont.addEventListener("click",clickingone);
function clickingone(e){
    if((e.target.classList.contains("seat")) &&
    !(e.target.classList.contains("occupied"))
    ){
    e.target.classList.toggle("selected")
        updateclicklist()
    }
    
}