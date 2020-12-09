const router = require('express').Router();
const { catchErrors } = require("../middlewares")

const {
    getFurniture,
    getFurnitures,
    createFurniture,
    updateFurniture,
    deleteFurniture
} = require("../controllers/furniture")

router.get('/', (req, res, next) => {
    res.status(200).json({ msg: 'Working' });
});

//============================FURNITURE===================
router.get("/furnitures/", catchErrors(getFurnitures))
router.get("/furnitures/:furnitureId", catchErrors(getFurniture))
router.post("/furnitures/", catchErrors(createFurniture))
router.put("/furnitures/:furnitureId", catchErrors(updateFurniture))
router.delete("/furnitures/:furnitureId", catchErrors(deleteFurniture))

module.exports = router;