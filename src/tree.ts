

/**
 * Create a sample tree
 */ 
function createTree(): MyPage {
    // create the tree
    const tree = new qx.ui.tree.Tree()
    tree.set({ width: 150, height: 300 })
    const root = new qx.ui.tree.TreeFolder("root")
    root.setOpen(true)
    tree.setRoot(root)
    
    // Make some dummy entries
    for (let x=1;x < 5;x++) {
        const folder = new qx.ui.tree.TreeFolder("folder-" + x)
        root.add(folder)
        for (let y=1;y < 9;y++) {
            const file = new qx.ui.tree.TreeFolder("file-" + y)
            folder.add(file)
        }
    }

    const page = new MyPage("Tree")
    page.add(tree)
    return page
}
