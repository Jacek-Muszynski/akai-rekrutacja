<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>loops</title>
</head>
<body>
    <?php
    for($i=100; $i>=0; $i--){
        $out=$i;
        if($i%4==0){
            $out="Fire";
        }
        if($i%7==0){
            $out="Boom";
        }
        if($i%4==0 AND $i%7==0){
            $out="Fire Boom";
        }
        if($i%10==0){
            echo '<span style="color: red;">';
            for($j=0;$j<10;$j++){
                echo $out." ";  
            }
            echo "<br>";
        }else{
            echo '<span style="color: black;">'.$out.'</span><br>';  
        }
        
    }
    ?>
</body>
</html>