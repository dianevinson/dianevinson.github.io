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
