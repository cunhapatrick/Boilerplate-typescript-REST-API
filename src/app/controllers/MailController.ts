import User from '../models/User'
import MailJob from '../jobs/MailJob'
import Queue from '../services/Queue'

class MailController {
  public async store (req, res) {
    const user = await User.findById(req.userId)

    Queue.create(MailJob.key, {
      user
    }).save()

    return res.send()
  }
}

export default new MailController()
