import {PaginationComponent, PaginationData} from "../../directive/pagination/PaginationComponent";
import {ComponentFixture, TestComponentBuilder, inject} from "@angular/core/testing";
describe("PaginationComponent", () => {

    let builder:TestComponentBuilder;
    let fixture:ComponentFixture<PaginationComponent>;

    beforeEach(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        builder = tcb;
    }));

    afterEach(() => {
        fixture && fixture.destroy();
    });

    it('should render default pagination', done => {

        builder.createAsync(PaginationComponent).then((f:ComponentFixture<PaginationComponent>) => {

            fixture = f;

            fixture.componentInstance.paginationData = new PaginationData(10);

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelectorAll("li.page-display span")[0].innerText).toBe("Page 0/0");

            done();
        });
    });

    it('should render pagination with 10 rows', done => {

        builder.createAsync(PaginationComponent).then((f:ComponentFixture<PaginationComponent>) => {

            fixture = f;

            fixture.componentInstance.paginationData = new PaginationData(10);
            fixture.componentInstance.paginationData.totalRows = 10;

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelectorAll("li.page-display span")[0].innerText).toBe("Page 1/1");

            done();
        });
    });


    it('should render pagination with 5 rows and 2 pages', done => {

        builder.createAsync(PaginationComponent).then((f:ComponentFixture<PaginationComponent>) => {

            fixture = f;

            fixture.componentInstance.paginationData = new PaginationData(10);
            fixture.componentInstance.paginationData.totalRows = 10;
            fixture.componentInstance.paginationData.rowsPerPage = 5;

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelectorAll("li.page-display span")[0].innerText).toBe("Page 1/2");

            done();
        });
    });
});