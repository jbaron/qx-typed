class ToolBarPage extends MyPage {

    constructor() {
        super("Toolbar")
        this.add(this.getToolBar())
    }


    private getToolBar() {
        const toolBar = new qx.ui.toolbar.ToolBar()
        toolBar.add(new qx.ui.toolbar.Button("Item 1"))
        toolBar.add(new qx.ui.toolbar.Button("Item 2"))
        toolBar.add(new qx.ui.toolbar.Separator())

        const menuButton = new qx.ui.toolbar.MenuButton("Menu")
        const menu = new qx.ui.menu.Menu()
        for (let n = 1; n < 5; n++) menu.add(new qx.ui.menu.Button("item-" + n))
        menuButton.setMenu(menu)
        toolBar.add(menuButton)

        const menuButton2 = new qx.ui.toolbar.MenuButton("ButtonMenu")
        menuButton2.setMenu(this.getButtonMenu())
        toolBar.add(menuButton2)
        return toolBar 
    }

    private getButtonMenu() {
        const menu = new qx.ui.menu.Menu();
        const button = new qx.ui.menu.Button(
          "Menu MenuButton",
          "icon/16/actions/document-new.png"
        );
  
        const checkBox = new qx.ui.menu.CheckBox("Menu MenuCheckBox");

        const checkBoxChecked = new qx.ui.menu.CheckBox("Menu MenuCheckBox").set({
          value: true,
        });
  
        // RadioButton
        const radioButton = new qx.ui.menu.RadioButton("Menu RadioButton");
  
        // RadioButton (active)
        const radioButtonActive = new qx.ui.menu.RadioButton(
          "Menu RadioButton"
        ).set({ value: true });
  
        menu.add(button);
        menu.add(checkBox);
        menu.add(checkBoxChecked);
        menu.add(radioButton);
        menu.add(radioButtonActive);
  
        return menu;
      }


}
