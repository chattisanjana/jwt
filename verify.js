const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImJXOFpjTWpCQ25KWlMtaWJYNVVRRE5TdHZ4NCJ9.eyJ2ZXIiOiIyLjAiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkL3YyLjAiLCJzdWIiOiJBQUFBQUFBQUFBQUFBQUFBQUFBQUFJZ2pMN3JmWXR5a29Bd3hheWNTZVFrIiwiYXVkIjoiY2ExNDQ5YjctNWU2Mi00ODMxLWIwN2YtZWQ1OTRlNTkxOTFhIiwiZXhwIjoxNjE5ODAzMDg4LCJpYXQiOjE2MTk3MTYzODgsIm5iZiI6MTYxOTcxNjM4OCwibmFtZSI6IkF2aW5hc2ggRGFudGUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhdmluYXNoZGFudGVAb3V0bG9vay5jb20iLCJvaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtODI0NC0yODliZDllMmJlZDUiLCJ0aWQiOiI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJub25jZSI6ImUwODJkZjhkLWMzNGEtNDFjOS05ODUwLTI1YjU0ZGE2NTdlOSIsImFpbyI6IkRUT2pSZXF1U3RxdFp6VmtCZ3diZmphcGZLN2tCNFNhQ3NuanMhYUdCSXR4TWZ1RyFYRG5YeG4wcHBVOURSVWZMYmN6WWRuekx6YSo3Y2pVSlhGblhnQ1NWdnRiZHM2OXZnaG9UdGg0SVJnU2k1bVVodE9iREp1QUxXWmUqaE8xWCpHcFYzQnU4T2o1dHl3R0phQ3k2d3ckIn0.xYuu_BzHIqn5YpIOgMdnhefPRwQLnReU2ES8TwrAwXSyRvy9ig4H_w6nEPLeiE0J5xVJYdzorXAKfDobULlj01kBTX-VgileABksjHELydyfmAP8wG3_oExdwHN4GSvs5WcJ_lq4_Y8IOrYIeY06YJ-dv0iEgpA95QieEnGrXJWReerWJ_IIudXr3yBwGR1gaDI_sO-axQrnm08PxMu_frfcxYehVqGaKLrPCYPR31PSjQ_GRbrkKpkwdeiecU-qOHoE90aA4V9pSqZ5nN3GbEEbcHpbehvGDgwoy_Em1sPIT2ZwUUMxO-DRlOoXKSl6RstjdnoK_Jsyb3q_l8yL9Q";
// const jwt = require("jsonwebtoken");

