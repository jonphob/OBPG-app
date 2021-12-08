import { useCollection } from "../../hooks/useCollection"
import { timestamp } from "../../firebase/config"
import { format } from 'date-fns'

import { css } from "@emotion/react"
import ClockLoader from "react-spinners/ClockLoader"

// Styles
import './ViewRxFigures.css'


export default function ViewRxFigures() {
    const start = new Date('2021-11-01')
    
    console.log(start)
    
     const { documents, error, isPending } = useCollection(
       "rxFigures",
       `'"dateForFigures", "=" , "${start}"'`,
       "dateForFigures"
     );
    
    
    return (
      <div className="rx-figures-table">
        <h2>Rx Figures</h2>
        {isPending && (
          <ClockLoader
            color='green'
            loading={isPending}
            
            size={50}
          />
        )}
        {documents && (
          <table>
            <thead>
              <tr className="rxFigures-th">
                <th className='th-date'>Date</th>
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
              {documents.map((data) => (
                <tr key={data.id}>
                  <td>{format(data.dateForFigures.toDate(), "do MMM yy")}</td>
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
              ))}
            </tbody>
          </table>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    );
}
