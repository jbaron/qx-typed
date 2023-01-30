class TablePage extends MyPage {

  constructor() {
    super("table")
    const table = this.createTable()
    table.setFocusedCell(2, 5)
    this.add(table)
  }


  private createTable() {
    const rowData = this.createRandomRows(500)

    const tableModel = new qx.ui.table.model.Simple()
    tableModel.setColumns(["ID", "A number", "A date", "Boolean"])
    tableModel.setData(rowData)
    tableModel.setColumnEditable(1, true)
    tableModel.setColumnEditable(2, true)
    tableModel.setColumnSortable(3, false)

    const table = new qx.ui.table.Table(tableModel)

    table.set({
      width: 600,
      height: 400,
      decorator: null,
    })

    table
      .getSelectionModel()
      .setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION)

    const tcm = table.getTableColumnModel()

    tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean())
    tcm.setHeaderCellRenderer(
      2,
      new qx.ui.table.headerrenderer.Icon(
        "resource/app/office-calendar.png",
        "A date"
      )
    )

    return table
  }

  /**
   * Create random rows for the table example
   */
  private createRandomRows(rowCount: number) {
    const rowData = []
    var nextId = 0
    const now = new Date().getTime()
    var dateRange = 400 * 24 * 60 * 60 * 1000; // 400 days
    for (var row = 0; row < rowCount; row++) {
      const date = new Date(now + Math.random() * dateRange - dateRange / 2)
      rowData.push([
        nextId++,
        Math.random() * 10000,
        date,
        Math.random() > 0.5,
      ])
    }
    return rowData
  }

}