
function CreateColorPicker(element){
    var corners = {
        topLeft: [1, 1, 1, 1],
        topRight: [0, 0, 0, 1],
        bottomLeft: [1, 0, 0, 1],
        bottomRight: [0, 0, 0, 1]
    }
    var cp = $(element);
    var hueSlider = cp.children(".hueSlider");
    var hueSliderHandle = hueSlider.children(".handle");
    var hueSliderCtx = hueSlider.children("canvas").getContext("2d");
    var colorSpace = cp.children(".colorSpace");
    var colorSpaceSelector = colorSpace.children(".selector");
    var colorSpaceCtx = colorSpace.children("canvas").getContext("2d");
}

function quadGradient(corners, ctx) {
    var gradient, startColor, endColor, fac;

    for(var i = 0; i < h; i++) {
        gradient = ctx.createLinearGradient(0, i, w, i);
        fac = i / (h - 1);

        startColor = arrayToRGBA(
          lerp(corners.topLeft, corners.bottomLeft, fac)
        );
        endColor = arrayToRGBA(
          lerp(corners.topRight, corners.bottomRight, fac)
        );

        gradient.addColorStop(0, startColor);
        gradient.addColorStop(1, endColor);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, i, w, i);
    }
}

function arrayToRGBA(arr) {
    var ret = arr.map(function(v) {
        // map to [0, 255] and clamp
        return Math.max(Math.min(Math.round(v * 255), 255), 0);
    });

    // alpha should retain its value
    ret[3] = arr[3];

    return 'rgba(' + ret.join(',') + ')';
}

function lerp(a, b, fac) {
    return a.map(function(v, i) {
        return v * (1 - fac) + b[i] * fac;
    });
}