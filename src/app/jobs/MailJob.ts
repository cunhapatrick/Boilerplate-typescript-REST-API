import Mail from'../services/Mail'

class MailJob {
  public get key () {
    return 'MailJob'
  }

  public async handle (job, done) {
    const { user } = job.data
    await Mail.sendMail({
      from: `"Patrick Cunha" <${user.email}>`,
      to: `${user.email}`,
      subject: `Teste de email`,
      template: 'default',
      context: { user }
    })

    return done()
  }
}

export default new MailJob()
