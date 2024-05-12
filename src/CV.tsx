export const CV = [
    {
        section: 'Personal Details', isDeletable: false, canAddSection: false,
        subSection: [
            {type: 'Title', isDeletable: false, isAddable: false, placeholder: 'Full Name', value: 'John Doe'},
            {type: 'Language', isDeletable: false, isAddable: true, placeholder: 'Language', value: 'Arabic'},
            {type: 'Language', isDeletable: true, isAddable: true, placeholder: 'Language', value: 'English'},
            {
                type: 'Email',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Email',
                value: 'john.doe@gmail.com'
            },
            {
                type: 'subTitle',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Phone Number',
                value: '(+12) 34 5678 901'
            },
            {
                type: 'subTitle',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Location',
                value: 'Kuala Lumpur, Malaysia'
            },

        ]
    }, {
        section: 'Bio', isDeletable: false, canAddSection: false, subSection: [{
            type: 'Description',
            isDeletable: false,
            isAddable: false,
            placeholder: 'Bio',
            value: 'Devoted Full Stack Developer with bachelor’s degree in information technology and solid foundation in\n' +
                'both backend and frontend development. Skilled in building responsive web and mobile applications\n' +
                'using modern frameworks like YII2, Laravel and Flutter, highly proficient with SQL, MySQL and\n' +
                'PostgreSQL, capable of integrating user-interface and backend seamlessly. Dedicated to improving user\n' +
                'experience and creating engaging web applications.'
        },]
    },

    {
        section: 'Education', isDeletable: false, canAddSection: true, subSection: [
            {
                type: 'Education',
                isDeletable: false,
                isAddable: false,
                placeholder: 'University',
                value: 'International Islamic University in Malaysia'
            },
            {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'From', value: 'Jun 2018'},
            {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'Until', value: 'Sep 2024'},
            {
                type: 'Description',
                isDeletable: false,
                isAddable: true,
                placeholder: 'Description',
                value: 'Bachelor of Information Technology (BIT) (Honors)'
            },
        ]
    },
    {
        section: 'Job Experience', isDeletable: false, canAddSection: true,
        subSection: [
            {
                type: 'Job',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Job',
                value: 'Full Stack Developer (intern)'
            },
            {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'From', value: 'Jun 2023'},
            {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'Until', value: 'Jan 2024'},
            {
                type: 'Company Name',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Company Name',
                value: 'IIUM'
            },
            {
                type: 'Description',
                isDeletable: false,
                isAddable: true,
                placeholder: 'Description',
                value: 'Developed user-friendly web applications to streamline International Exchange program\n' +
                    'applications.'
            },
            {
                type: 'Description',
                isDeletable: false,
                isAddable: true,
                placeholder: 'Description',
                value: 'Reduced administrative burdens by transitioning from paper-based to online platforms.'
            },
            {
                type: 'Description',
                isDeletable: true,
                isAddable: true,
                placeholder: 'Description',
                value: 'Enhanced flexibility and convenience for students and staff involved.'
            },
        ]
    },
    {
        section: 'Job Experience', isDeletable: false, canAddSection: true,
        subSection: [
            {
                type: 'Job',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Job',
                value: 'Graphic Designer (intern)'
            },
            {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'From', value: 'Mar 2019'},
            {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'Until', value: 'Jan 2021'},
            {
                type: 'Company Name',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Company Name',
                value: 'ABC Company'
            },
            {
                type: 'Description',
                isDeletable: false,
                isAddable: true,
                placeholder: 'Description',
                value: 'Developed frontend UI/UX designs that enhanced user experience and engagement.'
            },
            {
                type: 'Description',
                isDeletable: false,
                isAddable: true,
                placeholder: 'Description',
                value: 'Designed and executed three exhibition stalls, showcasing creativity and attention to detail.'
            },
        ]
    },
    {
        section: 'Skills', isDeletable: false, canAddSection: true,
        subSection: [
            {
                type: 'skill Title',
                isDeletable: false,
                isAddable: true,
                placeholder: 'skill Title',
                value: 'Web Development'
            },
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'YII2'},
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'Laravel'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'WordPress'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'HTML5'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'CSS'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'JS'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'Bootstrap'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'React'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'Tailwind'},
        ]
    },
    {
        section: 'Skills', isDeletable: true, canAddSection: true,
        subSection: [
            {
                type: 'skill Title',
                isDeletable: false,
                isAddable: true,
                placeholder: 'skill Title',
                value: 'Database'
            },
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'SQL'},
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'MySQL'},

        ]
    },
    {
        section: 'Skills', isDeletable: true, canAddSection: true,
        subSection: [
            {
                type: 'skill Title',
                isDeletable: false,
                isAddable: true,
                placeholder: 'skill Title',
                value: 'Developer Tools'
            },
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'Visual Studio Code'},
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'Visual Studio'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'PhpStorm'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'IntelliJ IDEA'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'WebStorm'},
        ]
    },
    {
        section: 'Skills', isDeletable: true, canAddSection: true,
        subSection: [
            {
                type: 'skill Title',
                isDeletable: false,
                isAddable: true,
                placeholder: 'skill Title',
                value: 'Designer Tools'
            },
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'Adobe Photoshop'},
            {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: 'Adobe Illustrator'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'Adobe XD'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'Figma'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'Aseprite'},
            {type: 'skill', isDeletable: true, isAddable: true, placeholder: 'skill', value: 'Blender'},
        ]
    },
    {
        section: 'Awards', isDeletable: true, canAddSection: true,
        subSection: [
            {
                type: 'Award Title',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Award Title',
                value: '2022 - 2023 Innovation and Creativity'
            },
            {
                type: 'Award Description',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Description',
                value: 'Honored in silver medal'
            },
        ]
    },
    {
        section: 'Awards', isDeletable: true, canAddSection: true,
        subSection: [
            {
                type: 'Award Title',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Award Title',
                value: '2022- 2023 Visionary of Creativity'
            },
            {
                type: 'Award Description',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Description',
                value: 'Honored in 2nd Place'
            },
        ]
    },
    {
        section: 'Awards', isDeletable: true, canAddSection: true,
        subSection: [
            {
                type: 'Award Title',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Award Title',
                value: 'Dean’s List'
            },
            {
                type: 'Award Description',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Description',
                value: 'Recognized for exceptional academic excellence and dedication'
            },
        ]
    },
    {
        section: 'References', isDeletable: false, canAddSection: true,
        subSection: [
            {
                type: 'Name',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Name',
                value: 'xxxxxxxxx'
            },
            {
                type: 'Email',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Email',
                value: 'xxxx.xxxx@xxxxx.xxx'
            },
            {
                type: 'Phone Number',
                isDeletable: false,
                isAddable: false,
                placeholder: 'Phone Number',
                value: '123456789'
            },
        ]
    },
];

