<?php
header('Content-Type:text/html;charset=utf-8');
$type = $_REQUEST['type'];
$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
echo '{"err":0,"msg":"连接失败"}';

?>