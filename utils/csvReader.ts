import { readFile } from 'fs/promises';
import { join } from 'path';
import {parse} from 'csv-parse/sync';

export interface LoginData {
    username: string;
    password: string;
    expected_result:string;
    description:string;
}

export const readFileFromCsv = async (): Promise<LoginData[]> => {
    //B1: xac1 d9inh duong dan toi file csv
    //../data/login-data.csv 
    //_dirname: xac dinh path cua file hien tai (csvreader.ts)
    const csvPath = join(__dirname, '..', 'data', 'login-data.csv')
    //B2: doc file 
    const fileContent = await readFile(csvPath)
    //B3: parse data string => list Logindata 
    const data = parse(fileContent,{
        columns:true,// lay dong dau lam hreser, lam key
        skip_empty_lines:true,// bo nhung line data bi trong
        trim:true,// bo khoang trong thua        
    }) as LoginData[];

    return data
}
