<?php
function kiostik($angka)
{

    if($angka % 25 == 0){
        echo "ki </br>";
    }elseif($angka % 40 ==0){
        echo "os </br>";
    }elseif($angka % 60== 0){
        echo "tik </br>";
    }elseif($angka % 99 ==0){
        echo "kiostix </br";
    }
}

for ($i = 0; $i <= 100; $i++) { 
    kiostik($i);
}
?>