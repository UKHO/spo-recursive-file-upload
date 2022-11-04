import {info} from "@actions/core";
import {ICoreOptions, IFileContentOptions, spsave} from "spsave";
import {Config} from "./config"

export function uploadToSPO(coreOptions : ICoreOptions, config: Config, fileOptions: IFileContentOptions) {

    const credentials = {
        username: config.username,
        password: config.password
    }

    info("Uploading: " + fileOptions.fileName);
    // Upload to SPO
    spsave(coreOptions, credentials, fileOptions)
        .catch(err => {
            throw new Error(err)
        })
    info("Uploaded: " + fileOptions.fileName);

}


