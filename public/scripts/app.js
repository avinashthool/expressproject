var app = angular.module('interiorDesign',['slickCarousel','ng-fusioncharts']);
app.config(['slickCarouselConfig', function (slickCarouselConfig) {
      slickCarouselConfig.dots = true;
      slickCarouselConfig.autoplay = false;
  }]).controller('ID_Controller', function($scope, $http) {

    $scope.largeSlickImg = [];
    $scope.galleryImg    = [];
    $scope.chartData = [];
    
    //Fetch Top image slider data    
    $http.get( "/largeSliderImages").success(function( data ) {
          $scope.largeSlickImg = data;
    }).error(function(data){
       console.log('Error in largeSliderImages: ' + data); 
    });

    //Fetch Top image slider data    
    $http.get( "/galleryImages").success(function( data ) {
          $scope.galleryImg = data;
    }).error(function(data){
       console.log('Error in galleryImages: ' + data); 
    });

    //Fetch Top image slider data    
    $http.get( "/chartData").success(function( data ) {
          $scope.chartData = data;
    }).error(function(data){
       console.log('Error in chartData: ' + data); 
    });

    $scope.number = [
                    {img: "crib-1.jpg", text:"TEXT 1"},
                    {img: "crib-2.jpg", text:"TEXT 3"},
                    {img: "crib-3.jpg", text:"TEXT 1"},
                    {img: "crib-4.jpg", text:"TEXT 1"}
                ];
    $scope.gallery = [
        {img: "gallery-1.jpg", text:"Gymnastic"},
        {img: "gallery-2.jpg", text:"Gymnastic"},
        {img: "gallery-3.jpg", text:"Dance Floor"}
    ];
    $scope.numberLoaded = true;
    $scope.numberUpdate = function(){
        $scope.numberLoaded = false; // disable slick
		$scope.numberLoaded = true; // enable slick
    };

    $scope.slickConfig = {
    enabled: true,
    dots:true,
    //autoplay: true,
    draggable: false,
    autoplaySpeed: 3000,
    arrows: true,
    method: {},
    prevArrow:"",
    nextArrow:"",
    prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;"><i class="glyphicon glyphicon-chevron-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;"><i class="glyphicon glyphicon-chevron-left"></i></button>',
    event: {
        beforeChange: function (event, slick, currentSlide, nextSlide) {
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
        }
    }
};

	$scope.myDataSource = {
    chart: {
        caption: "Project Handled",
        subCaption: "Total creation in last few years",
        numberPrefix: "",
        theme: "ocean"
    },
    data:[{
        label: "2014",
        value: "80"
    },
    {
        label: "2015",
        value: "90"
    },
    {
        label: "2016",
        value: "90"
    },
    {
        label: "2017",
        value: "95"
    },
    {
        label: "2018",
        value: "110"
    }]
};
});