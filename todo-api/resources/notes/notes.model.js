import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
  note_name: {
    type: String,
    required: true
  },
  note_content: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now()
  }
})

export const noteModel = mongoose.model('Note', noteSchema)
