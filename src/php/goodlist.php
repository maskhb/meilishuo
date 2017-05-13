<?php
	header('Access-Control-Allow-Origin:*');
	$pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;


	$url = 'goodlist.json';

	// 以只读模式打开文件
	$file = fopen($url, 'r');

	// 读取文件内容
	$content = fread($file, filesize($url));
	echo $content;
	
?>