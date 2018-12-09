import Model from '../models/Model'

class ModelController {
  public async index (req, res) {
    const model = new Model(req.params.collection).model()
    const filters = {}
    const docs = await model.paginate(filters, {
      limit: 20,
      page: req.query.page || 1,
      sort: '-created_at'
    })
    return res.json(docs)
  }

  public async show (req, res) {
    const model = new Model(req.params.collection).model()
    return res.json(await model.findById(req.params.id))
  }

  public async store (req, res) {
    const Doc = new Model(req.params.collection).model(req.body)
    const doc = Doc.create(req.body)
    return res.json(doc)
  }

  public async update (req, res) {
    const model = new Model(req.params.collection).model(req.body)

    return res.json({
      doc: await model.findOneAndUpdate(req.params.id, req.body, {
        new: true
      })
    })
  }

  public async destroy (req, res) {
    const model = new Model(req.params.collection).model()
    await model.findOneAndDelete(req.params.id)
    return res.send()
  }
}

export default new ModelController()
