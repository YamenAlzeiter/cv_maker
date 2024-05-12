import React from 'react'
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

export const OutputS2 = ({cv}: Props) => {
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
            <p key={index}>{subTitle.value} {lastSubTitle != index && <span>|</span>}</p>
        ));
    }
    const emailOutput = (emails: subSectionFields[]) => {
        if (!emails || emails.length === 0) {
            return null; // or some default message or loading indicator
        }
        return emails.map(email => <a className='underline' href={`mailto:${email.value}`}>{email.value}</a>);
    }
    
    const languageOutput = (language: subSectionFields[]) => {
        const lastLanguage = language.map((sectionValue) => sectionValue.type.lastIndexOf('Language')).lastIndexOf(0);
        if (!language || language.length === 0) {
            return null; // or some default message or loading indicator
        }
        return language.map((language, index) => (
            <React.Fragment key={index}>{language.value} {lastLanguage != index && <span>, </span>}</React.Fragment>
        ));
    }
    const rewardDescription = (section: sectionFields) =>{
    
        return section.subSection.flatMap(sectionValue => sectionValue.type ===  "Award Description"? sectionValue.value: '');
    }
    const companyName = (index: number, description: sectionFields[]) => {
        return description[index]?.subSection.filter((subSectionValue) => subSectionValue.type === "Company Name") || [];
    }

    const header = () => {

        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Personal Details');

        const title = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Title"));
        const subTitle = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "subTitle"));
        const email = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Email"));
        
        return (
            <>
                <div className='flex flex-col items-center gap-1 text-wrap'>
                    <h1 className='capitalize text-5xl'>{titleOutput(title)}</h1>
                    <div className='flex flex-row items-center gap-1'>
                        {emailOutput(email)} | {subTitleOutput(subTitle)}
                    </div>
                </div>
                
            </>

        );
    }
    const bio = () => { 
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Bio');
        const bio = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Description"));

        return (
            <>
            <h1 className='mt-3 font-bold'>BIO</h1>
                {bio.map((item, index) => (
                    <>
                    {item.value.length > 0 && <hr className='hr  mb-4'/>}
                        <p key={index} className='text-justify'>{item.value}</p>
                        
                    </>
                ))}

            </>
        );
    }
    const period = (index: number, periods: sectionFields[]) => {
        return periods[index]?.subSection.filter((subSectionValue) => subSectionValue.type === "Period") || [];
    }
    const description = (index: number, description: sectionFields[]) => {
        return description[index]?.subSection.filter((subSectionValue) => subSectionValue.type === "Description") || [];
    }

    const education = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Education');
        const educationData = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Education"));

        return (
            <>
                <h1 className='font-bold mt-3'>EDUCATION</h1>
                <hr className='hr  mb-4'/>
                {personalDetails.map((_, index) => (
                    <div>
                        <div key={index} className="flex justify-between">
                            {educationData[index].value != '' && <ul>
                                <li className='list-disc'>
                                    <h4 className='font-bold'>{educationData[index].value}</h4>
                                </li>
                            </ul>}
                            <div className='flex gap-2'>
                                {period(index, personalDetails).map((value, idx) => (
                                    <>
                                        {value.value != '' && <p className='font-bold' key={idx}>{value.value}</p>}
                                    </>
                                ))}
                            </div>

                        </div>
                        <ul>
                            {description(index, personalDetails).map((value) => (
                                <>
                                    {value.value != '' && <li>{value.value}</li>}
                                </>
                            ))}
                        </ul>
                    </div>

                ))}
              
            </>
        );
    }
    const jobXp = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Job Experience');
        const educationData = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Job"));

        return (
            <>
                <h1 className='mt-3 font-bold'>EXPERIENCE</h1>
                <hr className='hr  mb-4'/>
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
                   {companyName(index, personalDetails).map((value => <p key={'company Name' + index} className="font-light ">{value.value}</p>))}
                   <ul>
                       {description(index, personalDetails).map((value) => (
                           <>
                               {value.value != '' && <li className='list-disc text-justify ' key={'description' + index}>{value.value}</li>}
                           </>
                       ))}
                   </ul>
               </div>

                ))}
             
            </>
        );
    }
    const skills = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Skills');

        return (
            <>
                <h1 className='mt-4 font-bold'>Technical Skills</h1>
                <hr className='hr  mb-4'/>
                
                    {personalDetails.map((section, index) => (
                        <p key={index}>
                            {section.subSection.map((subSection, subIndex) => (
                                <React.Fragment key={subIndex + index}>
                                    {subSection.type === "skill Title" && subSection.value != '' &&
                                        <span className='font-bold '>{subSection.value}: </span>
                                    }
                                    
                                    {subSection.type === "skill" && subSection.value !== '' &&
                                        subSection.value + ', '
                                    }
                                    
                                    {subSection.type === "skill" && subSection.value === '' &&
                                        ''
                                    }
                                </React.Fragment>
                            ))}
                        </p>
                    ))}
                
              
            </>
        );
    }
    const awards = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Awards');

        return (
            <>
                <h1 className=' mt-3 font-light'>AWARDS AND ACHIEVEMENTS</h1>
                <hr className='hr  mb-4'/>
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
            </>
        );
    }
    const language = () =>{
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'Personal Details');
        const language = personalDetails.flatMap(sectionValue => sectionValue.subSection.filter((subSectionValue) => subSectionValue.type === "Language"));
        return (
            <div>
                <h1 className='font-bold mt-3'>Language</h1>
                <hr className='mb-4 hr' />
            {languageOutput(language)}
                </div>
        );
      
        

    }
    const ref = () => {
        const personalDetails = cv.filter((sectionValue) => sectionValue.section === 'References');

        return (
            <>
                <h1 className='mt-3 font-bold'>REFERENCE</h1>
                <hr className='hr  mb-4'/>
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
        {language()}
        {ref()}
    </>
}