class ControlPage extends MyPage {

  private vbox = new qx.ui.container.Composite(new qx.ui.layout.VBox(20));

  constructor() {
      super("Control");
      this.add(this.vbox, { top: 0 });
      this.initWidgets();
  }
  
  
  initWidgets() {
   
    // ColorSelector
    var label: qx.ui.basic.Label = new qx.ui.basic.Label("ColorSelector");
    var colorSelector = new qx.ui.control.ColorSelector();
    this.vbox.add(label);
    this.vbox.add(colorSelector);

    // ColorPopup
    label = new qx.ui.basic.Label("ColorPopup");
    var colorPopup = new qx.ui.control.ColorPopup();
    colorPopup.exclude();

    var openColorPopup = new qx.ui.form.Button("Open Color Popup").set({
      maxWidth: 150,
    });
    this.vbox.add(label);
    this.vbox.add(openColorPopup);
    openColorPopup.addListener("execute", function () {
      colorPopup.placeToWidget(openColorPopup, true);
      colorPopup.show();
    });

    // DateChooser
    var dateChooser = new qx.ui.control.DateChooser().set({ maxWidth: 240 });
    label = new qx.ui.basic.Label("DateChooser");
    this.vbox.add(label);
    this.vbox.add(dateChooser);
  }

};