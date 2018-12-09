import User from '../models/User'

class SessionController {
  public async store (req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ error: 'User nor found' })
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    return res.json({ user, token: User.generateToken(user) })
  }
}

export default new SessionController()
