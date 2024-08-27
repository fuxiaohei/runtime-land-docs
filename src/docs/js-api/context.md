# Context

The `ExecutionContext` class provides methods to visit and handle context data beyond js runtime. It is used in fetch handling. For example:

```js
export default {
    // ctx is the ExecutionContext object
    async fetch(request, env, ctx){
        return new Response("Hello, World!");
    }
}
```

### waitUntil

`waitUntil` is a method that is called when the request is finished. It is used to handle other tasks beyond blocking http response. It accept a Promise as an argument. The runtime will continue to wait for the Promise to resolve even if the response is already sent.

`waitUntil` is common used to:

- Push request message to logging service, or anaylysis service.
- Push items into cache.

`waitUntil` can be called multiple times. The added promises will be executed totally, no matter one of them is rejected.

```js
export default {
  async fetch(request, env, ctx) {
    const log_message = async function(){
        // In real use, you can push the message to a logging service
        console.log("Someone viewed this page!",request.url);
    };
    ctx.waitUntil(log_message());
    return new Response("Hello, World!");
  },
};
```

::: warning
It's no way to expose failed message if the promise is rejected in `waitUntil`. You need to monitor the case with relative service. Such as monitor messages counts in logging service that compares with the view counts.
:::