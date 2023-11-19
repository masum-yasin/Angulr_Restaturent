<?php
// header("Access-Control-Allow-Origin: *");
// header('Access-Control-Allow-Credentials: true');
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header("Content-Type: application/json; charset=UTF-8");


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('NAME', 'anguler_db2');

$db = new mysqli(HOST ,USER ,PASS ,NAME);
if ($db->connect_errno) {
	die("Database connection error:" . $db->connect_errno);
}
?>