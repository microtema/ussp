import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'itemsPerPage'
})
export class ItemsPerPagePipe implements PipeTransform {

    transform(value:any[], args:number[]):any[] {

        if (value == null || value.length == 0) {
            return value;
        }

        let start:number = Math.min(value.length - 1, args[0]);
        let end:number = Math.min(value.length, args[1]);

        if (start >= end) {
            return value;
        }

        let list:any[] = [];

        for (var i = start; i < end; i++) {
            list[list.length] = value[i];
        }

        console.info("itemsPerPage", args, value, list);

        return list;
    }
}