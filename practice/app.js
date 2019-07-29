db.collection('friends').get().then((snapshot) => {
        console.log(snapshot.docs);
})
