import {gl, GLUtilities} from './glutilities';
import {AttributeInfo, GLBuffer} from './buffer';
import {Shader} from './shader';
import {Texture} from './texture';

export class Engine{
    private _canvas:HTMLCanvasElement;
    private _shader: Shader;
    private _vertexBuffer: GLBuffer;
    private _textureBuffer: GLBuffer;
    private _texture: Texture;

    public constructor(){
    }

    public start(): void{
        this._canvas = GLUtilities.initialize();
        gl.clearColor(0, 0, 0, 1);

        this.loadShaders();
        this._shader.use();

        // TODO: combine vertexBuffer and TextureBuffer to single buffer.
        this.createVertexBuffer();
        this.createTextureBuffer();
        this.createTexture();

        this.resize();
        this.loop();
    }

    public resize(): void{
        if(this._canvas !== undefined){
            this._canvas.width = window.innerWidth;
            this._canvas.height = window.innerHeight;
            gl.viewport(0, 0, window.innerWidth, window.innerHeight);
        }
    }

    private loop(): void{
        gl.clear(gl.COLOR_BUFFER_BIT);

       // let colorPosition = this._shader.getUniformLocation("u_color");
        //gl.uniform4f(colorPosition, 1, 0.5, 0, 1);
        let tex = this._shader.getUniformLocation("texture0");
        gl.uniform1i(tex, 0);

        this._vertexBuffer.bind();
        this._vertexBuffer.draw();
        
        this._textureBuffer.bind();
        this._textureBuffer.draw();

        requestAnimationFrame(this.loop.bind(this));
    }

    private createTexture(): void{
        this._texture = new Texture('./assets/world-spritesheet.png');
        this._texture.activateAndBind();
    }

    private createTextureBuffer(): void{
        this._textureBuffer = new GLBuffer(3);
        let textCoordAttribute = new AttributeInfo();
        textCoordAttribute.location = this._shader.getAttributeLocation("coord");
        textCoordAttribute.offset = 0;
        textCoordAttribute.size = 2;
        this._textureBuffer.addAttributeLocation(textCoordAttribute);

        let textCoords = [
            0, 0,
            0, 1,
            1, 1,
           
            1, 1,
            1, 0,
            0, 0
        ];

        this._textureBuffer.pushBackData(textCoords);
        this._textureBuffer.upload();
        this._textureBuffer.unbind();

    }

    private createVertexBuffer(): void{
        this._vertexBuffer = new GLBuffer(3);
        let positionAttribute = new AttributeInfo();
        positionAttribute.location = this._shader.getAttributeLocation("position");
        positionAttribute.offset = 0;
        positionAttribute.size = 3;
        this._vertexBuffer.addAttributeLocation(positionAttribute);

        let vertices = [
            -1, -1, 0 ,
            -1, 1, 0,
            1, 1, 0,
           
            1, 1, 0,
            1, -1, 0,
            -1, -1, 0
            
        ];

        this._vertexBuffer.pushBackData(vertices);
        this._vertexBuffer.upload();
        this._vertexBuffer.unbind();
    }

    private loadShaders():void{
        let vertexShaderSource = `
        attribute vec3 position;
        attribute vec2 coord;

        varying vec2 texCoord;
        //attribute vec3 a_position;
        void main(){
            //gl_Position = vec4(a_position, 1.0);
            gl_Position = vec4(position, 1.0);
            texCoord = coord;
        }`;

        let fragmentShaderSource = `
        precision mediump float;
        uniform sampler2D texture0;
        varying vec2 texCoord;
       // precision mediump float;
        //uniform vec4 u_color;
        void main(){
            gl_FragColor = texture2D(texture0, texCoord);
            //gl_FragColor = u_color;
        }`;

        this._shader = new Shader("basic", vertexShaderSource, fragmentShaderSource);
    }
}