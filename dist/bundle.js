/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/engine.ts\");\n\nvar engine;\nwindow.onload = function () {\n    engine = new _engine__WEBPACK_IMPORTED_MODULE_0__[\"Engine\"]();\n    engine.start();\n};\nwindow.onresize = function () {\n    engine.resize();\n};\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/buffer.ts":
/*!***********************!*\
  !*** ./src/buffer.ts ***!
  \***********************/
/*! exports provided: AttributeInfo, GLBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AttributeInfo\", function() { return AttributeInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLBuffer\", function() { return GLBuffer; });\n/* harmony import */ var _glutilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glutilities */ \"./src/glutilities.ts\");\n\nclass AttributeInfo {\n    constructor() {\n        this.offset = 0;\n    }\n}\nclass GLBuffer {\n    constructor(elementSize, dataType = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].FLOAT, targetBufferType = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ARRAY_BUFFER, mode = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TRIANGLES) {\n        this._hasAttributeLocation = false;\n        this._data = [];\n        this._attributes = [];\n        this._elementSize = elementSize;\n        this._dataType = dataType;\n        this._targetBufferType = targetBufferType;\n        this._mode = mode;\n        switch (this._dataType) {\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].FLOAT:\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].INT:\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_INT:\n                this._typeSize = 4;\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].SHORT:\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_SHORT:\n                this._typeSize = 2;\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].BYTE:\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_BYTE:\n                this._typeSize = 1;\n                break;\n            default:\n                throw new Error(\"Unrecognized data type: \" + dataType.toString());\n        }\n        this._buffer = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].createBuffer();\n    }\n    destroy() {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].deleteBuffer(this._buffer);\n    }\n    bind(normalized = false) {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindBuffer(this._targetBufferType, this._buffer);\n        if (this._hasAttributeLocation) {\n            for (let it of this._attributes) {\n                _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].vertexAttribPointer(it.location, it.size, this._dataType, normalized, this._stride, it.offset * this._typeSize);\n                _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].enableVertexAttribArray(it.location);\n            }\n        }\n    }\n    unbind() {\n        for (let it of this._attributes) {\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].disableVertexAttribArray(it.location);\n        }\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindBuffer(this._targetBufferType, undefined);\n    }\n    addAttributeLocation(info) {\n        this._hasAttributeLocation = true;\n        //info.offset = this._elementSize;\n        this._attributes.push(info);\n    }\n    pushBackData(data) {\n        for (let d of data) {\n            this._data.push(d);\n        }\n    }\n    upload() {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindBuffer(this._targetBufferType, this._buffer);\n        let bufferData;\n        switch (this._dataType) {\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].FLOAT:\n                bufferData = new Float32Array(this._data);\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].INT:\n                bufferData = new Int32Array(this._data);\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_INT:\n                bufferData = new Uint32Array(this._data);\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].SHORT:\n                bufferData = new Int16Array(this._data);\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_SHORT:\n                bufferData = new Uint16Array(this._data);\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].BYTE:\n                bufferData = new Int8Array(this._data);\n                break;\n            case _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_BYTE:\n                bufferData = new Uint8Array(this._data);\n                break;\n        }\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bufferData(this._targetBufferType, bufferData, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].STATIC_DRAW);\n    }\n    draw() {\n        if (this._targetBufferType === _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ARRAY_BUFFER) {\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].drawArrays(this._mode, 0, this._data.length / this._elementSize);\n        }\n        else if (this._targetBufferType === _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ELEMENT_ARRAY_BUFFER) {\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].drawElements(this._mode, this._data.length, this._dataType, 0);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/buffer.ts?");

/***/ }),

/***/ "./src/engine.ts":
/*!***********************!*\
  !*** ./src/engine.ts ***!
  \***********************/
