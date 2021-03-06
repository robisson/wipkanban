import actionsType, {
  ADD_BOARD_LOADING,
  ADD_BOARD_LOADED,
  ADD_BOARD_ERROR
} from "./actionsType";
import BoardApi from "../api/BoardApi";
import { Dispatch } from "redux";

export function listAllBoards(idUser: Number): any {
  return (dispatch: Dispatch) => {
    dispatch({ type: actionsType.BOARDS_LOADING });

    return BoardApi.listAllByUser(idUser)
      .then(({ data: { success, boards } }: any) => {
        dispatch({ type: actionsType.BOARDS_LOADED_SUCCESS, success, boards });
      })
      .catch(data => {
        dispatch({ type: actionsType.BOARDS_LOADING_ERROR, data });
      });
  };
}

export function addBoard(name: String): any {
  return (dispatch: Dispatch) => {
    dispatch({ type: ADD_BOARD_LOADING });

    return BoardApi.addBoard(name)
      .then(({ data: { success, board } }) => {
        dispatch({ type: ADD_BOARD_LOADED, success, board });
      })
      .catch(data => {
        dispatch({ type: ADD_BOARD_ERROR, data });
      });
  };
}
