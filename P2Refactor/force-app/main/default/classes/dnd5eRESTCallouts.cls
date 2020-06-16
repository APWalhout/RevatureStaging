public class dnd5eRESTCallouts {
    //makes a callout that returns a list of class names
    @auraEnabled
    public static List<String> classListCallout(){
        //get me something from the api/class endpoint
        Http protocol = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('http://www.dnd5eapi.co/api/classes/');
        request.setMethod('GET');
        HttpResponse response = protocol.send(request);
        //if successfully retrieved
        if(response.getStatusCode()==200){
            //unpack the api resource from the provided JSON
            Map<String, Object> respMap = 
                (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
            
            //pull out the count and get ready to pull out each name
            Integer classCount = (Integer)respMap.get('count');
            List<String> classNames = new List<String>();

            //start the process of pulling out each name
            List<Object> classList = (List<Object>)respMap.get('results');
            for(Integer index = 0; index < classCount; index++){
                Map<String, Object> objMap = (Map<String, Object>)classList[index];
                classNames.add(objMap.get('name').toString());
            }

            return classNames;
        }
        return null;
    }
}
