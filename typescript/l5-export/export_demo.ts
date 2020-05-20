export function calTax(income:number,
    state:string="SH",
    dependents?:number):number {
        var deduction:number;
        if (dependents){
            deduction =dependents*500
        }else{
            deduction=0;
        }

        if (state==='SH'){
            return income*0.06-deduction;
        }else if (state==='BJ'){
            return income*0.05-deduction;
        }
    }
