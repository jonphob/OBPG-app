import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from '../../hooks/useFirestore';
 
import './AddRxFigure.css'

export default function AddRxFigures() {
  const { addDocument, response } = useFirestore('rxFigures')//need to specify a collection to store
  const [date, setDate] = useState("");
  const [figuresAdded, setFiguresAdded] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate()

  const [paperExForms, setPaperExForms] = useState("");
  const [paperExItems, setPaperExItems] = useState("");
  const [paperPdForms, setPaperPdForms] = useState("");
  const [paperPdItems, setPaperPdItems] = useState("");

  const [epsExForms, setEpsExForms] = useState("");
  const [epsExItems, setEpsExItems] = useState("");
  const [epsPdForms, setEpsPdForms] = useState("");
  const [epsPdItems, setEpsPdItems] = useState("");

  const [mdaExForms, setMdaExForms] = useState("");
  const [mdaExItems, setMdaExItems] = useState("");
  const [mdaPdForms, setMdaPdForms] = useState("");
  const [mdaPdItems, setMdaPdItems] = useState("");

  // create an object for user who has created project using info from auth context
  

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const addedBy = {
      displayName: user.displayName,
      id: user.uid,
    };
    
    const dailyFigures = {
      addedBy,
      dateForFigures: date,
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
    };
    
    await addDocument(dailyFigures)
    
    if(!response.error) {
      setFiguresAdded(true)
  
    }
  };

  return (
    <>
      <h2>Add Prescription Figures</h2>
      <div className="add-figures-form">
        <form onSubmit={handleSubmit}>
          <div className="date-div">
            <label htmlFor="dateInput" className="date-label">
              <span>Please select a date for the figures you are entering</span>
            </label>

            <input
              id="dateInput"
              required
              type="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </div>

          <div className="rx-container">
            <fieldset>
              <legend>FP10 Paper</legend>
              <div className="input-container">
                <label>
                  <span>Exempt Forms</span>
                  <input
                    required
                    min="0"
                    type="number"
                    onChange={(e) => setPaperExForms(parseInt(e.target.value))}
                    value={paperExForms}
                  />
                </label>
                <label>
                  <span>Exempt Items</span>
                  <input
                    required
                    min="0"
                    type="number"
                    onChange={(e) => setPaperExItems(parseInt(e.target.value))}
                    value={paperExItems}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span>Paid Forms</span>
                  <input
                    required
                    min="0"
                    type="number"
                    onChange={(e) => setPaperPdForms(parseInt(e.target.value))}
                    value={paperPdForms}
                  />
                </label>
                <label>
                  <span>Paid Items</span>
                  <input
                    required
                    min="0"
                    type="number"
                    onChange={(e) => setPaperPdItems(parseInt(e.target.value))}
                    value={paperPdItems}
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
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setEpsExForms(parseInt(e.target.value))}
                    value={epsExForms}
                  />
                </label>
                <label>
                  <span>Exempt Items</span>
                  <input
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setEpsExItems(parseInt(e.target.value))}
                    value={epsExItems}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span>Paid Forms</span>
                  <input
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setEpsPdForms(parseInt(e.target.value))}
                    value={epsPdForms}
                  />
                </label>
                <label>
                  <span>Paid Items</span>
                  <input
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setEpsPdItems(parseInt(e.target.value))}
                    value={epsPdItems}
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
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setMdaExForms(parseInt(e.target.value))}
                    value={mdaExForms}
                  />
                </label>
                <label>
                  <span>Exempt Items</span>
                  <input
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setMdaExItems(parseInt(e.target.value))}
                    value={mdaExItems}
                  />
                </label>
              </div>
              <div className="input-container">
                <label>
                  <span>Paid Forms</span>
                  <input
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setMdaPdForms(parseInt(e.target.value))}
                    value={mdaPdForms}
                  />
                </label>
                <label>
                  <span>Paid Items</span>
                  <input
                    required
                    type="number"
                    min="0"
                    onChange={(e) => setMdaPdItems(parseInt(e.target.value))}
                    value={mdaPdItems}
                  />
                </label>
              </div>
            </fieldset>
          </div>
          {!figuresAdded && (
            <button className="btn submit-figures-btn">Submit Figures</button>
          )}
          {figuresAdded && <p className="">Figures Added</p>}
        </form>
      </div>
    </>
  );
}
