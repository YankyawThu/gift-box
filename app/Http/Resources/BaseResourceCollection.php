<?php

namespace App\Http\Resources;

trait BaseResourceCollection
{
    private $pagination;
    private $nextPage;

    public function __construct($resource)
    {
        // $this->nextId = $nextId;

        // $this->pagination = [
        //     'nextId' => $this->nextId
        // ];

        parent::__construct($resource);
    }
}
