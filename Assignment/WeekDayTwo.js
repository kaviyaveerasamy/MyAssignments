// console.log(browserVersion)//hoisting
const browserVersion = "Chrome"
function getBrowserVersion(){
    if(browserVersion==="Chrome")
    {
        var browserVersion = "Local browser version"
        console.log(browserVersion+"the updated version is")
    }
    console.log(browserVersion+" version")
}
getBrowserVersion()