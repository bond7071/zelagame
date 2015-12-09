//<script>
function launchFullscreen(element) {
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

function popsize(){
    document.getElementById('congratulation').style.height = document.getElementById('mainzfield').offsetHeight + 'px';
    document.getElementById('congratulation').style.width = document.getElementById('mainzfield').offsetWidth + 'px';
    var coords = document.getElementById('mainzfield').getBoundingClientRect();
    document.getElementById('congratulation').style.top = coords.top + 'px';
    document.getElementById('congratulation').style.left = coords.left + 'px';
};




function resizez(){
    document.documentElement.style.fontSize = String(Math.floor(window.innerWidth*0.018)) + 'px' ;
    var topzheight = document.getElementById('headz').offsetHeight;
    document.getElementById('field0').style.height = String(window.innerHeight - topzheight) + 'px';
    if (window.innerWidth < window.innerHeight){
        document.getElementById('backcimg').style.width = '100%';
        document.getElementById('backcimg').style.height = 'auto'
    } else { document.getElementById('backcimg').style.width = 'auto';
    document.getElementById('backcimg').style.height = '100%'}

};
function sizez(){
    document.documentElement.style.fontSize = String(Math.floor(window.innerWidth*0.018)) + 'px' ;
    var topzheight1 = document.getElementById('headz').offsetHeight;
    document.getElementById('field0').style.height = String(window.innerHeight - topzheight1) + 'px';
    if (window.innerWidth < window.innerHeight){
        document.getElementById('backcimg').style.width = '100%';
        document.getElementById('backcimg').style.height = 'auto'
    } else { document.getElementById('backcimg').style.width = 'auto';
        document.getElementById('backcimg').style.height = '100%'}
};

sizez();


if(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen)
{resizez();   popsize();  };

window.onresize = function resizeall(){
    if(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen)
    {resizez();   popsize();                    }
    else{
        sizez();  popsize(); }
};


popsize();

//</script>