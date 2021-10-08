<?php
    if($argv[1] < $argv[2] && ($argc > 2 && $argc < 4)){
        $min = $argv[1];
        $max = $argv[2];

        for($i = $min; $i <= $max; $i++){
            if($i % 3 == 0) {
                if($i % 5 == 0) echo "FooBar ";
                else echo " Foo ";
            }
            elseif($i % 5 == 0) {
                if($i % 3 == 0) echo "FooBar ";
                else echo " Bar ";
            }
            else echo $i . " ";
        }

    }else{
        echo "Something went wrong... Check input argument variables!";
    }
?>