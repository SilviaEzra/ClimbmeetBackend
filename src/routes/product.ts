import { Router } from "express";
import { getProducts } from "../controllers/product";
import { getProduct } from "../controllers/product";
import { postProduct } from "../controllers/product";
import { updateProduct } from "../controllers/product";
import { deleteProduct } from "../controllers/product";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;