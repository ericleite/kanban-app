export function selectNotesByIds(allNotes, noteIds=[]) {
  return noteIds.reduce((notes, id) => {
    return notes.concat(
      allNotes.filter(note => note.id === id)
    )
  }, [])
}
