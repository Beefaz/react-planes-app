const importAll = r => r.keys().map(r);
export const TOP_IMAGE = importAll(require.context('../../planes/Vickers Supermarine Seafire III/TopIMG', false, /\.(png|jpe?g|svg"|webp)$/));
export const GALLERY_IMAGES = importAll(require.context('../../planes/Vickers Supermarine Seafire III/OtherIMG', false, /\.(png|jpe?g|svg"|webp)$/));
export const CONTENT = importAll(require.context('../../planes/Vickers Supermarine Seafire III/', false, /\.(txt)$/));

export const LINKS = ['/', '/remotecourses', '/lessons',  '/gallery', '/contacts'];
export const ITEMS = {
    LT: {
        STYLES: {
            AVATARIMAGEFLOAT: 'right'
        },
        PAGE404: 'Atsiprašome, toks puslapis neegzistuoja',
        LINKLABELS: ['Apie mus','Nuotoliniai kursai', 'Pamokos', 'Galerija', 'Kontaktai'],
        EMAIL: 'El-paštas:',
        ADDRESS: 'Adresas:',
        PHONE: 'Telefonas:',
        REMOTECOURSES: {
            TEXT1: 'Užsiėmimai vyksta jums patogiu laiku.\n' +
                'Pirma pamoka nemokama.\n' +
                'Grupėse ne daugiau 4 žmonių.\n' +
                'Pamokos vyksta nuotoliniu būdu per:',
            TEXT2: 'Vienos pamokos trukmė 90 min.\n' +
                'Vieną kursą sudaro 20 pamokų (40 akademinių valandų).\n' +
                'Visa mokymo medžiaga atsiunčiama el. paštu.\n' +
                'Naujos grupės formuojamos kas du mėnesius arba susidarius grupei iš 4 vienodo lygio žmonių.\n' +
                'Artimiausia A1 lygio kurso pradžia 2020 m. spalio 6 d.\n' +
                'Registracija el. paštu:'
        },
        ABOUTUS: 'Naujoji arabų kalbos studija Vilniaus centre kviečia mokytis arabų kalbos individualiai arba mažose grupėse (nuo 2 iki 4 žmonių). Mokytojas iš arabų šalies, turintis daugiau nei aštuonerių metų mokymo patirtį tiek individualiai, tiek grupėmis, tiek nuotoliniu būdu.'
},
    EN: {
        STYLES: {
            AVATARIMAGEFLOAT:'right'
        },
        PAGE404: 'Sorry. Such page does not exist',
        LINKLABELS: ['About us', 'Remote courses', 'Lessons', 'Gallery', 'Contacts'],
        EMAIL: 'E-mail:',
        ADDRESS: 'Address:',
        PHONE: 'Phone:',
        REMOTECOURSES: {
            TEXT1: 'Courses can be scheduled for any time.\n' +
                'First lesson for free.\n' +
                'Group size - 4 people or less.\n' +
                'Courses are available on:',
            TEXT2: 'Lesson length - 90 minutes.\n' +
                'Full course consists of 20 lessons (40 academic hours).\n' +
                'All course material will be provided by e-mail.\n' +
                'New groups are formed each 2 months or when there is 4 people of same level to form a group.\n' +
                'Closest A1 level course start - 2020 October 6th.\n' +
                'Sign up:'
        },
        ABOUTUS: 'New Arabic language studio in Vilnius Center invite you to learn Arabic individually or in small groups (2 to 4 people). A teacher from an Arab country with more than eight years of teaching experience, either individually, collectively or remotely.'
    },
    AR: {
        STYLES: {
            PHONEDIRECTION:{ direction: 'ltr', textAlign: 'end'},
            TEXTDIRECTION: { direction: 'rtl', textAlign: 'start'},
            AVATARIMAGEFLOAT: 'left'
        },
        PAGE404: 'آسف. هذه الصفحة غير موجودة',
        LINKLABELS: ['معلومات','الدراسة عن  بعد', 'الدروس', 'معرض الصور','البريد و الهاتف'],
        EMAIL: 'البريد الإلكتروني:',
        ADDRESS: 'عنوان:',
        PHONE: 'رقم الهاتف:',
        REMOTECOURSES: {
            TEXT1: 'دورات عن بعد لمجموعات لا تزيد عن 4 أشخاص.\n' +
                'الدروس تتم عن بعد من خلال:',
            TEXT2: 'مدة الدرس الواحد 90 دقيقة.\n' +
                'تتكون الدورة الواحدة من 20 درسًا (40 ساعة أكاديمية).\n' +
                'يتم إرسال جميع المواد التدريبية عبر البريد الإلكتروني الأقرب إلى بداية دورة المستوى A1 في 2020. 6 \n' +
                'أكتوبر التسجيل عبر البريد الإلكتروني:'
        },
        ABOUTUS: 'استديو جديد للغة العربية في مركز فيلنيوس  ندعوك لتعلم اللغة العربية بشكل فردي أو مجموعات صغيرة (من 2 إلى 4 أشخاص).  مدرس من بلد عربي لده أكثر من ثماني سنوات من الخبرة في التدريس سواء بشكل فردي أو جماعي أو عن بعد.'
    }
};