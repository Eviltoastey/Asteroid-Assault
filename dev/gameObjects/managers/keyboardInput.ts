class KeyboardInput {
    public keyCallback          : { [keycode: number]: () => void; } = {};
    public keyDown              : { [keycode: number]: boolean; } = {};
    private static _instance    : KeyboardInput;
 
    private constructor() {
       document.addEventListener('keydown', this.keyboardDown);
       document.addEventListener('keyup', this.keyboardUp);
    }
    public static getInstance() {
        if (!KeyboardInput._instance) {
            KeyboardInput._instance = new KeyboardInput()
            }
        return KeyboardInput._instance
    }
    public keyboardDown = (event:KeyboardEvent): void => {
       event.preventDefault();
       this.keyDown[event.keyCode] = true;
    }
    public keyboardUp = (event:KeyboardEvent): void => {
       this.keyDown[event.keyCode] = false;
    }
    public addKeycodeCallback = (keycode:number, f: () => void): void => {
        this.keyCallback[keycode] = f;
        this.keyDown[keycode] = false;
     }
     public inputLoop = () : void => {
        for (var key in this.keyDown) {
           var is_down: boolean = this.keyDown[key];
           if (is_down) {
              var callback: () => void = this.keyCallback[key];
              if (callback != null) {
                 callback();
              }
           }
        } 
     }
 }