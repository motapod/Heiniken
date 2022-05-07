const express = require('express');
const router = express.Router();
const  pool  =  require('./database');



/* Envio de datos personales del usuario */
router.post("/addUser", async(req,res) =>{
  try {
      pool.query(`insert into user(name, mail, phone) 
      values ($1 , $2, $3) returning id`,
      [req.body.name, req.body.mail, req.body.phone])
      .then(result =>{
          res.status(200).json({
              data: result.rows[0].id
          })
      })
  }catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});



/* get de preguntas con respuestas */
router.get("/getQuestion", async(req,res) => {
  try { 
      console.log("hola");
      pool.query(`select * from question`)
      .then(result => {
        console.log("hola", result.rows);
          res.status(200).json({
              data: result.rows
          })
      }).catch(err => console.log(err))
  } catch (error) {
      console.log(error);
  }
});

/* Envio de respuestas por parte del usuario*/
router.post("/addUser", async(req,res) =>{
  try {
      for(var i= 0;i< req.body.answers ;i++){
        await pool.query(`insert into answers(id_player, id_question, marked, correct) 
        values ($1 , $2, $3, $4, $5)`,[req.body.id, req.body.answers_questions[i].id, req.body.answers_questions[i].marked, req.body.answers_questions[i].correct])
      }
      
      return res.sendStatus(200);
  }catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


/* Exportar csv */

module.exports = router;