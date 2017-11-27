exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.js'],
    multiCapabilities:     
    [{   browserName: 'chrome',
        version: '62.0.3202.94',
        loggingPrefs: {
            'driver': 'WARNING',
            'browser': 'WARNING'
        },
        chromeOptions: {
            args: [
                '--no-sandbox',
                '--window-size=1366,1366'
            ],
            mobileEmulation: {
                deviceMetrics: {
                    'width': 375,
                    'height': 667,
                    'pixelRatio': 2
                },
                'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
            }
        }
    }],
    jasmineNodeOpts: {
		defaultTimeoutInterval: 900000
    },
    onPrepare:() =>{
        console.log("Log : onPrepare"); 
    },
    beforeLaunch: () => {
        console.log("Log : beforeLaunch"); 
    },
    afterLaunch: (exitCode) => {
        console.log("Log : afterLaunch"); 
    }
};
