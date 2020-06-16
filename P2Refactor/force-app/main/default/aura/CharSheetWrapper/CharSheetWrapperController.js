({
    myAction : function(component, event, helper) {

    },
    /*saveCharSheet : function (component, charSheet, helper){
        console.log("Wrapper saveCharSheet called");
        let action = component.get("c.saveCharSheet");
        action.setParams({
            "charSheet" : charSheet
        });
        if(helper){
            action.setCallback(this, helper);
        }
        $A.enqueueAction(action);
    },*/
    handleSaveCharSheet : function(component, event, helper){
        console.log("Wrapper handleSaveCharSheet called");
        let savedCharSheet = event.getParam("charSheet");
        //this.saveCharSheet(component, savedCharSheet, helper);
        console.log("Wrapper callback executing");
        let action = component.get("c.saveCharSheet");
        action.setParams({
            "charSheet" : savedCharSheet
        });
        /*if(helper){
            action.setCallback(this, helper);
        }*/
        $A.enqueueAction(action);
        console.log("wrapper callback finished");
    }
})
