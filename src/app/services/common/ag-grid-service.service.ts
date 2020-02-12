import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AgGridService {
  public selected = false;
  private gridApi;

  // ag-Grid componet and Module import -----------
  private gridColumnApi;

  constructor() {
  }

  onRowSelected(event) {
    this.selected = true;
  }


  onSelectionChanged(event) {
    // do the rest

    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    console.log('selection', selectedData);
    for (const selection of selectedData) {
      if (selection.status === 'Proceed') {
        this.selected = false;
      }
    }
    if (selectedData.length === 0) {
      this.selected = false;
    }
  }

  updateRowData(itemsToUpdate) {
    this.gridApi.updateRowData({update: itemsToUpdate});
  }

  deleteRowData(itemsToUpdate) {
    this.gridApi.updateRowData({remove: itemsToUpdate});
  }

  selectAllItems() {
    this.gridApi.selectAll();
    console.log('selectAllItems Selected Items: ', this.gridApi.getSelectedRows());
    return this.getSelectedRows();
  }

  getItemId(item: any[]) {
  }


  onBtnExport(): void {
    const a = document.querySelector('#columnSeparator');
    const params = {
      columnGroups: true,
      allColumns: true,
      fileName: 'EXCEL_SHEET',
    };
    console.log('this.gridApi.exportDataAsCsv(params): ', this.gridApi.exportDataAsCsv(params));
    this.gridApi.exportDataAsCsv(params);
  }

  setAutoHeight() {
    const setHeight: any = document.querySelector('#myGrid');
    setHeight.style.height = '';
    this.gridApi.setDomLayout('autoHeight');
  }

  autoSizeAll(skipHeader) {
    const allColumnIds = [];
    this.gridColumnApi.getAllColumns().forEach((column) => {
      allColumnIds.push(column.colId);
    });
    this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onQuickFilterChanged() {
    const search: any = document.getElementById('quickFilter');
    if (search !== undefined) {
      this.gridApi.setQuickFilter(search.value);
    }
  }

  onPageSizeChanged(newPageSize) {
    this.gridApi.paginationSetPageSize(Number(newPageSize));
  }

  clearFilter() {
    const search: any = document.getElementById('quickFilter');
    search.value = null;
    this.gridApi.setQuickFilter(null);
    this.gridApi.setFilterModel(null);
  }

  onBtPrint() {
    const gridApi = this.gridApi;
    this.setPrinterFriendly(gridApi);
    setTimeout(() => {
      print();
      this.setNormal(gridApi);
    }, 2000);
  }

  getSelectedRows() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);

    return selectedData;
  }

  updateItems(obj) {
    this.gridApi.updateRowData({add: obj});
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setAutoHeight();
    this.autoSizeAll(false);
    params.api.expandAll();
  }

  onRemoveSelected() {
    const selectedData = this.gridApi.getSelectedRows();
    console.log('onRemoveSelected: ', selectedData);

    const res = this.gridApi.updateRowData({remove: selectedData});
    return selectedData;
  }

  setPrinterFriendly(api) {
    const eGridDiv: any = document.querySelector('#myGrid');
    // eGridDiv.style.width = '95%';
    eGridDiv.style.height = '';
    api.setDomLayout('print');
  }

  setNormal(api) {
    const eGridDiv: any = document.querySelector('#myGrid');
    // eGridDiv.style.width = "600px";
    eGridDiv.style.height = '600px';
    api.setDomLayout(null);
  }


}
