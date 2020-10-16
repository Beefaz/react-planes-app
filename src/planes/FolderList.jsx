const importAll = r => r.keys().map(r);
export const ITEMS = [
    {
        NAME: 'Vickers Supermarine Seafire III',
        TOPIMAGE: importAll(require.context('../planes/Vickers Supermarine Seafire III/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/Vickers Supermarine Seafire III/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        TEXT: importAll(require.context('../planes/Vickers Supermarine Seafire III/', false, /\.(txt)$/)),
    },
    {
        NAME: 'Vickers Supermarine Spitfire LF Vb BL688',
        TOPIMAGE: importAll(require.context('../planes/Vickers Supermarine Spitfire LF Vb BL688/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/Vickers Supermarine Spitfire LF Vb BL688/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        TEXT: importAll(require.context('../planes/Vickers Supermarine Spitfire LF Vb BL688/', false, /\.(txt)$/)),
    },
    {
        NAME: 'P-51 Mustang N51TK',
        TOPIMAGE: importAll(require.context('../planes/P-51 Mustang N51TK/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/P-51 Mustang N51TK/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        TEXT: importAll(require.context('../planes/P-51 Mustang N51TK/', false, /\.(txt)$/)),
    },
    {
        NAME: 'Sopwith Dove',
        TOPIMAGE: importAll(require.context('../planes/Sopwith Dove/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/Sopwith Dove/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        TEXT: importAll(require.context('../planes/Sopwith Dove/', false, /\.(txt)$/)),
    }
];