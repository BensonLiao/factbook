let viz, sheet, table;

function getParam(param) {
	let search = window.location.search.substring(1);
	let compareKeyValuePair = function(pair) {
		let key_value = pair.split('=');
		let decodedKey = decodeURIComponent(key_value[0]);
		let decodedValue = decodeURIComponent(key_value[1]);
		if (decodedKey == param) return decodedValue;
		return null;
	};

	let comparisonResult = null;

	if (search.indexOf('&') > -1) {
		let params = search.split('&');
		for (let i = 0; i < params.length; i++) {
			comparisonResult = compareKeyValuePair(params[i]); 
			if (comparisonResult !== null) break;
		}
	} else {
		comparisonResult = compareKeyValuePair(search);
	}

	return comparisonResult;
}

export function ajaxRequestByPureJS(contentUrl) {  
	// let userid = document.getElementById('userid').value;
	// let password = document.getElementById('password').value;
	let userid = 'NTNU_GUEST';
	let password = 'guest@NTNU';
	// let contentUrl = document.getElementById('contentUrl').value;
	let params = 'userid='+userid+'&password='+password+'&contentUrl='+contentUrl+'&onlyTicket=yes';
	// console.log('POST params='+params);
	let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
		console.log('request readyState : '+xhr.readyState);
		console.log('request status : '+xhr.status);
		if (xhr.readyState == 4 && xhr.status == 200) {
			console.log('request success!');
			console.log(xhr.responseText);
			let res = JSON.parse(xhr.responseText);
			console.log('login_status='+res.login_status);
			if (res.login_status && res.view_auth) {
				// console.log('trusted_url='+res.trusted_url);
				initViz(res.trusted_url);
			} else {
				let msg = '載入失敗! 請通知系統管理員.';
				alert(msg);
			}
		}
    };
	// xhr.open('POST', 'https://stats.iro.ntnu.edu.tw:8443/TableauServlet/SSO', true);
	xhr.open('POST', 'http://stats.iro.ntnu.edu.tw:8080/TableauServlet/SSO', true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	xhr.send(params);
	return true;
}

function initViz(url) {  
	let placeholderDiv = document.getElementById('tableauViz');
	// let url = document.getElementById('trusted_url').value;
	console.log('url:'+url);
					
	let options = {
	    hideTabs: true,
	    width: '1000px',
	    height: '1200px',
		onFirstInteractive: function () {
			let sheetCount = viz.getWorkbook().getPublishedSheetsInfo().length;
			console.log('sheetCount:'+sheetCount);
		}
	};

	viz = new tableau.Viz(placeholderDiv, url, options);
}