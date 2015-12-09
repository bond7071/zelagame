<?php
$fh = fopen( "whor.txt" , "r" );

$line = fgetss($fh);

$ktoti = explode("*", $line);


//echo "<pre>";
//print_r($ktoti);
echo json_encode($ktoti);

/*
$data = array(
    'name' => 'Steven',
    'email' => 'steve@junkie.com',
    'phone' => '123-45-67',
    'message' => 'Hello. I want to buy some weed.'
);

echo json_encode($data);*/

?>