import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import ToastModal from '../../components/Toast';
import RxFigureInput from '../../components/RxFigureInput';
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from '../../hooks/useFirestore';
import { useNavigate } from 'react-router';
import { timestamp } from "../../firebase/config";
import { useCollection} from '../../hooks/useCollection'
import Select from "react-select";

// styles
import './AddRxFigure.css'
// select box styles
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "#inherit",
    backgroundColor: state.isSelected ? "#4CAA3C" : "white",
    ":hover": {
      backgroundColor: "#4caa3c2b",
      color: "inherit",
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    ":focusVisible": {
      outline: "#4caa3c 3px solid",
    },
    padding: "0px 8px",
  }),
  control: (provided, state) => ({
    ...provided,
    width: '300px',

    ":hover": {
      borderColor: "#4CAA3C",
    },
  }),
};


export default function AddRxFigures() {
  const { addDocument, response } = useFirestore("rxFigures");
  const { documents } = useCollection("branches", "name");

  const [date, setDate] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [branch, setBranch] = useState("")
  const [branchList, setBranchList] = useState([])

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

  //   // Handle Toast button
  //   const handleClick = (e) => {
  //     if(e === 'success'){
  //     toast.success("Rx Figures Submitted Succesfully")
  //   } else if(e === 'error') {
  //     toast.error('There was a problem submitting figures, please try again')
  //   }
  // }

  // create an object for user who has created project using info from auth context

  const handleSubmit = async (e) => {
    e.preventDefault(e);

    const addedBy = {
      displayName: user.displayName,
      id: user.uid,
    };

    const dailyFigures = {
      addedBy,
      branch,
      dateForFigures: timestamp.fromDate(new Date(date)),
      figures: {
        paidForms: {
          paperPdForms,
          epsPdForms,
          mdaPdForms,
        },
        paidItems: {
          paperPdItems,
          epsPdItems,
          mdaPdItems,
        },
        exemptForms: {
          paperExForms,
          epsExForms,
          mdaExForms,
        },
        exemptItems: {
          paperExItems,
          epsExItems,
          mdaExItems,
        },
      },
    };

    await addDocument(dailyFigures);

    if (!response.error) {
      toast.success("Rx Figures Added");
      //set all input states to empty strings
      setBranch("")
      setDate("");
      setPaperExForms("");
      setPaperExItems("");
      setPaperPdForms("");
      setPaperPdItems("");
      setEpsExForms("");
      setEpsExItems("");
      setEpsPdForms("");
      setEpsPdItems("");
      setMdaExForms("");
      setMdaExItems("");
      setMdaPdForms("");
      setMdaPdItems("");
    } else {
      toast.error("There was an error, please try again");
    }
  };

  const handleViewBtnClick = (e) => {
    e.preventDefault();
    navigate("/viewrxfigures");
  };

  // set branch dropdown
  useEffect(() => {
    if (documents) {
      setBranchList(
        documents.map((branch) => {
          return { value: branch.name, label: branch.name };
        })
      )
    }
  }, [documents])

   

  return (
    <>
      <ToastModal/>
      <h2>Add Prescription Figures</h2>
      <div className="add-figures-form">
        <form onSubmit={handleSubmit}>
          <div className="branch-div">
            <label className="date-label">
              <span>
                Please select a branch for the figures you are entering:
              </span>
            </label>
            <Select
              required
              styles={customStyles}
              options={branchList}
              onChange={(option) => setBranch(option.value)}
            />
          </div>
          <div className="date-div">
            <label htmlFor="dateInput" className="date-label">
              <span>
                Please select a date for the figures you are entering:
              </span>
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
              <legend className="fp10paper">FP10 Paper</legend>
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
          <div className="btn-container">
            <button className="btn submit-figures-btn">Submit Figures</button>
            <button
              className="btn submit-figures-btn"
              onClick={handleViewBtnClick}
            >
              View figures
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
