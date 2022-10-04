public with sharing class VehicleController {
    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Vehicle__c> getAllVehicles(String showroomId){

       List<Vehicle__c> vehicles = [SELECT Vehicle__c.ID, Vehicle__c.Name, Vehicle__c.Brand__c, Vehicle__c.Model__c, Vehicle__c.Price__c, 
       Vehicle__c.Photo_display__c, Vehicle__c.Photo__c, Vehicle__c.Interested__c
      FROM Vehicle__c WHERE Showroom__c =: showroomId];
     
       return vehicles;
 
}

// Check box changing "Interested"

@AuraEnabled(cacheable=false)
public static void interestedChange(Id vehicles){
    List <Vehicle__c>  vehicleToUpdate = [SELECT Id, Interested__c FROM Vehicle__c WHERE Id =: vehicles];

    for(Vehicle__c change:vehicleToUpdate){
        if (change.Interested__c ==false){
            change.Interested__c = true;
        }
        else {
            change.Interested__c  = false;
        }
    }  
    update vehicleToUpdate;
}

}
