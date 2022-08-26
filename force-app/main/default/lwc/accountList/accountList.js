import { LightningElement, wire} from 'lwc';
import getAllObject1 from '@salesforce/apex/AccountController.getAllObject1';
import getAllObject2 from '@salesforce/apex/AccountController.getAllObject2';
import getAllObject3 from '@salesforce/apex/AccountController.getAllObject3';
import getAllObject4 from '@salesforce/apex/AccountController.getAllObject4';

export default class AccountList extends LightningElement {
    @wire(getAllObject1)
    accounts;

    @wire(getAllObject2)
    accounts;

    @wire(getAllObject3)
    accounts;

    @wire(getAllObject4)
    accounts;
}
