import { MobXProviderContext } from 'mobx-react'
import React from "react";
import { storeContext } from '../stores/context';

export default function useStores() {
    
    return React.useContext(storeContext)

}