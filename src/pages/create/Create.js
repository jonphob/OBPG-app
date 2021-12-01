import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Select from 'react-select'
import { useFirestore } from '../../hooks/useFirestore'
import { useCollection } from '../../hooks/useCollection'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Create.css'


const categories = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'sales', label: 'Sales' },
  { value: 'marketing', label: 'Marketing' },
]

export default function Create() {
  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null)

  const { addDocument, response } = useFirestore('projects')
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const { user } = useAuthContext()
  const navigate = useNavigate()

  // create user values for react-select
  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if(!category) {
        setFormError('Please select a Project Category')
        return
    }

    if (assignedUsers.length < 1) {
      setFormError("Please assign at least one user to the project");
      return
    }

    // create an object for user who has created project using info from auth context
    const createdBy = {
        displayName: user.displayName,
        photoURL: user.photoURL,
        id: user.uid
    }

    // clean up data from user object to get info we need
    const assignedUsersList = assignedUsers.map((u) => {
        return {
            displayName: u.value.displayName,
            photoURL: u.value.photoURL,
            id: u.value.id
        }
      })

    // create doc and save to firestore here
    const project = {
      name: name, //can be shortened to just name
      details: details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)), //creates new timestamp from date given to fn
      comments: [],
      createdBy: createdBy,
      assignedUsersList: assignedUsersList
    };
    
    await addDocument(project) // so waits here while addDocument completes

    if(!response.error){
      navigate('/')
    }
  };

  return (
    <div className="create-form">
      <h2 className="title">Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Due date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project Category:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>
        <button className="btn">Add Project</button>
        {formError && <p className='error'>{formError}</p>}
      </form>
    </div>
  );
}

