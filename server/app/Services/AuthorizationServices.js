'use strict'
const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')
class AuthorizationServices
{
  verifyPermission(resource, user){
    console.log('=> AuthorizationServices')
    if(!resource){
      console.log('resource not exist')
      throw new ResourceNotExistException()
    }
    if(resource.user_id !== user.id){
      console.log('invalid access')
      throw new InvalidAccessException()
    }
  }
}

module.exports = new AuthorizationServices()
