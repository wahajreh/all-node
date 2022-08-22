// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, onValue } = require("firebase/database")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


try {

    // Initialize Firebase



    for (var index = 0; index < 50; index++) {
        writeUserData(index, 'ali' + index, 'abc' + index + '@abc.com', 'jhjhgjhjh' + index)


    }
    read(1)

} catch (ex) {
    console.log('error', ex)
}

function read(id) {
    const firebaseConfig = {
        apiKey: "AIzaSyA8UAiYv8vNdxzEWNYej9u29iPbx5yPROk",
        authDomain: "slick-2f9eb.firebaseapp.com",
        databaseURL: "https://slick-2f9eb-default-rtdb.firebaseio.com",
        projectId: "slick-2f9eb",
        storageBucket: "slick-2f9eb.appspot.com",
        messagingSenderId: "831244416037",
        appId: "1:831244416037:web:a77897c0d69665eeb5fbcc",
        measurementId: "G-2FPMSF9F63"
    };
    const app = initializeApp(firebaseConfig);
    // console.log(app)
    const db = getDatabase(app);
    const starCountRef = ref(db, 'table/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
    });
}

function writeUserData(userId, name, email, imageUrl) {
    const firebaseConfig = {
        apiKey: "AIzaSyA8UAiYv8vNdxzEWNYej9u29iPbx5yPROk",
        authDomain: "slick-2f9eb.firebaseapp.com",
        databaseURL: "https://slick-2f9eb-default-rtdb.firebaseio.com",
        projectId: "slick-2f9eb",
        storageBucket: "slick-2f9eb.appspot.com",
        messagingSenderId: "831244416037",
        appId: "1:831244416037:web:a77897c0d69665eeb5fbcc",
        measurementId: "G-2FPMSF9F63"
    };
    const app = initializeApp(firebaseConfig);
    // console.log(app)
    const database = getDatabase(app);
    // console.log(database)
    set(ref(database, 'table/0/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}