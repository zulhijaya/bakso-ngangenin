module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                bitter: ['Bitter'],
                rubik: ['Rubik']
            },
            height: {
                'md': '18rem',
                '72': '23rem',
                '80': '28rem'
            },
            backgroundImage: theme => ({
                'bakso': "url('~@/assets/img/landing.png')",
                'kemitraan': "url('~@/assets/img/bg-kemitraan.png')",
            }),
            colors: {
                main: '#FF7E23'
            }
        },
    },
    variants: {},
    plugins: [],
}
