import {Schema,model,models,modelNames} from 'mongoose'
import * as moment from 'moment'

class Model {
  public collection: String

  constructor (collection) {
    this.collection = collection
  }

  public collectionName () {
    return this.collection
  }

  public model (fields = undefined) {
    if (typeof fields === 'undefined') {
      return modelNames()
        .find(collectionName => collectionName === this.collection)
        ? model(this.collection)
        : model(this.collection, {})
    } else {
      let schemaAttr = {}

      Object.keys(fields).map(name => {
        // check if field is string or date
        if (typeof fields[name] === 'string') {
          schemaAttr[name] = moment(
            fields[name],
            ['YYYY-MM-DD', 'YYYY-MM-DDTHH:mm:ss.SSSZ'],
            true
          ).isValid()
            ? Date
            : String
        } else schemaAttr[name] = typeof fields[name]
      })

      schemaAttr['created_at'] = { type: Date, default: Date.now }
      schemaAttr['updated_at'] = { type: Date, default: Date.now }

      const schema = new Schema(schemaAttr)
      schema.plugin(require('mongoose-paginate'))

      schema.pre('findOneAndUpdate', async function (next) {
        this.updated_at = Date.now()
      })

      if (
          modelNames()
          .find(collectionName => collectionName === this.collection)
      ) {
        delete models[this.collection]

        return model(this.collection, schema)
      } else {
        return model(this.collection, schema)
      }
    }
  }
}

export default Model
