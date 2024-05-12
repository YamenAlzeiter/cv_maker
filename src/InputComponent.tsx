import {IconPlus, IconX} from "@tabler/icons-react";
import {Fragment} from "react";

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
    sectionName: string;
    cv: sectionFields[];
    onChange: (eValue: string, index: number, subIndex: number) => void;
    onDeleteSubSection?: (index: number, subIndex: number) => void;
    onAddSubSection?: (index: number, selectedType: string, skeleton: subSectionFields) => void;
    onDeleteSection?: (index: number) => void;
    onAddSection?: (sectionSkeleton: any) => void;
    sectionSkeleton?: any;
}


function InputComponent({
                            sectionName,
                            cv,
                            onChange,
                            onDeleteSubSection,
                            onAddSubSection,
                            onDeleteSection, onAddSection,
                            sectionSkeleton
                        }: Props) {

    const inputHandler = (eValue: string, sectionIndex: number, subIndex: number) => {
        onChange(eValue, sectionIndex, subIndex);
    }
    const DeleteSubHandler = (index: number, subIndex: number) => {
        if (onDeleteSubSection) {
            console.log(subIndex)
            onDeleteSubSection(index, subIndex);
        }
    }
    const DeleteSectionHandler = (index: number) => {
        if (onDeleteSection) {
            onDeleteSection(index);
        }
    }
    const addSectionHandler = (sectionSkeleton: any) => {
        if (onAddSection) {
            onAddSection(sectionSkeleton);
        }
    }
    const addSubSection = (index: number, selectedType: string) => {
        const newSubSections = {
            type: selectedType,
            isDeletable: true,
            isAddable: true,
            placeholder: selectedType,
            value: ''
        };
        if (onAddSubSection) {
            onAddSubSection(index, selectedType, newSubSections)
        }
    }
    const lastOccuranceAddSubSection = (sectionNumber: number) => {
        return cv[sectionNumber].subSection.map(subValue => subValue.isAddable.valueOf()).lastIndexOf(true);

    }
    const inputter = (subValue: subSectionFields, index: number, subIndex: number) => {
        if (subValue.type !== 'Description') {
            return <input className='input input-bordered w-full my-1'
                          placeholder={subValue.placeholder}
                          value={subValue.value}
                          type= "text"
                          onChange={(e) => inputHandler(e.target.value, index, subIndex)}/>
        } else if (subValue.type === 'Description') {
            const numLines = subValue.value.split('\n').length; // Count the number of lines
            return (
                <textarea
                    className='textarea textarea-bordered w-full my-1'
                    placeholder={subValue.placeholder}
                    value={subValue.value}
                    rows={numLines} // Set the number of rows dynamically
                    onChange={(e) => inputHandler(e.target.value, index, subIndex)}
                ></textarea>
            );
        }
    }
    return <>
        <div className="collapse w-full md:w-full shadow bg-base-200 collapse-arrow mb-4">
            <input type="checkbox"/>
            <div className="collapse-title text-2xl font-bold">
                {sectionName}
            </div>
            <div className="collapse-content">
                {cv.map((sectionValue, index) => sectionValue.section == sectionName &&
                    <div className='flex flex-col mb-2' key={index}>
                        {sectionValue.subSection.map((subValue, subIndex) => {
                            return <Fragment key={index + subIndex}>
                                <div className="flex items-center gap-1">
                                    {inputter(subValue, index, subIndex)}
                                    {subValue.isDeletable &&
                                        <button className='btn btn-error text-white'
                                                onClick={() => DeleteSubHandler(index, subIndex)}><IconX/>
                                        </button>

                                    }

                                </div>
                                {lastOccuranceAddSubSection(index) == subIndex &&
                                    <button className='btn w-full btn-outline text-2xl mt-2 mb-1'
                                            onClick={() => addSubSection(index, subValue.type)}>
                                        <IconPlus/> Add {subValue.type}</button>}

                            </Fragment>

                        })}
                        {sectionValue.isDeletable &&
                            <button className='btn btn-error text-white text-2xl mt-2 mb-1'
                                    onClick={() => DeleteSectionHandler(index)}><IconX/> Delete {sectionValue.section}
                            </button>}
                        {cv.map(value => value.section.lastIndexOf(sectionName)).lastIndexOf(0) == index && sectionValue.canAddSection &&
                            <button className='btn  btn-primary text-white mb-1 text-2xl'
                                    onClick={() => addSectionHandler(sectionSkeleton)}>
                                <IconPlus/> Add {sectionValue.section}
                            </button>}
                    </div>
                )}
            </div>
        </div>
    </>
}

export default InputComponent;