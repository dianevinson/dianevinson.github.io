const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    //get email and date
    const email = signinForm.email.value.toUpperCase();
    const datey = signinForm.date.value;

    var docRef = db.collection("users").doc(email);
    docRef.get().then(function (doc) {
        if (doc.exists) {
            //doc exists. Increases meetingsAttended 
            var meetings = doc.data().meetingsAttended;
            db.collection("users").doc(email).update({
                "meetingsAttended": meetings + 1
            })
        } else {
            // doc.data() will be undefined in this case, sets meetingsAttended to 1
            var meetings = 0;
            db.collection("users").doc(email).set({
                meetingsAttended : 1})
        }
        
        //merges new field name & date with updated number of meetings attended
        var fieldName = "Date attended " + meetings;
        db.collection('users').doc(email).set({
            [fieldName]: datey
        }, { merge: true });
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
});



