//<script>
var imgname= '';
var ktoti=  new Object();

function getXMLHttpRequest()
{
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }

    return new ActiveXObject('Microsoft.XMLHTTP');
};


//получение слов из бд
function getwords(){
    request = getXMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            responseBody = request.responseText;
            ktoti = JSON.parse(responseBody);
        }
    };
    request.open('GET', 'obtaindbwords.php', true);
    request.send(null);
}





function getimg(){
    request1 = getXMLHttpRequest();
    request1.onreadystatechange = function () {
        if (request1.readyState == 4) {
            responseBody1 = request1.responseText;
            imgname = JSON.parse(responseBody1);
            document.getElementById('field0').style.backgroundImage = imgname;
        }
    };
    request1.open('GET', 'imgfile.php', true);
    request1.send(null);
}


getimg();


getwords();


//</script>