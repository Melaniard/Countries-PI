const { Router } = require('express');
const { Country, Activity } = require("../db");
const router = Router();

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body

    const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
    });

    console.log(countries)
    countries.map(
        async (c) => await newActivity.setCountries(await Country.findByPk(c))
    )
    res.json(newActivity)   
});

module.exports = router;

/* 
router.get('/activity', async (req, res) => {
    const activity = await Activity.findAll({
        attributes: [
            "name",
            "id"
        ],
        exclude: ['createdAt', 'updatedAt'
        ]
    });
    if (activity.length !== 0) {
        res.json(activity);
    } else {
        res.json([
            {
                name: "No hay actividades guardadas"
            }
        ]);
        //res.sendStatus(200);
    }
});
*/
//////////// P o s t ////////////
/*
try {
        const { name, difficulty, duration, season, countries } = req.body;

        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        });

        await newActivity.addCountry(countries) //countries es el id del pais

        res.send("Se añadió actividad turistica con exito")

    } catch (error) {

        console.log(`Se produjo el siguiente error ${error}`)
    }
*/