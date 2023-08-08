<?php
$user = "s221210259@sakarya.edu.tr";
$passw = "s221210259";
$name = "Cuma Omar Taljibini";



if(($_POST["email"] == $user ) and ($_POST["password"] == $passw))
{
  $_SESSION["login"] = "ture";
  $_SESSION["user"] = $user;
  $_SESSION["passw"] = $passw;
  $_SESSION["name"] = $name;

  echo("Başarlı giriş :)" );
  
  ;
}
else {echo"Tekrear deneyiniz!!";
      header("Refresh: 2; url=login.html");}
?>
  
