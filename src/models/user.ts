import mongoose from 'mongoose'

export interface IUser {
  userName: string,
  hashedPassword: string
}

interface UserDocument extends mongoose.Document, IUser { }

interface UserModel extends mongoose.Model<UserDocument> {
  build(attr: IUser): UserDocument
}

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  houses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House"
    }
  ],
  rented: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "House"
    }
  ],
})

export const User = mongoose.model<UserDocument, UserModel>('User', userSchema)

userSchema.statics.build = (attr: IUser) => {
  return new User(attr)
}








