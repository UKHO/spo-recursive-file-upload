import {getInput} from "@actions/core";

export interface config {
    siteUrl: string,
    username: string,
    password: string,
    destinationPath: string,
    source_path: string[],
    base: string
}

export function getConfig() : config {
    // Get action inputs.
    const siteUrl = getInput("site_url")
    const username = getInput("username")
    const password = getInput("password")
    const destinationPath = getInput("destination_path")
    const source_path = getInput("source_path").split(";")
    const base = getInput("base")

    return {
        siteUrl,
        username,
        password,
        destinationPath,
        source_path,
        base
    }
}
