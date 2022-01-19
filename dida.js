/*
[rewrite_local]
# > QuantumultX
# > MeisterTask (20200910)
https://dida365.com\/api\/v2\/user\/status url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/meistertask.js
[mitm]
hostname = dida365.com
*/

//var body = $response.body.replace("pro":\w+,'"pro":true').replace("proEndDate":"\d+-\d+-\d+,'"proEndDate":"2033-01-01');
//$done({ body });

//var body = $response.body.replace(/"pro":\\w+/g, '"pro":true').replace(/"proEndDate":\"\\d+-\\d+-\\d+/g, '"proEndDate":\"2033-01-01"');
//$done({ body });

var body = $response.body.replace(/"pro": \w+"/g,'"pro": true').replace(/"proEndDate": "\d+-\d+-\d+"/g,'"proEndDate": "2286-01-06T01:39:28.000+0000"');
$done({ body });
