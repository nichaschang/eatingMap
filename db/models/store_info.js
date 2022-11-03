
let {link_db} = require( __dirname + "../../common/db_server");
var url = require("url");
var querystring = require("querystring");
const express = require('express');
const router = express.Router();
router.use(express.json())
router.use(express.urlencoded({ extended: true })) 


//獲取
router.get('/get_info', (req, res)=>
{    
    let req_station = req.query.station.split("-")[0];
    let req_station_number = req.query.station.split("-")[1];

    let val = async ()=>
    {
        const dataa = await link_db.conn()
        const tb = await link_db.link_table('store_info').find({station:String(req_station),station_number:Number(req_station_number)}).toArray();
        await res.status(200).json([{data:tb}]).end();
    };

    val();

})


//新增
router.post('/add_store', (req, res)=>
{
    let add_obj = {
        name:req.body.store_name,
        station:req.body.station_name.split('-')[0],
        station_number:Number(req.body.station_name.split('-')[1])
    }

    let val = async ()=>
    {
        try
        {
            const dataa = await link_db.conn()
            const tb = await link_db.link_table('store_info').insert(add_obj);

            await res.redirect(env.TO_GO_URL);
        }
        catch(r){
            await res.redirect(`${env.TO_GO_URL}?state=fail`);
        }
    };

    val();

})

module.exports = router;