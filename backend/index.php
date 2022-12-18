<?php

header("Access-Control-Allow-Origin: *");

$host = "localhost"; 
$user = "id20031721_root"; 
$password = "L5InIRHzMnutuVcNdn#i"; 
$dbname = "id20031721_ecommerce"; 
$id = '0';
 
$conn = mysqli_connect($host, $user, $password, $dbname, $id);
  
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
 
switch ($method) {
    case 'GET':
        if (isset($_GET["id"])) {
            $id = $_GET['id'];  
        }     
        $sql = "select * from list_items".($id?" where id = $id":''); 
    break;
    case 'POST':
        if (isset($_GET["sku"])) {
            $sku = $_GET['sku'];  
            $name = $_POST["name"];
            $price = $_POST["price"];
            $size = $_POST["size"];
            $height = $_POST["height"];
            $width = $_POST["width"];
            $length = $_POST["length"];
            $weight = $_POST["weight"];
        } else if (isset($_GET["delete"])) {
            $delete = $_GET['delete'];  
            $sql = "DELETE FROM list_items WHERE id IN ($delete)"; 
        } else {  
            $sku = $_POST["sku"];
            $name = $_POST["name"];
            $price = $_POST["price"];
            $size = $_POST["size"];
            $height = $_POST["height"];
            $width = $_POST["width"];
            $length = $_POST["length"];
            $weight = $_POST["weight"];
            $sql = "insert into list_items (sku, name, price, size, height, width, length, weight) values ('$sku', '$name', '$price', '$size', '$height', '$width', '$length', '$weight')"; 
            $duplicate=mysqli_query($conn,"select * from list_items where sku = '$sku'");
            if (mysqli_num_rows($duplicate) > 0) {
                http_response_code(409);
                die(mysqli_error($conn));
            }
        }
    break;
}
 
// run SQL statement
$result = mysqli_query($conn, $sql);
 
// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($conn));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
        for ($i = 0 ; $i < mysqli_num_rows($result) ; $i++) {
        echo ($i > 0 ? ',' : '').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
    } else if ($method == 'POST') {
        echo json_encode($result);
    } else {
        echo mysqli_affected_rows($conn);
    }

?>
