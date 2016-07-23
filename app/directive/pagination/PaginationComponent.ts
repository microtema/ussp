import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: 'template/directive/pagination/component.html'
})
export class PaginationComponent{

    @Input("data")
    paginationData:PaginationData = new PaginationData(10);

    @Output()
    onChange:EventEmitter<PaginationData> = new EventEmitter<PaginationData>(false);

    changePagination(event:any) {
        this.paginationData.rowsPerPage = Number(event.target.value);
        this.onChange.emit(this.paginationData);
    }
}

export class PaginationData {

    public rowsPerPageOptions:number[] = [2, 3, 5, 10, 20, 30, 50, 100];

    constructor(public rowsPerPage:number = 10, public currentPage:number = 0, public totalPages:number = 0, public totalRows:number = 0) {
    }

    firstPage() {
        this.currentPage = 0;
    }

    prevPage():void {
        this.currentPage--;
        this.currentPage = Math.max(this.currentPage, 0);
    }

    nextPage():void {
        this.currentPage = Math.min(this.currentPage + 1, this.getTotalPages() - 1);
    }

    lastPage() {
        this.currentPage = Math.max(0, this.getTotalPages() - 1)
    }

    getCurrentPage():number {
        if (this.totalRows === 0) {
            return 0;
        }
        return Math.min(this.currentPage + 1, this.getTotalPages());
    }

    getTotalPages():number {

        if (this.totalRows === 0) {
            return 0;
        }

        let total = Math.floor(this.totalRows / this.rowsPerPage);

        if (this.totalRows % this.rowsPerPage !== 0) {
            total++;
        }

        return total;
    }

    isFirstPageDisabled():boolean {
        return this.currentPage === 0;
    }

    isPrevPageDisabled():boolean {
        return this.currentPage < 1;
    }

    isNextPageDisabled():boolean {
        return this.getCurrentPage() === this.getTotalPages();
    }

    isLastPageDisabled():boolean {
        return this.getCurrentPage() === this.getTotalPages();
    }

    data():number[] {

        let start = this.currentPage * this.rowsPerPage;
        let end = Math.min(start + this.rowsPerPage, this.totalRows);

        return [start, end];
    }

    reset() {
        this.firstPage();
    }
}