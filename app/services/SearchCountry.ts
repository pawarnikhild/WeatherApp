const baseURL = 'https://restcountries.com/v3.1/name/' // / baghne

export const searchCountry = async ( payload: string ) =>{
    let result  = null;
    try {
        if(payload) {
            // fetch(`${baseURL}${payload}`)
            // .then((response) => response.json())
            // .then((data) => console.log(data));

            const response = await fetch(`${baseURL}${payload}`)
            const JSONResponse = await response.json();
            console.log('JSONResponse', JSONResponse)
            if(JSONResponse?.status != 404) {
                result = JSONResponse;
            } else {
                console.log("No such counrty");
            }
            // console.log('response', response.json());
            // console.log('response', JSON.stringify(response));
            
        } else {
            console.log("Could not get paylod");
        }
        
    } catch (error) {
        // alert("Something went wrong", error);
        console.log(error);        
    }
    return result;
    // console.log('result', result)
    

}