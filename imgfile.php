<?php
$directory = 'img';	//название папки с изображениями
$allowed_types=array('jpg','jpeg');	//разрешеные типы изображений
$file_parts=array();
$filelist=array();
$ext='';
$title='';
$i=0;
//пробуем открыть папку
$dir_handle = @opendir($directory) or die("There is an error with your image directory!");
while ($file = readdir($dir_handle))	//поиск по файлам
{
    if($file=='.' || $file == '..') continue;	//пропустить ссылки на другие папки
    $file_parts = explode('.',$file);	//разделить имя файла и поместить его в массив
    $ext = strtolower(array_pop($file_parts));	//последний элеменет - это расширение

    if(in_array($ext,$allowed_types))
    {
        array_push($filelist,$file);
    }
}

$putfile = $filelist[rand(0,count($filelist)-1)];

echo json_encode('url(img/' . $putfile . ')');

closedir($dir_handle);




