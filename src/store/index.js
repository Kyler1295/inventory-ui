import { combineReducers } from "redux";
import inventoryReducer from "./inventory/inventory.reducer";
import itemReducer from "./item/item.reducer";
import hotbarReducer from "./hotbar/hotbar.reducer";

export default combineReducers({
    inventory: inventoryReducer,
    item: itemReducer,
    hotbar: hotbarReducer,
});
