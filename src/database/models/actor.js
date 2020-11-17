const {sequelize,DataTypes}=require('sequelize');
//const movie = require('./movie');
module.exports = (sequelize,DataTypes)=>{
   const Actor = sequelize.define('Actor',{
        created_at:DataTypes.DATE,
        updated_at:DataTypes.DATE,
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        rating:DataTypes.DECIMAL,
        favorite_movie_id:DataTypes.INTEGER
        
    });
   Actor.associate = models=>{
       Actor.belongsToMany(models.Movie,{
         through:'actor_movie',
         as:'actores'

       })
   }
      
    
  
    return Actor
}