# Runtime.land

::: tip
This documentation is still work in progress.
:::

Runtime.land is a platform for running serverless functions. It is designed to be simple, fast, and easy to use. It is built on top of WebAssembly and is designed to be language agnostic. This means you can write your functions in any language that compiles to WebAssembly.

::: warning
Currently we only support **JavaScript/TypeScript**, but we are working on adding support for more languages.
:::

## JavaScript API

Read full [JavaScript API](/docs/js-api/) documentation to learn more about the JavaScript API. Or you can learn examples below to get started.

## Hello World Example

Create new project in the Runtime.land dashboard and add a new function with the following code:

```javascript
/**
 * @typedef {Object} Env
 */

export default {
  /**
   * @param {Request} request
   * @param {Env} env
   * @param {ExecutionContext} ctx
   * @returns {Response}
   */
  fetch(request, env, ctx) {
    return new Response("<h1>Hello, Runtime.land JS SDK</h1>", {
      headers: {
        "content-type": "text/html",
      },
    });
  },
}
```

::: info
The API definition is similar to the [Cloudflare Workers](https://developers.cloudflare.com/workers/learning/how-workers-works) API. We will keep it compatible with Cloudflare Workers as much as possible with developing features in the future.
:::

