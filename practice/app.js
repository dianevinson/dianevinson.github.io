var firebaseConfig = {
        apiKey: "AIzaSyAv9PBlsB68imhqyvec2Cg8nR0HPytrTy0",
        authDomain: "practice-proj-88203.firebaseapp.com",
        databaseURL: "https://practice-proj-88203.firebaseio.com",
        projectId: "practice-proj-88203",
        storageBucket: "",
        messagingSenderId: "102580477557",
        appId: "1:102580477557:web:cb01afadbdb8d465"
      };
firebase.initializeApp(config);
db.collection("friends").add({
    name: "Jordan",
    relationship: "friend",
    height: 6.2
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
db.collection("friends").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
