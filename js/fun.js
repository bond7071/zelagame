//<script>
var clickyes = true;
var levelz = 1;
var statement1 = 'чувак';
var yearz= 10;
//var ktoti= ["чувачок","грязный носок","гуру","офигеть"];
var counterz = 1;
var counterallz =1;//загальний рахунок
var gtimeintz =1200;
var timeintz = gtimeintz;
var gtimetoappear = 100;
var timetoappear = gtimetoappear;
var timeminus =5;
var timeminusa =1;
var eee;
var nextee;
var id;
var desyatok = true;
var badcong = new Array('Ого!','Да ну!','Ммм...','Привет','Круто','Интересно','Ну ты даеш')
var  zforce = ' ';
var result = new Array();

var noarray = new Array('','','','','не ');
var preword = new Array('сидя','стоя','бегая','прыгая','плавая','летая','копая','жуя');
var femalecolor = new Array('белой','розовой','синей','красной','голубой','желтой','зеленой','черной','серой','рыжей');
var malecolor = new Array('белым','розовым','синим','красным','голубым','желтым','зеленым','черным','серым','рыжим');
var femaleproperty = new Array('плохой','хорошей','доброй','злой','рябой','сивой','чистой','грязной','гнилой');
var maleproperty = new Array('плохим','хорошим','добрым','злым','рябым','сивым','чистым','грязным','гнилым');

var femalecolor1 = new Array();
var malecolor1 = new Array() ;
var femaleproperty1 = new Array();
var maleproperty1 = new Array();

 femalecolor1 = femalecolor.slice(0);
 malecolor1 = malecolor.slice(0);
 femaleproperty1 = femaleproperty.slice(0);
 maleproperty1 = maleproperty.slice(0);

var malecopr1 =  malecolor1.concat(maleproperty1);
var femalecopr1 = femalecolor1.concat(femaleproperty1);


var ii;

for (ii=1; ii<=9; ii++){
    femalecolor.push('');
    malecolor.push('');
    femaleproperty.push('');
    maleproperty.push('');
}

var malecopr =  malecolor.concat(maleproperty);
var femalecopr = femalecolor.concat(femaleproperty);


//Прячет всплывающее окно прячет пойманный мячик
function hidezm(){
    $(eee).hide();
    $(eee).css("width", '10%');
document.getElementById('backcong').style.display ='none';

};