// var jwksClient = require("jwks-rsa");
// var client = jwksClient({
//   jwksUri:
//     "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/discovery/v2.0/keys",
// });
// function getKey(header, callback) {
//   console.log(header.kid);
//   client.getSigningKey(header.kid, function (err, key) {
//     //   console.log(JSON.stringify(key))
//     // let key = {"kid":"bW8ZcMjBCnJZS-ibX5UQDNStvx4","publicKey":"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2a70SwgqIh8U+Shj/VJJ\nGBheEVk2F4ygmMCRtKUAb1jMP6R1j5Mc5xaqhgzlWjckJI1lx4rha1oNLrdg8tJB\nxdm8V8xZohCOanJ52uAwoc6FFTY3VRLaUZSJ3zCXfuJwy4KvFHJUAuLhLj0hVeq+\ny10CmRJ1/MPTuNRJLdblSWcXyWYIikIRggQWS04M+QjR7571mX+Lu/eDs8xJVrnN\nFMVGRmFqf3EFD4QLNjW9JJj0m/prnTv41V/E8AA7MQZ12ip3u5aeOAQqGjVyzdHx\nvV9laxta6XWaM8QSTIu/Zav1+aDYExp99nCP4Hw0/Oom5vK5N88DB8VM0mouQi8a\n8QIDAQAB\n-----END PUBLIC KEY-----\n","rsaPublicKey":"-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2a70SwgqIh8U+Shj/VJJ\nGBheEVk2F4ygmMCRtKUAb1jMP6R1j5Mc5xaqhgzlWjckJI1lx4rha1oNLrdg8tJB\nxdm8V8xZohCOanJ52uAwoc6FFTY3VRLaUZSJ3zCXfuJwy4KvFHJUAuLhLj0hVeq+\ny10CmRJ1/MPTuNRJLdblSWcXyWYIikIRggQWS04M+QjR7571mX+Lu/eDs8xJVrnN\nFMVGRmFqf3EFD4QLNjW9JJj0m/prnTv41V/E8AA7MQZ12ip3u5aeOAQqGjVyzdHx\nvV9laxta6XWaM8QSTIu/Zav1+aDYExp99nCP4Hw0/Oom5vK5N88DB8VM0mouQi8a\n8QIDAQAB\n-----END PUBLIC KEY-----\n"}
//     // let key = {"kid":"bW8ZcMjBCnJZS-ibX5UQDNStvx4","publicKey":"-----BEGIN PUBLIC KEY-----\nMIIDYDCCAkigAwIBAgIJAN2X7t+ckntxMA0GCSqGSIb3DQEBCwUAMCkxJzAlBgNVBAMTHkxpdmUgSUQgU1RTIFNpZ25pbmcgUHVibGljIEtleTAeFw0yMTAzMjkyMzM4MzNaFw0yNjAzMjgyMzM4MzNaMCkxJzAlBgNVBAMTHkxpdmUgSUQgU1RTIFNpZ25pbmcgUHVibGljIEtleTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANmu9EsIKiIfFPkoY/1SSRgYXhFZNheMoJjAkbSlAG9YzD+kdY+THOcWqoYM5Vo3JCSNZceK4WtaDS63YPLSQcXZvFfMWaIQjmpyedrgMKHOhRU2N1US2lGUid8wl37icMuCrxRyVALi4S49IVXqvstdApkSdfzD07jUSS3W5UlnF8lmCIpCEYIEFktODPkI0e+e9Zl/i7v3g7PMSVa5zRTFRkZhan9xBQ+ECzY1vSSY9Jv6a507+NVfxPAAOzEGddoqd7uWnjgEKho1cs3R8b1fZWsbWul1mjPEEkyLv2Wr9fmg2BMaffZwj+B8NPzqJubyuTfPAwfFTNJqLkIvGvECAwEAAaOBijCBhzAdBgNVHQ4EFgQU57BsETnF8TctGU87R4N9YxmNWoIwWQYDVR0jBFIwUIAU57BsETnF8TctGU87R4N9YxmNWoKhLaQrMCkxJzAlBgNVBAMTHkxpdmUgSUQgU1RTIFNpZ25pbmcgUHVibGljIEtleYIJAN2X7t+ckntxMAsGA1UdDwQEAwIBxjANBgkqhkiG9w0BAQsFAAOCAQEAcsk+LGlTzSQdnh3mtCBMNCGZCiTYvFcqenwjDf1/c4U+Yi7fxYmAXm7wVLX+GVMxpLPpzMuVOXztGoPMUgWH59CFWhsMvZbIUKsd8xbEKmls1ZIgxRYdagcWTGeBET6XIoF6Ba57BhRCxFPslhIpg27/HnfHtTdGfjRpafNbBYvC/9PL/s2E9U4AklpUn2W19UiJLRFgXGPjYPLW0j1Od0qzHHJ84saclVwvuOrpp75Y+0Du5Z2OrjNF1W4dEWZMJmmOe73ejAnoiWJI25kQpkd4ooNasw3HIZEJZ6cKctmPJLdvx0tJ8bde4DivtWOeFIwcAkokH2jlHmAOipNETw==\n-----END PUBLIC KEY-----\n"}
//     var signingKey = key.publicKey || key.rsaPublicKey;
//     console.log(signingKey);
//     callback(null, signingKey);
//   });
// }

// jwt.verify(token, getKey, { algorithms: ["RS256"] }, function (err, decoded) {
//   console.log(err);
//   console.log(decoded.foo); // bar
// });
var jwksClient = require("jwks-rsa");
var jwt = require("jsonwebtoken");

// token = "valid JWT token";
var decoded = jwt.decode(token, { complete: true });
var header = decoded.header;

var verifyOptions = {
  algorithms: ["RS256"],
  header: decoded.header,
};

var client = jwksClient({
  jwksUri: "https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/discovery/v2.0/keys",
});
function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    // console.log(JSON.stringify(key),err)
    var signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}

jwt.verify(token, getKey, verifyOptions, function (err, decoded) {
  //This will display the decoded JWT token.
  console.log(decoded);
});
