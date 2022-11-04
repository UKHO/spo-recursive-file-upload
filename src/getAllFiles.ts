import {readdirSync, readFileSync}  from "fs";
import {extname} from "path";

export interface FileDetails {
    name: string,
    buffer: Buffer
}

export function getAllFiles(sourcePaths: string[]) : FileDetails[] {
    const fileDetails: FileDetails[] = [];
    sourcePaths.forEach((sourcePath) => {
        const files = readdirSync(sourcePath)

        files.forEach((file) => {

            const buffer = readFileSync(file);


            fileDetails.push({
                name: file,
                buffer: buffer,
            })
        })
    })
    return fileDetails;
}

