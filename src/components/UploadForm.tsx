import React, {useCallback} from 'react';
import { useDropzone } from 'react-dropzone';

const UploadForm = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles);
        alert('File Uploaded');
      }, [])
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className="min-h-screen flex items-center justify-center sm:px-6 lg:px-8 bg-no-repeat bg-cover items-center">
            {/* <div className="absolute bg-black opacity-60 inset-0 z-0"></div> */}
            <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl">
                <form className="mt-8 space-y-3" action="#" method="POST">
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">E-Mail-Adresse</label>
                        <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="mail@gmail.com" />
                    </div>
                    <div className="grid grid-cols-1 space-y-2">
                        <label className="text-sm font-bold text-gray-500 tracking-wide">Dokument anhängen</label>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                    <div className="h-full w-full text-center flex flex-col items-center justify-center items-center">
                                        {/* <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                            <img className="has-mask max-h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image" />
                                        </div> */}
                                        {
                                            isDragActive ? (
                                                <p className="pointer-none text-gray-500 ">Hierher ziehen und ablegen...</p>
                                            ) : (
                                                <p className="pointer-none text-gray-500 ">Ziehen Sie Dateien hierher und legen Sie sie dort ab oder wählen Sie eine Datei von Ihrem Computer aus.</p>
                                            )
                                        }
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">
                        <span>File type: doc,pdf,types of images</span>
                    </p>
                    <div>
                        <button type="submit" className="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                            Hochladen
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UploadForm;