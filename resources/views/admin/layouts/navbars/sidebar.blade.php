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
            <img src="{{ asset('argon') }}/img/brand/react-argon.png" class="navbar-brand-img" alt="...">
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

                    <div class="dropdown-header noti-title">

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
                    <a class="nav-link {{ activeSegment(2, 'dashboard') == 'active' ? 'active' : '' }}" href="{{ route('admin.home') }}">

                        <i class="ni ni-tv-2 text-primary"></i> {{ __('messages.Dashboard') }}
                    </a>
                </li>

                <li class="nav-item">

                    <a class="nav-link {{ activeSegment(2, 'category') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.category.index') }}">
                        <i class="ni ni-palette text-blue"></i> {{ __('Box Category') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'items') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.items.index') }}">
                        <i class="ni ni-books text-blue"></i> {{ __('Gift Items') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'boxes') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.boxes.index') }}">
                        <i class="ni ni-app text-blue"></i> {{ __('Gift Boxes') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'giftLog') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.giftLog.index') }}">
                        <i class="ni ni-bullet-list-67 text-blue"></i> {{ __('Gift Logs') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'prize') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.prize.index') }}">
                        <i class="ni ni-trophy text-blue"></i> {{ __('Gift Prize Record') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'recharge-lists') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.recharge-lists.index') }}">
                        <i class="fas fa-money-bill-wave text-blue"></i> {{ __('Recharges Lists') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'delivery-orders') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.delivery-orders.index') }}">
                        <i class="fas fa-truck text-blue"></i> {{ __('Shipping Orders') }}
                        <span class="badge badge-warning" id="delivery-order-unread"></span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'recycle-orders') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.recycle-orders.index') }}">
                        <i class="fa fa-recycle text-blue"></i> {{ __('Recycle Orders') }}
                        <span class="badge badge-warning" id="delivery-order-unread"></span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'recharge-orders') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.recharge-orders.index') }}">
                        <i class="fas fa-battery-full text-blue"></i> {{ __('Recharge Orders') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'settings') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.settings.index') }}">
                        <i class="fa fa-cog text-blue"></i> {{ __('Settings') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'banners') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.banners.index') }}">
                        <i class="fas fa-image text-blue"></i> {{ __('Banner') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'rule-policies') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.rule-policies.index') }}">
                        <i class="fas fa-balance-scale text-blue"></i> {{ __('Protocol Policies') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'users') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.users.index') }}">
                        <i class="fas fa-users text-blue"></i> {{ __('Users') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ activeSegment(2, 'admins') == 'active' ? 'active' : '' }}"
                        href="{{ route('admin.admins.index') }}">
                        <i class="fa fa-user-cog text-blue"></i> {{ __('Admins') }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
@endauth
