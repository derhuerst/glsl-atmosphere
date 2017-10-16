var glslify = require('glslify');
var glShader = require('gl-shader');
var test = require('tape');
var createShaderOutput = require('gl-shader-output');
var almostEqual = require('array-almost-equal');

var vertexShader = glslify('../example/example.vert');
var fragmentShader = glslify('../example/example.frag');
function program (gl) {
    return glShader(gl, vertexShader, fragmentShader);
}

test('works', function (t) {
    var draw = createShaderOutput(program);
    var color = draw({
        uSunPos: [0, Math.cos(.025) * 0.3 + 0.2, -1]
    });

    var tolerance = 0.01;
    t.ok(almostEqual(color, [0.0, 0.5, 0.0, 1.0], tolerance));
});