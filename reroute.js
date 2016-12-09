//
//
//	Copyright coned_miro 2016
//
//	Michael D. Vinci
//
//
//	http://webcache.googleusercontent.com/search?q=cache:
//
// 	https://social.technet.microsoft.com*
// 
//	&num=1&hl=en&gl=us&strip=1&vwsrc=0
//
//

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log('onBeforeRequest');

    var returnUrl;
    returnUrl = details.url;
    if ((details.url.indexOf("social.technet.microsoft.com") > -1)){
      returnUrl = "http://webcache.googleusercontent.com/search?q=cache:" + details.url + "&num=1&hl=en&gl=us&strip=1&vwsrc=0";
    }else{
      returnUrl = details.url;
    }
    return {redirectUrl: returnUrl};
  },
  {
    urls: [
      "*://*/*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);