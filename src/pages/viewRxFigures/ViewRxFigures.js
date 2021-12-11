import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from "react";
import RxFiguresTable from "../../components/RxFiguresTable";
import { projectFirestore } from "../../firebase/config";

// Styles
import "./ViewRxFigures.css";
import { css } from "@emotion/react";

const monthList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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

  const btnHandler = (month) => {
    switch (month) {
      case "jan":
        setStartDate(new Date("01-01-2021"));
        setEndDate(new Date("01-31-2021"));
        break;
      case "feb":
        setStartDate(new Date("02-01-2021"));
        setEndDate(new Date("02-28-2021"));
        break;
      case "mar":
        setStartDate(new Date("03-01-2021"));
        setEndDate(new Date("03-31-2021"));
        break;
      case "apr":
        setStartDate(new Date("04-01-2021"));
        setEndDate(new Date("04-30-2021"));
        break;
      case "may":
        setStartDate(new Date("05-01-2021"));
        setEndDate(new Date("05-31-2021"));
        break;
      case "jun":
        setStartDate(new Date("06-01-2021"));
        setEndDate(new Date("06-30-2021"));
        break;
      case "jul":
        setStartDate(new Date("07-01-2021"));
        setEndDate(new Date("07-31-2021"));
        break;
      case "aug":
        setStartDate(new Date("08-01-2021"));
        setEndDate(new Date("08-31-2021"));
        break;
      case "sep":
        setStartDate(new Date("09-01-2021"));
        setEndDate(new Date("09-30-2021"));
        break;
      case "oct":
        setStartDate(new Date("10-01-2021"));
        setEndDate(new Date("10-31-2021"));
        break;
      case "nov":
        setStartDate(new Date("11-01-2021"));
        setEndDate(new Date("11-30-2021"));
        break;
      case "dec":
        setStartDate(new Date("12-01-2021"));
        setEndDate(new Date("12-31-2021"));
        break;
    }
  };

  return (
    <div className="rx-figures-table">
      <h2>Rx Figures </h2>
      <nav className='monthFilter'>
        {monthList.map((month) => (
          <button
            className="btn month-filter"
            key={month}
            value={month.toLowerCase()}
            onClick={(e) => btnHandler(e.target.value)}
          >
            {month}
          </button>
        ))}
      </nav>

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
