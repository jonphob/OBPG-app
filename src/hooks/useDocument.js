import { useState, useEffect } from "react"
import { projectFirestore } from "../firebase/config"

// two arguments, need to specify collection we want to get document from and document id
export const useDocument = (collection, id) => {
    const [ document, setDocument] = useState(null)
    const [ error, setError] = useState(null)

    //real time data for document using useEffect
    // to run once when loaded and then whenever document or id changes

    useEffect(() => {

        const ref = projectFirestore.collection(collection).doc(id)

       const unsubscribe = ref.onSnapshot((snapshot) => {
        // check to see if document has data has an
            if(snapshot.data()) {
                setDocument({ ...snapshot.data(), id: snapshot.id });
                setError(null);
            }
            else {
                setError('No such document exists')
            }

            
            //if error 2nd argument is where its returned
        }, (error) => {
            console.log(error)
            setError('failed to get document')
        })

        //unsubscribe, if move to another page, set onSnapshot to const variable and it fires if move away from page to stop the realtime connection 

        return () => unsubscribe()
        
    }, [collection, id])
    //return document and any error
    return { document, error }

}