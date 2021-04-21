var firebaseConfig = {
    apiKey: "AIzaSyC0HWT4agxXoIIp-W6fgIFgC_TGTxnC48o",
    authDomain: "kwitter-d5926.firebaseapp.com",
    databaseURL: "https://kwitter-d5926-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5926",
    storageBucket: "kwitter-d5926.appspot.com",
    messagingSenderId: "617807387216",
    appId: "1:617807387216:web:54afb4b97d1157b42dcf55"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("RoomName");

function SEND(){
    msg = document.getElementById("msg").value;
    console.log(msg);
    console.log(room_name);
    firebase.database().ref(room_name).push({
      name: user_name,
      message:msg,
      like:0
    });

    document.getElementById("msg").innerHTML = "";
}

function Logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
}