<?php 
if(isset($_SERVER['HTTP_ORIGIN'])){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
}

$response = array();

if(isset($_POST['id']) && isset($_POST['title']) && isset($_POST['imagePath']) && isset($_POST['base64Url']) && isset($_POST['type']) && isset($_POST['lng']) && isset($_POST['lat']) ){
    var_dump($_FILES['foto']);
    $id = $_POST['id'];
    $title = $_POST['title'];
    $type = $_POST['type'];
    $lat = $_POST['lat'];
    $lng = $_POST['lng'];
    $path = $_POST['imagePath'];
    $base64Url = $_POST['base64Url'] ;

    require_once __DIR__ . '/dbconfig.php';

    $db = mysqli_connect(DB_SERVER, DB_User, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());

    var_dump($base64Url);
    $destination = 'uploads/' . $path;
    $flag = file_put_contents($destination, base64_decode($base64Url));
    
    if($flag){

        $result = mysqli_query($db, "INSERT INTO memories(id,title, type, imagePath, lat, lng) VALUES('$id','$title','$type', '$path', '$lat','$lng')");
    
        if($result) {
            $response["success"] = 1;
            $response["message"] = "Memori berhasil dimasukkan";
        } else {
            $response["success"] = 0;
            $response["message"] = "Ada kesalahan";
        }
    
        echo json_encode($response);
    } else {
        $response["success"] = 0;
        $response["message"] = "Data tidak lengkap";
    
        echo json_encode($response);
    }
}

?>