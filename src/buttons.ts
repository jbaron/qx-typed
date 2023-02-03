
// Example import
import Button = qx.ui.form.Button




class ButtonsPage extends MyPage {

    constructor() {
        super("Buttons")
        const button1 = new Button("Hello", "resource/app/internet-web-browser.png")
        const button2 = new Button("Dark Theme", "resource/app/preferences-theme.png")
        const button3 = new Button("Light Theme", "resource/app/preferences-theme.png")
        const button4 = new Button("Change layout", "@MaterialIcons/face") // use an icon font

        const meta = qx.theme.manager.Meta.getInstance()
        button1.addListener("execute", function () { alert("Hello World!") })
        button2.addListener("execute", function () { meta.setTheme(qx.theme.TangibleDark) })
        button3.addListener("execute", function () { meta.setTheme(qx.theme.TangibleLight) })
        button4.addListener("execute", function () {
            container.getLayout() == layout1 ? container.setLayout(layout2) : container.setLayout(layout1)
        });

        const layout1 = new qx.ui.layout.HBox()
        const layout2 = new qx.ui.layout.VBox()
        const container = new qx.ui.container.Composite(layout1)
        container.add(button1)
        container.add(button2)
        container.add(button3)
        container.add(button4)
        this.add(container)
    }

}