<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>arrays</title>
</head>
<body>
    <?php
    $str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    echo "Tekst: ".$str."<br>";
    $tab=explode(" ",$str);
    echo "Tablica z tekstu:<br>";
    foreach($tab as $value){
        echo $value."<br>";
    }
    for($i=0;$i<count($tab);$i++){
        if(strlen($tab[$i])<4){
            unset($tab[$i]);
        }
    }
    array_values($tab);
    echo "Tablica po usunięciu wyrazów z 4 lub mniej literami:<br>";
    foreach($tab as $value){
        echo $value."<br>";
    }

    ?>
</body>
</html>