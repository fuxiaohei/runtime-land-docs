# Encoding

### TextEncoder

The [`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) class provides an interface for encoding strings into a sequence of bytes. It is used to convert strings into a format that can be transmitted over the network or stored in a file.

Currently encoding is only **UTF-8**.

```js
const encoder = new TextEncoder();
encoder.encoding; // 'utf-8'
const encoded = encoder.encode('Hello, World!'); // Uint8Array(13)
```

### TextDecoder

The [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) class provides an interface for decoding sequences of bytes into strings. It is used to convert data received over the network or stored in a file into a human-readable format.

Currently decoding is only **UTF-8**.

```js
const decoder = new TextDecoder();
// encoded from TextEncoder above as Uint8Array(13)
decoder.decode(encoded); // 'Hello, World!'
```

