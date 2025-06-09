import { Config } from ".."
import { App } from "./app"

export const start = async (config:Config)=>{
    try {
        new App({
            port: config.port
        }).getApp()
    } catch (error) {
        console.error('Failed to start app:', error);
        throw error; // Re-throw to allow calling code to handle it if needed
    }
}