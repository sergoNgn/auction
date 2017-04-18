import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(list: any[], filterByField: string, filterValue: string): any {
        if(!filterByField || !filterValue) {
            return list;
        }

        return list.filter(v => {
           const field = v[filterByField].toLowerCase();
           const filter = filterValue.toLowerCase();
           return field.indexOf(filter) >= 0;
        });
    }
}