# text-copy
a small js library (238 bytes gzipped) for copying text to clipboard.

Tested on: Chrome, Firefox, Safari, Edge and IE11.

## Browser usage
Load `index.js`. You can use a CDN like below.
```
<script src="//cdn.jsdelivr.net/npm/text-copy/index.min.js" ></script>
```
Then `CopyText` function is availabe. Use it like below.

```
<button onClick="CopyText('text to copy')">copy</button>
```

`CopyText()` returns `true` if text is successfully copied.

## NPM usage
If you want to use it in JS frameworks like Vue or React, install it as below.
```
npm i text-copy
```
and then use it as below
```
import copy from 'text-copy'

// some where it the code
let isCopied = copy('text to copy')
```

**Note**: copy function should be called inside a user-generated event listener.
