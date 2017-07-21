"use strict";
var database = require("@jingli/database");
var DB = from.DB;
"@jingli/database";
var Sequelize = require("sequelize");
function init(dbUrl) {
    database.init(dbUrl);
}
exports.init = init;
function data_store(schema, properties, sql) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!sql) {
            throw new Error("no available sql, grammar not support yet");
        }
        try {
            yield DB.query(sql);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.data_store = data_store;
function data_compare(dbCompare, dbBase, compareSql) {
    return __awaiter(this, void 0, void 0, function* () {
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
        try {
            yield DB.query(compareSql);
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.data_compare = data_compare;
//# sourceMappingURL=index.js.map