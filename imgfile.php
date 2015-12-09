<?php
$directory = 'img';	//�������� ����� � �������������
$allowed_types=array('jpg','jpeg');	//���������� ���� �����������
$file_parts=array();
$filelist=array();
$ext='';
$title='';
$i=0;
//������� ������� �����
$dir_handle = @opendir($directory) or die("There is an error with your image directory!");
while ($file = readdir($dir_handle))	//����� �� ������
{
    if($file=='.' || $file == '..') continue;	//���������� ������ �� ������ �����
    $file_parts = explode('.',$file);	//��������� ��� ����� � ��������� ��� � ������
    $ext = strtolower(array_pop($file_parts));	//��������� �������� - ��� ����������

    if(in_array($ext,$allowed_types))
    {
        array_push($filelist,$file);
    }
}

$putfile = $filelist[rand(0,count($filelist)-1)];

echo json_encode('url(img/' . $putfile . ')');

closedir($dir_handle);




