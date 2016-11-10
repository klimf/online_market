<?php
$array = $_POST;

$order ="Дата - " . date("d.m.y H:i:s") . "\nIp - " . $_SERVER['REMOTE_ADDR'] . "\n" . json_encode($array["cartIds"]) . "\n" . json_encode($itemQty) . "\n___________________\n";
file_put_contents('log.txt', $order, FILE_APPEND);