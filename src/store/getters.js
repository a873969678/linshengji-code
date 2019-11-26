const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  permission_routes: state => state.permission.routers,
  routers_status: state => state.permission.status,
  rooterBtnType: state => state.permission.rooterBtnType,
  rooterBtn: state => state.permission.rooterBtn
}
export default getters
