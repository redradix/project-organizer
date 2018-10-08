import addEventSaga from "./addEventSaga";

export default function* rootSaga() {
  yield [addEventSaga()];
}
