import { useState, useEffect } from 'react';
import './AddRxFigure.css'



export default function AddRxFigures() {

      const [paperExForms, setPaperExForms] = useState(null)
      const [paperExItems, setPaperExItems] = useState(null)
      const [paperPdForms, setPaperPdForms] = useState(null)
      const [paperPdItems, setPaperPdItems] = useState(null)

      const [epsExForms, setEpsExForms] = useState(null)
      const [epsExItems, setEpsExItems] = useState(null)
      const [epsPdForms, setEpsPdForms] = useState(null)
      const [epsPdItems, setEpsPdItems] = useState(null)

      const [mdaExForms, setMdaExForms] = useState(null)
      const [mdaExItems, setMdaExItems] = useState(null)
      const [mdaPdForms, setMdaPdForms] = useState(null)
      const [mdaPdItems, setMdaPdItems] = useState(null)

      const [totalPdForms, setTotalPdForms] = useState(null)
      const [totalPdItems, setTotalPdItems] = useState(null)
      const [totalExForms, setTotalExForms] = useState(null)
      const [totalExItems, setTotalExItems] = useState(null)

     useEffect(() => {

       let totalPaidForms = paperPdForms + epsPdForms + mdaPdForms;
       let totalPaidItems = paperPdItems + epsPdItems + mdaPdItems;
       let totalExemptForms = paperExForms + epsExForms + mdaExForms;
       let totalExemptItems = paperExItems + epsExItems + mdaExItems;

       setTotalPdForms(totalPaidForms);
       setTotalPdItems(totalPaidItems);
       setTotalExForms(totalExemptForms);
       setTotalExItems(totalExemptItems);
     }, [
       paperPdForms,
       epsPdForms,
       mdaPdForms,
       paperExForms,
       epsExForms,
       mdaExForms,
       paperPdItems,
       epsPdItems,
       mdaPdItems,
       paperExItems,
       epsExItems,
       mdaExItems
     ]);

      const handleSubmit = (e) => {
        e.preventDefault(e);
        console.log({
          paperPdForms,
          epsPdForms,
          mdaPdForms,
          paperExForms,
          epsExForms,
          mdaExForms,
          paperPdItems,
          epsPdItems,
          mdaPdItems,
          paperExItems,
          epsExItems,
          mdaExItems,
        });
        
      };
  
  
  
  return (
    <>
      <h2>Add Prescription Figures</h2>
      <div className="add-figures-form">
        <form onSubmit={handleSubmit}>
          <div className="rx-container">
            <fieldset>
              <legend>FP10 Paper</legend>
              <div className="input-container">
                <label>
                  <span>Exempt Forms</span>
                  <input
                    
                    min="0"
                    type="number"
                    onChange={(e) => setPaperExForms(parseInt(e.target.value))}
                    value={paperExForms || 0}
                  />
                </label>
                <label>
                  <span>Exempt Items</span>
                  <input
                    min="0"
                    type="number"
                    onChange={(e) => setPaperExItems(parseInt(e.target.value))}
                    value={paperExItems || 0}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span>Paid Forms</span>
                  <input
                    min="0"
                    type="number"
                    onChange={(e) => setPaperPdForms(parseInt(e.target.value))}
                    value={paperPdForms || 0}
                  />
                </label>
                <label>
                  <span>Paid Items</span>
                  <input
                    min="0"
                    type="number"
                    onChange={(e) => setPaperPdItems(parseInt(e.target.value))}
                    value={paperPdItems || 0}
                  />
                </label>
              </div>
            </fieldset>
            <fieldset>
              <legend className="token">EPS</legend>
              <div className="input-container">
                <label>
                  <span>Exempt Form</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setEpsExForms(parseInt(e.target.value))}
                    value={epsExForms || 0}
                  />
                </label>
                <label>
                  <span>Exempt Items</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setEpsExItems(parseInt(e.target.value))}
                    value={epsExItems || 0}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span>Paid Forms</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setEpsPdForms(parseInt(e.target.value))}
                    value={epsPdForms || 0}
                  />
                </label>
                <label>
                  <span>Paid Items</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setEpsPdItems(parseInt(e.target.value))}
                    value={epsPdItems || 0}
                  />
                </label>
              </div>
            </fieldset>
            <fieldset>
              <legend className="fp10mda">FP10MDA</legend>
              <div className="input-container">
                <label>
                  <span>Exempt Forms</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setMdaExForms(parseInt(e.target.value))}
                    value={mdaExForms || 0}
                  />
                </label>
                <label>
                  <span>Exempt Items</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setMdaExItems(parseInt(e.target.value))}
                    value={mdaExItems || 0}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span>Paid Forms</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setMdaPdForms(parseInt(e.target.value))}
                    value={mdaPdForms || 0}
                  />
                </label>
                <label>
                  <span>Paid Items</span>
                  <input
                    type="number"
                    min="0"
                    onChange={(e) => setMdaPdItems(parseInt(e.target.value))}
                    value={mdaPdItems || 0}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className=""> Daily Totals</legend>
              <div className="input-container">
                <label>
                  <span>Exempt Forms</span>
                  <input readOnly value={totalExForms || 0} />
                </label>
                <label>
                  <span>Exempt Items</span>
                  <input readOnly value={totalExItems || 0}  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span>Paid Forms</span>
                  <input readOnly value={totalPdForms || 0} />
                </label>
                <label>
                  <span>Paid Items</span>
                  <input readOnly value={totalPdItems || 0} />
                </label>
              </div>
            </fieldset>
          </div>
          <button className="btn submit-figures-btn">Submit Figures</button>
        </form>
      </div>
    </>
  );
}
