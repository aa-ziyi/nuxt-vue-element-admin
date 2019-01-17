export default function({ $axios, redirect, app, ...other }) {
  $axios.onRequest(config => {
    config.headers['Content-Type'] = 'application/json';
    let token = 'get token';
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  });

  $axios.onResponse(response => {
    const { data } = response;
    console.log({ ...other });
    // 拦截状态做重定项
    if (data.status === '401.1') {
      app.router.push('/user');
      return;
    }
  });

  $axios.onError(error => {
    // 网络异常等其他情况
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect('/400');
    }
  });
}
