import {info} from "@actions/core";
import {ICoreOptions, IFileContentOptions, spsave} from "spsave";
import {IUserCredentials} from "node-sp-auth/lib/src/auth/IAuthOptions";
import {FileOptions} from "spsave/lib/src/core/SPSaveOptions";

export function uploadToSPO(coreOptions : ICoreOptions, credentials: IUserCredentials, fileOptions: IFileContentOptions) {

    info(fileOptions.fileName);
    // Upload to SPO
    spsave(coreOptions, credentials, fileOptions)
        .catch(err => {
            throw new Error(err)
        })
}


