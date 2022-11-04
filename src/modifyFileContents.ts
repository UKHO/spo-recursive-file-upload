import {FileDetails} from "./getAllFiles";
import {IFileContentOptions} from "spsave";
import {extname} from "path";

export function modifyFileContents(fileDetails: FileDetails[], destinationPath: string) : IFileContentOptions[] {
    const filesToUpload: IFileContentOptions[] = [];
    fileDetails.forEach((fileDetail) => {
        if (extname(fileDetail.name) != ".md") {
            console.log(`${fileDetail.name} is not a markdown file so skipping`);
            filesToUpload.push({
                fileName: fileDetail.name,
                fileContent: fileDetail.buffer,
                folder: destinationPath
            });
            return;
        }

        const fileAsString = fileDetail.buffer.toString();

        // Modify the file contents here!!!!

        filesToUpload.push({
            fileName: fileDetail.name,
            fileContent: fileAsString,
            folder: destinationPath
        })
    });
    return filesToUpload;
}
