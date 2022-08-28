@Injectable({
    providedIn: 'root'
  })
  export class ValidationService {

      emailValid(): ValidatorFn {
        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return (control: AbstractControl): { [key: string]: any } | null => {
          if (!control.parent) {
            return null;
          }
          if(regexp.test(control.value.toLowerCase()) == false){
            return { 'pattern': '-1' }
           }
           else{
             return null;
           }
        }
      }
    }

