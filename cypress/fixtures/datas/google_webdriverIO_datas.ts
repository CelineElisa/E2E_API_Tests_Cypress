export class GoogleWebdriverIODatas {
    
    googleResult: {
        linkTittle: string
        link: string
        linkDescription: string
        preview: string
    }

    setUpTypesPage: {
        h1: string
        p: string
    }

    englishPage: {
        nav: string
        header: string
        a: string
        h3: string
        p: string
        footer: string
    }

    bestPracticesPage: {
        h2: string
    }

    constructor() {
        
        this.googleResult = {
            linkTittle: 'WebdriverIO',
            link: 'https://webdriver.io/fr/', 
            linkDescription: 'Navigateur de nouvelle génération et', 
            preview: 'WebdriverIO est un framework tout en un seul pour le développement de votre application Web.'
        }
        
        this.setUpTypesPage = {
            h1: 'Setup Types',
            p: 'WebdriverIO can be used for various purposes. It implements the WebDriver protocol API and can run a browser in an automated way. The framework is designed to work in any arbitrary environment and for any kind of task. It is independent from any 3rd party frameworks and only requires Node.js to run.'
        }
     
        this.englishPage = {
            nav: 'Community',
            header: 'Next-gen browser and mobile automation test framework for Node.js',
            a: 'Get Started',
            h3: 'Test in Real Environments',
            p: 'WebdriverIO allows you to test in actual browser or mobile devices used by your users.',
            footer: 'Community'
        }

        this.bestPracticesPage = {
            h2: 'Use resilient selectors'
        }
    }
}