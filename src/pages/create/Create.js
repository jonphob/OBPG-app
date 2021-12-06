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
  const [formError, setFormError] = useState(null);
  // const [thumbnail, setThumbnail] = useState(null);
  // const [thumbnailError, setThumbnailError] = useState(null);

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

  // Code for file upload
  //  const handleFileChange = (e) => {
  //    setThumbnail(null);
  //    let selected = e.target.files[0];
  //    console.log(selected);

  //    if (!selected) {
  //      setThumbnailError("Please select a file");
  //      return;
  //    }
  //    if (!selected.type.includes("image")) {
  //      setThumbnailError("Selected file must be an image");
  //      return;
  //    }
  //    if (selected.size > 100000) {
  //      setThumbnailError("Image file size must be less than 100kb");
  //      return;
  //    }

  //    setThumbnailError(null);
  //    setThumbnail(selected);
  //  };

   
     /* <label>
        <span>profile thumbnail:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label> */
   


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
      <h2 className="title">Add CPD Record</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>CPD Learning Title:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>What did you learn and how did you learn?</span>
          <textarea
            required
            type="text"
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Date completed</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Learning Category:</span>
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

