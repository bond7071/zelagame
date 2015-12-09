<?php



$dsn = 'mysql:host=localhost; dbname=zelabase';
$user = 'root';
$password = 'Noomnoom1';
try {
    $zdbh = new PDO($dsn, $user, $password);
   // var_dump($zdbh); // object(PDO)#1 (0) { }
} catch (PDOException $e) {
   // echo $e->getMessage();
}
//$sth = $dbh->query('show databases;');
 $zdbh->query('select zelabase;');
$zdbh->query("SET NAMES utf8");

$sth = $zdbh->query('select level1 from zela');


$le= $sth->fetchAll(PDO::FETCH_ASSOC);
//echo("<pre>");

$stre = $le[0]['level1'];
echo $stre;
//echo htmlspecialchars($stre,ENT_QUOTES,'UTF-8');
//print_r($le);


/*
try {
$dbh = new PDO('mysql: host=localhost; dbname=my_db', 'root', '');
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sth = $dbh->query('SELECT * FROM tbl_message');
$data = $sth->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
$status = 'fail: ' . $e->getMessage();
}

Осталось определить статус по умолчанию и отобразить данные в качестве JSON строки

$msg_info = array();
$status = 'Success';

try {
$dbh = new PDO('mysql: host=localhost; dbname=my_db', 'root', '');
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sth = $dbh->query('SELECT * FROM tbl_message');
$msg_info = $sth->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
$status = 'Fail: ' . $e->getMessage();
}

$data = array(
'msg_info' => $msg_info,
'status' => $status
);

echo json_encode($data);



    Re: Передача массива с php в js
    Сообщение YSandro » Пт апр 27, 2012 11:04

    Как получить в js файле значения этого массива?

    КОД: ВЫДЕЛИТЬ ВСЁ
<?php
$testArr=array(1,2,3);
$jsStrArr=array();
$jsStrArr[]='var testArr=new Array();';
for($i=0;$i<count($testArr);$i++){
    $jsStrArr[]=sprintf('testArr[%d]=%d;',$i,$testArr[$i]);
}
file_put_contents('test.js',implode("\n",$jsStrArr));
Этот скрипт создаёт файл test.js с массивом testArr в таком виде
КОД: ВЫДЕЛИТЬ ВСЁ
var testArr=new Array();
testArr[0]=1;
testArr[1]=2;
testArr[2]=3;
К этому js файлу можно обращаться
КОД: ВЫДЕЛИТЬ ВСЁ
<script src="test.js" type=text/javascript></script>

*/
?>