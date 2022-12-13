<?php

namespace App\Controllers;

use App\Controllers\Base\BaseController;
use Config\Services;
use GuzzleHttp\Psr7\Request;

// Request
use GuzzleHttp\Client;

class bukuController extends BaseController{
    public function index()
    {
        $result = curlHelper(getenv('API_URL') . 'penulis', 'GET');
        $data['penulis'] = $result->data;
        //  var_dump($result->data); die;
        return view('penulis/index', $data);
    }
}