import {legacy_createStore} from "redux"
import { reduce } from "./Reduce"

export let store=legacy_createStore(reduce)