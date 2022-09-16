public with sharing class ShowroomController {
    @AuraEnabled(cacheable = true scope = 'global')
    public static List <Showroom__c> getAllShowrooms(){

        List<Showroom__c> showlist =[SELECT ID, Name
        FROM Showroom__c ];
        return showlist;
}
}
