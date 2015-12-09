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

$sth1 = $zdbh->query('select words1 from level1');
$le1= $sth1->fetchAll(PDO::FETCH_ASSOC);
$sth2 = $zdbh->query('select words2 from level2');
$le2= $sth2->fetchAll(PDO::FETCH_ASSOC);
$sth3 = $zdbh->query('select words2 from level2 where words2 like ("в %") or words2 like ("на %")');
$le3= $sth3->fetchAll(PDO::FETCH_ASSOC);
//echo("<pre>");
$stre1 = Array();
$stre2 = Array();
$stre3 = Array();
foreach ($le1 as $part){
    array_push($stre1, $part['words1']);
}
foreach ($le2 as $part){
    array_push($stre2, $part['words2']);
}
foreach ($le3 as $part){
    array_push($stre3, $part['words2']);
}
$stre = Array('level1'=>$stre1,'level2'=>$stre2, 'level3'=>$stre3);


//echo "<pre>";
//print_r($stre);
echo json_encode($stre);

/*
$data = array(
    'name' => 'Steven',
    'email' => 'steve@junkie.com',
    'phone' => '123-45-67',
    'message' => 'Hello. I want to buy some weed.'
);

echo json_encode($data);*/

?>