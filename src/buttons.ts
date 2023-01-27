
// Example import
import Button = qx.ui.form.Button


class ButtonsPage extends MyPage {
 
    /**
     * Create three buttons
     */ 
    constructor() {
        super("Buttons")
        const button1 = new Button("Hello", "resource/app/internet-web-browser.png");
        const button2 = new Button("Dark Theme", "resource/app/preferences-theme.png");
        const button3 = new Button("Light Theme", "resource/app/preferences-theme.png");

        const meta = qx.theme.manager.Meta.getInstance()
        button1.addListener("execute", function() { alert("Hello World!"); });
        button2.addListener("execute", function() { meta.setTheme(qx.theme.TangibleDark) });
        button3.addListener("execute", function() { meta.setTheme(qx.theme.TangibleLight) });
        const container = new qx.ui.container.Composite(new qx.ui.layout.Flow())
        container.add(button1);
        container.add(button2);
        container.add(button3);
        this.add(container)
    }

}