
/**
 * Example of extending an qooxdoo class
 */
class MyPage extends qx.ui.tabview.Page {
    constructor(name: string) {
        super(name)
        this.setLayout(new qx.ui.layout.Canvas())
        this.setShowCloseButton(true)
    }
}

/**
 * This is the main function that will be called from the qooxdoo application to start everything.
 */
function qooxdooMain(app: qx.application.Standalone) {

    const t = new qx.ui.tabview.TabView();
    t.add(new ButtonsPage())
    t.add(new FormPage())
    t.add(new TablePage())
    t.add(createTree()) // example using function instead of class
    t.add(new ToolBarPage())
    t.add(new WindowsPage())
    t.add(new ControlPage())


    // add the tabview to the root
    const root = <qx.ui.container.Composite>app.getRoot()
    root.add(t, { edge: 0 })
}

// register the main function
qx.registry.registerMainMethod(qooxdooMain)
