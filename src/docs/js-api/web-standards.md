# Web Standards

### JavaScript Standards

All of the JavaScript [standard built-ins](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) are provided by the QuickJS runtime. You can safely to use them without any further configuration.

For security reasons, the following built-ins are not allowed to be used:

- `eval`
- `new Function`

### Base64 encoding and decoding

- [`btoa()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/btoa)
- [`atob()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/atob)

### Timers

- [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [`clearTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)
- [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)

### Encoding API

The `TextEncoder` and `TextDecoder` support **UTF-8** encoding/decoding. The `TextEncoderStream` and `TextDecoderStream` classes are also available.

Read the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API) for more information.

