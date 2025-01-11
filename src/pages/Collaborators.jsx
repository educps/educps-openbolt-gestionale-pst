import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Collaborators() {
  const [collaborators, setCollaborators] = useState([])

  useEffect(() => {
    const fetchCollaborators = async () => {
      const { data, error } = await supabase.from('collaborators').select('*')
      if (error) console.error(error)
      else setCollaborators(data)
    }

    fetchCollaborators()
  }, [])

  return (
    <div>
      <h1>Collaboratori</h1>
      <ul>
        {collaborators.map(collaborator => (
          <li key={collaborator.id}>{collaborator.name}</li>
        ))}
      </ul>
    </div>
  )
}
