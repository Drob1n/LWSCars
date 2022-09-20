import { LightningElement, wire, track} from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
import getRelatedShowrooms from '@salesforce/apex/AccountController.getRelatedShowrooms';
import getAllRelatedVehicles from '@salesforce/apex/VehicleController.getAllRelatedVehicles'
const COLUMNS = [{label: 'Name', fieldName: 'Name'}];
export default class AccountList extends LightningElement {
        @track accountId = '';
        @track showroomId;
        @track columns = COLUMNS;
        @track vehicles;

        @wire(getAllAccounts)
        accounts;

        @wire(getRelatedShowrooms, {accountId: '$accountId'})
        showrooms;


        onValueSelection(event) {
            
            this.accountId = event.target.value;
            console.log(this.showrooms)
        }
        onValueSelection2(event) {

            this.showroomId = event.target.value;

            getAllRelatedVehicles({showroomId: this.showroomId})

            .then(result=>{this.vehicles=result;

                console.log(this.vehicles);})

        }




}



    


