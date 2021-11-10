<?php 
    if(isset($_SERVER['HTTP_ORIGIN'])){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, X-Requested-With, content-Type, Accept');
    }

    $response = array();

    require_once __DIR__ . '/dbconfig.php';

    $db = mysqli_connect(DB_SERVER, DB_User, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());

    $result = mysqli_query($db, "SELECT * from memories ORDER BY imagePath") or die(mysqli_connect_error());

    if(mysqli_num_rows($result) > 0){
        $response["memories"] = array();

        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
            $memory = array();
            $memory["id"] = $row["id"];
            $memory["title"] = $row["title"];
            $memory["type"] = $row["type"];
            $memory["lat"] = $row["lat"];
            $memory["lng"] = $row["lng"];
            $memory["imagePath"] = $row["imagePath"];

            array_push($response["memories"], $memory);
        }

        $response["success"] = 1;
        echo json_encode($response);
    } else {
        $response["success"] = 0;
        $response["message"] = "Tidak ada Memori yang ditemukan";
        echo json_encode($response);
    }

    
?>