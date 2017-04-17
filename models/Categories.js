var db=require('../dbconnection');

var Categories={

    getBaseCategories:function(){
        return db.then(function(conn) {
            return conn.query("select * from categories where parent_category_id is null");
        });
    },

    getCategoryById:function(id){
        return db.then(function(conn) {
            return conn.query("select * from categories where category_id=?",[id]);
        });
    },

    getCategoriesByParentId:function(id) {
        return db.then(function(conn) {
            return conn.query("select * from categories where parent_category_id=?",[id]);
        });
    },

    addCategory:function(Category){
        return db.then(function(conn) {
            return conn.query("insert into categories values (?,?,?)",[Category.Name,Category.CategoryLevelId,Category.ParentCategoryId]);
        });
    },

    deleteCategory:function(id){
        return db.then(function(conn) {
            return conn.query("delete from categories where zoo_id=?",[id]);
        });
    },

    updateCategory:function(id,Category){
        return db.then(function(conn) {
            return conn.query("update categories set name=?, category_level_id=?, parent_category_id=? where category_id=?",[Category.Name,Category.CategoryLevelId,Category.ParentCategoryId,id]);
        });
    }

};
module.exports=Categories;