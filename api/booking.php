<?php 
include_once("database.php");
$bookingdata = file_get_contents("php://input");
$result = json_decode($bookingdata);
if(isset($result->name) && isset($result->email) && isset($result->number) && isset($result->person)){
    $name = $result->name;
    $email = $result->email;
    $number = $result->number;
    $date = $result->date;
    $person = $result->person;
    $db->query("INSERT INTO `booking_tb`(`id`, `name`, `email`, `number`, `date`,`person`) VALUES(NULL,'$name','$email','$number',NOW(),'$person')");
    if($db->affected_rows>0){
        echo json_encode(['status'=>"Successfully Inserted"]);
    }
}

else{
    echo json_encode(['status'=> "NO fields can be blank"]);
}


?>
