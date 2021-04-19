let addbtn = document.getElementById('addBtn');
let notesElm = document.getElementById("notes");

    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;

addbtn.addEventListener("click",function(e){
    
    let notes = localStorage.getItem("notes");
    let addtxt = document.getElementById('addTxt')
    if(notes == null){
        notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    
    }
    
   notesobj.push(addTxt.value);
   localStorage.setItem('notes',JSON.stringify(notesobj));
   addtxt.value = "";
   console.log(notesobj);
   let html = "";
   notesobj.forEach(function(element, index) {
       html = html + `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5>
           <p class="card-text"> ${element}</p>
           <button id = "${index}" onclick = "deleteelm(this.id)" class="btn btn-primary">Delete Note</button>
       </div>
   </div>`;
   });
   if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } 
  else{
    notesElm.innerHTML = "Nothing to show! Use Add a Note) section above to add notes.";
  }
});
function deleteelm(index){
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    notesobj.splice(index, 1);

   localStorage.setItem('notes',JSON.stringify(notesobj));
   
   let html = "";
   notesobj.forEach(function(element, index) {
       html = html + `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5>
           <p class="card-text"> ${element}</p>
           <button id = "${index}" onclick = "deleteelm(this.id)" class="btn btn-primary">Delete Note</button>
       </div>
   </div>`;
   });
   if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } 
  else{
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
    

}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})
