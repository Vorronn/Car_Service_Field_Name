({
    init : function(component, event, helper) {
        /*var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepTwo',
            },
            state: {
                "c__firstname": "John"
            }
        };
        component.set("v.pageReference", pageReference);*/
    },
    handleSuccess: function(component, event, helper) {
        //component.find("recordEditForm").submit();
        var navService = component.find("navService");
        var payload = event.getParams().response;
        //console.log(payload.id);
        component.set("v.workTypeId", payload.id);
        var pageReference = {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepTwo',
            },
            state: {
                "c__workTypeId": component.get("v.workTypeId")
            }
        };
        event.preventDefault();
        navService.navigate(pageReference);
    }
})