<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\RuleConfigRequest;
use App\Models\RuleConfiguration;
use App\Services\Admin\RuleConfigService;

class RuleConfigController extends Controller
{
    private $ruleConfigService;
    public function __construct(RuleConfigService $ruleConfig)
    {
        $this->ruleConfigService = $ruleConfig;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = $this->ruleConfigService->allItems();

        return view('admin.rule_configs.index', compact('data'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\Admin\RuleConfigRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RuleConfigRequest $request)
    {
        $this->ruleConfigService->store($request->validated());

        return redirect()->back()->with('status', 'Rule Policy Created Successfully!');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\Admin\RuleConfigRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function update(RuleConfigRequest $request, RuleConfiguration $ruleConfig)
    {
        $this->ruleConfigService->update($request->validated(), $request->id);

        return redirect()->back()->with('status', 'Rule Policy Updated Successfully!');
    }
}
