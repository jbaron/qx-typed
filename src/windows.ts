class WindowsPage extends MyPage {

    constructor() {
        super("Windows")
        const desktop = new qx.ui.window.Desktop()
        for (let n = 1; n <= 5; n++) {
            const win = new qx.ui.window.Window("Window " + n)
            win.setShowStatusbar(true);
            win.setMinWidth(200)
            win.setDraggable(true)
            win.open()
            desktop.add(win, { left: n * 50, top: n * 50 })
        }
        this.add(desktop, { edge: 0, top: 0 })
    }
}