import { getInput } from "@actions/core";
import { spsave } from "spsave";

export function uploadToSPO() {

    const siteUrl = getInput("site_url")
    const username = getInput("username")
    const password = getInput("password")
    const destinationPath = getInput("destination_path")
    const source_path = getInput("source_path").split(";")
    const base = getInput("base")

    const coreOptions = {
        siteUrl: siteUrl
    }

    const credentials = {
        username: username,
        password: password,
        online: true
    }

    const fileOptions = {
        folder: destinationPath,
        glob: source_path,
        base: base
    }

    // Upload to SPO
    spsave(coreOptions, credentials, fileOptions)
        .catch(err => {
            throw new Error(err.message)
        })

}


