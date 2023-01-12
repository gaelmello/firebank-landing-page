import React from 'react'
import {SlMenu} from 'react-icons/sl'
import {TfiClose} from 'react-icons/tfi'

const MobileMenu = (props) => {

    const toggle = props.toggle

    if (toggle) { return <TfiClose/>}

    else{
        return <SlMenu/>
    }

}

export default MobileMenu