/*! exports provided: Engine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Engine\", function() { return Engine; });\n/* harmony import */ var _glutilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glutilities */ \"./src/glutilities.ts\");\n/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ \"./src/buffer.ts\");\n/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shader */ \"./src/shader.ts\");\n/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texture */ \"./src/texture.ts\");\n\n\n\n\nclass Engine {\n    constructor() {\n    }\n    start() {\n        this._canvas = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"GLUtilities\"].initialize();\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].clearColor(0, 0, 0, 1);\n        this.loadShaders();\n        this._shader.use();\n        // TODO: combine vertexBuffer and TextureBuffer to single buffer.\n        this.createVertexBuffer();\n        this.createTextureBuffer();\n        this.createTexture();\n        this.resize();\n        this.loop();\n    }\n    resize() {\n        if (this._canvas !== undefined) {\n            this._canvas.width = window.innerWidth;\n            this._canvas.height = window.innerHeight;\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].viewport(0, 0, window.innerWidth, window.innerHeight);\n        }\n    }\n    loop() {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].clear(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].COLOR_BUFFER_BIT);\n        // let colorPosition = this._shader.getUniformLocation(\"u_color\");\n        //gl.uniform4f(colorPosition, 1, 0.5, 0, 1);\n        let tex = this._shader.getUniformLocation(\"texture0\");\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].uniform1i(tex, 0);\n        this._vertexBuffer.bind();\n        this._vertexBuffer.draw();\n        this._textureBuffer.bind();\n        this._textureBuffer.draw();\n        requestAnimationFrame(this.loop.bind(this));\n    }\n    createTexture() {\n        this._texture = new _texture__WEBPACK_IMPORTED_MODULE_3__[\"Texture\"]('./assets/world-spritesheet.png');\n        this._texture.activateAndBind();\n    }\n    createTextureBuffer() {\n        this._textureBuffer = new _buffer__WEBPACK_IMPORTED_MODULE_1__[\"GLBuffer\"](3);\n        let textCoordAttribute = new _buffer__WEBPACK_IMPORTED_MODULE_1__[\"AttributeInfo\"]();\n        textCoordAttribute.location = this._shader.getAttributeLocation(\"coord\");\n        textCoordAttribute.offset = 0;\n        textCoordAttribute.size = 2;\n        this._textureBuffer.addAttributeLocation(textCoordAttribute);\n        let textCoords = [\n            0, 0,\n            0, 1,\n            1, 1,\n            1, 1,\n            1, 0,\n            0, 0\n        ];\n        this._textureBuffer.pushBackData(textCoords);\n        this._textureBuffer.upload();\n        this._textureBuffer.unbind();\n    }\n    createVertexBuffer() {\n        this._vertexBuffer = new _buffer__WEBPACK_IMPORTED_MODULE_1__[\"GLBuffer\"](3);\n        let positionAttribute = new _buffer__WEBPACK_IMPORTED_MODULE_1__[\"AttributeInfo\"]();\n        positionAttribute.location = this._shader.getAttributeLocation(\"position\");\n        positionAttribute.offset = 0;\n        positionAttribute.size = 3;\n        this._vertexBuffer.addAttributeLocation(positionAttribute);\n        let vertices = [\n            -1, -1, 0,\n            -1, 1, 0,\n            1, 1, 0,\n            1, 1, 0,\n            1, -1, 0,\n            -1, -1, 0\n        ];\n        this._vertexBuffer.pushBackData(vertices);\n        this._vertexBuffer.upload();\n        this._vertexBuffer.unbind();\n    }\n    loadShaders() {\n        let vertexShaderSource = `\n        attribute vec3 position;\n        attribute vec2 coord;\n\n        varying vec2 texCoord;\n        //attribute vec3 a_position;\n        void main(){\n            //gl_Position = vec4(a_position, 1.0);\n            gl_Position = vec4(position, 1.0);\n            texCoord = coord;\n        }`;\n        let fragmentShaderSource = `\n        precision mediump float;\n        uniform sampler2D texture0;\n        varying vec2 texCoord;\n       // precision mediump float;\n        //uniform vec4 u_color;\n        void main(){\n            gl_FragColor = texture2D(texture0, texCoord);\n            //gl_FragColor = u_color;\n        }`;\n        this._shader = new _shader__WEBPACK_IMPORTED_MODULE_2__[\"Shader\"](\"basic\", vertexShaderSource, fragmentShaderSource);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/engine.ts?");

/***/ }),

/***/ "./src/glutilities.ts":
/*!****************************!*\
  !*** ./src/glutilities.ts ***!
  \****************************/
/*! exports provided: gl, GLUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gl\", function() { return gl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLUtilities\", function() { return GLUtilities; });\nvar gl;\nclass GLUtilities {\n    static initialize(elementId) {\n        let canvas;\n        if (elementId != undefined) {\n            canvas = document.getElementById(elementId);\n            if (canvas === undefined) {\n                throw new Error(\"Cannot find a canvas element \" + elementId);\n            }\n        }\n        else {\n            canvas = document.createElement(\"canvas\");\n            document.body.appendChild(canvas);\n        }\n        gl = canvas.getContext(\"webgl\");\n        if (gl === undefined) {\n            throw new Error(\"unable to initialize Webgl\");\n        }\n        return canvas;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/glutilities.ts?");

/***/ }),

/***/ "./src/shader.ts":
/*!***********************!*\
  !*** ./src/shader.ts ***!
  \***********************/
