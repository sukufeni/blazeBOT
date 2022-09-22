require("tls").DEFAULT_ECDH_CURVE = "auto"
const request = require('request');

var lastColor;
var currHash = "";

var x = setInterval(intervalFunction, 1500);

function intervalFunction(){
    request('https://api-v2.blaze.com/roulette_games/recent', { json: true }, (err, res, body) => {
        if (err) { return console.log("ERRRORRRRRR -> "+err); }
        
        console.log(body[0]['server_seed']);
        lastHash = body[0]['server_seed'];
        
        
        if(lastHash!=currHash){
            lastNumber = casUndefined(body[0]['roll']);
            currHash = casUndefined(body[0]['server_seed']);
            lastColor= castColor(casUndefined(body[0]['color']));
            console.log(lastNumber);
            console.log(lastColor);2
            console.log(currHash);


            request.post(
                'http://localhost:3000/colors',
                { json: { colorName: lastColor, number: lastNumber } },
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body);
                    }
                }
            );
        }
});
}

function casUndefined(entry){
    if (typeof entry !== 'undefined' && entry)
    {
      return entry;
    }
    else {
        return '';
    }
}
function castColor(color){
    if(color==0) return "white";
    else if(color==1) return "red";
    else if(color==2) return "black";
    else '';
}