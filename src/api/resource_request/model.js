import mongoose, { Schema } from 'mongoose'

const resourceRequestSchema = new Schema({
  resourceId: {
    type: String
  },
  requestId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

resourceRequestSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      resourceId: this.resourceId,
      requestId: this.requestId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ResourceRequest', resourceRequestSchema)

export const schema = model.schema
export default model
