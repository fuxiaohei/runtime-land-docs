# Fetch

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides a way to fetch http resources from the network. 

::: info
`fetch` must be executed within a handler. It will throw an error if it is called outside of a handler.

```js

// this will throw an error
const resp = await fetch('URL_ADDRESS');

export default {
    async fetch(request, env, ctx) {
        // the fetch must be executed within a handler
        // const resp = await fetch('URL_ADDRESS');
        return resp;
    }
}
```
:::

#### Timeouts

The default timeout for fetch is 10000 miliseconds (10 seconds). It can be changed by setting `timeout` in `fetch` options.

```js
export default {
    async fetch(request, env, ctx) {
        const resp = await fetch('URL_ADDRESS', {
            timeout: 20000 // 20 seconds
        });
        return resp;
    }
}
```

The function's timeout limit is 30 seconds. If the function timeout is exceeded, the fetch will be terminated.

#### Limits

- The maximum requests in one function is 5;
- It is possible to fetch another project's resources. But it is danger to call recursive fetch. **The maximum depth of recursive fetch is 3**.
