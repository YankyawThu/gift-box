<?php

namespace App\Http\Middleware;

use Closure;

class AdminAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth()->guard('admin') == null or auth()->user() == null) {
            dd(1);
            return redirect('admin.login');
        } else {
            return auth()->guard('admin') ? $next($request) : abort(403, 'Access denied');
        }
    }
}
