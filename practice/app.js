const friendList = document.querySelector("#friend-list");
const form = document.querySelector("#friend-add-form");
//create element and render cafe
function renderFriend(doc) {
        let li = document.createElement('li');
        let name = document.createElement('span');
        let relationship = document.createElement('span');
        
        li.setAttribute('data-id', doc.id);
        name.textContent = doc.data().name;
        relationship.textContent = doc.data().relationship
        
        li.appendChild(name);
        li.appendChild(relationship);
        
        friendList.appendChild(li);
}
//getting data
db.collection('friends').get().then((snapshot) => {
        snapshot.docs.forEach( doc => {
                renderFriend(doc)
        })
})
//saving data 
form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        db.collection('friends').add({
                name: form.name.value,
                relationship: form.relationship.value
        });
})
