import { useState } from 'react';
import { useNavigate } from 'react-router';
import RxFigureInput from '../../components/RxFigureInput';
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

  const paperExFormsChange = (e) => setPaperExForms(parseInt(e.target.value));
  const paperExItemsChange = (e) => setPaperExItems(parseInt(e.target.value));
  const paperPdFormsChange = (e) => setPaperPdForms(parseInt(e.target.value));
  const paperPdItemsChange = (e) => setPaperPdItems(parseInt(e.target.value));
  const epsExFormsChange = (e) => setEpsExForms(parseInt(e.target.value));
  const epsExItemsChange = (e) => setEpsExItems(parseInt(e.target.value));
  const epsPdFormsChange = (e) => setEpsPdForms(parseInt(e.target.value));
  const epsPdItemsChange = (e) => setEpsPdItems(parseInt(e.target.value));
  const mdsExFormsChange = (e) => setMdaExForms(parseInt(e.target.value));
  const mdsExItemsChange = (e) => setMdaExItems(parseInt(e.target.value));
  const mdsPdFormsChange = (e) => setMdaPdForms(parseInt(e.target.value));
  const mdsPdItemsChange = (e) => setMdaPdItems(parseInt(e.target.value));

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
      figures:{
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
      }
    };
    console.log(dailyFigures)
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
              <span>Please select a date for the figures you are entering:</span>
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
                <RxFigureInput
                  inputName="Exempt Forms"
                  value={paperExForms}
                  onChangeFn={paperExFormsChange}
                />
                <RxFigureInput
                  inputName="Exempt Items"
                  value={paperExItems}
                  onChangeFn={paperExItemsChange}
                />
              </div>
              <div className="input-container">
                <RxFigureInput
                  inputName="Paid Forms"
                  value={paperPdForms}
                  onChangeFn={paperPdFormsChange}
                />
                <RxFigureInput
                  inputName="Paid Items"
                  value={paperPdItems}
                  onChangeFn={paperPdItemsChange}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className="token">EPS</legend>
              <div className="input-container">
                <RxFigureInput
                  inputName="Exempt Tokens"
                  value={epsExForms}
                  onChangeFn={epsExFormsChange}
                />
                <RxFigureInput
                  inputName="Exempt Items"
                  value={epsExItems}
                  onChangeFn={epsExItemsChange}
                />
              </div>
              <div className="input-container">
                <RxFigureInput
                  inputName="Paid Tokens"
                  value={epsPdForms}
                  onChangeFn={epsPdFormsChange}
                />
                <RxFigureInput
                  inputName="Paid Items"
                  value={epsPdItems}
                  onChangeFn={epsPdItemsChange}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend className="fp10mda">FP10MDA</legend>
              <div className="input-container">
                <RxFigureInput
                  inputName="Exempt Forms"
                  value={mdaExForms}
                  onChangeFn={mdsExFormsChange}
                />
                <RxFigureInput
                  inputName="Exempt Items"
                  value={mdaExItems}
                  onChangeFn={mdsExItemsChange}
                />
              </div>
              <div className="input-container">
                  <RxFigureInput
                    inputName="Paid Forms"
                    value={mdaPdForms}
                    onChangeFn={mdsPdFormsChange}
                  />
                  <RxFigureInput
                    inputName="Paid Items"
                    value={mdaPdItems}
                    onChangeFn={mdsPdItemsChange}
                  />
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
