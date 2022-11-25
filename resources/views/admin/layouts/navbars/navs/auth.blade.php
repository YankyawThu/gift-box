<!-- Top navbar -->
<nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
    <div class="container-fluid">
        <ul class="navbar-nav align-items-center ml-lg-auto d-none d-md-flex">
            <li class="nav-item dropdown mr-2">
                <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <div class="media align-items-center">
                        <div class="media-body ml-2 d-none d-lg-block">
                            @if (session('locale') == 'mm')
                                <img src="{{ asset('/image/mm.png') }}" alt="" width="20" height="15">
                                <span style="font-size: 12px; margin-left: 3px;">MM</span>
                            @elseif(session('locale') == 'en')
                                <img src="{{ asset('/image/en.png') }}" alt="" width="20" height="15">
                                <span style="font-size: 12px; margin-left: 3px;">EN</span>
                            @else
                                <img src="{{ asset('/image/zh.png') }}" alt="" width="20" height="15">
                                <span style="font-size: 12px; margin-left: 3px;">ZH</span>
                            @endif
                        </div>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <a href="{{ url('/admin/language/en') }}" class="dropdown-item">
                        <img src="{{ asset('/image/en.png') }}" alt="" width="20" height="15" class="pb-1 mr-2">
                        <span>English</span>
                    </a>
                    <a href="{{ url('/admin/language/mm') }}" class="dropdown-item">
                        <img src="{{ asset('/image/mm.png') }}" alt="" width="20" height="15" class="pb-1 mr-2">
                        <span>မြန်မာ</span>
                    </a>
                    <a href="{{ url('/admin/language/zh') }}" class="dropdown-item">
                        <img src="{{ asset('/image/zh.png') }}" alt="" width="20" height="15" class="pb-1 mr-2">
                        <span>中國人</span>
                    </a>
                </div>
            </li>
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
