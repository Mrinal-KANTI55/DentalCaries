import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthencation from '../../Pages/FireBase/FireBase.initial'
initializeAuthencation();
const googleProvider = new GoogleAuthProvider();
const UseFier = () => {
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth = getAuth();

    const googleSignUp = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
            // .then(result => {
            //     const { displayName, email, photoURL } = result.user;
            //     const userInfo = {
            //         name: displayName,
            //         mail: email,
            //         image: photoURL
            //     };
            //     setUser(userInfo);
            // })
            // .catch(error => { console.log(error.massage); })
            // .finally(()=>setIsLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            console.log('yes i am here');
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);
    const signOutButton = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { setUser({}) })
            .catch(error => { })
            .finally(()=>setIsLoading(false));

    }
    const userSignIn = (emails, passwords) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, emails, passwords);
            // .then(result => {
            //     const { displayName, email, photoURL } = result.user;
            //     const UserInfos = {
            //         name: displayName,
            //         mail: email,
            //         pic: photoURL
            //     };
            //     setUser(UserInfos);
            // })
            // .catch(error => console.log(error.massage))
            // .finally(()=>setIsLoading(false));

    }
    const userCreateAnAccount = (emails, passwords) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, emails, passwords)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const UserInfo = {
                    name: displayName,
                    mail: email,
                    pic: photoURL
                };
                setUser(UserInfo);

            })
            .catch(error => console.log(error.massage))
            .finally(()=>setIsLoading(false));

    }
    return {
        user,
        isLoading,
        googleSignUp,
        signOutButton,
        userSignIn,
        userCreateAnAccount
    }
}
export default UseFier;