//показывает всплывающее окно с предложением перейти на следующий уровень.
function nextlevel() {
      clickyes = false;
    counterallz= counterallz+counterz;
    if (counterz < 30){
        zforce = ' слабое ';
    }
    else if ((counterz >= 30) && (counterz < 45))
    {
        zforce = ' ощутимое ';
    }
    else if ((counterz >= 45) && (counterz < 65))
    {
        zforce = ' сильное ';
    }
    else if ((counterz >= 65) && (counterz < 85))
    {
        zforce = ' огромное ';
    }
    else if (counterz >= 85 )
    {
        zforce = ' безумное ';
    }
 switch (levelz) {
     case 1:
          if (statement1 == 'желание'){
          document.getElementById('result').innerHTML = 'Поздравляем <br> <br>';
          document.getElementById('result1').innerHTML = 'Загадайте'+ zforce +  'желание';
            document.getElementById('result2').innerHTML = 'быть' ;
              document.getElementById('result3').innerHTML = '<input id=\'wish\' type=\'text\' name=\'level1zel\'> </input>';

              document.getElementById('backcong').style.display = 'block';
          }
          else {
              document.getElementById('result').innerHTML = badcong[RandomINT(badcong.length)];
              document.getElementById('result1').innerHTML = 'У тебя '+ zforce + 'желание';
              document.getElementById('result2').innerHTML = 'быть' ;
              document.getElementById('result3').innerHTML = statement1;
         document.getElementById('backcong').style.display = 'block';
     }; break;
     case 2:
         if (statement1 == 'желание'){
             document.getElementById('result').innerHTML = 'Поздравляем <br> <br>';
             document.getElementById('result1').innerHTML = 'Загадайте'+ zforce +  'желание';
             document.getElementById('result2').innerHTML = 'жить' ;
             document.getElementById('result3').innerHTML = '<input id=\'wish\' type=\'text\' name=\'level1zel\'> </input>';

             document.getElementById('backcong').style.display = 'block';
         }
         else {
             document.getElementById('result').innerHTML = badcong[RandomINT(badcong.length)];
             document.getElementById('result1').innerHTML = 'У тебя '+ zforce + 'желание';
             document.getElementById('result2').innerHTML =  'жить';
             document.getElementById('result3').innerHTML = statement1;
             document.getElementById('backcong').style.display = 'block';
         }; break;
     case 3:
         if (statement1 == 'желание'){
             document.getElementById('result').innerHTML = 'Поздравляем <br> <br>';
             document.getElementById('result1').innerHTML = 'Загадайте'+ zforce +  'желание';
             document.getElementById('result2').innerHTML = 'ездить' ;
             document.getElementById('result3').innerHTML = '<input id=\'wish\' type=\'text\' name=\'level1zel\'> </input>';

             document.getElementById('backcong').style.display = 'block';
         }
         else {
             document.getElementById('result').innerHTML = badcong[RandomINT(badcong.length)];
             document.getElementById('result1').innerHTML = 'У тебя '+ zforce + 'желание';
             document.getElementById('result2').innerHTML =  'ездить';
             document.getElementById('result3').innerHTML = statement1;
             document.getElementById('backcong').style.display = 'block';
         }; break;

     case 4:
         if (statement1 == 'желание'){
             document.getElementById('result').innerHTML = 'Поздравляем <br> <br>';
             document.getElementById('result1').innerHTML = 'Загадайте'+ zforce +  'желание';
             document.getElementById('result2').innerHTML = 'работать' ;
             document.getElementById('result3').innerHTML = '<input id=\'wish\' type=\'text\' name=\'level1zel\'> </input>';

             document.getElementById('backcong').style.display = 'block';
         }
         else {
             document.getElementById('result').innerHTML = badcong[RandomINT(badcong.length)];
             document.getElementById('result1').innerHTML = 'У тебя '+ zforce + 'желание';
             document.getElementById('result2').innerHTML =  'работать';
             document.getElementById('result3').innerHTML = statement1;
             document.getElementById('backcong').style.display = 'block';
         }; break;
     case 5:
         if (statement1 == 'желание'){
             document.getElementById('result').innerHTML = 'Поздравляем <br> <br>';
             document.getElementById('result1').innerHTML = 'Загадайте'+ zforce +  'желание';
             document.getElementById('result2').innerHTML = 'отдыхать' ;
             document.getElementById('result3').innerHTML = '<input id=\'wish\' type=\'text\' name=\'level1zel\'> </input>';

             document.getElementById('backcong').style.display = 'block';
         }
         else {
             document.getElementById('result').innerHTML = badcong[RandomINT(badcong.length)];
             document.getElementById('result1').innerHTML = 'У тебя '+ zforce + 'желание';
             document.getElementById('result2').innerHTML =  'отдыхать';
             document.getElementById('result3').innerHTML = statement1;
             document.getElementById('backcong').style.display = 'block';
         }; break;
     case 6:
         if (statement1 == 'желание'){
             document.getElementById('result').innerHTML = 'Поздравляем <br> <br>';
             document.getElementById('result1').innerHTML = 'Загадайте'+ zforce +  'желание';
             document.getElementById('result2').innerHTML = 'своему спутнику жизни быть' ;
             document.getElementById('result3').innerHTML = '<input id=\'wish\' type=\'text\' name=\'level1zel\'> </input>';

             document.getElementById('backcong').style.display = 'block';
         }
         else {
             document.getElementById('result').innerHTML = badcong[RandomINT(badcong.length)];
             document.getElementById('result1').innerHTML = 'У тебя '+ zforce + 'желание';
             document.getElementById('result2').innerHTML =  'чтобы твой спутник жизни был';
             document.getElementById('result3').innerHTML = statement1;
             document.getElementById('backcong').style.display = 'block';
         }; break;
  };

    counterz = 1;
        levelz++;
    timetoappear = gtimetoappear;
    timeintz = gtimeintz;
   // alert(timeintz);

    //funczelag();
};

