import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], value : string, field: string[]=Array()): any[] {
    
    if (!items) return [];
    if (!value || value.length == 0) return items;
    
        
    if(field.length <= 0)
      for(let l in items[0])
        field.push(l);
    
    let r;
     r = items.filter((it) => 
     {
       for(let t of field)
        if(it[t].toString().toLowerCase().indexOf(value.toLowerCase()) >= 0)
          return true;
      }
    );

    return r;
  }

}
