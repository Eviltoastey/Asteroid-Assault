class cKeyboardInput {
    public keyCallback: { [keycode: number]: () => void; } = {};
    public keyDown: { [keycode: number]: boolean; } = {};
    private static instance : cKeyboardInput;
 
    private constructor() {
       document.addEventListener('keydown', this.keyboardDown);
       document.addEventListener('keyup', this.keyboardUp);
    }
    public static getInstance() {
        if (! cKeyboardInput.instance) {
            cKeyboardInput.instance = new cKeyboardInput()
            }
        return cKeyboardInput.instance
    }
    public keyboardDown = (event: KeyboardEvent): void => {
       event.preventDefault();
       this.keyDown[event.keyCode] = true;
    }
    public keyboardUp = (event: KeyboardEvent): void => {
       this.keyDown[event.keyCode] = false;
    }
    public addKeycodeCallback = (keycode: number, f: () => void): void => {
        this.keyCallback[keycode] = f;
        this.keyDown[keycode] = false;
     }
     public inputLoop = (): void => {
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