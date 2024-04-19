import { Module } from "../models/modules.model"

export const localhostModulesToModel = localhostModule => {

    const {
        text,
        tag,
        submodule,
    } = localhostModule;

    return new Module({
        text,
        tag,
        submodule,
    });

}