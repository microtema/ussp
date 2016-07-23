import {Injectable} from "@angular/core";
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'app/rxjs-operators';

@Injectable()
export class CommandService {

    constructor(private http:Http) {
    }

    getCommands(url:string):Observable<Command[]> {
        return this.http.get(url).map(this.extractData).catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body.data || body;
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead

        return Observable.throw(errMsg);
    }
}

export class Command {
    constructor(public id:string, public displayName:string, public description?:string, public restCommand?:string, public selected?:boolean) {

    }
}
