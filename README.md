# fetch-chunk

This module is an extension of the browser fetch function, allowing us to process
incoming data in chunks instead of waiting for the full fetch to complete.


Installation
------------

`fetch-chunk` has no dependencies, but it only works on browsers with async/await
support.

Simply install `fetch-chunk` using `npm`:

``` bash
npm install fetch-chunk
```

Then, you can import it on your project using the following code:
``` javascript
import fetchChunk from "fetch-chunk";

//OR

const fetchChunk = require("fetch-chunk");
```

If you want to use a `script` tag, you need to include the `fetch-chunk.build.js`
file, like so:

``` html
<script src="fetch-chunk.build.js"></script>
```

The `fetchChunk` function will then be available in the browser's `window` object.

Usage
-------

The `fetchChunk(url, opts)` function has the same signature and behavior as the
standard `fetch(url, opts)` function, but the `opts` object can accept an additional
callback function named `onProgress` that is called regularly as the data comes in.
This callback takes a `data` argument, which will contain the chunk of data, in
`Uint8Array` format. Note that the incoming data is not cumulative, meaning that
each call of `onProgress` will contain just that particular chunk that has arrived,
not all the data so far.


Example
-------

``` javascript
fetchChunk("url/to/big/file.mp4", {
    onProgress:(data) => {
    // process the data here.
    // data is a Uint8Array object
    }
});
```

How to build
-------

To build from source, you will need `browserify` installed globally in your system.
You can do that by typing the following command:

``` bash
npm install -g browserify
```

Then, run the following command to build the final file:

``` bash
browserify fetch-chunk.src.js --standalone fetchChunk > fetch-chunk.build.js
```

License: MIT