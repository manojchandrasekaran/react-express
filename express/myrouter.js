import  express  from "express";
import getBook,{getAuthor,getSearchedBook, getSearchedAuthor} from "./controller.js";
const router = express.Router();

router.route("/allBooks").get(getBook);
router.route("/allAuthors").get(getAuthor);
router.route("/searchedBook/:id").get(getSearchedBook);
router.route("/searchedAuthor/:id").get(getSearchedAuthor);

export default router;