<?php

namespace App\Controllers;

use App\Controllers\Base\BaseController;
use Config\Services;
use GuzzleHttp\Psr7\Request;

// Request
use GuzzleHttp\Client;

class penulisController extends BaseController
{
    public function index()
    {
        $result = curlHelper(getenv('API_URL') . 'penulis', 'GET');
        $data['penulis'] = $result->data;
        //  var_dump($result->data); die;
        return view('penulis/index', $data);
    }
    public function create()
    {
        return view("penulis/create");
    }
    public function save()
    {
        $client = \Config\Services::curlrequest();
        $request = Services::request();

        $penulis = $request->getPost('penulis');

        $url = getenv('API_URL') . 'penulis';
        $body = [
            "nama_penulis" => $penulis,

        ];
        $headerData = array(
            'Content-Type: application/x-www-form-urlencoded',
            'Accept' => 'application/json',

        );
        $response = $client->post($url, [
            'debug' => true,
            'headers' => $headerData,
            'json' => $body
        ]);
    }
    public function delete($id)
    {
        // var_dump("masuk"); die;
        $client = \Config\Services::curlrequest();
        $url = getenv('API_URL') . 'penulis/' . $id;
        // var_dump($url); die;

        $headerData = array(
            'Content-Type: application/x-www-form-urlencoded',
            'Accept' => 'application/json',

        );
        $response = $client->delete($url, [
            'debug' => true,
            'headers' => $headerData,
            // 'json' => $body
        ]);
    }
    public function edit($id)
    {
        $result = curlHelper(getenv('API_URL') . 'penulis/' . $id, 'GET');
        $data['penulis'] = $result->data;
        return view("penulis/edit", $data);
    }
    public function update()
    {
        
        $client = \Config\Services::curlrequest();
        
        $request = Services::request();
        // var_dump($request); die;

        $penulis = $request->getPost('penulis');
        $id = $request->getPost('id');
        // var_dump($id); die;

        // $url = getenv('API_URL') . 'penulis';
        $body = [
            "nama_penulis" => $penulis,

        ];
        // var_dump($body); die;
        $url = curlHelper(getenv('API_URL') . 'penulis/'.$id, 'PUT');
        var_dump($url); die;
        $headerData = array(
            'Content-Type: application/x-www-form-urlencoded',
            'Accept' => 'application/json',

         );
        $response = $client->put($url,[
            'debug' => true,
            'headers'=>$headerData,
            'json_encode' => $body
         ]);
        //  var_dump($response); die;
        // $curl = curl_init();

        // curl_setopt_array($curl, array(
        //     CURLOPT_URL => $url,
        //     CURLOPT_RETURNTRANSFER => true,
        //     CURLOPT_ENCODING => '',
        //     CURLOPT_MAXREDIRS => 10,
        //     CURLOPT_TIMEOUT => 0,
        //     CURLOPT_FOLLOWLOCATION => true,
        //     CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        //     CURLOPT_CUSTOMREQUEST => 'PUT',
        //     CURLOPT_POSTFIELDS => $body,
        //     CURLOPT_HTTPHEADER => array(
        //         'Content-Type: application/x-www-form-urlencoded',
        //         'Accept' => 'application/json',
        //     ),
        // ));

        // $response = curl_exec($curl);
    }
}
