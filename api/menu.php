<?php
include 'database.php';
$products = [];

$sql = "SELECT * FROM rpos_products";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$products[$i]['prod_id'] = $row['prod_id'];
		$products[$i]['prod_code'] = $row['prod_code'];
		$products[$i]['prod_name'] = $row['prod_name'];
		$products[$i]['prod_img'] = $row['prod_img'];
		$products[$i]['prod_desc'] = $row['prod_desc'];
		$products[$i]['prod_price'] = $row['prod_price'];
		$products[$i]['created_at'] = $row['created_at'];
		$i++;
	}
	echo json_encode(['data'=> $products]);
}
else
{
	http_response_code(404);
}



