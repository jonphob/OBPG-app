import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from "../firebase/config";
// import { useAuthContext } from './useAuthContext'

export const useCreateUser = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  // const { dispatch } = useAuthContext()

  const createUser = async (
    email,
    password,
    firstName,
    lastName,
    branch,
    role,
    createdBy,
    isActive
  ) => {
    setError(null);
    setIsPending(true);

    try {
      // signup (this creates new user within firebase)
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);

      // if no response(e.g. network problem) handle the error
      if (!res) {
        throw new Error("Could not create user, please try again");
      }

      // upload user thumbnail
      // const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      // const img = await projectStorage.ref(uploadPath).put(thumbnail)
      // const imgURL = await img.ref.getDownloadURL()

      // add display name to user using updateProfile of above newly created user
      await res.user.updateProfile({ displayName: firstName });

      // create user document in database
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: false,
        firstName,
        lastName,
        branch,
        role,
        createdBy,
        isActive
      });

      // dispatch login action to update global auth context so will have access to this user
      // in whole application
      // dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { createUser, error, isPending }
}