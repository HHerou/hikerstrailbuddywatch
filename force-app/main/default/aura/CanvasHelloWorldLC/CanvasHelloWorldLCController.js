({
	doInit : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        var sObjectName = component.get("v.sObjectName");

        var action = component.get("c.getRecord");
        action.setParams({ sObjectName : sObjectName,
                          recordId : recordId});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                console.log(response.getReturnValue());
                var responseValue = response.getReturnValue();
                var canvasParams = JSON.stringify({ "recordId":recordId,
                                                   "sObjectName":sObjectName,
                                                   "recordName":responseValue.Name });
                component.set("v.canvasParams", canvasParams);
                console.log(canvasParams);                
            }
         });
         $A.enqueueAction(action);        
        

	}
})