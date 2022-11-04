import {readFileSync}  from "fs";

import * as recursiveReadDir from "recursive-readdir";

export interface FileDetails {
    name: string,
    buffer: Buffer
}

export function getAllFiles(sourcePaths: string[]) : FileDetails[] {
    const fileDetails: FileDetails[] = [];
    sourcePaths.forEach((sourcePath) => {
        recursiveReadDir.default(sourcePath, (err,files) => {
            files.forEach((file) => {
                const buffer = readFileSync(file);
    
                fileDetails.push({
                    name: file,
                    buffer: buffer,
                })
            })
        })

    })
    return fileDetails;
}

