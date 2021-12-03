import { useCollection } from '../../hooks/useCollection'
import { useState } from 'react';
import { useAuthContext
 } from '../../hooks/useAuthContext';
import ProjectFilter from "./ProjectFilter"
import ProjectList from "../../components/ProjectList";

// styles
import './Dashboard.css'

export default function Dashboard() {
    const { user } = useAuthContext()
    const [filter, setFilter] = useState("all"); 
    const { documents, error } = useCollection('projects')

    const changeFilter = (newFilter) => {
        setFilter(newFilter)
    }
    // need to check if we have documents before we filter with terniary
    const projects = documents ? documents.filter((document) => {
        switch (filter) {
            case 'all':
                return true
            case 'mine':
                let assignedToMe = false
                document.assignedUsersList.forEach(u => {
                    if(user.uid === u.id){
                        assignedToMe = true
                    }
                })
                return assignedToMe
            case 'development':
            case 'design':
            case 'sales':
            case 'marketing':
                return document.category === filter
            default:
                return true
            }
        }) : null
    
        return (
            <div>
                <h2 className="title">Dashboard</h2>
                {error && <p className='error'>{error}</p>}
                {documents && <ProjectFilter currentFilter={filter} changeFilter={changeFilter}/>}
                {projects && <ProjectList projects={projects}/>}
            </div>
            )
        }


