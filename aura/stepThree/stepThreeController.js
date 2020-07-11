({
    init: function(cmp, evt, helper){
        console.log('ggggg');
        var myPageRef = cmp.get("v.pageReference");
        var workTypeId = myPageRef.state.c__workTypeId;
        cmp.set("v.workTypeId", workTypeId);
        console.log(myPageRef);
        var action = component.get("c.getContact");
        action.setParams({"idWorkType" : workTypeId});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.WorkType", response.getReturnValue());
                console.log(response.getReturnValue());
            }
         });
         $A.enqueueAction(action); 
    },
    navigateToCmp4:function(component, event, helper){
        //component.find("recordEditForm").submit();
        let navService = component.find("navService");
        component.set("v.workTypeId", payload.id);
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepFour',
            },
            state: {
                "c__workTypeId": component.get("v.workTypeId")
            }
        };
        event.preventDefault();
        navService.navigate(pageReference);
        
    },
    
    handleChange: function(cmp, event, helper) {
        var firstname = cmp.find("firstname").get("v.value");
        var firstname2 = cmp.find("firstname").get("v.value");
    }
    
})