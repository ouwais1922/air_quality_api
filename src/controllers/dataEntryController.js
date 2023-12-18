import pool from "../db/index.js"
/**
 * @swagger
 * /dataentry:
 *   get:
 *     summary: Retrieve all data entries
 *     description: Returns a list of all data entries from the data_entry table.
 *     responses:
 *       200:
 *         description: A list of data entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DataEntry'
 *       400:
 *         description: Error occurred
 */
export const getAllDataEntry = async(req,res)=>{
    try{
        const allEntries = await pool.query('SELECT * FROM data_entry');
        res.status(200).json({data: allEntries.rows})

    }catch(err){
        res.status(400).json({message: "Retry again"})
    }

}