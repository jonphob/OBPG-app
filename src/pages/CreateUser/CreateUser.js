import { useState, useEffect } from "react"
import { useCollection } from "../../hooks/useCollection";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useAuthContext } from "../../hooks/useAuthContext"
import { timestamp } from "../../firebase/config";
import Select from "react-select";


// styles
import "./CreateUser.css";
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
    padding: "0px 8px",
  }),
};

const branches = [
  { value: "albertwilde", label: "Albert Wilde" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

export default function CreateUser() {
  const { user } = useAuthContext();
  const { documents } = useCollection("roles", 'id');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("")
  const [roleList, setRoleList] = useState([])
  const [branch, setBranch] = useState("")
  const [ formError, setFormError] = useState(null)


  const { createUser, isPending, error } = useCreateUser();

  // create user values for react-select
  useEffect(() => {
    
    if (documents) {
      setRoleList(
        documents.map((role) => {
          return { value: { ...role, id: role.id }, label: role.name };
        })
      );
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!branch) {
      setFormError("Please select a branch");
      return;
    }

    if (!role) {
      setFormError("Please select a role");
      return;
    }

    // create an object for user who has created project using info from auth context
    const createdBy = {
      name: user.firstName + ' ' + user.lastName,
      id: user.uid,
      createdAt: timestamp.fromDate(new Date.now()), //creates new timestamp from date given to fn
    };

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      branch,
      role, 
      createdBy
      
    };


  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create New User</h2>
      <div className="form-container">
        <div className="form-column">
          <label>
            <span>first name:</span>
            <input
              required
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </label>
          <label>
            <span>last name:</span>
            <input
              required
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </label>
          <label>
            <span>email:</span>
            <input
              autoComplete="new-password"
              name="email"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>temporary password:</span>
            <input
              autoComplete="new-password"
              name="password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <div className="form-column">
          <label>
            <span>branch:</span>
            <Select
              styles={customStyles}
              options={branches}
              onChange={(option) => setBranch(option)}
            />
          </label>
          <label>
            <span>role:</span>
            <Select
              styles={customStyles}
              options={roleList}
              onChange={(option) => setRole(option)}
            />
          </label>
        </div>
      </div>

      {!isPending && <button className="btn">Create User</button>}
      {isPending && (
        <button disabled className="btn">
          Loading
        </button>
      )}
      {formError && <p className="error">{formError}</p>}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
