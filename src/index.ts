import { setFailed } from "@actions/core";
import { uploadToSPO } from "./uploadToSPO";
import { getConfig } from "./config";
import { getAllFiles } from "./getAllFiles";
import { modifyFileContents } from "./modifyFileContents";

async function run(): Promise<void> {
    try {

        const config = getConfig();

        const fileDetails = await getAllFiles(config);

        const modifiedFiles = modifyFileContents(fileDetails, config);

        for(const modifiedFile of modifiedFiles) {
            await uploadToSPO(config,modifiedFile);
        }

    } catch (error) {
        if (error instanceof Error) {
            setFailed(error.message)
        }
    }

}

run();
