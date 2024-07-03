const pool = require("../../database");

class User {
    static async addUser(username, password) {
        const insertSTMT = `INSERT INTO public."user"(username, password) VALUES($1, $2) RETURNING *`;
        const { rows } = await pool.query(insertSTMT, [username, password]);
        return rows[0];
    }

    static async getUsers() {
        const selectSTMT = `SELECT * FROM public."user"`;
        const { rows } = await pool.query(selectSTMT);
        return rows;
    }

    static async getUserById(userId) {
        const selectSTMT = `SELECT * FROM public."user" WHERE user_id = $1`;
        const { rows } = await pool.query(selectSTMT, [userId]);
        return rows[0];
    }

    static async updateUser(userId, username, password) {
        const updateSTMT = `UPDATE public."user" SET username = $1, password = $2 WHERE user_id = $3 RETURNING *`;
        const { rows } = await pool.query(updateSTMT, [username, password, userId]);
        return rows[0];
    }

    static async deleteUser(userId) {
        const deleteSTMT = `DELETE FROM public."user" WHERE user_id = $1 RETURNING *`;
        const { rows } = await pool.query(deleteSTMT, [userId]);
        return rows[0];
    }
}

module.exports = User;
