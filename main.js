function ip() {
    $.getJSON("https://api.ipify.org?format=json",
    function(data) {
        $("#ip").html(data.ip);
    })
}

function browser() {
    browser = document.getElementById("browser");

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 )
    {
        browser.innerHTML='Opera';
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        browser.innerHTML='Chrome';
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        browser.innerHTML='Safari';
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 )
    {
        browser.innerHTML='Firefox';
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true ))
    {
        browser.innerHTML='IE'; 
    }  
    else
    {
        browser.innerHTML='unknown';
    }
}

function os() {
    os = document.getElementById("os");
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
    if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
    os.innerHTML=OSName;
}

function locations() {
    var x = document.getElementById("location");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

    function show(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }
}