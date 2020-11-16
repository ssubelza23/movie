const {sequelize,DataTypes}=require('sequelize');
module.exports = (sequelize,DataTypes)=>{
   const sector = sequelize.define('Sector',{
        name:DataTypes.STRING,
        description:DataTypes.STRING
 
    })
    return sector
}