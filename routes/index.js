const router = require('express').Router();
const { catchErrors } = require("../middlewares")

const {
    getFurniture,
    getFurnitures,
    createFurniture,
    updateFurniture,
    deleteFurniture
} = require("../controllers/furniture")

const {
    getPackage,
    getPackages,
    createPackage,
    updatePackage,
    deletePackage
} = require("../controllers/package")

router.get('/', (req, res, next) => {
    res.status(200).json({ msg: 'Working' });
});

//============================FURNITURE===================
router.get("/furnitures/", catchErrors(getFurnitures))
router.get("/furnitures/:furnitureId", catchErrors(getFurniture))
router.post("/furnitures/", catchErrors(createFurniture))
router.put("/furnitures/:furnitureId", catchErrors(updateFurniture))
router.delete("/furnitures/:furnitureId", catchErrors(deleteFurniture))

//============================PACKAGE===================
router.get("/packages/", catchErrors(getPackages))
router.get("/packages/:packageId", catchErrors(getPackage))
router.post("/packages/", catchErrors(createPackage))
router.put("/packages/:packageId", catchErrors(updatePackage))
router.delete("/packages/:packageId", catchErrors(deletePackage))

module.exports = router;