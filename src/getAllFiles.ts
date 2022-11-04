import { info,error } from "@actions/core";
import { readFileSync } from "fs";

import * as recursiveReadDir from "recursive-readdir";

export interface FileDetails {
    name: string,
    buffer: Buffer
}

export function getAllFiles(sourcePaths: string[]): FileDetails[] {
    const fileDetails: FileDetails[] = [];
    sourcePaths.forEach((sourcePath) => {
        info("Starting: " + sourcePath)
        recursiveReadDir.default(sourcePath, (err, files) => {
            if(err) {
                error(err);
                throw err;
            }

            info(files.toString())
            files.forEach((file) => {
                info("Reading:" + file);
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

