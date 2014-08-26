<?php

# shortcut for show_data function (custom)
function sd($data)
{
    echo "<pre>";
        print_r($data);
    echo "</pre>";
    exit;
}