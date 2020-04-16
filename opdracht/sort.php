<?php
//sort.php

$connect = mysqli_connect("localhost", "root", "", "rustique");



$output = '';
$order = $_POST["order"];
if($order == 'desc')
{
    $order = 'asc';
}
else
{
    $order = 'desc';
}

$query = "SELECT * FROM boekingen ORDER BY ".$_POST["column_name"]." ".$_POST["order"]."";
$result = mysqli_query($connect, $query);
$output .= '  
 
 
 <table border="1">  
      <tr>  
		   <th><a id="voornaam" data-order="'.$order.'" href="#">Voornaam</a></th>  
           <th><a id="achternaam" data-order="'.$order.'" href="#">Achternaam</a></th>  
      </tr>  
 ';


while($row = mysqli_fetch_array($result))
{
    $output .= '  
      <tr> 
           <td>' . $row["voornaam"] . '</td>  
           <td>' . $row["achternaam"] . '</td>  
      </tr>  
      ';
}
$output .= '</table>';
echo $output;
?>