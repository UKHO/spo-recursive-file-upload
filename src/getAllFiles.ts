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
            const filePath = sourcePath + "/" + file
            const buffer = readFileSync(filePath);

            fileDetails.push({
                name: filePath,
                buffer: buffer,
            })
        })
    })
    return fileDetails;
}

