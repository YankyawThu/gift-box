<?php

namespace App\Exceptions;

use Exception;

class BadRequestException extends Exception
{
    public function render($request)
    {
        return response()->json([
            'result' => null,
            'statusCode' => 400,
            'message' => $this->getMessage(),
        ], 400);
    }
}
