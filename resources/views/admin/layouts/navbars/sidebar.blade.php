@auth('admin')

<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main"
            aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Brand -->
        <a class="navbar-brand pt-0" href="{{ route('admin.home') }}">
            <img src="{{ asset('argon') }}/img/brand/blue.png" class="navbar-brand-img" alt="...">
        </a>
        <!-- User -->
        <ul class="nav align-items-center d-md-none">
            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <div class="media align-items-center">
                        <span class="avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src="{{ asset('argon') }}/img/theme/team-1-800x800.jpg">
                        </span>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
<<<<<<< HEAD
<<<<<<< HEAD
                    <div class="dropdown-header noti-title">
=======
                    <div class=" dropdown-header noti-title">
>>>>>>> add admin guard section
=======
                    <div class="dropdown-header noti-title">
>>>>>>> add admin sidebar
                        <h6 class="text-overflow m-0">{{ __('Welcome!') }}</h6>
                    </div>
                    <a href="{{ route('admin.profile.edit') }}" class="dropdown-item">
                        <i class="ni ni-single-02"></i>
                        <span>{{ __('My profile') }}</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="ni ni-settings-gear-65"></i>
                        <span>{{ __('Settings') }}</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="ni ni-calendar-grid-58"></i>
                        <span>{{ __('Activity') }}</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="ni ni-support-16"></i>
                        <span>{{ __('Support') }}</span>
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
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Collapse header -->
            <div class="navbar-collapse-header d-md-none">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="{{ route('admin.home') }}">
                            <img src="{{ asset('argon') }}/img/brand/blue.png">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse"
                            data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false"
                            aria-label="Toggle sidenav">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <ul class="navbar-nav">
                <li class="nav-item">
<<<<<<< HEAD
<<<<<<< HEAD
                    <a class="nav-link {{ request()->is('admin') ? 'active' : '' }}" href="{{ route('admin.home') }}">
=======
                    <a class="nav-link @if (Route::currentRouteName()=='home')active @endif"
                        href="{{ route('admin.home') }}">
>>>>>>> add admin guard section
=======
                    <a class="nav-link {{ request()->is('admin') ? 'active' : '' }}" href="{{ route('admin.home') }}">
>>>>>>> add admin sidebar
                        <i class="ni ni-tv-2 text-primary"></i> {{ __('Dashboard') }}
                    </a>
                </li>

                <li class="nav-item">
<<<<<<< HEAD
<<<<<<< HEAD
                    <a class="nav-link {{ activeSegment(2, 'category') == 'active' ? 'active' : '' }}"
=======
                    <a class="nav-link @if (Route::currentRouteName()=='category.index')active @endif"
>>>>>>> add admin guard section
=======
                    <a class="nav-link {{ activeSegment(2, 'category') == 'active' ? 'active' : '' }}"
>>>>>>> add admin sidebar
                        href="{{ route('admin.category.index') }}">
                        <i class="ni ni-palette text-blue"></i> {{ __('Box Category') }}
                    </a>
                </li>

                <li class="nav-item">
<<<<<<< HEAD
<<<<<<< HEAD
                    <a class="nav-link {{ activeSegment(2, 'items') == 'active' ? 'active' : '' }}"
=======
                    <a class="nav-link @if (Route::currentRouteName()=='items.index')active @endif"
>>>>>>> add admin guard section
=======
                    <a class="nav-link {{ activeSegment(2, 'items') == 'active' ? 'active' : '' }}"
>>>>>>> add admin sidebar
                        href="{{ route('admin.items.index') }}">
                        <i class="ni ni-books text-blue"></i> {{ __('Gift Items') }}
                    </a>
                </li>

                <li class="nav-item">
<<<<<<< HEAD
<<<<<<< HEAD
                    <a class="nav-link {{ activeSegment(2, 'boxes') == 'active' ? 'active' : '' }}"
=======
                    <a class="nav-link @if (Route::currentRouteName()=='boxes.index' || Route::currentRouteName()=='boxes.show')active @endif"
>>>>>>> add admin guard section
=======
                    <a class="nav-link {{ activeSegment(2, 'boxes') == 'active' ? 'active' : '' }}"
>>>>>>> add admin sidebar
                        href="{{ route('admin.boxes.index') }}">
                        <i class="ni ni-trophy text-blue"></i> {{ __('Gift Boxes') }}
                    </a>
                </li>

                <li class="nav-item">
<<<<<<< HEAD
<<<<<<< HEAD
                    <a class="nav-link {{ activeSegment(2, 'giftLog') == 'active' ? 'active' : '' }}"
=======
                    <a class="nav-link @if (Route::currentRouteName()=='giftLog.index')active @endif"
>>>>>>> add admin guard section
=======
                    <a class="nav-link {{ activeSegment(2, 'giftLog') == 'active' ? 'active' : '' }}"
>>>>>>> add admin sidebar
                        href="{{ route('admin.giftLog.index') }}">
                        <i class="ni ni-bullet-list-67 text-blue"></i> {{ __('Gift Logs') }}
                    </a>
                </li>

                <li class="nav-item">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> add admin sidebar
                    <a class="nav-link {{ activeSegment(2, 'users') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.users.index') }}">
                        <i class="fas fa-users text-blue"></i> {{ __('Users') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'admins') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.admins.index') }}">
                        <i class="fa fa-user-cog text-blue"></i> {{ __('Admins') }}
<<<<<<< HEAD
=======
                    <a class="nav-link @if (Route::currentRouteName()=='user.index')active @endif"
                        href="{{ route('admin.user.index') }}">
                        <i class="ni ni-circle-08 text-pink"></i> {{ __('Users') }}
>>>>>>> add admin guard section
=======
>>>>>>> add admin sidebar
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
<<<<<<< HEAD
@endauth
=======
>>>>>>> add admin guard section
