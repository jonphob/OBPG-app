// **must specify collection when importing this and creating const in component**


import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query1, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call

  const query1 = useRef(_query1).current;
  // console.log('query1 ' + query1)
  // const query2 = useRef(_query2).current
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    setIsPending(true);
    let ref = projectFirestore.collection(collection);
    
    
    if (query1) {
      ref = ref.where(...query1);
    }

    // if (query2){
    //   ref = ref.where(...query2)
    // }
    if (orderBy) {
      ref = ref.orderBy(orderBy); // changed from ...orderby
    }
  


    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
        setIsPending(false);
      },
      (error) => {
        console.log(error);
        setIsPending(false);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, query1, orderBy]);

  return { documents, error, isPending };
};