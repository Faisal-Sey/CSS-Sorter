import { Input, Select } from 'antd';

export default function InputArea({content}) {
    
    const { TextArea } = Input;

    const { Option } = Select;

    return (
        <>
            <TextArea 
                rows={30} 
                cols={100}
                value={content}
                disabled
            />
        </>
    )
}