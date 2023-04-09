const addTitle = document.getElementById('addTitle');
const addText = document.getElementById('addText');
const addNoteButton = document.getElementById('addNote');
const notesDiv = document.getElementById('notes');

showNotes(); // will call it by default for showing notes


function addNotes(){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        notes = [];
    }else{
        notes = JSON.parse(notes);
    }

    if(addText.value == ''){
        alert('Add your note');  // alert if user hasn't added the note
        return;
    }
    
    const noteObj = {             //fetching values from client in JSON
        title: addTitle.value,
        text: addText.value,
    }
    addTitle.value = '';             //redeclaring all of them blank
    addText.value = '';
    notes.push(noteObj);             //pushing the input to the array
    localStorage.setItem('notes', JSON.stringify(notes));  // storing in local storage for fetching notes
    showNotes();
}

function showNotes(){
    let notesHTML = '';
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }

    //printing all the notes with the delete button
    for(let i=0; i<notes.length; i++){
        notesHTML += `<div class="note">
                    <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
                    <span class="title">${notes[i].title === "" ? 'Note' : notes[i].title}</span>
                    <div class="text">${notes[i].text}</div>
                </div>
        `
    }
    notesDiv.innerHTML = notesHTML;  // printing all the notes
}

function deleteNote(ind){
    let notes = localStorage.getItem('notes');
    if(notes === null){
        return;
    }else{
        notes = JSON.parse(notes);
    }
    notes.splice(ind, 1); // for deleting that particular note
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
}
addNoteButton.addEventListener('click', addNotes);  //creating event for adding the note