const friendList = document.querySelector("#friend-list");
const form = document.querySelector("#add-friend-form");
//create element and render cafe
function renderFriend(doc) {
        let li = document.createElement('li');
        let name = document.createElement('span');
        let relationship = document.createElement('span');
        let cross = document.createElement('div');
        
        li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        relationship.textContent = doc.data().relationship
        cross.textContent = ' x';
        
        li.appendChild(name);
        li.appendChild(relationship);
        li.appendChild(cross);
        
        friendList.appendChild(li);
        
        //deleting data
        cross.addEventListener('click', (ev) => {
                ev.stopPropagation();
                let id = ev.target.parentElement.getAttribute('data-id');
                db.collection('friends').doc(id).delete();
        })
}
//saving data 
form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        db.collection('friends').add({
                name: form.name.value,
                relationship: form.relationship.value
        });
        form.name.value = '';
        form.relationship.value = '';
})

//real time listener 
db.collection('friends').orderBy('name').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
                if (change.type == 'added') {
                        renderFriend(change.doc)
                } else if (change.type == 'removed') {
                        let li = friendList.querySelector('[data-id=' + change.doc.id + ']');
                        friendList.removeChild(li);
                }
        })
})
