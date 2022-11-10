<?php

namespace App\Services\Admin;

use App\Repositories\Admin\RuleConfigRepository;

class RuleConfigService
{
    private $ruleConfig;
    private $uploadPhotoFolder;
    public function __construct(RuleConfigRepository $ruleConfig)
    {
        $this->ruleConfig = $ruleConfig;
        $this->itemPerPage = config('enums.itemPerPage');
    }

    public function getById($id)
    {
        return $this->ruleConfig->getById($id);
    }


    public function getAll($filter)
    {
        return $this->ruleConfig->getPaginatedWithFilter($this->itemPerPage, $filter);
    }

    public function allItems()
    {
        return $this->ruleConfig->getPaginated();
    }

    public function store($request)
    {
        $data['header'] = $request['header'];
        $data['description'] = $request['description'];
        $data['public_status'] = $request['public_status'];

        return $this->ruleConfig->create($data);
    }

    public function getDetail($id)
    {
        return $this->ruleConfig->getById($id);
    }

    public function update($request, $id)
    {
        $data['header'] = $request['header'];
        $data['description'] = $request['description'];
        $data['public_status'] = $request['public_status'];

        return $this->ruleConfig->update($data, $id);
    }

    public function delete($id)
    {
        $this->ruleConfig->delete($id);

        return;
    }
}
