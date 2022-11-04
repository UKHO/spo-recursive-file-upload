import { info, error } from "@actions/core";
import { readFileSync } from "fs";

import * as recursiveReadDir from "recursive-readdir";

export interface FileDetails {
    name: string,
    buffer: Buffer
}

export async function getAllFiles(sourcePaths: string[]): Promise<FileDetails[]> {
    const fileDetails: FileDetails[] = [];
    for (const sourcePath of sourcePaths) {
        info("Starting: " + sourcePath)
        const files = await recursiveReadDir.default(sourcePath)
        info(files.toString())
        for (const file of files) {
            info("Reading:" + file);
            const buffer = readFileSync(file);

            fileDetails.push({
                name: file,
                buffer: buffer,
            })
        }
    }

    info("Collection of:" + fileDetails.length)
    return fileDetails;
}

