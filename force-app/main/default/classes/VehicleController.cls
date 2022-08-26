public with sharing class VehicleController {
    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Showroom_Offer__c> getAllRelatedVehicles(Id showroomOfferId){

        return[SELECT Vehicle__r.ID, Vehicle__r.Name 
        FROM Showroom_Offer__c
        WHERE Showroom__r.id =:showroomOfferId 
        WITH SECURITY_ENFORCED];
}
}