function resultz(){
    if ( (result[0][result[0].length - 1] == 'ю') || (result[0][result[0].length - 1] == 'й')) {
      var  zivushim =' живущей ';
    } else { var  zivushim =' живущим '};

    if ( (result[3][result[3].length - 1] == 'ю') || (result[3][result[3].length - 1] == 'й')) {
        var  ezdiashim =' ездящей ';
    } else { var  ezdiashim =' ездящим '};

    document.getElementById('result').innerHTML = 'Привет';
    document.getElementById('result1').innerHTML = 'У тебя желание';
    document.getElementById('result2').innerHTML =  '';
    document.getElementById('result3').innerHTML = 'Быть ' + result[0] +zivushim + result[1] +'. <br>' + 'Работать ' + result[3] +ezdiashim + result[2]+ '. <br>' + 'Отдыхать с ' + result[5] + ' ' + result[4]+'.' ;
    document.getElementById('backcong').style.display = 'block';
}



// Кнопка продолжить
function nextbutton() {
    document.getElementById('strength').innerHTML='&nbsp';

    if (levelz == 7) {
        addtoresult();
      //  alert(result[0]);
       // alert(result[1]);
      //  alert(result[2]);
      //  alert(result[3]);
       // alert(result[4]);
       // alert(result[5]);
       resultz();
    }
    else {
         addtoresult();
        hidezm();
        launchFullscreen(document.documentElement);
        funczelag();
        showslow();
    }
}

function addtoresult(){
   if (statement1 == 'желание'){
        result.push(document.getElementById('wish').value);
        document.getElementById('wish').value ='';
    }
    else{
    result.push(statement1);
    }
}


function RandomINT(Int){
    return Math.floor(Math.random() * Int);
};



// основная игра показывает слова и мячики
function showz(rrr){
    clearInterval(id);
    counterz++;
       clickyes = true;
    // $(rrr).hide();
    rrr.style.display= 'none';
     rrr.style.width = '10%';



    switch (levelz){
        case 1:
        statement1 = ktoti['level1'][RandomINT(ktoti['level1'].length)];

            if ( (statement1[statement1.length - 1] == 'ю') || (statement1[statement1.length - 1] == 'й')){
                var prest1 =noarray[RandomINT(noarray.length)] + femalecopr[RandomINT(femalecopr.length)];
                if (prest1.length > 1){
                statement1 = prest1 + ' ' + statement1;}
            if (RandomINT(20) == 1){
                     statement1 = femalecopr1[RandomINT(femalecopr1.length)];}

                }

             else{
                var prest2 =noarray[RandomINT(noarray.length)]+ malecopr[RandomINT(malecopr.length)];
                if (prest2.length > 1){
                statement1 = prest2 + ' ' + statement1;}
            if (RandomINT(20) == 1) {
                  statement1 = malecopr1[RandomINT(malecopr1.length)]; }
                    }


            break;


        case 2:
            statement1 =noarray[RandomINT(noarray.length)] + ktoti['level2'][RandomINT(ktoti['level2'].length)];
            break;
        case 3:
        statement1 = ktoti['level3'][RandomINT(ktoti['level3'].length)];
        break;
        case 4:
            statement1 = ktoti['level1'][RandomINT(ktoti['level1'].length)];
            break;
        case 5:
            statement1 =noarray[RandomINT(noarray.length)] + preword[RandomINT(preword.length)] +' '+ ktoti['level2'][RandomINT(ktoti['level2'].length)];
            break;
        case 6:
            statement1 = ktoti['level1'][RandomINT(ktoti['level1'].length)];
            break;

    };


    if (counterz >= 20){
        switch (parseInt(counterz / 10)) {
            case 2:
                if (counterz % 10 == 0) {
                    desyatok = true;
                };
                if ((1 == RandomINT(25)) && desyatok) {
                    statement1 = 'желание';
                    desyatok = false;
                };
                break;
            case 3:
                if (counterz % 10 == 0) {
                    desyatok = true;
                };
                if ((1 == RandomINT(20)) && desyatok) {
                    statement1 = 'желание';
                    desyatok = false;
                };
                break;
            case 4:
                if (counterz % 10 == 0) {
                    desyatok = true;
                };
                if ((1 == RandomINT(15)) && desyatok) {
                    statement1 = 'желание';
                    desyatok = false;
                };
                break;
            case 5:
                if (counterz % 10 == 0) {
                    desyatok = true;
                };
                if ((1 == RandomINT(12)) && desyatok) {
                statement1 = 'желание';
                desyatok = false;
            };
                break;
            case 6:
                if (counterz % 10 == 0) {
                    desyatok = true;
                };
                if ((1 == RandomINT(10)) && desyatok) {
                    statement1 = 'желание';
                    desyatok = false;
                };
                break;
            case 7:
                if (counterz % 10 == 0) {
                    desyatok = true;
                };
                if ((1 == RandomINT(10)) && desyatok) {
                    statement1 = 'желание';
                    desyatok = false;
                };
                break;
        };

    };



    var ktokto =  document.getElementById('kto1');
    ktokto.innerHTML = statement1;
 do {
    var  rrn = RandomINT(6)+1;
    var rr = ['a','b','c','d','e'];
    var rrl = rr[RandomINT(5)];
//  alert(rrl);
    var ee = document.getElementById(rrl+String(rrn));}
  while (rrr.id == ee.id);

    // var ee = document.getElementById('e4');
    //function clickyesno(){
    //   $(ee).fadeOut(100);
    // };

    nextee = ee;
//var counthere = counterz;

//Увеличивает мячик
    function zoomz(elem,count) {
        var izz = 0
        $(elem).show();
        function frame() {
           izz++;
            elem.style.width = String(10 + izz)+ '%';
            if (counterz != count) {
                elem.style.width = String(10) + '%';
                            clearInterval(id); }
            else if (izz == 33){
                   clearInterval(id); }

           // elem.style.opacity = (izz * 0.03+0.08).toFixed(2);

    }

        var id = setInterval(frame,Math.floor(((counthere*3) + 200)/ counthere));
    }

    setTimeout( function eeefade() {
               zoomz(ee,counterz);
                    },
        timetoappear);
    timetoappear = timetoappear - timeminusa;

    timeintz= timeintz-timeminus;

    document.getElementById('strength').innerHTML=   document.getElementById('strength').innerHTML+'&nbsp';
    document.getElementById('stre2').innerHTML='Ж-FORCE ' + String(counterz-2);
    var countr = counterz;

// условия не отбития мячика
    setTimeout(function timeoutball() {
        if (counterz == countr) {
           $(ee).hide();
           eee = ee;
            nextlevel();
        };
    }, ((Math.floor(((counthere*3) + 200)/ counthere))*33 + 500 + 5*timetoappear));
}






