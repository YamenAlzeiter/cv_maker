import React from "react";

interface subSectionFields {
    type: string;
    isDeletable: boolean;
    isAddable: boolean;
    placeholder: string;
    value: string;
}

interface sectionFields {
    section: string;
    isDeletable: boolean;
    canAddSection: boolean;
    subSection: subSectionFields[];
}

interface Props {
    cv: sectionFields[];
}


function Output({cv}: Props) {
    const titleOutput = (title: subSectionFields[]) => {
        if (!title || title.length === 0) {
            return null; // or some default message or loading indicator
        }
        return title.map(title => title.value);
    }
    const subTitleOutput = (subTitle: subSectionFields[]) => {
        const lastSubTitle = subTitle.map((sectionValue) => sectionValue.type.lastIndexOf('subTitle')).lastIndexOf(0);
        if (!subTitle || subTitle.length === 0) {
            return null; // or some default message or loading indicator
        }
        return subTitle.map((subTitle, index) => (
            <p key={'info' + index}>{subTitle.value} {lastSubTitle != index && <span>|</span>}</p>
        ));
    }
    const emailOutput = (emails: subSectionFields[]) => {
        if (!emails || emails.length === 0) {
            return null; // or some default message or loading indicator
        }
        return emails.map(email => <a key={'email'} className='underline' href={`mailto:${email.value}`}>{email.value}</a>);
    }
    const languageOutput = (language: subSectionFields[]) => {
        const lastLanguage = language.map((sectionValue) => sectionValue.type.lastIndexOf('Language')).lastIndexOf(0);
        if (!language || language.length === 0) {
            return null; // or some default message or loading indicator
        }
        return language.map((language, index) => (
            <p key={'language' + index}>{language.value} {lastLanguage != index && <span>|</span>}</p>
        ));
    }
    const period = (index: number, periods: sectionFields[]) => {
        return periods[index]?.subSection.filter((subSectionValue) => subSectionValue.type === "Period") || [];
    }
    const description = (index: number, description: sectionFields[]) => {
        return description[index]?.subSection.filter((subSectionValue) => subSectionValue.type === "Description") || [];
    }
    const companyName = (index: number, description: sectionFields[]) => {
        return description[index]?.subSection.filter((subSectionValue) => subSectionValue.type === "Company Name") || [];
    }
    const rewardDescription = (section: sectionFields) =>{
    
        return section.subSection.flatMap(sectionValue => sectionValue.type ===  "Award Description"? sectionValue.value: '');
    }


    const header = () => {

        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Personal Details');

        const title = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Title"));
        const subTitle = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "subTitle"));
        const email = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Email"));
        const language = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Language"));

        return (
            <>
                <div className='flex flex-col items-center gap-1 text-wrap'>
                    <h1 key={'name'} className='capitalize text-5xl'>{titleOutput(title)}</h1>
                    <div className='flex flex-row items-center gap-1'>
                        {emailOutput(email)} | {subTitleOutput(subTitle)}
                    </div>
                    <div className='flex flex-row items-center gap-1'>
                        {languageOutput(language)}
                    </div>
                </div>
                <hr className='hr  my-4'/>
            </>

        );
    }
    const bio = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Bio');
        const bio = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Description"));

        return (
            <>
                {bio.map((item) => (
                    <>
                        <p key={'bio'} className='text-justify'>{item.value}</p>
                        {item.value.length > 0 && <hr className='hr  my-4'/>}
                    </>
                ))}

            </>
        );
    }
    const education = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Education');
        const educationData = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Education"));

        return (
            <>
                <h1 className='text-3xl text-center mb-4 font-light'>EDUCATION</h1>
                {personalDetails.map((_, index) => (
                    <div>
                        <div key={"education" + index} className="flex justify-between">
                            {educationData[index].value != '' && <ul>
                                <li className='list-disc'>
                                    <h4 key={'University Name' + index} className='font-bold'>{educationData[index].value}</h4>
                                </li>
                            </ul>}
                            <div className='flex gap-2'>
                                {period(index, personalDetails).map((value, idx) => (
                                    <>
                                        {value.value != '' && <p className='font-bold' key={'date' + idx}>{value.value}</p>}
                                    </>
                                ))}
                            </div>

                        </div>
                        <ul>
                            {description(index, personalDetails).map((value, vIndex) => (
                                <>
                                    {value.value != '' && <li key={'description' + vIndex}>{value.value}</li>}
                                </>
                            ))}
                        </ul>
                    </div>

                ))}
                <hr className='hr  my-4'/>
            </>
        );
    }
    const jobXp = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Job Experience');
        const educationData = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Job"));
        
        return (
            <>
                <h1 className='text-3xl text-center mb-4 font-light'>EXPERIENCE</h1>
                {personalDetails.map((_, index) => (
                    <div className="mb-4">
                        <div className="flex justify-between">
                            <ul>
                                <li>
                                    <h4 key={'position' + index} className='font-bold'>{educationData[index].value}</h4>
                                </li>
                            </ul>
                            <div className='flex gap-2'>
                                {period(index, personalDetails).map((value, idx) => (
                                    <p className='font-bold' key={"date" + idx}>{value.value}</p>
                                ))}
                            </div>

                        </div>
                        {companyName(index, personalDetails).map((value => <p key={'company Name' + index} className="font-light">{value.value}</p>))}
                        <ul>
                            {description(index, personalDetails).map((value) => (
                                <>
                                    {value.value != '' && <li className='list-disc text-justify' key={'description' + index}>{value.value}</li>}
                                </>
                            ))}
                        </ul>
                    </div>

                ))}
                <hr className='hr  my-4'/>
            </>
        );
    }
    const skills = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Skills');

        return (
            <>
                <h1 className='text-3xl text-center mb-4 font-light'>Technical Skills</h1>
                <div className="grid grid-rows-10 grid-flow-col gap">
                    {personalDetails.map((section, index) => (
                        <React.Fragment key={index}>
                            {section.subSection.map((subSection, subIndex) => (
                                <>
                                    {subSection.type === "skill Title" && subSection.value != '' &&
                                        <h4 key={'skill Category' + subIndex} className='font-bold '>{subSection.value}</h4>
                                    }

                                    {subSection.type === "skill" && subSection.value !== '' &&
                                        <li key={'skill' + subIndex} className={'w-fit'}>{subSection.value}</li>
                                    }
                                    {subSection.type === "skill" && subSection.value === '' &&
                                        <p></p>
                                    }
                                </>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
                <hr className='hr  my-4'/>
            </>
        );
    }
    const awards = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Awards');

        return (
            <>
                <h1 className='text-3xl text-center mb-4 font-light'>AWARDS AND ACHIEVEMENTS</h1>

                {personalDetails.map((section, index) => (
                    <div className='inline' key={index}>

                        {section.subSection.map((subSection) => (
                        <>
                        {subSection.type === "Award Title" && <li className='font-bold list-disc'>
                                {subSection.type === "Award Title" && subSection.value != '' &&
                                    <>{subSection.value}: <span className="font-light">{rewardDescription(section)}</span></>}
                            </li>}
                        </>
                        ))}

                    </div>
                ))}
                <hr className='hr  my-4'/>
            </>
        );
    }
    const ref = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'References');

        return (
            <>
                <h1 className='text-3xl text-center mb-4 font-light'>REFERENCE</h1>
                <div className="grid grid-cols-2  gap-y-5">
                    {personalDetails.map((section, index) => (
                        <div key={index}>
                            {section.subSection.map((subSection, subIndex) => (
                                <>
                                    {subSection.value != '' && <ul key={subIndex + index}>
                                        {subSection.type === "Name" &&
                                            <li className='font-bold list-disc underline'>{subSection.value}</li>
                                        }
                                        {subSection.type === "Email" &&
                                            <li>{subSection.value}</li>
                                        }
                                        {subSection.type === "Phone Number" &&
                                            <li>{subSection.value}</li>
                                        }
                                    </ul>}
                                </>
                            ))}
                        </div>
                    ))}
                </div>
            </>
        );
    }


    return <>
        {header()}
        {bio()}
        {education()}
        {jobXp()}
        {skills()}
        {awards()}
        {ref()}
    </>
}

export default Output