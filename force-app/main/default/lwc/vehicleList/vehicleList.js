import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Vehicle__c.Name';
import VEH_MODEL_FIELD from '@salesforce/schema/Vehicle__c.Model__c';
import VEH_PRICE_FIELD from '@salesforce/schema/Vehicle__c.Price__c';
import VEH_PHOTO_FIELD from '@salesforce/schema/Vehicle__c.Photo__c';
export default class VehicleCardList extends LightningElement {
    @api vehicle = {
        "image" : VEH_PHOTO_FIELD,
        "name" : NAME_FIELD,
        "model" : VEH_MODEL_FIELD,
        "price" : VEH_PRICE_FIELD
    };
}