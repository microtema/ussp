import {TestComponentBuilder, ComponentFixture, inject} from "@angular/core/testing";
import {TableDataComponent} from "../../directive/table-data/TableDateComponent";

describe('TableDataComponent', () => {

    let builder:TestComponentBuilder;
    let fixture:ComponentFixture<TableDataComponent>;

    beforeEach(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        builder = tcb;
    }));

    afterEach(() => {
        fixture && fixture.destroy();
    });

    it('should render string', done => {

        builder.createAsync(TableDataComponent).then((f:ComponentFixture<TableDataComponent>) => {

            fixture = f;

            fixture.componentInstance.data = "Some String";

            fixture.detectChanges();

            expect(fixture.componentInstance.type).toBe("String");
            expect(fixture.nativeElement.innerText).toBe("Some String");

            done();
        });
    });

    it('should render boolean as glyphicon', done => {

        builder.createAsync(TableDataComponent).then((f:ComponentFixture<TableDataComponent>) => {

            fixture = f;

            fixture.componentInstance.data = new Boolean(true);

            fixture.detectChanges();

            expect(fixture.componentInstance.type).toBe("Boolean");
            expect(fixture.nativeElement.querySelectorAll("span.glyphicon").length).toBe(1);

            done();
        });
    });

    it('should render date', done => {

        builder.createAsync(TableDataComponent).then((f:ComponentFixture<TableDataComponent>) => {

            fixture = f;

            fixture.componentInstance.data = new Date(1971, 1, 20);

            fixture.detectChanges();

            expect(fixture.componentInstance.type).toBe("Date");
            expect(fixture.nativeElement.innerText).toBe("20/02/1971");

            done();
        });
    });

    it('should render number', done => {

        builder.createAsync(TableDataComponent).then((f:ComponentFixture<TableDataComponent>) => {

            fixture = f;

            fixture.componentInstance.data = new Number("10.0");

            fixture.detectChanges();

            expect(fixture.componentInstance.type).toBe("Number");
            expect(fixture.nativeElement.innerText).toBe("10");

            done();
        });
    });

    it('should render undefined', done => {

        builder.createAsync(TableDataComponent).then((f:ComponentFixture<TableDataComponent>) => {

            fixture = f;

            //fixture.componentInstance.data = undefined;

            fixture.detectChanges();

            expect(fixture.componentInstance.type).toBe('undefined');
            expect(fixture.nativeElement.innerText).toBe("---");

            done();
        });
    });

    it('should render null', done => {

        builder.createAsync(TableDataComponent).then((f:ComponentFixture<TableDataComponent>) => {

            fixture = f;

            fixture.componentInstance.data = null;

            fixture.detectChanges();

            expect(fixture.componentInstance.type).toBe('undefined');
            expect(fixture.nativeElement.innerText).toBe("---");

            done();
        });
    });

    it('should render Array', done => {

        builder.createAsync(TableDataComponent).then((f:ComponentFixture<TableDataComponent>) => {

            fixture = f;

            fixture.componentInstance.data = ["Mario", "Emmy"];

            fixture.detectChanges();

            expect(fixture.componentInstance.type).toBe("Array");
            expect(fixture.nativeElement.innerText).toBe("Mario,Emmy ? Array");

            done();
        });
    });

});