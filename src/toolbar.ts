class ToolBarPage extends MyPage {

    constructor() {
        super("Toolbar")
        const toolBar = new qx.ui.toolbar.ToolBar()
        toolBar.add(new qx.ui.toolbar.Button("Item 1"))
        toolBar.add(new qx.ui.toolbar.Button("Item 2"))
        toolBar.add(new qx.ui.toolbar.Separator())

        const menuButton = new qx.ui.toolbar.MenuButton("Menu")
        const menu = new qx.ui.menu.Menu()
        for (let n = 1; n < 5; n++) menu.add(new qx.ui.menu.Button("item-" + n))
        menuButton.setMenu(menu)
        toolBar.add(menuButton)

        this.add(toolBar)
    }

}
