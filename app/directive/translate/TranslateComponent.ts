import {Component, Input} from '@angular/core';

@Component({
    selector: 'translate',
    templateUrl: 'template/directive/translate/component.html'
})
export class TranslateComponent{

    @Input("key")
    key:string;
}