/*! exports provided: Shader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Shader\", function() { return Shader; });\n/* harmony import */ var _glutilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glutilities */ \"./src/glutilities.ts\");\n\n//shader shader.ts\nclass Shader {\n    constructor(name, vertexSource, fragmentSource) {\n        this._attributes = {};\n        this._uniforms = {};\n        this._name = name;\n        let vertexShader = this.loadShader(vertexSource, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].VERTEX_SHADER);\n        let fragmentShader = this.loadShader(fragmentSource, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].FRAGMENT_SHADER);\n        this.createProgram(vertexShader, fragmentShader);\n        this.detectAttributes();\n        this.detectUniforms();\n    }\n    get name() {\n        return this._name;\n    }\n    use() {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].useProgram(this._program);\n    }\n    getAttributeLocation(name) {\n        if (this._attributes[name] === undefined) {\n            throw new Error(`unable to find attribute named '${name}' in shader names '${this._name}'`);\n        }\n        return this._attributes[name];\n    }\n    getUniformLocation(name) {\n        if (this._uniforms[name] === undefined) {\n            throw new Error(`Unable to find uniform named '${name}' in shader named '${this._name}'`);\n        }\n        return this._uniforms[name];\n    }\n    loadShader(source, shaderType) {\n        let shader = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].createShader(shaderType);\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].shaderSource(shader, source);\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].compileShader(shader);\n        let error = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getShaderInfoLog(shader);\n        if (error !== \"\") {\n            throw new Error(\"Error compiling shader: \" + error);\n        }\n        return shader;\n    }\n    createProgram(vertexShader, fragmentShader) {\n        this._program = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].createProgram();\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].attachShader(this._program, vertexShader);\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].attachShader(this._program, fragmentShader);\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].linkProgram(this._program);\n        let error = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getProgramInfoLog(this._program);\n        if (error !== \"\") {\n            throw new Error(\"Error linking shader '\" + this._name + \"': \" + error);\n        }\n    }\n    detectAttributes() {\n        let attributeCount = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getProgramParameter(this._program, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ACTIVE_ATTRIBUTES);\n        for (let i = 0; i < attributeCount; ++i) {\n            let attributeInfo = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getActiveAttrib(this._program, i);\n            if (!attributeInfo) {\n                break;\n            }\n            this._attributes[attributeInfo.name] = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getAttribLocation(this._program, attributeInfo.name);\n        }\n    }\n    detectUniforms() {\n        let uniformCount = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getProgramParameter(this._program, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].ACTIVE_UNIFORMS);\n        for (let i = 0; i < uniformCount; ++i) {\n            let info = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getActiveUniform(this._program, i);\n            if (!info) {\n                break;\n            }\n            this._uniforms[info.name] = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].getUniformLocation(this._program, info.name);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/shader.ts?");

/***/ }),

/***/ "./src/texture.ts":
/*!************************!*\
  !*** ./src/texture.ts ***!
  \************************/
/*! exports provided: Texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Texture\", function() { return Texture; });\n/* harmony import */ var _glutilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glutilities */ \"./src/glutilities.ts\");\n\nclass Texture {\n    constructor(name, width = 1, height = 1) {\n        this._isLoaded = false;\n        this._name = name;\n        this._width = width;\n        this._height = height;\n        this._handle = _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].createTexture();\n        this.bind();\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texImage2D(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, 0, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].RGBA, 1, 1, 0, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].RGBA, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]));\n        this.loadTextureFromAsset(name);\n    }\n    get name() {\n        return this._name;\n    }\n    get isLoaded() {\n        return this._isLoaded;\n    }\n    get width() {\n        return this._width;\n    }\n    get height() {\n        return this._height;\n    }\n    destroy() {\n        if (this._handle) {\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].deleteTexture(this._handle);\n        }\n    }\n    activateAndBind(textureUnit = 0) {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].activeTexture(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE0 + textureUnit);\n        this.bind();\n    }\n    bind() {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindTexture(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, this._handle);\n    }\n    unbind() {\n        _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindTexture(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, undefined);\n    }\n    loadTextureFromAsset(url) {\n        // if ( this.isPowerof2() ) {\n        var img = new Image();\n        img.src = url;\n        img.onload = () => {\n            this._width = img.width;\n            this._height = img.height;\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].bindTexture(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, this._handle);\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texImage2D(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, 0, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].RGBA, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].RGBA, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].UNSIGNED_BYTE, img);\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].generateMipmap(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D);\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texParameteri(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_WRAP_S, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].CLAMP_TO_EDGE);\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texParameteri(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_WRAP_T, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].CLAMP_TO_EDGE);\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texParameteri(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_MIN_FILTER, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].LINEAR);\n            _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].texParameteri(_glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_2D, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].TEXTURE_MAG_FILTER, _glutilities__WEBPACK_IMPORTED_MODULE_0__[\"gl\"].LINEAR);\n            //https://gamedev.stackexchange.com/questions/147854/unpacking-sprite-sheet-into-2d-texture-array\n        };\n        this._isLoaded = true;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/texture.ts?");

/***/ })

/******/ });