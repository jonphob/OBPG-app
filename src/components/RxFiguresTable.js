import { format } from "date-fns";
import { useEffect, useState } from "react";
import "./RxFigures.css";


export default function RxFiguresTable({documents, results }) {
    const [table, setTable] = useState();
    useEffect(() => {
        if (documents) {
            setTable(
                documents.map((data) => (
                <tr key={data.id}>
                    <td>{format(data.dateForFigures.toDate(), "E do MMM")}</td>
                    <td>{data.figures.exemptForms.epsExForms}</td>
                    <td>{data.figures.exemptItems.epsExItems}</td>
                    <td>{data.figures.exemptForms.paperExForms}</td>
                    <td>{data.figures.exemptItems.paperExItems}</td>
                    <td>{data.figures.exemptForms.mdaExForms}</td>
                    <td>{data.figures.exemptItems.mdaExItems}</td>
                    <td>{data.figures.paidForms.epsPdForms}</td>
                    <td>{data.figures.paidItems.epsPdItems}</td>
                    <td>{data.figures.paidForms.paperPdForms}</td>
                    <td>{data.figures.paidItems.paperPdItems}</td>
                    <td>{data.figures.paidForms.mdaPdForms}</td>
                    <td>{data.figures.paidItems.mdaPdItems}</td>
                </tr>
                )
            )
        )} 
        if(!results){
        setTable(null)
           setTable(
             <tr>
               <td colspan='13'className='td-noData'>No Data Available</td>
             </tr>
           );}
    }, [documents, results]);

  return (
      <>
      
      <table>
        <thead>
            <tr className="rxFigures-th">
            <th className="th-date">Date</th>
            <th>Ex EPS Forms</th>
            <th>Ex EPS Items</th>
            <th>Ex FP10 Forms</th>
            <th>Ex FP10 Items</th>
            <th>Ex FP10MDA Forms</th>
            <th>Ex FP10MDA Items</th>
            <th>Pd EPS Forms</th>
            <th>Pd EPS Items</th>
            <th>Pd FP10 Forms</th>
            <th>Pd FP10 Items</th>
            <th>Pd FP10MDA Forms</th>
            <th>Pd FP10MDA Items</th>
            </tr>
        </thead>
        <tbody>
            {table}
        </tbody>
      </table>
      
      </>
    );
}
