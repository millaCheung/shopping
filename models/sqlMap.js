var sqlMap = {
    getValue: 'SELECT tel FROM userinfo WHERE tel = ?',
    setValue: 'INSERT INTO userinfo (tel,qq,name,password) VALUES (?,?,?,?)',
    searchValue: 'SELECT * FROM userinfo WHERE tel = ? and password = ?'
};

module.exports = sqlMap;