import {info,getInput} from "@actions/core";
import {ICoreOptions, IFileContentOptions, spsave} from "spsave";
import {Config} from "./config"

export async function uploadToSPO(coreOptions : ICoreOptions, config: Config, fileOptions: IFileContentOptions) {

    const username = getInput("username")
    const password = getInput("password")

    const credentials = {
        username: username,
        password: password
    }

    info("Uploading: " + fileOptions.fileName);
    // Upload to SPO
    await spsave(coreOptions, credentials, fileOptions)
        .catch(err => {
            throw new Error(err)
        })
    info("Uploaded: " + fileOptions.fileName);

}


