const baseURL = 'http://api.weatherstack.com/current'
const key = '15f1028ce97add51927668ba8e0839f5';

export const searchCapitalWeather = async ( payload: string ) =>{
    let result  = null;
    try {
        if(payload) {
            const response = await fetch(`${baseURL}?access_key=${key}&query=${payload}`)
            const JSONResponse = await response.json();
            result = JSONResponse;
            
            // // American result
            //  result = {"request":{"type":"City","query":"New York, United States of America","language":"en","unit":"m"},"location":{"name":"New York","country":"United States of America","region":"New York","lat":"40.714","lon":"-74.006","timezone_id":"America\/New_York","localtime":"2022-09-22 09:40","localtime_epoch":1663839600,"utc_offset":"-4.0"},"current":{"observation_time":"01:40 PM","temperature":22,"weather_code":116,"weather_icons":["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"],"weather_descriptions":["Partly cloudy"],"wind_speed":13,"wind_degree":220,"wind_dir":"SW","pressure":1002,"precip":0,"humidity":81,"cloudcover":75,"feelslike":22,"uv_index":5,"visibility":16,"is_day":"yes"}}
        } else {
            console.log("Could not get paylod");
        }
    } catch (error) {
        // alert("Something went wrong", error);
        console.log(error);        
    }
    return result;
    

}