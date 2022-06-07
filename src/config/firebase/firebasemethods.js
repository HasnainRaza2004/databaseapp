import { getAuth,onAuthStateChanged ,signOut ,signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig"
import { getDatabase , ref, set} from "firebase/database";



const auth = getAuth(app);
const database = getDatabase(app);



let signUpuser  = (obj) => {


    return createUserWithEmailAndPassword(auth, obj.email, obj.password)
  
}
let loginUser  = (obj) => {
   return signInWithEmailAndPassword(auth, obj.email, obj.password)
    
}
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


// =====================Database Methods==============================

let sendData =(obj,nodeName,id)=>{
 
    let reference = ref(database ,` ${nodeName}  / ${id ? id : ""}`);
    
    return set(reference,obj);
}



export {signUpuser,loginUser,sendData}