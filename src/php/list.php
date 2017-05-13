<?php
header('Content-type: text/html;charset=utf-8');

//连接数据库
$conn = new mysqli('localhost','root','','project_meilishuo');

$sql = "select * from goodlist";
$conn->query('set names utf8');
$result = $conn->query($sql);

if($result->num_rows > 0){
	$temp = array();
	while($row = $result->fetch_assoc()){
		$temp[]=$row;
	}
	$data = array(
		'code' => 0,
		'data' => $temp
	);
}else{
	$data = array(
		'code' => 1,
		'msg' => '数据库为空或连接不成功'
	);
}

echo json_encode($data);
$conn->close();