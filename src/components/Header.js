import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice"
import { useEffect } from "react";
import { LOGO } from "../utils/constraint";
const Header = ()=>{


  const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/");
          }).catch((error) => {
            navigate("/error");
          });
        }
          
    useEffect( ()=>{
 
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, email, displayName} = user;
            dispatch(addUser({uid: uid,email: email,displayName: displayName}));
             navigate("/browse");
            // ...
          } else {
            // User is signed out
            // ...
            dispatch(removeUser());
             navigate("/");
          }
        });
        

        return () => unsubscribe();


    }, [])
  
    
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">

        <img className="w-48" src = {LOGO}
        alt="logo" />


<div className="flex p-2">
    <img className="w-12 h-12" alt="usericon" src="https://occ-0-3752-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>

    <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
</div>

        </div>
        
    )
}

export default Header