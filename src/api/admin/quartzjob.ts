/* global PREV */
import {request} from '../common'

let prev = process.env.VUE_APP_PREV
// let prev = PREV
export default {
  quartzjob: {
    add(info: object) {
      return request('post', prev + '/quartzJob/insert', info)
    },
    update(info: object) {
      return request('post', prev + '/quartzJob/update', info)
    },
    delete(ids: string[]) {
      return request('post', prev + '/quartzJob/delete', ids)
    },
    paged(query: object) {
      return request('post', prev + '/quartzJob/paged', query)
    },
    run(id: string) {
      return request('get', prev + '/quartzJob/run/' + id)
    },
    control(obj: object) {
      return request('post', prev + '/quartzJob/control', obj)
    }
  },
  quartzGroup: {
    add(info: object) {
      return request('post', prev + '/quartzGroup/insert', info)
    },
    update(info: object) {
      return request('post', prev + '/quartzGroup/update', info)
    },
    delete(id: string) {
      return request('get', prev + '/quartzGroup/delete/' + id)
    },
    all() {
      return request('get', prev + '/quartzGroup/all')
    }
  },
  quartzjobLog: {
    paged(query: object) {
      return request('post', prev + '/quartzJobLog/paged', query)
    }
  }
}
