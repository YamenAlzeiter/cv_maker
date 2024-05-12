import './App.css';

import {AwardsSkelaton, CV, EducationSkelaton, JobExperienceSkelaton, refSkelaton, SkillsSkelaton} from "./CV.tsx";


import {useRef, useState} from "react";
import InputComponent from "./InputComponent.tsx";
import Output from "./Output.tsx";
import {useReactToPrint} from 'react-to-print';
import { IconLetterCase, IconMoon, IconPrinter, IconRefresh, IconSun, IconTrash} from "@tabler/icons-react";
import { OutputS2 } from './OutputS2.tsx';

interface ske {
    type: string;
    isDeletable: boolean;
    isAddable: boolean;
    placeholder: string;
    value: string
}


function App() {
    const [cv, setCV] = useState(CV);
    const [font, setFont] = useState('font-serif');
    const [style, setStyle] = useState('style2');

    const componentRef = useRef(null); 
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const inputHandler = (eValue: string, index: number, subIndex: number) => {
        const newCv = [...cv];
        newCv[index].subSection[subIndex] = {...newCv[index].subSection[subIndex], value: eValue};
        setCV(newCv);
    }
    const deleteSubSectionHandler = (index: number, subIndex: number) => {
        const newCv = [...cv,];
        cv[index].subSection = cv[index].subSection.filter((_, i) => i !== subIndex)
        setCV(newCv);
    }
    const addSubHandler = (index: number, selectedType: string, skeleton: ske) => {
        const lastOccurrence = cv[index].subSection.map((subValue) => subValue.type.lastIndexOf(selectedType)).lastIndexOf(0)
        const newCv = [...cv];
        lastOccurrence != -1 ? newCv[index].subSection.splice(lastOccurrence + 1, 0, skeleton) : newCv[index].subSection.push(skeleton);

        setCV(newCv)

    }
    const sectionDeleteHandler = (index: number) => {
        const newCv = [...cv];
        setCV(newCv.filter((_, i) => i !== index));

    }

    const addSection = (sectionSkelaton: any) => {
        const newSection = structuredClone(sectionSkelaton) 
        setCV([...cv, newSection]);
    }

    const handleFontChange = (newFont: string) => {
        setFont(newFont); 
    };

    const clearAllInputs = () => {
        const resetCv = cv.map(section => ({
            ...section,
            subSection: section.subSection.map(sub => ({...sub, value: ''}))
        }));
        setCV(resetCv);
        setFont('sans-serif');
    };
    const [originalCV] = useState(CV);

    const areAllInputsEmpty = () => {
        return cv.every(section =>
            section.subSection.every(sub => sub.value.trim() === '')
        );
    };

    const reloadDefaultCV = () => {
        setCV(structuredClone(originalCV));
    };
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;


    return (<>
        
        <div className='flex justify-between items-center'>
    
        <div>
        {areAllInputsEmpty() ?
            <button className="btn m-1" onClick={reloadDefaultCV}><IconRefresh/> Load Default</button> :
            <button className="btn text-white btn-error m-1 hover:scale-110" onClick={clearAllInputs}><IconTrash/></button>}

        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1"><IconLetterCase/></div>
            <ul tabIndex={0} className="dropdown-content z-[9999] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <button className='font-serif' onClick={() => handleFontChange('font-serif')}>Serif</button>
                </li>
                <li>
                    <button onClick={() => handleFontChange('font-sans')}>Sans</button>
                </li>
                <li>
                    <button className='font-mono' onClick={() => handleFontChange('font-mono')}>Mono</button>
                </li>
                <li>
                    <button className='font-poppins' onClick={() => handleFontChange('font-poppins')}>Poppins</button>
                </li>
                <li>
                    <button className='font-fira' onClick={() => handleFontChange('font-fira')}>Fira Sans</button>
                </li>
                <li>
                    <button className='font-roboto' onClick={() => handleFontChange('font-roboto')}>roboto</button>
                </li>
                <li>
                    <button className='font-noto' onClick={() => handleFontChange('font-noto')}>noto Sans</button>
                </li>

            </ul>
        </div>
        <button className="btn m-1 hover:scale-110" onClick={handlePrint}><IconPrinter/></button>
        </div>
        <div>
        <label className="flex cursor-pointer gap-2">
            {prefersDarkMode ? <IconSun/> : <IconMoon/>}
            <input type="checkbox" value={prefersDarkMode ? 'dark' : 'light'} className="toggle theme-controller"/>
            {prefersDarkMode ? <IconMoon/> : <IconSun/>}
        </label>
        </div>
        </div>

        <div className="container mx-auto p-4 flex flex-col md:flex-row gap-3.5">
            <div
                className="h-screen overflow-y-scroll md:overflow-y-scroll lg:w-1/3 md:w-full flex-grow-0 ">
                <InputComponent cv={cv}
                                onChange={inputHandler}
                                onDeleteSubSection={deleteSubSectionHandler}
                                onDeleteSection={sectionDeleteHandler}
                                sectionName={'Personal Details'}
                                onAddSubSection={addSubHandler}>
                </InputComponent>
                <InputComponent cv={cv}
                                onChange={inputHandler}
                                onDeleteSubSection={deleteSubSectionHandler}
                                onDeleteSection={sectionDeleteHandler}
                                sectionName={'Bio'}
                                onAddSubSection={addSubHandler}>
                </InputComponent>
                <InputComponent cv={cv}
                                onChange={inputHandler}
                                onDeleteSubSection={deleteSubSectionHandler}
                                onDeleteSection={sectionDeleteHandler}
                                sectionName={'Education'}
                                onAddSubSection={addSubHandler}
                                sectionSkeleton={EducationSkelaton}
                                onAddSection={addSection}>
                </InputComponent>
                <InputComponent cv={cv}
                                onChange={inputHandler}
                                onDeleteSubSection={deleteSubSectionHandler}
                                onDeleteSection={sectionDeleteHandler}
                                sectionName={'Job Experience'}
                                onAddSubSection={addSubHandler}
                                sectionSkeleton={JobExperienceSkelaton}
                                onAddSection={addSection}>

                </InputComponent>
                <InputComponent cv={cv}
                                onChange={inputHandler}
                                onDeleteSubSection={deleteSubSectionHandler}
                                onDeleteSection={sectionDeleteHandler}
                                sectionName={'Skills'}
                                onAddSubSection={addSubHandler}
                                sectionSkeleton={SkillsSkelaton}
                                onAddSection={addSection}>

                </InputComponent>
                <InputComponent cv={cv}
                                onChange={inputHandler}
                                onDeleteSubSection={deleteSubSectionHandler}
                                onDeleteSection={sectionDeleteHandler}
                                sectionName={'Awards'}
                                onAddSubSection={addSubHandler}
                                sectionSkeleton={AwardsSkelaton}
                                onAddSection={addSection}>

                </InputComponent>
                <InputComponent cv={cv}
                                onChange={inputHandler}
                                onDeleteSubSection={deleteSubSectionHandler}
                                onDeleteSection={sectionDeleteHandler}
                                sectionName={'References'}
                                onAddSubSection={addSubHandler}
                                sectionSkeleton={refSkelaton}
                                onAddSection={addSection}>

                </InputComponent>


            </div>
            <div className="a4 shadow border-2 rounded-md ">
                <div className={"px-20 py-10 output-container " + font} ref={componentRef}>
                  {style === 'style1'?   <Output cv={cv}></Output>: <OutputS2 cv={cv}></OutputS2>}
                </div>
            </div>

                <div>
        <button className={'btn mb-3 hover:scale-110' + (style === 'style1' ? ' active' : '')} onClick={() => setStyle('style1')}>Style 1</button>
        <button className={'btn mb-3 hover:scale-110' + (style === 'style2' ? ' active' : '')} onClick={() => setStyle('style2')}>Style 2</button>
    </div> 

        </div>


    </>);
}

export default App;
