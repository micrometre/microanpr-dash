import React from 'react'


export default function ExportImgaesDb() {
    return (
        <div>
            <div className="mb-4">

                <div className="flex h-auto">
                    <div className="mt-4 flex items-center rtl:mr-0 flex-col mr-4 rtl:ml-4">
                        <div className="flex justify-center items-center">
                            <a href="http://192.168.1.122:5000/upload_images/download">
                            {/*<a href="http://192.168.1.197:5000/upload_images/download">*/} 

                            <button
                                className="roup inline-flex items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#fa5a15] px-4 py-3 text-sm font-bold text-neutral-50 outline-none ring-zinc-500 transition duration-300 hover:bg-[#e14d0b] focus-visible:ring active:bg-[#e14d0b] disabled:pointer-events-none disabled:opacity-50 dark:ring-zinc-200 dark:focus:outline-none 2xl:text-base"
                                type="submit"
                            >
                                Download CSV file
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
