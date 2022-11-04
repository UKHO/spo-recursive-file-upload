import {FileDetails} from "./getAllFiles";
import {IFileContentOptions} from "spsave";
import {extname} from "path";

export function modifyFileContents(fileDetails: FileDetails[], destinationPath: string) : IFileContentOptions[] {
    const modifiedFiles: IFileContentOptions[] = [];
    fileDetails.forEach((fileDetail) => {
        if (extname(fileDetail.name) != ".md") {
            console.log(`${fileDetail.name} is not a markdown file so skipping`);
            return;
        }

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
