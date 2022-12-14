// ---------------------------------------------------------------------------------------
// Note -
// ---------------------------------------------------------------------------------------
/*
    We can handle api call using -
    1) Using async await
    2) Using .then
*/


// ---------------------------------------------------------------------------------------
// 1) Using async await
// ---------------------------------------------------------------------------------------

const baseURL = 'https://restcountries.com/v3.1/name/';

export const searchCountry = async ( payload: string ) =>{
    let result  = null;
    try {
        if(payload) {
            const response = await fetch(`${baseURL}${payload}`)
            const JSONResponse = await response.json();
            if(JSONResponse?.status != 404) {
                result = JSONResponse;
            } else {
                console.log("No such counrty");
            }
        } else {
            console.log("Could not get paylod");
        }

    } catch (error) {
        // alert("Something went wrong", error); // This is giving error.
        console.log(error);        
    }
    return result;
    // console.log('result', result)
}


// ---------------------------------------------------------------------------------------
// 2) Using .then
// ---------------------------------------------------------------------------------------

// const baseURL = 'https://restcountries.com/v3.1/name/' // / baghne

// export const searchCountry = (payload: string) => {
//     let result = null;
//     if (payload) {
//         result = fetch(`${baseURL}${payload}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data?.status != 404) {
//                     return data;
//                 } else {
//                     console.log("No such counrty");
//                 }
//                 console.log('data', data)
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     } else {
//         console.log("Could not get paylod");
//     }
//     // console.log('result', result)
//     return result;
// }