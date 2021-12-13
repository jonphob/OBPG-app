import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from "react";
import RxFiguresTable from "../../components/RxFiguresTable";
import { projectFirestore } from "../../firebase/config";
import { format } from "date-fns";

// Styles
import "./ViewRxFigures.css";
import { css } from "@emotion/react";

// Spinner
const override = css`
  position: absolute;
  color: #4caa3c;
  top: 45%;
  left: 50%;
  display: block;
  margin: 0 auto;
`;

export default function ViewRxFigures() {
  const date = new Date();
  const year = new Date().getFullYear()
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [startDate, setStartDate] = useState(firstDay);
  const [endDate, setEndDate] = useState(lastDay);
  const [dataPresent, setDataPresent] = useState()
  
  useEffect(() => {
    setIsPending(true);
    const ref = projectFirestore
      .collection("rxFigures")
      .where("dateForFigures", ">=", startDate)
      .where("dateForFigures", "<=", endDate)
      .where("branch", "==", 'Albert Wilde')
      .orderBy("dateForFigures");

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        
        // update state
        if(results.length > 0){
          setDataPresent(true)
        } else {
          setDataPresent(false)
          
        }
        setDocuments(results)
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
  }, [startDate, endDate]);


  const handleDateInput = (date) => {
    const inputDate = new Date(date);
    const year = inputDate.getFullYear();
    const month = inputDate.getMonth();
    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    setStartDate(firstDay)
    setEndDate(lastDay)
  };

  return (
    <div className="rx-figures-table">
      <h2>Rx Figures </h2>
      <div className="nav-div">
        <input 
          type="month" 
          min="2018-01" 
          max="2021-12"
          value={format(startDate, 'yyyy-MM')}
          onChange={(e) => handleDateInput(e.target.value)} />
      </div>

      <SyncLoader
        color="#4caa3c"
        loading={isPending}
        css={override}
        size={10}
        speedMultiplier={0.7}
        margin={7}
      />

      {documents && (
        <RxFiguresTable documents={documents} results={dataPresent} />
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}
