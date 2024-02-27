<?php

/**
 * Plugin Name: My Block
 * Plugin URI: https://serjikby.ru/
 * Description: Gutenberg Block
 * Author: Serjik
 * Author URI: https://serjikby.ru/
 */

function serjik_myblock_init() {
    register_block_type_from_metadata(__DIR__);
}
add_action('init', 'serjik_myblock_init');
