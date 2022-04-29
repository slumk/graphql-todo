import { noteModel } from './notes.model.js'

export const resolvers = {
  Query: {
    notes: async () => {
      const notes = await noteModel.find()
      return notes
    }
  },
  Mutation: {
    createNote: async (parent, { name, content }, context, info) => {
      const doc = await noteModel.create({
        note_name: name,
        note_content: content
      })
      return doc
    },
    deleteNote: async (parent, { id }, context, info) => {
      const doc = await noteModel.findByIdAndDelete(id)
      return doc
    }
  }
}
