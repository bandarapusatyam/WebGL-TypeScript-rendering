import {gl} from './glutilities';

export class Texture{
    private _name: string;
    private _handle: WebGLTexture;
    private _isLoaded: boolean = false;
    private _width: number;
    private _height: number;

    public constructor( name: string, width: number = 1, height: number = 1 ) {
        this._name = name;
        this._width = width;
        this._height = height;

        this._handle = gl.createTexture();
        this.bind();
        gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array( [255, 255, 255, 255] ));

        this.loadTextureFromAsset( name );
    }

    public get name(): string {
        return this._name;
    }

    public get isLoaded(): boolean {
        return this._isLoaded;
    }

    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }

    public destroy(): void {
        if ( this._handle ) {
            gl.deleteTexture( this._handle );
        }
    }

    public activateAndBind( textureUnit: number = 0 ): void {
        gl.activeTexture( gl.TEXTURE0 + textureUnit );

        this.bind();
    }

    public bind(): void {
        gl.bindTexture( gl.TEXTURE_2D, this._handle );
    }

    public unbind(): void {
        gl.bindTexture( gl.TEXTURE_2D, undefined );
    }


    private loadTextureFromAsset( url:string ): void {

       // if ( this.isPowerof2() ) {

        var img = new Image();
        img.src = url;
        img.onload = () => {
            this._width = img.width;
            this._height = img.height;
            gl.bindTexture(gl.TEXTURE_2D, this._handle);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

            gl.generateMipmap( gl.TEXTURE_2D );

            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        };

        this._isLoaded = true;
    }
}
