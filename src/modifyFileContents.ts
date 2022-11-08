import { info } from "@actions/core";
import { FileDetails } from "./getAllFiles";
import { IFileContentOptions } from "spsave";
import { extname } from "path";
import { Config } from "./config";

export function modifyFileContents(fileDetails: FileDetails[], config: Config): IFileContentOptions[] {
    info("modifyFileContents Start")
    const filesToUpload: IFileContentOptions[] = [];
    const absoluteUrl = (config.siteUrl + "/" + config.destinationPath + "/").replaceAll(" ","%20");
    const regexlink = /\]\((\.)?(\/)?(?!http)/ig;
    const regexlinkReplace = "](" + absoluteUrl;
    const regexmd = /\.md\)/ig
    const regexmdReplace = "./md?web=1"
    fileDetails.forEach((fileDetail) => {
        info(fileDetail.name)
        if (extname(fileDetail.name) != ".md") {
            console.log(`${fileDetail.name} is not a markdown file so skipping`);
            info("Adding resources:" + fileDetail.name);
            filesToUpload.push({
                fileName: fileDetail.name,
                fileContent: fileDetail.buffer,
                folder: fileDetail.path
            });
        } else {

            info("processing:" + fileDetail.name);
            let fileAsString = fileDetail.buffer.toString();

            // Modify the file contents here!!!!
            // modify absoulte path to resource images and link
            fileAsString = fileAsString.replaceAll(regexlink, regexlinkReplace);
            
            // Adds ?web=1 to end of .md links
            fileAsString = fileAsString.replaceAll(regexmd, regexmdReplace);

            filesToUpload.push({
                fileName: fileDetail.name,
                fileContent: fileAsString,
                folder: fileDetail.path
            })
        }
    });
    return filesToUpload;
}
