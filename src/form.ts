
/**
 * Create a sample form.
 */
class FormPage extends MyPage {


    constructor() {
        super("form")

        const form = new qx.ui.form.Form()
        this.addSection1(form)
        this.addSection2(form)
    
        // send button with validation
        const sendButton = new qx.ui.form.Button("Send")
        sendButton.addListener("execute", function () {
            if (form.validate()) {
                alert("send...")
            }
        }, this);
        form.addButton(sendButton)

        // reset button
        const resetButton = new qx.ui.form.Button("Reset")
        resetButton.addListener("execute", function () {
            form.reset("")
        }, this)
        form.addButton(resetButton)

        const formRenderer = new qx.ui.form.renderer.Single(form)
        this.add(formRenderer)
    }

    addSection1(form: qx.ui.form.Form) {
        form.addGroupHeader("Registration")
        const userName = new qx.ui.form.TextField()
        userName.setRequired(true)
        form.add(userName, "Name")
        const password = new qx.ui.form.PasswordField()
        password.setRequired(true)
        form.add(password, "Password")
        form.add(new qx.ui.form.CheckBox(), "Save?")
    }

    addSection2(form: qx.ui.form.Form) {
          // add the second header
          form.addGroupHeader("Personal Information")
          form.add(new qx.ui.form.Spinner(0, 50, 100), "Age")
          form.add(new qx.ui.form.TextField(), "Country")
          const genderBox = new qx.ui.form.SelectBox()
          genderBox.add(new qx.ui.form.ListItem("Man"))
          genderBox.add(new qx.ui.form.ListItem("Woman"))
          genderBox.add(new qx.ui.form.ListItem("Genderqueer/Non-Binary"))
          genderBox.add(new qx.ui.form.ListItem("Prefer not to disclose"))
          form.add(genderBox, "Gender")
          form.add(new qx.ui.form.TextArea(), "Bio")
    }
}
