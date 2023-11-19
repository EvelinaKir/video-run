const timestampToString = function (input: number, fps?: number) {
    const pad = function (input: number) {
        return (input < 10) ? "0" + input : input;
    };
    fps = (typeof fps !== 'undefined' ? fps : 24);
    return [
        pad(Math.floor(input % 3600 / 60)),
        pad(Math.floor(input % 60)),
        pad(Math.floor(input * fps % fps))
    ].join(':');
}

export default timestampToString