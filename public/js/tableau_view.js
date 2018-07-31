var viz, sheet, table;

function getParam(param) {
	var search = window.location.search.substring(1);
	var compareKeyValuePair = function(pair) {
		var key_value = pair.split('=');
		var decodedKey = decodeURIComponent(key_value[0]);
		var decodedValue = decodeURIComponent(key_value[1]);
		if (decodedKey == param) return decodedValue;
		return null;
	};

	var comparisonResult = null;

	if (search.indexOf('&') > -1) {
		var params = search.split('&');
		for (var i = 0; i < params.length; i++) {
			comparisonResult = compareKeyValuePair(params[i]); 
			if (comparisonResult !== null) break;
		}
	} else {
		comparisonResult = compareKeyValuePair(search);
	}

	return comparisonResult;
}

function checkCookie(){
	// Quick test if browser has cookieEnabled host property
	// It won't work in IE 11, always return true
    // if (navigator.cookieEnabled) return true;
    try {
		document.cookie = 'cookietest=1';
		var cookiesEnabled = document.cookie.indexOf('cookietest=') !== -1;
		document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
		return cookiesEnabled;
	} catch (e) {
		return false;
	}
}

function setCookie(cname, cvalue, exhours) {
	let d = new Date();
	// d.setTime(d.getTime() + (8 * 60 * 60 * 1000));
	console.log("login time="+d.toUTCString());
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	console.log("expire time="+expires);
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getLoginAndInitViz(contentUrl, vizContainer) {  
	let params = "contentUrl="+contentUrl+"&onlyTicket=yes&skipLDAP=yes";
	console.log("contentUrl="+contentUrl);
	let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
		// console.log("request readyState : "+xhr.readyState);
		console.log("request status : "+xhr.status);
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log("request success!");
			console.log(xhr.responseText);
			let res = JSON.parse(xhr.responseText);
			console.log("login_status="+res.login_status);
			if (res.login_status) {
				// console.log("trusted_url="+res.trusted_url);
				initViz(res.trusted_url, vizContainer);
			} else {
				let msg = "登入失敗!請檢查密碼是否正確";
				if (res.login_status && !res.view_auth) msg = "無儀表板檢視權限!";
			}
		}
    };
	// xhr.open("POST", "https://stats.iro.ntnu.edu.tw:8443/TableauServlet/SSO", true);
	xhr.open("POST", "http://stats.iro.ntnu.edu.tw:8080/TableauServlet/SSO", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
	xhr.send(params);
	return true;
}

function initViz(url, vizContainer) {  
	console.log("url:"+url);
	let vizWidth = '100%';
    let vizHeight = vizContainer.offsetWidth * 0.75;
    if (vizContainer.offsetWidth > 800) {

    } else if (vizContainer.offsetWidth > 500) {

    } else {
      vizHeight = vizContainer.offsetWidth * 1.77;
    }
					
	let options = {
	    hideTabs: true,
	    width: vizWidth,
	    height: vizHeight,
		onFirstInteractive: function() {
			console.log('it works!');
		}
	};

	viz = new tableau.Viz(vizContainer, url, options);
}