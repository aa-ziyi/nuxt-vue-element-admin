export default function({ $axios, redirect, ...other }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url);
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    console.log('onError axios');
    if (code === 400) {
      redirect('/400');
    }
  });
}
