export default class Button {
    constructor() {
        
    };

    createButton() {
        const button = document.createElement('button');
        button.innerHTML = "Button";
        const root = document.getElementById('root');
        root.appendChild(button);
        return button;
    };
}