public with sharing class CharSheetWrapperController {
    @AuraEnabled
    public static Character_Stat_Sheet__c saveCharSheet(Character_Stat_Sheet__c charSheet){
        //perform isUpdatable() checking first, then
        upsert charSheet;
        return charSheet;        
    }
}
