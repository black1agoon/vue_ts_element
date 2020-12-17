/* global PREV */

import {request} from '../common'
// let prev = PREV
let prev = process.env.VUE_APP_PREV
console.log(prev)
export default {
  public: {
    login(user: object) {
      return request('post', prev + '/public/login', user)
    },
    logout() {
      return request('post', prev + '/public/logout')
    },
    uploadAvatar(file: File) {
      let data = new FormData()
      data.append('file', file)
      // let headers = {'Content-Type': 'multipart/form-data'}
      return request('post', prev + '/admin/upload/uploadAvatar', data)
    },
    uploadDoc(file: File) {
      let data = new FormData()
      data.append('file', file)
      // let headers = {'Content-Type': 'multipart/form-data'}
      return request('post', prev + '/upload/uploadDoc', data)
    },
    uploadPic(file: File) {
      let data = new FormData()
      data.append('file', file)
      // let headers = {'Content-Type': 'multipart/form-data'}
      return request('post', prev + '/upload/uploadPic', data)
    },
    uploadVideo(file: File) {
      let data = new FormData()
      data.append('file', file)
      // let headers = {'Content-Type': 'multipart/form-data'}
      return request('post', prev + '/upload/uploadVideo', data)
    },
    getRegionProv() {
      return request('get', prev + '/region/prov')
    },
    getRegionCities(prov: string) {
      return request('get', prev + '/region/cities', {prov})
    },
    getRegionDistrict(city: string) {
      return request('get', prev + '/region/district', {city})
    },
    getRegionById(id: string) {
      return request('get', prev + '/region/getRegionById', {id})
    },
    updateCache() {
      return request('post', prev + '/public/updateCache')
    }
  },
  permission: {
    getAllPermissionTree() {
      return request('get', prev + '/admin/permission/newpermission')
    },
    get(id: string) {
      return request('post', prev + '/admin/permission/get', {id})
    },
    addPermission(info: object) {
      return request('post', prev + '/admin/permission/add', info)
    },
    updatePermission(info: object) {
      return request('post', prev + '/admin/permission/update', info)
    },
    delete(idList: string[]) {
      return request('get', prev + '/admin/permission/del', {idList: idList.toString()})
    },
    getPermissRoleTree(query: object) {   // 用于显示角色对应的树状权限列表,获取子系统下所有的权限
      return request('post', prev + '/admin/permission/roletree', query)
    },
    getMenuBindRole(id: string) {
      return request('get', prev + '/admin/permission/getRoleListByPermissionId', {id})
    },
    removeRel(params: object) {
      return request('post', prev + '/admin/permission/delRoleRelPermission', params)
    }
  },
  dictionary: {
    addAttrCode(info: object) {
      return request('post', prev + '/attrCode/add', info)
    },
    updateAttrCode(info: object) {
      return request('post', prev + '/attrCode/update', info)
    },
    deleteAttrCode(id: string) {
      return request('get', prev + '/attrCode/del', {id})
    },
    getAttrCodeById(id: string) {
      return request('get', prev + '/attrCode/get', {id})
    },
    getPaged(query: object) {
      return request('post', prev + '/attrCode/paged', query)
    },
    addAttrValue(info: object) {
      return request('post', prev + '/admin/attrValue/add', info)
    },
    updateAttrValue(info: object) {
      return request('post', prev + '/admin/attrValue/update', info)
    },
    deleteAttrValue(id: string) {
      return request('get', prev + '/admin/attrValue/del', {id})
    },
    getAttrValueById(id: string) {
      return request('get', prev + '/admin/attrValue/get', {id})
    },
    getValuePaged(query: object) {
      return request('post', prev + '/admin/attrValue/getPagedByAttrCode', query)
    }
  },
  department: {
    getTree() {
      return request('get', prev + '/admin/department/tree')
    },
    getDepartment(id: string) {
      return request('get', prev + '/admin/department/get', {id})
    },
    addDepartment(info: object) {
      return request('post', prev + '/admin/department/add', info)
    },
    updateDepartment(info: object) {
      return request('post', prev + '/admin/department/update', info)
    },
    deleteDepartment(id: string) {
      return request('get', prev + '/admin/department/del', {id})
    },
    getTreeNoOwn(info: object) {
      return request('post', prev + '/admin/department/treeNoOwn', info)
    }
  },
  user: {
    getPaged(query: object) {
      return request('post', prev + '/admin/user/paged', query)
    },
    addUser(info: object) {
      return request('post', prev + '/admin/user/add', info)
    },
    updateUser(info: object) {
      return request('post', prev + '/admin/user/update', info)
    },
    delete(id: string) {
      return request('post', prev + '/admin/user/del', {id})
    },
    getUser(id: string) {
      return request('post', prev + '/admin/user/get', {id})
    },
    updateUserPwd(info: object) {
      return request('post', prev + '/admin/user/updatePassword', info)
    },
    enableUser(info: object) {
      return request('post', prev + '/admin/user/enable', info)
    },
    disableUser(info: object) {
      return request('post', prev + '/admin/user/disable', info)
    },
    getNoUsedPaged(query: object) {
      return request('post', prev + '/admin/user/pagedNoUsed', query)
    },
    resetPassword(id: string) {
      return request('post', prev + '/admin/user/resetPassword', {id})
    }
  },
  role: {
    getPaged(query: object) {
      return request('post', prev + '/admin/role/paged', query)
    },
    addRole(info: object) {
      return request('post', prev + '/admin/role/add', info)
    },
    updateRole(info: object) {
      return request('post', prev + '/admin/role/update', info)
    },
    deleteRole(id: string) {
      return request('post', prev + '/admin/role/del', {id})
    },
    getRole(id: string) {
      return request('post', prev + '/admin/role/get', {id})
    },
    setRolePermission(query: object) {
      return request('post', prev + '/admin/role/setRolePermission', query)
    },
    setUserRoles(info: object) {
      return request('post', prev + '/admin/role/setUserRole', info)
    },
    disassociationUserForRole(query: object) {
      return request('post', prev + '/admin/userRelRole/disassociationUsersForRole', query)
    }
  },
  mock: {
    paged(query: object) {
      return request('post', prev + '/mock/paged', query)
    },
    addUser(info: object) {
      return request('post', prev + '/mock/adduser', info)
    },
    updateUser(info: object) {
      return request('post', prev + '/mock/updateuser', info)
    },
    deleteUser(id: string) {
      return request('get', prev + '/mock/deleteuser', {id})
    },
    get(id: string) {
      return request('get', prev + '/mock/getuser', {id})
    }
  }
}
