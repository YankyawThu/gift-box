<?php

namespace App\Http\Middleware;

use Closure;

class PhoneIsValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(auth()->user()->status != 'active') {
            return redirect()->route('otp');
        }
        return $next($request);
    }
}
