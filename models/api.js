const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');
const md5 = require('md5');

const pool = mysql.createPool({
    host: dbConfig.mysql.host,
    user: dbConfig.mysql.user,
    password: dbConfig.mysql.password,
    database: dbConfig.mysql.database,
    port: dbConfig.mysql.port,
    multipleStatements: true    // 多语句查询
});


module.exports = {
    getValue(req, res) {
        var tel = req.body.tel;
        pool.getConnection((err, connection) => {
            var sql = sqlMap.getValue;
            connection.query(sql, [tel], (err, result) => {
                if (err) {
                    return res.status(500).json({
                        err_code: 500,
                        message: 'Internal error'
                    });
                }
                if (result[0]) {
                    return res.status(200).json({
                        err_code: 1,
                        message: 'Telephone number is exists.'
                    });
                }
                connection.release();
            })
        })
    },
    setValue(req, res) {
        req.body.password = md5(md5(req.body.password + 'milla'));
        var addSqlParams = [req.body.tel, req.body.qq, req.body.name, req.body.password];
        pool.getConnection((err, connection) => {
            var sql = sqlMap.setValue;
            connection.query(sql, addSqlParams, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        err_code: 500,
                        message: 'Internal error'
                    });
                }
                res.status(200).json({
                    err_code: 0,
                    message: 'OK'
                });
                connection.release();
            })
        })
    },
    searchValue(req, res) {
        req.body.password = md5(md5(req.body.password + 'milla'));
        pool.getConnection((err, connection) => {
            var sql = sqlMap.searchValue;
            connection.query(sql, [req.body.user, req.body.password], (err, result) => {
                if (err) {
                    return res.status(500).json({
                        err_code: 500,
                        message: 'Internal error.'
                    });
                }
                if (result[0]) {
                    req.session.user = result[0];
                    return res.status(200).json({
                        err_code: 0,
                        message: 'OK.'
                    });
                } else {
                    res.status(200).json({
                        err_code: 1,
                        message: 'Telephone number or password is invalid.'
                    });
                }
                connection.release();
            })
        })
    }
};
