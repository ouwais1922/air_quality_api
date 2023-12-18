import pool from "./index.js";

export const checkDbConnection = async () => {
    try {
        const response = await pool.query('SELECT NOW()');
        console.log('Database connection established at:', response.rows[0].now);
        return true;
    } catch (err) {
        console.error('Database connection error:', err.message);
        return false;
    }
};