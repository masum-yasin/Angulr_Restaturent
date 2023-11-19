<?php 
include_once("database.php");
$postdata = file_get_contents("php://input");
$result = json_decode($postdata);
if(isset($result->name) && isset($result->email) && isset($result->message)){
    $name = $result->name;
    $email = $result->email;
    $subject = $result->subject;
    $message = $result->message;
    $db->query("INSERT INTO `user`(`user_id`, `name`, `email`, `subject`, `message`) VALUES(NULL,'$name','$email','$subject','$message')");
    if($db->affected_rows>0){
        echo json_encode(['status'=>"Successfully Inserted"]);
    }
}

else{
    echo json_encode(['status'=> "NO fields can be blank"]);
}



?>