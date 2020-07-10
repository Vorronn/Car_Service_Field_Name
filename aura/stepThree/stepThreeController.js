({
    init: function(component, event, helper){
        let pageReference =  {
            type: 'standard__component',
            attributes: {
                componentName: 'c__stepFour',
            },
            state: {
                "c__title":"Director"
            }
        };
        component.set("v.pageReference", pageReference);
    },
    navigateToCmp4:function(component, event, helper){
        //component.find("recordEditForm").submit();
        let navService = component.find("navService");
        let pageReference = component.get("v.pageReference");
        event.preventDefault();
        navService.navigate(pageReference);
        
    },
    
    handleChange: function(cmp, event, helper) {
        var firstname = cmp.find("firstname").get("v.value");
        var firstname2 = cmp.find("firstname").get("v.value");
    }
    
})