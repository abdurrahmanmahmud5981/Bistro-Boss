import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();
  // create a new user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in user with google
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update userProfile
  const updateUserProfile = (photoURL, displayName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      photoURL,
      displayName,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("-------" + currentUser);
      if (currentUser) {
        // get token and store it in the client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log(res);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
          }
          setLoading(false);

          // TODO: store token in client for future use
        });
      } else {
        // TODO: remove token
        localStorage.removeItem("token");
        setLoading(false);
      }
    });
    return unsubscribe;
  }, [axiosPublic]);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
