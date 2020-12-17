import {request} from '../common'
let prev = process.env.VUE_APP_PREV
export default {
  clientGroup: {
    add(info: object) {
      return request('post', prev + '/base/clientGroup/add', info)
    },
    update(info: object) {
      return request('post', prev + '/base/clientGroup/update', info)
    },
    delete(id: string) {
      return request('post', prev + '/base/clientGroup/del', {id})
    },
    paged(query: object) {
      return request('post', prev + '/base/clientGroup/paged', query)
    },
    setClientGroupPermission(query: object) {
      return request('post', prev + '/base/clientGroup/setClientGroupPermission', query)
    },
    setclientGroup(info: object) {
      return request('post', prev + '/base/clientGroup/setclientGroup', info)
    },
    disassociationClientsForGroup(info: object) {
      return request('post', prev + '/api/clientRelClientGroup/disassociationClientsForGroup', info)
    }
  },
  clientPermission: {
    add(info: object) {
      return request('post', prev + '/base/clientPermission/add', info)
    },
    delete(idList: string[]) {
      return request('get', prev + '/base/clientPermission/del', {idList: idList.toString()})
    },
    update(info: object) {
      return request('post', prev + '/base/clientPermission/update', info)
    },
    get(id: string) {
      return request('post', prev + '/base/clientPermission/get', {id})
    },
    getRoleListByPermissionId(id: string) {
      return request('get', prev + '/base/clientPermission/getGroupListByPermissionId', {id})
    },
    newpermission() {
      return request('get', prev + '/base/clientPermission/newpermission')
    },
    delGroupRelPermission(params: object) {
      return request('post', prev + '/base/clientPermission/delGroupRelPermission', params)
    },
    groupTree(id: string) {   // 用于显示角色对应的树状权限列表,获取子系统下所有的权限
      return request('post', prev + '/base/clientPermission/groupTree', {id})
    }
  },
  client: {
    add(info: object) {
      return request('post', prev + '/base/client/add', info)
    },
    update(info: object) {
      return request('post', prev + '/base/client/update', info)
    },
    delete(id: string) {
      return request('post', prev + '/base/client/del', {id})
    },
    get(id: string) {
      return request('post', prev + '/base/client/get', {id})
    },
    paged(query: object) {
      return request('post', prev + '/base/client/paged', query)
    },
    enable(info: object) {
      return request('post', prev + '/base/client/enable', info)
    },
    disable(info: object) {
      return request('post', prev + '/base/client/disable', info)
    },
    updatePassword(id: string) {
      return request('post', prev + '/base/client/updatePassword', {id})
    }
  },
  clientPiece: {
    add(info: object) {
      return request('post', prev + '/base/clientPiece/add', info)
    },
    update(info: object) {
      return request('post', prev + '/base/clientPiece/update', info)
    },
    delete(idList: string[]) {
      return request('get', prev + '/base/clientPiece/del', {idList: idList.toString()})
    },
    get(id: string) {
      return request('post', prev + '/base/clientPiece/get', {id})
    },
    groupTree() {
      return request('post', prev + '/base/clientPiece/groupTree', {id: 0})
    },
    paged(query: object) {
      return request('post', prev + '/base/clientPiece/paged', query)
    }
  }
}
