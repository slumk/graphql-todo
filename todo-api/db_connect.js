import mongoose from 'mongoose'

export const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/todo-db')
  } catch (error) {
    console.error(error)
  }
}
