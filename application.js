var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Create a button
 */
function createButton() {
    var button1 = new qx.ui.form.Button("First Button", "icon/22/apps/internet-web-browser.png");
    // Add an event listener
    button1.addListener("execute", function (e) {
        alert("Hello World!");
    });
    return button1;
}
/**
 * Create a sample form.
 */
function createForm() {
    var form = new qx.ui.form.Form();
    // add the first headline
    form.addGroupHeader("Registration");
    // add usernamne
    var userName = new qx.ui.form.TextField();
    userName.setRequired(true);
    form.add(userName, "Name");
    // add password
    var password = new qx.ui.form.PasswordField();
    password.setRequired(true);
    form.add(password, "Password");
    // add a save checkbox
    form.add(new qx.ui.form.CheckBox(), "Save?");
    // add the second header
    form.addGroupHeader("Personal Information");
    // add some additional widgets
    form.add(new qx.ui.form.Spinner(), "Age");
    form.add(new qx.ui.form.TextField(), "Country");
    var genderBox = new qx.ui.form.SelectBox();
    genderBox.add(new qx.ui.form.ListItem("male"));
    genderBox.add(new qx.ui.form.ListItem("female"));
    form.add(genderBox, "Gender");
    form.add(new qx.ui.form.TextArea(), "Bio");
    // send button with validation
    var sendButton = new qx.ui.form.Button("Send");
    sendButton.addListener("execute", function () {
        if (form.validate()) {
            alert("send...");
        }
    }, this);
    form.addButton(sendButton);
    // reset button
    var resetButton = new qx.ui.form.Button("Reset");
    resetButton.addListener("execute", function () {
        form.reset();
    }, this);
    form.addButton(resetButton);
    // create the form and return it
    return new qx.ui.form.renderer.Single(form);
}
/**
 * Create some reandom rows for the table example
 */
function createRandomRows(rowCount) {
    var rowData = [];
    var now = new Date().getTime();
    var dateRange = 400 * 24 * 60 * 60 * 1000; // 400 days
    var nextId = 0;
    for (var row = 0; row < rowCount; row++) {
        var date = new Date(now + Math.random() * dateRange - dateRange / 2);
        rowData.push([nextId++, Math.random() * 10000, date, (Math.random() > 0.5)]);
    }
    return rowData;
}
/**
 * Create an example using the table widget showing some basic
 * funcitonality
 */
function createTable() {
    // table model
    var tableModel = new qx.ui.table.model.Simple();
    tableModel.setColumns(["Billing-ID", "Amount", "Date", "Paid"]);
    tableModel.setData(createRandomRows(100));
    // make second column editable
    tableModel.setColumnEditable(1, true);
    // table
    var table = new qx.ui.table.Table(tableModel);
    table.set({
        decorator: null
    });
    var tcm = table.getTableColumnModel();
    // Display a checkbox in column 3
    tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());
    return table;
}
/**
 * Create a sample tree
 */
function createTree() {
    // create the tree
    var tree = new qx.ui.tree.Tree();
    tree.set({ width: 150, height: 300 });
    // create and set the tree root
    var root = new qx.ui.tree.TreeFolder("Desktop");
    tree.setRoot(root);
    // create some subitems
    var f1 = new qx.ui.tree.TreeFolder("Logos");
    var f2 = new qx.ui.tree.TreeFolder("TODO");
    var f3 = new qx.ui.tree.TreeFile("jsmag_js9.pdf");
    f3.setIcon("icon/22/mimetypes/text-html.png");
    root.add(f1, f2, f3);
    // create a third layer
    var f11 = new qx.ui.tree.TreeFile("Logo1.png");
    f11.setIcon("icon/22/mimetypes/media-image.png");
    var f12 = new qx.ui.tree.TreeFile("Logo2.png");
    f12.setIcon("icon/22/mimetypes/media-image.png");
    var f13 = new qx.ui.tree.TreeFile("Logo3.png");
    f13.setIcon("icon/22/mimetypes/media-image.png");
    f1.add(f11, f12, f13);
    // open the folders
    root.setOpen(true);
    f1.setOpen(true);
    return tree;
}
/**
 * Simple class extension example
 */
var MyPage = (function (_super) {
    __extends(MyPage, _super);
    function MyPage(name) {
        _super.call(this, name);
        this.setLayout(new qx.ui.layout.Flow());
        this.setShowCloseButton(true);
    }
    return MyPage;
}(qx.ui.tabview.Page));
/**
 * This is the main function that will be called from the Qooxdoo application
 * to start everything.
 */
function qooxdooMain(app) {
    var demo = [createButton, createTable, createTree, createForm];
    // Document is the application root container
    var doc = app.getRoot();
    // Lets create the container for the tabs
    var t = new qx.ui.tabview.TabView();
    //And now lets add some tabs
    for (var x = 0; x < demo.length; x++) {
        var p = new MyPage(demo[x].name);
        p.add(demo[x]());
        t.add(p);
    }
    doc.add(t, { edge: 0 });
}
qx.registry.registerMainMethod(qooxdooMain);
