var firebaseConfig = {
        apiKey: "AIzaSyAv9PBlsB68imhqyvec2Cg8nR0HPytrTy0",
        authDomain: "practice-proj-88203.firebaseapp.com",
        databaseURL: "https://practice-proj-88203.firebaseio.com",
        projectId: "practice-proj-88203",
        storageBucket: "",
        messagingSenderId: "102580477557",
        appId: "1:102580477557:web:cb01afadbdb8d465"
      };

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAv9PBlsB68imhqyvec2Cg8nR0HPytrTy0',
  authDomain: 'practice-proj-88203.firebaseapp.com',
  projectId: 'practice-proj-88203'
});

var db = firebase.firestore();

db.collection('friends').get().then((snapshot) => {
        console.log(snapshot.docs);
})
