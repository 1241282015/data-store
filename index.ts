let database = require("@jingli/database");
var Sequelize = require("sequelize");

import {DB} from "@jingli/database";


export function init(dbUrl:string){
    database.init(dbUrl);
}

export async function data_store(schema?:any, properties?: any, sql?:any){
    if(!sql){
        throw new Error("no available sql, grammar not support yet");
    }
    try{
        await DB.query(sql);
    }catch(err){
        console.log(err);
    }
}


export async function data_compare(dbCompare?:any, dbBase?:any, compareSql?:any){
    // //方式一：
    // let records: any;
    // try{
    //     records = await DB.query(dbCompare, {type:Sequelize.QueryTypes.SELECT});
    // }catch(err){
    //     console.log(err);
    // }
    //
    // for(let i =0; i < records.length; i++){
    //     let isExisted = await DB.query(dbBase, {type:Sequelize.QueryTypes.SELECT});
    //     if(isExisted && isExisted.length == 0) {
    //         await DB.query(insertNewDb);
    //     }
    // }

    //方式2
    /*
     * compareSql形式为: create table place.cities1 as (select * from place.cities as pc, place.tfcities as pt where pc.name not exists
     */
    try{
        await DB.query(compareSql);
    } catch(err){
        console.log(err)
    }

}