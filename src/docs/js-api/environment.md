# Environment

Environment variables are a way to pass simple text or json data to your functions. It can be access on `env` parameter in fetch handler.

Refer to the following example on how to use environment variable `APT_HOST` in your function.

```js
export default {
  async fetch(request, env, ctx) {
    return new Response(`API host: ${env.API_HOST}`);
  }
}
```

Environment variables are **encrypted** by default on the cloud. In dashboard, you can not read the value of the environment variable after submit.