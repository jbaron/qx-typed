
class TablePage extends MyPage {

    constructor() {
        super("table")
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
        const renderer = new qx.ui.table.cellrenderer.Boolean()
        tcm.setDataCellRenderer(3, renderer);
        this.add(table);

    }

    /**
     * Create random rows for the table example
     */
    private createRandomRows(rowCount: number) {
        const rowData: any[] = [];
        const now = new Date().getTime();
        for (let row = 0; row < rowCount; row++) {
            const date = new Date(now + row * 1000 * 3600);
            rowData.push([row, Math.random() * 10000, date, (Math.random() > 0.5)]);
        }
        return rowData;
    }

}