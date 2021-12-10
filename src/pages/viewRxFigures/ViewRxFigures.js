import { useCollection } from "../../hooks/useCollection"
import SyncLoader from "react-spinners/SyncLoader";
import { useEffect, useState } from "react";
import RxFiguresTable from "../../components/RxFiguresTable";


// Styles
import './ViewRxFigures.css'
import { css } from "@emotion/react";


// Spinner
const override = css`
  position: absolute;
  color: #4caa3c;
  top: 45%;
  left: 50%;
  display: block;
  margin: 0 auto;`;
 
export default function ViewRxFigures() {
  
 
  const [startDate, setStartDate] = useState(new Date("10-01-2021"));
  const [endDate, setEndDate] = useState(new Date("12-31-2021"));
  
  const { documents, error, isPending } = useCollection(
       "rxFigures",
       "dateForFigures",
       ["dateForFigures", ">=", startDate],
       ["dateForFigures", "<=", endDate]
     );
     
     return (
       <div className="rx-figures-table">
         <h2>Rx Figures</h2>
         
         <SyncLoader
           color="#4caa3c"
           loading={isPending}
           css={override}
           size={10}
           speedMultiplier={0.7}
           margin={7}
         />

         {documents && <RxFiguresTable  documents={documents}/>}
           
         
         {error && <div className="error">{error}</div>}
       </div>
     );
}
