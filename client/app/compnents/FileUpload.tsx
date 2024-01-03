import React, { useRef } from 'react' 

interface FileAuploadProps {
    file: any;
    setFile: Function,
    accept: string;
    children: any;
}

const FileUpload: React.FC<FileAuploadProps> = ({file, setFile, accept, children}) => {

  const ref = useRef<HTMLInputElement>(null) 

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
  }

  return (
    <div onClick={() => ref.current?.click()}>
        <input type="file"
        accept={accept}
        style={{display: 'none'}}
        ref={ref}
        onChange={onChange}
        />
      {children}
    </div>
  )
}

export default FileUpload
