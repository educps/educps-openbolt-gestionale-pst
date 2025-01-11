import { useState } from 'react'
import { format } from 'date-fns'

const shiftTypes = {
  morning: 'Mattina',
  afternoon: 'Pomeriggio',
  night: 'Notte',
  free: 'Libero'
}

export default function NewShifts() {
  const [shifts, setShifts] = useState([])
  const [newShift, setNewShift] = useState({
    date: '',
    type: 'morning',
    collaborator: ''
  })

  const handleAddShift = (e) => {
    e.preventDefault()
    if (!newShift.date || !newShift.collaborator) {
      alert('Tutti i campi sono obbligatori')
      return
    }

    setShifts(prev => [...prev, { ...newShift, id: Date.now() }])
    setNewShift({ date: '', type: 'morning', collaborator: '' })
  }

  const handleDeleteShift = (id) => {
    setShifts(prev => prev.filter(shift => shift.id !== id))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Gestione Turni</h1>

      <form onSubmit={handleAddShift} className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Data</label>
          <input
            type="date"
            id="date"
            value={newShift.date}
            onChange={(e) => setNewShift({ ...newShift, date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipo di Turno</label>
          <select
            id="type"
            value={newShift.type}
            onChange={(e) => setNewShift({ ...newShift, type: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            {Object.entries(shiftTypes).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="collaborator" className="block text-sm font-medium text-gray-700">Collaboratore</label>
          <input
            type="text"
            id="collaborator"
            value={newShift.collaborator}
            onChange={(e) => setNewShift({ ...newShift, collaborator: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Aggiungi Turno
        </button>
      </form>

      <h2 className="text-xl font-semibold">Turni Esistenti</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Collaboratore</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Azione</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {shifts.map(shift => (
            <tr key={shift.id}>
              <td className="px-6 py-4 whitespace-nowrap">{format(new Date(shift.date), 'dd/MM/yyyy')}</td>
              <td className="px-6 py-4 whitespace-nowrap">{shiftTypes[shift.type]}</td>
              <td className="px-6 py-4 whitespace-nowrap">{shift.collaborator}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDeleteShift(shift.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Elimina
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
