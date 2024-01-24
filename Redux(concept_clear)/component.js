import { actions } from "./redux";

document.getElementById("increment").click(actions.increment())
document.getElementById("decrement").click(actions.decrement())