<?php
	include "DBHelper.php";

	$sql = "select * from userdata";

	$jsonData = query($sql);

	echo json_encode($jsonData, JSON_UNESCAPED_UNICODE);
	// JSONP.stringify(obj)
?>