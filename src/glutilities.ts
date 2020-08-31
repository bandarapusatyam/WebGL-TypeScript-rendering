
    export var gl: WebGLRenderingContext;
    export class GLUtilities {
        public static initialize(elementId?: string): HTMLCanvasElement {
            let canvas: HTMLCanvasElement;
            if (elementId != undefined) {
                canvas = document.getElementById(elementId) as HTMLCanvasElement;
                if (canvas === undefined) {
                    throw new Error("Cannot find a canvas element " + elementId);
                } 
            }else {
                canvas = document.createElement("canvas") as HTMLCanvasElement;
                document.body.appendChild(canvas);
            }

            gl = canvas.getContext("webgl");
            if (gl === undefined) {
                throw new Error("unable to initialize Webgl");
            }
            return canvas;
        }
    }