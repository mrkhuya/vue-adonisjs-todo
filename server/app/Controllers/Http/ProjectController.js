'use strict'

const Project = use('App/Models/Project')
const AuthorizationService = use('App/Services/AuthorizationServices')

class ProjectController {

  async index({ auth }) {
    const user = await auth.getUser()
    console.log(user)
    return await user.projects().fetch()
  }

  async create ({ auth, request }){
    const user = await auth.getUser()
    const { title } = request.all()
    const project = new Project()
    project.fill({
      title,
    })
    await user.projects().save(project)
    return project
  }

  async destroy({request, response, auth, params}) {
    const user = await auth.getUser()
    const { id } = params
    const project = await Project.find(id)
    AuthorizationService.verifyPermission(project, user) //check permission
    await project.delete()
    return project
  }


}

module.exports = ProjectController
