import auth from '~/utils/index';

export default function(context) {
  // 这里做路由权限的拦截
  const user = auth.getCurrentUser();
  const { permissions = [] } = user ? JSON.parse(user) : {};
  const whitList = ['/', '/login', '/403'];
  // if (permissions.length) {
  //   console.log('auth', context);
  //   console.log('route', context.route);
  //   if (
  //     whitList.indexOf(context.route.path) < 0 &&
  //     permissions.indexOf(context.route.path) < 0
  //   ) {
  //     context.redirect('/403');
  //   }
  // }
}

// '/path', ':'
