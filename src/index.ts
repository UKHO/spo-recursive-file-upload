import {setFailed} from "@actions/core";
import {uploadToSPO} from "./uploadToSPO";
import {getConfig} from "./config";
import {getAllFiles} from "./getAllFiles";
import {modifyFileContents} from "./modifyFileContents";

async function run(): Promise<void> {
    try {

        const config = getConfig();

        const fileDetails = getAllFiles(config.source_path);

        const modifiedFiles = modifyFileContents(fileDetails, config.destinationPath);

        // Define SPSave Configuration
        const coreOptions = {
            siteUrl: config.siteUrl
        }

        const credentials = {
            username: config.username,
            password: config.password
        }

        modifiedFiles.forEach((modifiedFile) => {
            uploadToSPO(coreOptions,credentials,modifiedFile);
        })

    } catch (error) {
        if (error instanceof Error) {
            setFailed(error.message)
        }
    }

}

run();
