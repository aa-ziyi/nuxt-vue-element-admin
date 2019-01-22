// 菜单权限控制
export default [
  {
    path: '/',
    title: '首页'
  },
  {
    path: '/user',
    title: '用户管理',
    permissions: 'welcome'
  },
  {
    path: '/setting',
    title: '系统管理',
    permissions: 'sys-manage-a'
  }
];
