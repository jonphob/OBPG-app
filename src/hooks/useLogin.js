import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const login = async (email, password) => {
    setError(null)
    setIsPending(true)
  
    try {
      // login
      const result = await projectAuth.signInWithEmailAndPassword(email, password)

      // update online status
      await projectFirestore.collection("users")
      .doc(result.user.uid).update({online: true});
      
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: result.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
        navigate('/')
        
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, isPending, error }
}