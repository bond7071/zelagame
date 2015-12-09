<?php

/*$fh = fopen( "../whor.txt" , "r" );

$line = fgetss($fh);

$ktoti = explode("*", $line);*/





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

//$sth = $zdbh->query('select level1 from zela');

/*
foreach   ($ktoti as $word){
    $sthz =  $zdbh->prepare('insert into level1 (words1) values (?);');
    $arrword =array($word);
    $sthz->execute($arrword);
};
*/

//echo "<pre>";
//print_r($level1);
if ($_POST['text1']){
    $level1 = explode("*", $_POST['text1']);
foreach   ($level1 as $word){
    $sthz =  $zdbh->prepare('insert into level1 (words1) values (?);');
    $arrword =array($word);
    $sthz->execute($arrword);
};};

if ($_POST['text2']){
    $level2 = explode("*", $_POST['text2']);
foreach   ($level2 as $word){
        $sthz =  $zdbh->prepare('insert into level2 (words2) values (?);');
    $arrword =array($word);
    $sthz->execute($arrword);
};};

