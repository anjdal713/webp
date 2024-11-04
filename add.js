onmessage = function(e) {
    let from = parseInt(e.data.from);
    let to = parseInt(e.data.to);
    let result = from * to;
    postMessage(result);
}