<!-- Top navbar -->
<nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
    <div class="container-fluid">
        <!-- Brand -->

        @if (Route::currentRouteName()=='home')
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="{{ route('admin.home') }}">{{
            __('Dashboard') }}</a>
        @elseif(Route::currentRouteName()=='category.index')
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            href="{{ route('admin.category.index') }}">{{ __('Box Category') }}</a>
        @elseif(Route::currentRouteName()=='items.index')
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="{{ route('admin.items.index') }}">{{
            __('Gift Items') }}</a>
        @elseif(Route::currentRouteName()=='boxes.index')
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="{{ route('admin.boxes.index') }}">{{
            __('Gift Boxes') }}</a>
        @elseif(Route::currentRouteName()=='boxes.show')
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="{{ route('admin.boxes.index') }}">{{
            __('Gift Boxes') }}</a>

        @elseif(Route::currentRouteName()=='giftLog.index')
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            href="{{ route('admin.giftLog.index') }}">{{ __('Gift Logs') }}</a>
        @elseif(Route::currentRouteName()=='admins.index')
        <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            href="{{ route('admin.admins.index') }}">{{
            __('Users') }}</a>
        @endif

        <!-- User -->
        <ul class="navbar-nav align-items-center ml-lg-auto d-none d-md-flex">
            <li class="nav-item dropdown">
                <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <div class="media align-items-center">
                        <span class="avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src="{{ asset('argon') }}/img/theme/team-4-800x800.jpg">
                        </span>
                        <div class="media-body ml-2 d-none d-lg-block">
                            <span class="mb-0 text-sm  font-weight-bold">{{ auth()->user()->name }}</span>
                        </div>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <div class=" dropdown-header noti-title">
                        <h6 class="text-overflow m-0">{{ __('Welcome!') }}</h6>
                    </div>
                    <a href="{{ route('admin.profile.edit') }}" class="dropdown-item">
                        <i class="ni ni-single-02"></i>
                        <span>{{ __('My profile') }}</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="{{ route('admin.logout') }}" class="dropdown-item" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                        <i class="ni ni-user-run"></i>
                        <span>{{ __('Logout') }}</span>
                    </a>
                </div>
            </li>
        </ul>
    </div>
</nav>
