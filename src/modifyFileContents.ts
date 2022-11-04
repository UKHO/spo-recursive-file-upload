import { FileDetails } from "./getAllFiles";
import { IFileContentOptions } from "spsave";
import { extname } from "path";
import {Config} from "./config";

export function modifyFileContents(fileDetails: FileDetails[], config: Config): IFileContentOptions[] {
    const filesToUpload: IFileContentOptions[] = [];
    const absoluteUrl = config.siteUrl + "/" + config.destinationPath + "/"
    fileDetails.forEach((fileDetail) => {
        if (extname(fileDetail.name) != ".md") {
            console.log(`${fileDetail.name} is not a markdown file so skipping`);
            filesToUpload.push({
                fileName: fileDetail.name,
                fileContent: fileDetail.buffer,
                folder: config.destinationPath
            });
        } else {

            let fileAsString = fileDetail.buffer.toString();

            // Modify the file contents here!!!!
            // modify absoulte path to resource images and link
            fileAsString = fileAsString.replaceAll("\]\((?!http)","](" + absoluteUrl)

            filesToUpload.push({
                fileName: fileDetail.name,
                fileContent: fileAsString,
                folder: config.destinationPath
            })
        }
    });
    return filesToUpload;
}