export const EducationSkelaton = {
    section: 'Education',
    isDeletable: true,
    canAddSection: true,
    subSection: [
        {type: 'Education', isDeletable: false, isAddable: false, placeholder: 'University', value: ''},
        {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'From', value: ''},
        {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'Until', value: ''},
        {type: 'Description', isDeletable: true, isAddable: true, placeholder: 'Description', value: ''},
    ]
};
export const JobExperienceSkelaton = {
    section: 'Job Experience', isDeletable: true, canAddSection: true,
    subSection: [
        {type: 'Job', isDeletable: false, isAddable: false, placeholder: 'Job', value: ''},
        {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'From', value: ''},
        {type: 'Period', isDeletable: false, isAddable: false, placeholder: 'Until', value: ''},
        {type: 'Description', isDeletable: true, isAddable: true, placeholder: 'Description', value: ''},
    ]
};
export const SkillsSkelaton = {
    section: 'Skills', isDeletable: true, canAddSection: true,
    subSection: [
        {type: 'skill Title', isDeletable: false, isAddable: true, placeholder: 'skill Title', value: ''},
        {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: ''},
        {type: 'skill', isDeletable: false, isAddable: true, placeholder: 'skill', value: ''},

    ]
};

export const AwardsSkelaton = {
    section: 'Awards', isDeletable: true, canAddSection: true,
    subSection: [
        {type: 'Award Title', isDeletable: false, isAddable: false, placeholder: 'Award Title', value: '1'},
        {type: 'Award Description', isDeletable: false, isAddable: false, placeholder: 'Description', value: '2'},
    ]
};

export const refSkelaton = {
    section: 'References', isDeletable: true, canAddSection: true,
    subSection: [
        {
            type: 'Name',
            isDeletable: false,
            isAddable: false,
            placeholder: 'Name',
            value: 'xxxxxxxxx'
        },
        {
            type: 'Email',
            isDeletable: false,
            isAddable: false,
            placeholder: 'Email',
            value: 'xxxx.xxxx@xxxxx.xxx'
        },
        {
            type: 'Phone Number',
            isDeletable: false,
            isAddable: false,
            placeholder: 'Phone Number',
            value: '123456789'
        },
    ]
};