<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NodeJsApiController extends Controller
{
    public function signup()
    {
        // Call your Node.js API here
        // For demonstration, let's assume we are fetching some data
        $dataFromApi = [
            'message' => 'Hello from Node.js API!',
            'timestamp' => now(),
        ];

        return response()->json($dataFromApi);
    }
}
