import { useEffect, useState } from 'react'
import initializeAuthentication from '../Firebase/firebase.init'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

// initialize firebase
initializeAuthentication()

// hook
const useFirebase = () => {
  // states
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  // auth
  const auth = getAuth()
  // google sign in
  const googleProvider = new GoogleAuthProvider()
  const googleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false)
    })
    return () => unsubscribed
  }, [auth])
  // sign out
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => setIsLoading(false))
  }
  // return
  return {
    user,
    auth,
    isLoading,
    setIsLoading,
    googleSignIn,
    logOut,
  }
}

export default useFirebase
