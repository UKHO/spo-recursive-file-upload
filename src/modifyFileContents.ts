import {FileDetails} from "./getAllFiles";
import {IFileContentOptions} from "spsave";

export function modifyFileContents(fileDetails: FileDetails[], destinationPath: string) : IFileContentOptions[] {
    const modifiedFiles: IFileContentOptions[] = [];
    fileDetails.forEach((fileDetail) => {
        const fileAsString = fileDetail.buffer.toString();

        // Modify the file contents here!!!!

        modifiedFiles.push({
            fileName: fileDetail.name,
            fileContent: fileAsString,
            folder: destinationPath
        })
    });
    return modifiedFiles;
}
