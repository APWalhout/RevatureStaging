public with sharing class CharSheetContactController {
    @AuraEnabled
    public static List<Contact> getContacts(){
        //soql and security testing here
        //check to make sure all fiedls are accessible to this user
        String[] fieldsToCheck = new String[]{
            'Id', 'Name', 'Languages__c'
        };

        Map<String, Schema.SObjectField> fieldDescribeTokens =
            Schema.SObjectType.Contact.fields.getMap();

        for(String field : fieldsToCheck) {
            if(!fieldDescribeTokens.get(field).getDescribe().isAccessible()){
                throw new System.NoAccessException();
            }
        }

        return [SELECT Id, Name, Languages__c FROM Contact];
    }
}
