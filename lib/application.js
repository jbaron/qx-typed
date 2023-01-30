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
    constructor() {
        super("Buttons");
        const button1 = new Button("Hello", "resource/app/internet-web-browser.png");
        const button2 = new Button("Dark Theme", "resource/app/preferences-theme.png");
        const button3 = new Button("Light Theme", "resource/app/preferences-theme.png");
        const button4 = new Button("Change layout", "@MaterialIcons/face"); // use an icon font
        const meta = qx.theme.manager.Meta.getInstance();
        button1.addListener("execute", function () { alert("Hello World!"); });
        button2.addListener("execute", function () { meta.setTheme(qx.theme.TangibleDark); });
        button3.addListener("execute", function () { meta.setTheme(qx.theme.TangibleLight); });
        button4.addListener("execute", function () {
            container.getLayout() == layout1 ? container.setLayout(layout2) : container.setLayout(layout1);
        });
        const layout1 = new qx.ui.layout.HBox();
        const layout2 = new qx.ui.layout.VBox();
        const container = new qx.ui.container.Composite(layout1);
        container.add(button1);
        container.add(button2);
        container.add(button3);
        container.add(button4);
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
        this.addSection1(form);
        this.addSection2(form);
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
        const formRenderer = new qx.ui.form.renderer.Single(form);
        this.add(formRenderer);
    }
    addSection1(form) {
        form.addGroupHeader("Registration");
        const userName = new qx.ui.form.TextField();
        userName.setRequired(true);
        form.add(userName, "Name");
        const password = new qx.ui.form.PasswordField();
        password.setRequired(true);
        form.add(password, "Password");
        form.add(new qx.ui.form.CheckBox(), "Save?");
    }
    addSection2(form) {
        // add the second header
        form.addGroupHeader("Personal Information");
        form.add(new qx.ui.form.Spinner(0, 50, 100), "Age");
        form.add(new qx.ui.form.TextField(), "Country");
        const genderBox = new qx.ui.form.SelectBox();
        genderBox.add(new qx.ui.form.ListItem("Man"));
        genderBox.add(new qx.ui.form.ListItem("Woman"));
        genderBox.add(new qx.ui.form.ListItem("Genderqueer/Non-Binary"));
        genderBox.add(new qx.ui.form.ListItem("Prefer not to disclose"));
        form.add(genderBox, "Gender");
        form.add(new qx.ui.form.TextArea(), "Bio");
    }
}
class TablePage extends MyPage {
    constructor() {
        super("table");
        const table = this.createTable();
        table.setFocusedCell(2, 5);
        this.add(table);
    }
    createTable() {
        const rowData = this.createRandomRows(500);
        const tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(["ID", "A number", "A date", "Boolean"]);
        tableModel.setData(rowData);
        tableModel.setColumnEditable(1, true);
        tableModel.setColumnEditable(2, true);
        tableModel.setColumnSortable(3, false);
        const table = new qx.ui.table.Table(tableModel);
        table.set({
            width: 600,
            height: 400,
            decorator: null,
        });
        table
            .getSelectionModel()
            .setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
        const tcm = table.getTableColumnModel();
        tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());
        tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon("resource/app/office-calendar.png", "A date"));
        return table;
    }
    /**
     * Create random rows for the table example
     */
    createRandomRows(rowCount) {
        const rowData = [];
        var nextId = 0;
        const now = new Date().getTime();
        var dateRange = 400 * 24 * 60 * 60 * 1000; // 400 days
        for (var row = 0; row < rowCount; row++) {
            const date = new Date(now + Math.random() * dateRange - dateRange / 2);
            rowData.push([
                nextId++,
                Math.random() * 10000,
                date,
                Math.random() > 0.5,
            ]);
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
