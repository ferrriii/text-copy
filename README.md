# text-copy
<img alt="downloads" src="https://img.shields.io/npm/dt/text-copy?style=flat-square"> <img alt="version" src="https://img.shields.io/npm/v/text-copy?style=flat-square"> <img alt="issues" src="https://img.shields.io/github/issues/ferrriii/text-copy?style=flat-square"> <img alt="package size" src="https://img.shields.io/bundlephobia/minzip/text-copy?style=flat-square"> <img alt="forks" src="https://img.shields.io/github/forks/ferrriii/text-copy?style=flat-square"> <img alt="stars" src="https://img.shields.io/github/stars/ferrriii/text-copy?style=flat-square"> <img alt="license" src="https://img.shields.io/github/license/ferrriii/text-copy?style=flat-square"> <img alt="programming language" src="https://img.shields.io/github/languages/top/ferrriii/text-copy?style=flat-square">

a small js library ( <img alt="preview badge" src="https://img.shields.io/bundlephobia/minzip/text-copy?style=flat-square"> ) for copying text to clipboard.

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
