import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: '10.121.23.200',
    database: 'newdb',
    password: 'postgres',
    port: 5432,
});

export default pool;
