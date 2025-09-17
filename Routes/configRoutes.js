const usersR=require('./userRoutes');
const userstakingOrReturningR=require('./takingOrReturningRoutes');
const gamesListR=require('./gamesListRoutes');
const gamesWithMissingPartsR=require('./gamesWithMissingPartsRoutes');
const finesR=require('./finesRoutes');
const closetsR=require('./closetsRoutes');
const finesForMissingPartsR=require('./finesForMissingPartsRoutes');
const debtsR=require('./debtsRoutes');
const actuliGameR=require('./actuliGameRoutes');
const agesR=require('./agesRoutes');
const gameSkillsR=require('./gameSkillsRoutes');
const gameTypeR=require('./gameTypeRoutes');

exports.routesInit =(app)=>{
    app.use("/userRoutes",usersR);
    app.use("/finesRoutes",finesR);
    app.use("/takingOrReturningRoutes",userstakingOrReturningR);
    app.use("/gamesListRoutes",gamesListR);
    app.use("/gamesWithMissingPartsRoutes",gamesWithMissingPartsR);
    app.use("/closetsRoutes",closetsR);
    app.use("/finesForMissingPartsRoutes",finesForMissingPartsR);
    app.use("/debtsRoutes",debtsR);
    app.use("/actuliGameRoutes",actuliGameR);
    app.use("/agesRoutes",agesR);
    app.use("/gameSkillsRoutes",gameSkillsR);
    app.use("/gameTypeRoutes",gameTypeR);

}
