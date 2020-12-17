import store from '@/store'
interface Treedata {
  id: string,
  label: string,
  icon: string,
  resourceType: number,
  children: any[] | undefined
}

export default {
  getMenuChildKey () {
    return 'childUserPermission'
  },
  getMainButtons (): any[] {
    let path = store.state.route.path
    let menus = store.state.admin.menus
    let buttons: any[] = []
    if (menus) {
      let cup = this.getMenuChildKey()
      let findButtons = (menus: any[]) => {
        menus.find(menu => {
          if (menu.resourceType === '0') {
            // menu is a folder
            return findButtons(menu[cup])
          } else {
            // menu is a page
            if (menu.url === path && menu[cup]) {
              buttons = menu[cup].sort((b1: any, b2: any) => b1.seq - b2.seq).filter((n:any) => {
                return n.resourceType !== '3'
              })
              return true
            }
          }
          return false
        })
      }
      findButtons(menus)
    }
    return buttons
  },
  getMainFilterButtons (buttons: any[], filter = []): any[] {
    let _filter = ['btnEdit', 'btnDelete'].concat(filter)
    return buttons.filter(btn => !_filter.includes(btn.btnKey))
  },
  getTableButtons (buttons: any[], includes = []): any[] {
    let _includes = ['btnEdit', 'btnDelete'].concat(includes)
    return buttons.filter(btn => {
      return _includes.includes(btn.btnKey)
    })
  },
  getPidName (treedata: any[], pid: string): any {
    let itemlist: any[] = []
    let traverse = (list: any[]) => {
      list.forEach(i => {
        itemlist.push(i)
        i.children && traverse(i.children)
      })
    }
    traverse(treedata)
    let node = itemlist.find(item => {
      return item.id === pid
    })
    return node ? node.label : '根部门'
  },
  getCheckedList (data: any[], key: string): any[] {
    let itemlist: any[] = []
    let traverse = (list: any[]) => {
      list.forEach(i => {
        let con1 = i.resourceType === '2' || (i.resourceType === '3' && i[key] && i[key].length === 0)  // 该节点是 按钮 或者 (权限 权限下面没内容)
        let con2 = i.resourceType === '1' && (i[key].length === 0)   // 该节点是页面, 并且页面下没有挂在任何权限
        if (i.selected === '1' && (con1 || con2)) {
          itemlist.push(i.id)
        }
        i[key] && i[key].length > 0 && traverse(i[key])
      })
    }
    traverse(data)
    return itemlist
  },
  getTreeData: (treedata: any[], childProp: string, prop: string) => {
    let sortNodes = (nodes: any[]) => nodes.sort((a, b) => a.seq - b.seq)
    let setName = (node: any): Treedata => {
      let hasChildren = node[childProp] && node[childProp].length > 0
      return {
        id: node.id,
        label: node[prop],
        icon: hasChildren ? 'fa-folder' : 'fa-gear',
        resourceType: node.resourceType,
        children: hasChildren ? sortNodes(node[childProp]).map(setName) : undefined,
      }
    }
    return sortNodes(treedata).map(setName)
  },
  getTreeNode (treedata: any[], nodeid: string, prop: string): Treedata | null { // 根据节点id 获取该节点
    let nd = null
    let traverse = (list: any[]) => {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === nodeid) {
          nd = list[i]
          return false
        } else {
          traverse(list[i][prop])
          // list[i][prop] && traverse(list[i][prop])
        }
      }
    }
    traverse(treedata)
    return nd
  },
  getCascaderData: (treedata: any[], childProp: string, filter: any = null) => {
    let sortNodes = (nodes: any[]) => nodes.sort((a, b) => a.seq - b.seq)
    let setName = (node: any): any => {
      let hasChildren = node[childProp] && node[childProp].length > 0 && (!filter || filter._filter(node))
      return {
        value: node.id,
        label: node.name,
        children: hasChildren ? sortNodes(node[childProp]).map(setName) : undefined,
      }
    }
    return sortNodes(treedata).map(setName)
  },
  getImgUrl: (url: string): string => {
    return url ? process.env.SERVER_URI + url : ''
  },
  getFlieList: (list: any[]): {name: string, url: string}[] => {
    if (list && Array.isArray(list) && list.length > 0) {
      return list.map(l => ({
        name: l.split('/')[l.split('/').length - 1],
        url: process.env.SERVER_URI + l,
      }))
    } else {
      return []
    }
  },
  formatBirthday: (birthday: string): string => {
    return birthday ? birthday.substring(0, 10) : ''
  },
}
