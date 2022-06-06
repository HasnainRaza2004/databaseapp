import { getAuth,onAuthStateChanged ,signOut ,signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig"


const auth = getAuth(app);


let signUpuser  = (obj) => {


    createUserWithEmailAndPassword(auth, obj.email, obj.password)
  
}
// let loginUser  = () => {
//     signInWithEmailAndPassword(auth, obj.email, obj.password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
// }
// let logoutUser  = () => {
//     const auth = getAuth();
//     signOut(auth).then(() => {
//       // Sign-out successful.
//     }).catch((error) => {
//       // An error happened.
//     });
// }
// let checkauthUser  = () => {
//     onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is signed in, see docs for a list of available properties
//           // https://firebase.google.com/docs/reference/js/firebase.User
//           const uid = user.uid;
//           // ...
//         } else {
//           // User is signed out
//           // ...
//         }
//       });
// }

export {signUpuser}