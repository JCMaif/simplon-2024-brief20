import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */

document.documentElement.classList.add("cc--darkmode");

CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        functional: {
            enabled: false,
            readOnly: false,
        }
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'We use cookies',
                    description: 'Cookie modal description',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    showPreferencesBtn: 'Manage Individual preferences'
                },
                preferencesModal: {
                    title: 'Manage cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Accept current selection',
                    closeIconLabel: 'Close modal',
                    sections: [
                        {
                            title: 'Somebody said ... cookies?',
                            description: 'I want one!'
                        },
                        {
                            title: 'Strictly Necessary cookies',
                            description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary',
                            cookieTable: {
                                caption: "Strictly Necessary Cookies Table",
                                headers: {
                                    name: "Necessary Cookie",
                                    domain: "Domain",
                                },
                                body: [
                                    {
                                        name: "firstName",
                                        domain: location.hostname,
                                        description: "Remember the user's first name.",
                                        expiration: "Session",
                                        type: "HTTP",
                                    },
                                    {
                                        name: "username",
                                        domain: location.hostname,
                                        description: "Connection need.",
                                        expiration: "Session",
                                        type: "HTTP",
                                    },
                                    {
                                        name: "lastName",
                                        domain: location.hostname,
                                        description: "Remember the user's last name.",
                                        expiration: "Session",
                                        type: "HTTP",
                                    },
                                    {
                                        name: "email",
                                        domain: location.hostname,
                                        description: "Remember the user's email for authentication.",
                                        expiration: "Session",
                                        type: "HTTP",
                                    },

                                ],
                            },
                        },
                        {
                            title: 'Functional',
                            description: 'These cookies help us deliver the services that you have asked for and enable the site to function properly with full features.',
                            linkedCategory: 'functional',
                            cookieTable: {
                                caption: "Functional Cookies Table",
                                headers: {
                                    name: "Functional Cookie",
                                    domain: "Domain",
                                },
                                body: [
                                    {
                                        name: "photo",
                                        domain: location.hostname,
                                        description:
                                            "Enhance the user's experience by displaying the user's photo.",
                                        expiration: "Session",
                                        type: "HTTP",
                                    },
                                    {
                                        name: "Profile info",
                                        domain: location.hostname,
                                        description: "Store the user's description.",
                                        expiration: "Session",
                                        type: "HTTP",
                                    },
                                ],
                            },
                        },
                        {
                            title: 'More information',
                            description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                        }
                    ]
                }
            }
        }
    }
});