@extends($_viewFrame)

@section('pageTitleMain'){{$cat['seoTitle']?$cat['seoTitle']:$cat['title']}}@endsection
@section('pageKeywords'){{$cat['seoKeywords']?$cat['seoKeywords']:$cat['title']}}@endsection
@section('pageDescription'){{$cat['seoDescription']?$cat['seoDescription']:$cat['title']}}@endsection

@section('bodyContent')

    <div class="lg:tw-text-left tw-text-center tw-text-white tw-text-lg tw-py-20 tw-bg-gray-500 ub-cover"
         @if($cat['bannerBg'])
         style="background-image:url({{\ModStart\Core\Assets\AssetsUtil::fix($cat['bannerBg'])}});"
        @endif
    >
        <div class="ub-container">
            <h1 class="tw-text-4xl animated fadeInUp">{{$cat['title']}}</h1>
            <div class="tw-mt-4 animated fadeInUp">
                {{$cat['subTitle']}}
            </div>
        </div>
    </div>

    <div class="ub-container">
        <div class="ub-breadcrumb">
            <a href="{{modstart_web_url('')}}">首页</a>
            @foreach($catChain as $i=>$c)
                <a class="@if(count($catChain)==$i+1) active @endif" href="{{modstart_web_url($c['url'])}}">{{$c['title']}}</a>
            @endforeach
        </div>
    </div>

    <div class="ub-container">

        <div class="ub-nav">
            <a class="item @if($catRoot['url']==\ModStart\Core\Input\Request::path()) active @endif" href="{{modstart_web_url($catRoot['url'])}}">全部</a>
            @foreach($catRootChildren as $c)
                <a class="item @if(\ModStart\Core\Input\Request::path()==$c['url']) active @endif" href="{{modstart_web_url($c['url'])}}">{{$c['title']}}</a>
            @endforeach
        </div>

        <div class="tw-rounded margin-top">
            @if(empty($records))
                <div class="ub-empty tw-my-20">
                    <div class="icon">
                        <div class="iconfont icon-empty-box"></div>
                    </div>
                    <div class="text">暂无记录</div>
                </div>
            @else
                <div class="ub-list-items">
                    <div class="row">
                        @foreach($records as $record)
                            <div class="col-md-3 col-6">
                                <div class="item-p">
                                    <a class="image" href="{{$record['_url']}}">
                                        <div class="cover ub-cover-1-1" style="background-image:url({{\ModStart\Core\Assets\AssetsUtil::fix($record['cover'])}});"></div>
                                    </a>
                                    <a class="title" href="{{$record['_url']}}">{{$record['title']}}</a>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="ub-page">
                    {!! $pageHtml !!}
                </div>
            @endif
        </div>

    </div>

@endsection





