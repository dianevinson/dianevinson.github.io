const friendList = document.querySelector("#friend-list")
db.collection('friends').get().then((snapshot) => {
        snapshot.docs.forEach( doc => {
                console.log(doc.data())
        })
})
