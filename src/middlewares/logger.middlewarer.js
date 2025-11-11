import {v4 as uuid4} from "uuid"
import { format } from "date-fns"
import path from "path"
import fs from "fs"
import fsPromises from "fs/promises"
import { fileURLToPath } from "url"

const __filename= fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const logEvents = async (message, logFileName)=> {
    const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;

    const finallog = `${dateTime}\t${uuid4()}\t${message}\n`

    try{
        const logsDir = path.join(__dirname, "..", "logs");
        
        if(!fs.existsSync(logsDir)){
            await fsPromises.mkdir(logsDir)
        }

        await fsPromises.appendFile(path.join(logsDir, logFileName), finallog)
    }catch(err){
        console.log("Erro na função logEvents", err); 
    }
};

export const logger = (req, res, next)=>{
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "req.log")
    next();
}