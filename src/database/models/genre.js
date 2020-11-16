const {sequelize,DataTypes}=require('sequelize');
const movie = require('./movie');
module.exports = (sequelize,DataTypes)=>{
   const Genre = sequelize.define('Genre',{
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
        name:DataTypes.STRING,
        ranking:DataTypes.INTEGER,
        active:DataTypes.INTEGER,
        
    })
   
       Genre.associate = models=>{
           Genre.hasMany(models.Movie)
       }
    
  
    return Genre
}