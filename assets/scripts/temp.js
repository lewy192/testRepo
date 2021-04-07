var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(userPosition){
    let userCoordinatesResponseObject = userPosition.coords;
    let userCoordinatesObject = {
        usersLatitude:userCoordinatesResponseObject.latitude,
        usersLongitude:userCoordinatesResponseObject.longitude
    };
    let userCoordinatesArray = [userCoordinatesObject.usersLongitude,userCoordinatesObject.usersLatitude]
    // coordinates stored [longitude,latitude]
    // getWeather(weatherApiKey,userCoordinatesArray ,'none');
    // return userCoordinatesArray
    
};


function error(err){
    // TODO: handle errors
    console.warn(`ERROR(${err.code}): ${err.message}`)
    
};


return navigator.geolocation.getCurrentPosition(success,error,options,true)