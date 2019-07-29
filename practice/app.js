const friendList = document.querySelector("#friend-list");
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

db.collection('friends').get().then((snapshot) => {
        snapshot.docs.forEach( doc => {
                renderFriend(doc)
        })
})
