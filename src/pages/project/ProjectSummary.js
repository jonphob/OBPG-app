import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import React from 'react'
import Avatar from '../../components/Avatar'
import { useNavigate } from 'react-router';


export default function ProjectSummary({ project }) {

    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleClick = (e) => {
        // have access to id on project object above
        deleteDocument(project.id)
        navigate('/')

    }
    return (
      <div>
        <div className="project-summary">
          <h2 className="page-title">{project.name}</h2>
          <p>Created by: {project.createdBy.displayName} </p>
          <p className="due-date">
            Project due by: {project.dueDate.toDate().toDateString()}
          </p>
          <p className="details">{project.details}</p>

          <h4>Project is assigned to:</h4>
          <div className="assigned-users">
            {project.assignedUsersList.map((user) => (
              <div key={project.id}>
                <Avatar src={user.photoURL} />
              </div>
            ))}
          </div>
        </div>
        {/* Checks current logged in user(user.uid) is the creator of project(project.createdBy.id) and and only allows
         the user who created project to delete it*/}
        {user.uid === project.createdBy.id && (
          <button onClick={handleClick} className="btn">
            Mark as complete
          </button>
        )}
      </div>
    );
}
