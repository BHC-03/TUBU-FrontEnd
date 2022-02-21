import { atom,selector } from "recoil";

export const playListsAtom=atom({
    key:'playListsAtom'
    ,default:[]
})
export const currentListAtom=atom({
    key:'currentListAtom',
    default:{}
})
export const isSyncedSelector=selector({
    key:'isSyncedSelector',
    get:({get})=>{
        const current = get(currentListAtom);
        return current.is_synced
    }
})
export const videoActiveAtom = atom({
    key:'videoActiveAtom',
    default:false
})

