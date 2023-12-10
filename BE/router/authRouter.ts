import express, { Router } from "express"
import { FindAllUser, FindOneUser, deleteUser, registerUser, signUserIn, verifyUser } from "../Controller/authController"

const router:Router = express.Router()

router.route("/register").post(registerUser)
router.route("/sign-in").post(signUserIn)
router.route("/:userID/delete").delete(deleteUser)
router.route("/:userID/find-one").get(FindOneUser)
router.route("/find-all").get(FindAllUser)
router.route("/:token/verify").patch(verifyUser)

export default router