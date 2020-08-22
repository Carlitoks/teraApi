import mongoose, { Schema } from 'mongoose'

const requestSchema = new Schema({
  userId: {
    type: String
  },
  creationDate: {
    type: String
  },
  expirationDate: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

requestSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      creationDate: this.creationDate,
      expirationDate: this.expirationDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Request', requestSchema)

export const schema = model.schema
export default model
