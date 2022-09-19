# Pragmateam code challenge client (Angular)

Please refer to the provided document for the code challenge requirements.

## Available scripts

- `npm start` - Start the application (Port 4200)
- `npm test` - Runs available tests



01. Highlight of improvement
API call was looping for each an every products in products list. I have added new backend API endpoint
to send list of IDs and take list of temperature objects. Frontend code added to read that . Now we only need to send one API call. That will reduct bandwidth usage and faster. 

02.  What I improve more next if I have time

Enhancement
	* Rather rendring frontend UI keep previous data and if there iss a change only apply the rendering with a frontend case system.
    * Need to integrate security to call with a token with http header.
Test 
	* Call controller level methods and test null values and what happen if backend send malfunction responses.
    * Develop a util class for REST methods like POST/GET/PUT... And every component can use util class generically. 
	* Error handle the code to manage erronous object from API response. 

03. Questions you would ask and your own answers and assumptions
	What are the none function requirments I have tested and missed from my test cases.

04. Desicions of approach I took
When I look at the code I could see that both FE and BE call multiple calls to consume data from APIs.
From backend perspective we are unalbe to handle it we do not have authoroty to change third party API. So we must have to call one by one and collect respones as one list.
But fronend we can modify and send list of ids unless sending one id and consume response and then send another id. I have modified both node backend and angular front for that.

05. Any other notes. 
We need to have abstract or parent classes with basic beforetest methods and validations. So we can reuse them again and agin. It will be easy if we integrate to test suite some day. 
	
	

