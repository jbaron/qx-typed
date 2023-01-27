/**
 * Example of extending an qooxdoo class
 */
class MyPage extends qx.ui.tabview.Page {
    constructor(name) {
        super(name);
        this.setLayout(new qx.ui.layout.Canvas());
        this.setShowCloseButton(true);
    }
}
/**
 * This is the main function that will be called from the qooxdoo application to start everything.
 */
function qooxdooMain(app) {
    const t = new qx.ui.tabview.TabView();
    t.add(new ButtonsPage());
    t.add(new FormPage());
    t.add(new TablePage());
    t.add(createTree()); // example using function instead of class
    t.add(new ToolBarPage());
    t.add(new WindowsPage());
    // add the tabview to the root
    const root = app.getRoot();
    root.add(t, { edge: 0 });
}
// register the main function
qx.registry.registerMainMethod(qooxdooMain);
// Example import
var Button = qx.ui.form.Button;
class ButtonsPage extends MyPage {
    /**
     * Create three buttons
     */
    constructor() {
        super("Buttons");
        const button1 = new Button("Hello", "resource/app/internet-web-browser.png");
        const button2 = new Button("Dark Theme", "resource/app/preferences-theme.png");
        const button3 = new Button("Light Theme", "resource/app/preferences-theme.png");
        const meta = qx.theme.manager.Meta.getInstance();
        button1.addListener("execute", function () { alert("Hello World!"); });
        button2.addListener("execute", function () { meta.setTheme(qx.theme.TangibleDark); });
        button3.addListener("execute", function () { meta.setTheme(qx.theme.TangibleLight); });
        const container = new qx.ui.container.Composite(new qx.ui.layout.Flow());
        container.add(button1);
        container.add(button2);
        container.add(button3);
        this.add(container);
    }
}
/**
 * Create a sample form.
 */
class FormPage extends MyPage {
    constructor() {
        super("form");
        const form = new qx.ui.form.Form();
        // add the first headline
        form.addGroupHeader("Registration");
        // add username
        const userName = new qx.ui.form.TextField();
        userName.setRequired(true);
        form.add(userName, "Name");
        // add password
        const password = new qx.ui.form.PasswordField();
        password.setRequired(true);
        form.add(password, "Password");
        // add a save checkbox
        form.add(new qx.ui.form.CheckBox(), "Save?");
        // add the second header
        form.addGroupHeader("Personal Information");
        // add some additional widgets
        form.add(new qx.ui.form.Spinner(0, 50, 100), "Age");
        form.add(new qx.ui.form.TextField(), "Country");
        const genderBox = new qx.ui.form.SelectBox();
        genderBox.add(new qx.ui.form.ListItem("Man"));
        genderBox.add(new qx.ui.form.ListItem("Woman"));
        genderBox.add(new qx.ui.form.ListItem("Genderqueer/Non-Binary"));
        genderBox.add(new qx.ui.form.ListItem("Prefer not to disclose"));
        form.add(genderBox, "Gender");
        form.add(new qx.ui.form.TextArea(), "Bio");
        // send button with validation
        const sendButton = new qx.ui.form.Button("Send");
        sendButton.addListener("execute", function () {
            if (form.validate()) {
                alert("send...");
            }
        }, this);
        form.addButton(sendButton);
        // reset button
        const resetButton = new qx.ui.form.Button("Reset");
        resetButton.addListener("execute", function () {
            form.reset("");
        }, this);
        form.addButton(resetButton);
        // create the form and return it
        const c = new qx.ui.form.renderer.Single(form);
        this.add(c);
    }
}
class TablePage extends MyPage {
    constructor() {
        super("table");
        // table model
        const tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(["Billing-ID", "Amount", "Date", "Paid"]);
        tableModel.setData(this.createRandomRows(100));
        tableModel.setColumnEditable(1, true);
        // table
        const table = new qx.ui.table.Table(tableModel).set({
            decorator: null
        });
        // Display a checkbox in column 3
        const tcm = table.getTableColumnModel();
        const renderer = new qx.ui.table.cellrenderer.Boolean();
        tcm.setDataCellRenderer(3, renderer);
        this.add(table);
    }
    /**
     * Create few random rows for the table example
     */
    createRandomRows(rowCount) {
        const rowData = [];
        const now = new Date().getTime();
        for (let row = 0; row < rowCount; row++) {
            const date = new Date(now + row * 1000 * 3600);
            rowData.push([row, Math.random() * 10000, date, (Math.random() > 0.5)]);
        }
        return rowData;
    }
}
class ToolBarPage extends MyPage {
    constructor() {
        super("Toolbar");
        const toolBar = new qx.ui.toolbar.ToolBar();
        toolBar.add(new qx.ui.toolbar.Button("Item 1"));
        toolBar.add(new qx.ui.toolbar.Button("Item 2"));
        toolBar.add(new qx.ui.toolbar.Separator());
        const menuButton = new qx.ui.toolbar.MenuButton("Menu");
        const menu = new qx.ui.menu.Menu();
        for (let n = 1; n < 5; n++)
            menu.add(new qx.ui.menu.Button("item-" + n));
        menuButton.setMenu(menu);
        toolBar.add(menuButton);
        this.add(toolBar);
    }
}
/**
 * Create a sample tree
 */
function createTree() {
    // create the tree
    const tree = new qx.ui.tree.Tree();
    tree.set({ width: 150, height: 300 });
    const root = new qx.ui.tree.TreeFolder("root");
    root.setOpen(true);
    tree.setRoot(root);
    // Make some dummy entries
    for (let x = 1; x < 5; x++) {
        const folder = new qx.ui.tree.TreeFolder("folder-" + x);
        root.add(folder);
        for (let y = 1; y < 9; y++) {
            const file = new qx.ui.tree.TreeFolder("file-" + y);
            folder.add(file);
        }
    }
    const page = new MyPage("Tree");
    page.add(tree);
    return page;
}
class WindowsPage extends MyPage {
    constructor() {
        super("Windows");
        const desktop = new qx.ui.window.Desktop();
        for (let n = 1; n <= 5; n++) {
            const win = new qx.ui.window.Window("Window " + n);
            win.setShowStatusbar(true);
            win.setMinWidth(200);
            win.setDraggable(true);
            win.open();
            desktop.add(win, { left: n * 50, top: n * 50 });
        }
        this.add(desktop, { edge: 0, top: 0 });
    }
}
