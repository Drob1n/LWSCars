import { LightningElement,  track} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
import getRelatedShowrooms from '@salesforce/apex/AccountController.getRelatedShowrooms';
import getAllVehicles from '@salesforce/apex/VehicleController.getAllVehicles'
const COLUMNS = [{label: 'Name', fieldName: 'Name'}];
export default class AccountList extends LightningElement {
        accounts;
        showrooms;
        vehicles;
        @track accountId = '';
        @track showroomId;
        @track columns = COLUMNS;
        @track vehicles;

        connectedCallback(){

            getAllAccounts({})
            .then(result=>{
                this.accounts = result;

            });

        }

        onValueSelection(event) {

            this.accountId = event.target.value;
            getRelatedShowrooms({accountId:this.accountId})
            .then(result=>{
                this.showrooms = result;

            });
            console.log(this.showrooms);

        }

        onValueSelection2(event) {
            this.showroomId = event.target.value;
            getAllVehicles({showroomId: this.showroomId})
            .then(result=>{
                this.vehicles=result;
            });
          console.log(this.vehicles);

        }

}





    


