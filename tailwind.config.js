/**
* Configuration
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: 
            ['./pages/*.html',
            './assets/**/*.js'],
    corePlugins: {
        preflight: false,  
    },
    darkMode: 'class', // or 'media' or 'class' 
    theme: {
        fontFamily: {
            Inter: ['Inter'],
            Poppins: ['Poppins'],
            Roboto: ['Roboto'],
        },        
        colors: {
            transparent: 'transparent',   
            White: '#FFFFFF',  
            Black: '#000000',
            Font: '#383838',
            Orange: '#fc8a31',
            Gray: '#989898',
        },
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            inherit: 'inherit',   
            none: 'none',
            '2': '2 2 0%',
            'max-auto': '0 0 auto',
        },
        // container: {
        //     center: true,
        //     padding: '15px',
        //     xxl: '1250px',
        //     xl: '1140px',
        //     lg: '940px',
        //     md: '720px',
        //     sm: '600px',
        // },
        zIndex: {
            '1_minus': '-1',
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            9: 9,
            10: 10,
            20: 20,
            11: 11,
            12: 12,
            98: 98,
            99: 99,
            100: 100,
            999: 999,
            9999: 9999,
        },
        padding: {
            0: '0px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px',
            14: '14px',
            15: '15px',
            16: '16px',
            18: '18px',
            20: '20px',
            21: '21px',
            22: '22px',
            24: '24px',
            25: '25px',
            26: '26px',
            27: '27px',
            28: '28px',
            29: '29px',
            30: '30px',
            31: '31px',
            32: '32px',
            35: '35px',
            37: '37px',
            40: '40px',
            41: '41px',
            42: '42px',
            45: '45px',
            48: '48px',
            50: '50px',
            52: '52px',
            55: '55px',
            58: '58px',
            60: '60px',
            65: '65px',
            70: '70px',
            75: '75px',
            80: '80px',
            100: '100px',
            110: '110px',
            130: '130px',
            150: '150px',
            '120_per': '120.14%',
            'ratio1': 'calc(9/16*100%)',
            'ratio2': 'calc(4/5*100%)',
            'ratio3': 'calc(3/4*100%)',
            'ratio4': '100%',
            'ratio5': 'calc(5/4*100%)',
        },
        margin: {
            auto: 'auto',
            0: '0px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            8: '8px',
            10: '10px',
            15: '15px',
            16: '16px',
            18: '18px',
            20: '20px',
            24: '24px',
            25: '25px',
            26: '26px',
            28: '28px',
            30: '30px',
            35: '35px',
            40: '40px',
            45: '45px',
            48: '48px',
            50: '50px',
            55: '55px',
            60: '60px',
            70: '70px',
            80: '80px',
            85: '85px',
            90: '90px',
            '2_minus': '-2px',
            '10_minus': '-10px',
        },
        fontSize: {
            12: '12px',
            13: '13px',
            14: '14px',
            16: '16px',
            17: '17px',
            18: '18px',
            20: '20px',
            22: '22px',
            24: '24px',
            26: '26px',
            28: '28px',
            30: '30px',
            32: '32px',
            34: '34px',
            40: '40px',
            48: '48px',
            56: '56px',
            64: '64px',
        },
        lineHeight: {
            content: '25px',
            0: '0px', 
            15: '15px',
            16: '16px',
            19: '19px', 
            20: '20px',
            22: '22px', 
            24: '24px', 
            26: '26px', 
            32: '32px', 
            33: '33px',
            34: '34px', 
            38: '38px', 
            40: '40px', 
            44: '44px', 
            56: '56px',  
            60: '60px',
            66: '66px', 
            70: '70px', 
            88: '88px', 
        },
        letterSpacing: {            
            '40': '0.04em',          
            '20': '0.02em',
            '10': '0.01em',
        },        
        fontWeight: {
            100: '100',
            200: '200',
            300: '300',
            400: '400',
            500: '500',
            600: '600',
            700: '700',
            800: '800',
            900: '900',
        },
        inset: {
            0: '0px',
            2: '2px',
            4: '4px',
            5: '5px',
            6: '6px',
            10: '10px',
            11: '11px',
            15: '15px',
            16: '16px',
            17: '17px',
            '16_minus': '-16px',
            '17_minus': '-17px', 
            18: '18px',
            19: '19px',
            20: '20px',
            22: '22px',
            25: '25px',
            '30_minus': '-30px',
            30: '30px',
            40: '40px',
            50: '50px',
            65: '65px',
            75: '75px',
            90: '90px',
            245: '245px',
            250: '250px',
            '7_per': '7%',
            '8_per': '8%',
            '10_per': '10%',
            '12_per': '12%',
            '13_per': '13%',
            '23_per': '23%',
            '25_per': '25%',
            '35_per': '35%',
            '45_per': '45%',
            '50_per': '50%',
            '52_per': '52%',
            '58_per': '58%',
            '100_per': '100%',
        },
        backgroundImage: theme => ({
            none: 'none',
            'tabs_gradient': 'linear-gradient(90deg, rgba(255,255,255,0.05) 20%, rgba(25,25,25,0) 100%)',
        }),
        backgroundPosition: {
            'bgcp':'50% 80%',
            '50':'50% 50%',
            'bottom': 'bottom',
            'center': 'center',
            'left': 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            'right': 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            'top': 'top',
        },
        borderRadius: {
            none: '0',
            1: '1px',
            2: '2px',
            5: '5px',
            10: '10px',
            25: '25px',
            30: '30px',
            '50_per': '50%',
            100: '100%',
            999: '999px',
        },
        translate: {
            0: '0px',
            'minus_50': '-50%',
        },
        transitionProperty: {
            common: 'all 300ms',
            all: 'all'
        },
        backgroundSize: {
            100: '100%',
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
        },
        dropShadow: {
            'none': 'none',
            'menu': '0px 5px 40px rgba(0, 0, 0, 0.14)',
            'btn-bk-shadow': '-2px 2px 0px #fff',
            'btn-w-shadow': '-2px 2px 0px #000',
            'big-bk-shadow': '-10px 10px 0px #fff',
        },
        borderWidth: {
            1: '1px',
            2: '2px',
            12: '12px',
            0: '0px',            
        },
        scale: {
            0: '0',
            1.05: '1.05',
            1.1: '1.1',
            100: '1',
            125: '1.25',
        },
        boxShadow: {
            'cardshadow': '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
            'regularshadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
            'btnshadow': '3px 6px 19px rgba(28, 42, 69, 0.15)',
            ellips: '3px 5px 18px rgba(0, 0, 0, 0.25)',
            offered: '0px 4px 4px rgba(0, 153, 219, 0.2)',
            'testimonial-card': '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
            'newsletter': '0px 4px 10px 0px rgba(0, 0, 0, 0.28)',
        },
        outline: {
            none: 'none',
        },
        extend: {
            width: {
                0: '0px',
                4: '4px',
                15: '15px',
                25: '25px',
                45: '45px',
                48: '48px',
                50: '50px',
                54: '54px',
                86: '86px',
                70: '70px',
                100: '100px',
                105: '105px',
                112: '112px',
                120: '120px',
                152: '152px',
                208: '208px',
                400: '400px',
                '10_px': '10px',
                '20_per': '20%',
                '33.33_per': '33.33%',
                '40_per': '40%',
                '50_per': '50%',
                '60_per': '60%',
                '90_per': '90%',
                '95_per': '95%',
                '97_per': '97%',
                '1.25': '1.25rem',
                'calc-310':'calc(100% - 310px)',
            },
            height: {
                4: '4px',
                15: '15px',
                45: '45px',
                48: '48px',
                50: '50px',
                52: '52px',
                54: '54px',
                80: '80px',
                86: '86px',
                100: '100px',
                112: '112px',
                120: '120px',
                152: '152px',
                168: '168px',
                208: '208px',
                285: '285px',
                375: '375px',
                425: '425px',
                480: '480px',
                660: '660px', 
                680: '680px',
                700: '700px',
                '10_px': '10px', 
                '1.25': '1.25rem', 
            },
            screens: {
                xl: { 'min': '1200px' },
                xxl: {'min': '1366px'},
                xxxl: { 'min': '1440px' },
                xl2: { 'min': '1510px' },              
                
                max_width_1510: { 'max': '1510px' },  
                max_widthctm_1400: { 'max': '1400px' }, 
                max_width_1366: { 'max': '1366px' },   
                1279: { 'max': '1279px' },   
                xlscreen: { 'max': '1199.9px' },
                lgscreen: { 'max': '1023px' },
                mdscreen2: { 'max': '991px' },  
                mdscreen: { 'max': '767px' },
                smscreen2: { 'max': '639px' },
                smscreen: { 'max': '575px' },  
                xsscreen2: { 'max': '479px' },
                xsscreen3: { 'max': '374px' },
                xsscreen: { 'max': '320px' },  
                max_width_768: {'raw': '(max-width: 1199.9px) and (min-width: 768px)'},
                max_width_1024: {'raw': '(max-width: 1199.9px) and (min-width: 1024px)'},
                max_width_1200: {'raw': '(max-width: 1365px) and (min-width: 1200px)'},
                min_width_1200: {'raw': '(max-width: 1505px) and (min-width: 1200px)'}, 
                max_width_1400: {'raw': '(max-width: 1579px) and (min-width: 1400px)'},
            }
        }
    },
    variantOrder: [
    ],
    variants: {
        // extend: {},
    },
    plugins: [
        // require('tailwindcss'),
        function ({ addComponents }) {
            addComponents({

                '.container': {
                    maxWidth: '100%',
                    padding: '0 20px',
                    '@screen sm': {
                        maxWidth: '640px',
                        margin: '0 auto',
                        padding: '0 20px',
                    },
                    '@screen md': {
                        maxWidth: '720px',
                        margin: '0 auto',
                        padding: '0 15px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',
                        margin: '0 auto',
                        padding: '0 15px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                        margin: '0 auto',
                        padding: '0 15px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1250px',
                        margin: '0 auto',
                        padding: '0 15px',
                    },
                },


                '.container-xl': {
                    maxWidth: '100%',
                    padding: '0 20px',
                    '@screen 2xl': {
                        maxWidth: '1250px',
                        margin: 'auto',
                        padding: '0 15px',
                    },
                    '@screen xl': {
                        maxWidth: '1140px',
                        margin: 'auto',
                        padding: '0 15px',
                    },
                    '@screen lg': {
                        maxWidth: '1024px',  
                        margin: 'auto',
                        padding: '0 15px',
                    },
                    '@screen md': {
                        maxWidth: '720px',
                        margin: 'auto',
                        padding: '0 15px',
                    },   
                    '@screen sm': {
                        maxWidth: '640px',
                        margin: 'auto',  
                        padding: '0 15px', 
                    },
                },
            })
        }
    ],
}