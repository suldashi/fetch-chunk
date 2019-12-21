export default async function fetchChunk(url, opts) {
    let onProgress = opts?opts.onProgress:undefined;
    const response = await fetch(url, opts);
    const reader = response.body.getReader();
    let result = await reader.read();
    let total = 0;

    while (!result.done) {
        const value = result.value;
        total += value.length;
        if(typeof onProgress === "function") {
            onProgress(value);
        }
        result = await reader.read();
    }

    return total;
}