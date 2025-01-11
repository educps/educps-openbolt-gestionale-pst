import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function AddTeam() {
  const [teamName, setTeamName] = useState('')
  const [teamDescription, setTeamDescription] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleAddTeam = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!teamName.trim() || !teamDescription.trim()) {
      setError('Tutti i campi sono obbligatori')
      return
    }

    const { data, error } = await supabase
      .from('teams')
      .insert([
        { name: teamName, description: teamDescription, tenant_id: 'YOUR_TENANT_ID' }
      ])

    if (error) {
      setError('Errore durante l\'aggiunta del team: ' + error.message)
    } else {
      setSuccess(true)
      setTeamName('')
      setTeamDescription('')
    }
  }

  return (
    <div>
      <h1>Aggiungi Team</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Team aggiunto con successo!</p>}
      <form onSubmit={handleAddTeam}>
        <div>
          <label htmlFor="name">Nome Team</label>
          <input
            type="text"
            id="name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descrizione</label>
          <textarea
            id="description"
            value={teamDescription}
            onChange={(e) => setTeamDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Aggiungi Team</button>
      </form>
    </div>
  )
}
