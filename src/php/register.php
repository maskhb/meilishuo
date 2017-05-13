<?php
	include 'DBHelper.php';
	$email = $_POST["email"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];
	//判断当前 phone 是否已存在数据表中
	$phoneCheck = "select * from userdata where `phone` ='$phone'";
	$result = query($phoneCheck);

	//当前 phone 不存在，执行插入操作
	if(count($result) < 1){
		$sql = "insert into userdata(email, password, phone) values('$email', '$password', '$phone')";
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} else {
		echo "{state: false, message: '手机号 已被注册！！！'}";
	}
?>