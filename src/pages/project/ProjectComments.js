import { useState } from "react"
import Avatar from "../../components/Avatar"
import { timestamp } from "../../firebase/config"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function ProjectComments({ project }) {
    const { updateDocument, response } = useFirestore('projects')
    const [newComment, setNewComment] =useState('')
    const { user } = useAuthContext()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const commentToAdd = {
            displayName: user.displayName,
            photoURL: user.photoURL,
            content: newComment,
            createdAt: timestamp.fromDate(new Date()),
            id: Math.random()
        }
        await updateDocument(project.id, {
            comments: [...project.comments, commentToAdd]
        })
        if(!response.error) {
        //reset form state to remove added comment
        setNewComment('')
        }
    }
    return (
      <div className="project-comments">
        <h4>Project Comments</h4>
        <div className="comments-section">
          <ul>
            {project.comments.length > 0 &&
              project.comments.map((comment) => (
                <li key={comment.content}>
                  <div className="comment-author">
                    <Avatar src={comment.photoURL} />
                    <p>{comment.displayName}</p>
                  </div>
                  <div className="comment-dates">
                    <p>{formatDistanceToNow(comment.createdAt.toDate(),{ 
                            addSuffix:true })}</p>
                  </div>
                  <div className="comments-content">{comment.content}</div>
                </li>
              ))}
          </ul>
        </div>

        <form className="add-comments" onSubmit={handleSubmit}>
          <label>
            <span>Add new comment</span>
            <textarea
              required
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
            ></textarea>
          </label>
          <button className="btn">Add Comment</button>
        </form>
      </div>
    );
}
