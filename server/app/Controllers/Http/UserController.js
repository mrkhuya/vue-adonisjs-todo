'use strict'
const User = use('App/Models/User')

class UserController {

  async login({ request, auth }){
    const { email, password } = request.all()
    const token = auth.attempt(email, password)
    return token
  }

  async register({ request }){
    const { email, password } = request.all()
    await User.create({
      email,
      password,
      username: email
     })
     return this.login(...arguments) //Dong code nay la sao?
  }
}

module.exports = UserController
