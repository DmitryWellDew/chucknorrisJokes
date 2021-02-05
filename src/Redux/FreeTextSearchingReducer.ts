import {r, randomJokesAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_FREE_ENTERED_TEXT = 'SET-FREE-ENTERED-TEXT'

type setFreeEnteredTextActionType = {
    type: 'SET-FREE-ENTERED-TEXT'
    jokesList: Array<r>
}

type actionsType = setFreeEnteredTextActionType


export type initialStateType = {
    jokesList: Array<r>
}

const initialState = {
    jokesList: []
}


export const FreeTextSearchingReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'SET-FREE-ENTERED-TEXT':
            return {
                ...state,
                jokesList:{...state.jokesList, ...action.jokesList}

            }
        default:
            return state
    }
};

export const setFreeEnteredTextAC = (jokesList: Array<r>): setFreeEnteredTextActionType => {
        return {type: SET_FREE_ENTERED_TEXT, jokesList}
}


export const setFreeEnteredTextTC = (text: string) => {
    return (dispatch: Dispatch) => {
        randomJokesAPI.searchFreeText(text)
            .then((res) => {
                dispatch(setFreeEnteredTextAC(res.data))
            })
    }
}