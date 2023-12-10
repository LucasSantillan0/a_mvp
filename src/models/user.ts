import mongoose from 'mongoose'

export interface IUser {
  userName:string,
  hashedPassword:string
}

interface UserDocument extends mongoose.Document, IUser {}

interface UserMode extends mongoose.Model<UserDocument> {
  build(attr: IUser): UserDocument
}

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

userSchema.statics.build = (attr: IUser) => {
  return new User(attr)
}

export const User = mongoose.model<UserDocument, UserMode>('User', userSchema)







