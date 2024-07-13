<script type="module">
  // Import the functions you need from the SDKs you need//
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional//
  const firebaseConfig = {
    apiKey: "AIzaSyDH7J5FmhECO8w_wAH1ZPmymCAR-BA8PHg",
    authDomain: "gym-management-78ced.firebaseapp.com",
    projectId: "gym-management-78ced",
    storageBucket: "gym-management-78ced.appspot.com",
    messagingSenderId: "36340171937",
    appId: "1:36340171937:web:7b3a3af99cdc60b5addce0",
    measurementId: "G-31NZD0B5WH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>