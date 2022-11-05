import { getInput } from "@actions/core";
import {ICoreOptions, IFileContentOptions, spsave} from "spsave";
import {IUserCredentials} from "node-sp-auth/lib/src/auth/IAuthOptions";
import {Config} from "./config";

export async function uploadToSPO(config: Config, fileContentOptions: IFileContentOptions) {

    const coreOptions: ICoreOptions = {
        siteUrl: config.siteUrl
    }

    const credentials: IUserCredentials = {
        username: config.username,
        password: config.password,
        online: true
    }

    // Upload to SPO
    await spsave(coreOptions, credentials, fileContentOptions)
        .catch(err => {
            throw new Error(err.message)
        })

}


