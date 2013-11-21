<?php 
	$code = substr(md5($_SERVER['REMOTE_ADDR'].date('Y-m-d')), 0, 10);
	print $code;
?>