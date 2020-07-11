({
    init: function(cmp, evt, helper) {
        var myPageRef = cmp.get("v.pageReference");
        var firstname = myPageRef.state.c__workTypeId;
        cmp.set("v.workTypeId", firstname);
        console.log(myPageRef);
    },
    
    handleSuccess: function(component, event, helper) {
        //component.find("recordEditForm").submit();
        var navService = component.find("navService");
        // var payload = event.getParams().response;
        // console.log(payload.id);
        // component.set("v.workTypeId", payload.id);
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepThree',
            },
            state: {
                "c__workTypeId": component.get("v.workTypeId")
            }
        };
        event.preventDefault();
        navService.navigate(pageReference);
    }

})