//отсчет перед началом и запуск основной игры
function showslow(){


    document.getElementById('kto1').innerHTML= 5;
    setTimeout(function izf(){
        document.getElementById('kto1').innerHTML= 4 ;}, 1000);
    setTimeout(function izf(){
        document.getElementById('kto1').innerHTML= 3 ;}, 2000);
    setTimeout(function izf(){
        document.getElementById('kto1').innerHTML= 2 ;}, 3000);
    setTimeout(function izf(){
        document.getElementById('kto1').innerHTML= 1 ;}, 4000);


    setTimeout(function shows(){
        showz(document.getElementById('e1'));}, 5000);
};

// Меняет текст в зависимости от уровня.
function funczelag(){

    switch(levelz) {
        case 1 :
            document.getElementById('begb').style.display='none';
            document.getElementById('levelname').innerHTML= '<br> Твое первое желание! <br> <br> <br>' ;
            document.getElementById('kto').innerHTML= 'Желаю быть <br> <br> <br>';
        break;
        case 2 :

            document.getElementById('levelname').innerHTML= '<br> Твое второе желание! <br> <br> <br>' ;
            document.getElementById('kto').innerHTML= 'Желаю жить <br> <br> <br>';
            break;
        case 3 :

            document.getElementById('levelname').innerHTML= '<br> Твое третье желание! <br> <br> <br>' ;
            document.getElementById('kto').innerHTML= 'Желаю ездить <br> <br> <br>';
            break;
        case 4 :

            document.getElementById('levelname').innerHTML= '<br> Твое четвертое желание! <br> <br> <br>' ;
            document.getElementById('kto').innerHTML= 'Желаю работать <br> <br> <br>';
            break;
        case 5 :

            document.getElementById('levelname').innerHTML= '<br> Твое пятое желание! <br> <br> <br>' ;
            document.getElementById('kto').innerHTML= 'Желаю отдыхать <br> <br> <br>';
            break;
        case 6 :

            document.getElementById('levelname').innerHTML= '<br> Твое шестое желание! <br> <br> <br>' ;
            document.getElementById('kto').innerHTML= 'Желаю чтобы мой спутник был <br> <br> <br>';
            break;
    }

}


//</script>


