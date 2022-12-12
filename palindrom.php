<?php
function malam($string)
{
  $reverse = '';
$i = 0;
while(!empty($string[$i])){ 
      $reverse = $string[$i].$reverse; 
      $i++;
}
return $reverse;  
}
echo malam("malam") ;



function katak($string)
{
  $reverse = '';
$i = 0;
while(!empty($string[$i])){ 
      $reverse = $string[$i].$reverse; 
      $i++;
}
return $reverse; ;  
}

echo katak("katak");

function level($string)
{
  $reverse = '';
$i = 0;
while(!empty($string[$i])){ 
      $reverse = $string[$i].$reverse; 
      $i++;
}
return $reverse;  
}
echo level("level");



?>