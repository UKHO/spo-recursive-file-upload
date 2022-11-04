import { info, error } from "@actions/core";
import { readFileSync } from "fs";

import * as recursiveReadDir from "recursive-readdir";
import {Config} from "./config";
import {basename, relative, dirname} from "path";

export interface FileDetails {
    path: string,
    name: string,
    buffer: Buffer
}

export async function getAllFiles(config: Config): Promise<FileDetails[]> {
    const fileDetails: FileDetails[] = [];
    for (const sourcePath of config.source_path) {
        info("Starting: " + sourcePath)
        const files = await recursiveReadDir.default(sourcePath)
        info(files.toString())
        for (const file of files) {
            info("Reading:" + file);
            const buffer = readFileSync(file);

            fileDetails.push({
                name: basename(file),
                path: getFolderToUpload(sourcePath,config.destinationPath,file),
                buffer: buffer,
            })
        }
    }

    info("Collection of:" + fileDetails.length)
    return fileDetails;
}

function getFolderToUpload(sourcePath: string, destinationFolder: string, filePath: string): string {
    const relativePath = relative(sourcePath, dirname(filePath));
    return destinationFolder + "/" + relativePath
}

