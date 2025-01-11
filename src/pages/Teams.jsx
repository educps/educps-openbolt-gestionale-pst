import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Teams() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchTeams = async () => {
      const { data, error } = await supabase.from('teams').select('*')
      if (error) console.error(error)
      else setTeams(data)
    }

    fetchTeams()
  }, [])

  return (
    <div>
      <h1>Team</h1>
      <ul>
        {teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  )
}
