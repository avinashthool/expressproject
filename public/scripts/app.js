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

    //Fetch articleThumbnails
    $http.get( "/articleThumbnails").success(function( data ) {
          $scope.articleThumbnails =  data.thumbNails;
          console.log(data.thumbNails); 
    }).error(function(data){
       console.log('Error in articleThumbnails: ' + data); 
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
    fade: true,
    speed: 1000,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 1000,
    arrows: true,
    method: {},
    prevArrow: false,
    nextArrow: false,
    event: {
        beforeChange: function (event, slick, currentSlide, nextSlide) {
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
        }
    }
};


$scope.articleSlickSlider = {
    enabled: true,
    dots:true,
    fade: true,
    speed: 1000,
    autoplay: true,
    draggable: false,
    autoplaySpeed: 1000,
    arrows: true,
    method: {},
    prevArrow: true,
    nextArrow: true
};

});