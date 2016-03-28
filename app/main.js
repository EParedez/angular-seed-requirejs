require.config( {

	paths: {
		'domReady': 'bower_components/domReady/domReady',
		'angular': 'bower_components/angular/angular',
		'angular-route': 'bower_components/angular-route/angular-route'
		//'ngAria' : '../bower_components/angular-aria/angular-aria.min'
	},

	shim:{
		'angular': {
            exports: 'angular'
            //deps: ['ngRoute']
        },
         'angular-route': {
          exports: 'ngRoute',
          deps: ['angular']
        } 
	},

	deps: ['./bootstrap']

});
