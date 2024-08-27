# Request/Response

### Request

The [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) is part of URL_ADDRESS is part of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). It represents an HTTP request and provides information about the request.

In fetch handler, you can get the request object by `request` parameter of incoming request.

```js
export default {
  async fetch(request, env, ctx) {
    return new Response(`Hello, ${request.url}`);
  }
}
```

**The incoming requests is immutable**. You can create a new request object by passing the URL to the `Request` constructor to fetch remote resources.

```js
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    // add query parameter
    url.searchParams.set('name', 'John');
    const response = await fetch(url.toString(), request);
    return new Response(response.body, response);
  }
}
```

#### Constructor

```js
let request = new Request(input, options);

// input: string | Request
// options: RequestInit
let request = new Request('URL_ADDRESS', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John'
  }),
  redirect: 'follow'
});
```

`options.redirect` is used to specify how to handle redirects. It can be one of the following values: `follow` (default), `error`, `manual`.

#### Properties

- `request.url`: The URL of the request, string readonly.
- `request.method`: The HTTP method of the request, e.g. `GET`, `POST`, `PUT`, `DELETE`, etc.
- `request.headers`: A `Headers` object containing the request headers.
- `request.body`: A `ReadableStream` object containing the request body.
- `request.bodyUsed`: A boolean indicating whether the request body has been used.
- `request.redirect`: The redirect mode of the request, one of `follow`, `error`, `manual`.

#### Methods

- `request.clone()`: Returns a new `Request` object with the same properties as the original request.
- `request.arrayBuffer()`: Returns a `Promise` that resolves to a `ArrayBuffer` containing the request body.
- `request.formData()`: Returns a `Promise` that resolves to a `FormData` object containing the request body.
- `request.json()`: Returns a `Promise` that resolves to a JSON object containing the request body.
- `request.text()`: Returns a `Promise` that resolves to a string containing the request body.

### Response

The [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) is a part of [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). It represents an HTTP response and provides information about the response.

#### Constructor

```js
let response = new Response(body, options);

// body: string | Blob | BufferSource | FormData | URLSearchParams | ReadableStream | null
// options: ResponseInit
let response = new Response('Hello, World!', {
  status: 200,
  statusText: 'OK',
  headers: {
    'Content-Type': 'text/plain'
  }
});
```

The `body` parameter can be `null` or a `ReadableStream` object, a `BufferSource` object, a `FormData` object, a `URLSearchParams` object and `string`.

#### Properties

- `response.status`: The HTTP status code of the response, number readonly.
- `response.statusText`: The HTTP status text of the response, string readonly.
- `response.headers`: A `Headers` object containing the response headers.
- `response.url`: The URL of the response, string readonly.
- `response.body`: A `ReadableStream` object containing the response body.
- `response.bodyUsed`: A boolean indicating whether the response body has been used.
- `response.ok`: A boolean indicating whether the response is successful (status in the range 200-299).
- `response.redirected`: A boolean indicating whether the response was redirected.

#### Static methods

- `Response.error()`: Returns a new `Response` object with the specified status code and status text.
- `Response.redirect(url, status)`: Returns a new `Response` object with the specified status code and status text and a `Location` header set to the specified URL.
- `Response.clone(response)`: Returns a new `Response` object with the same properties as the specified response.

#### Methods

- `response.arrayBuffer()`: Returns a `Promise` that resolves to a `ArrayBuffer` containing the response body.
- `response.formData()`: Returns a `Promise` that resolves to a `FormData` object containing the response body.
- `response.json()`: Returns a `Promise` that resolves to a JSON object containing the response body.
- `response.text()`: Returns a `Promise` that resolves to a string containing the response body.

#### About Cotent-Length

The `Content-Length` header is auto calculated by the `Response` object. But `ReadableStream` object can not be calculated. The `Content-Length` will be set `Transfer-Encoding: chunked`.