import {useHistory} from "react-router-dom";

export function ClickRoute(){
    let history = useHistory();

    const toFinal = () =>{
        history.push('/final');
    }

    const toSelect = () =>{
        history.push('/selection');
    }
}

/*
What I wanted for this page was to be able to export each onClick Route
So I could import it to the files I need it for instead of just using them everywhere and having to put all that code in each time.
Might not even use history.push since it isn't a link and doesn't allow me to open in a new window...
*/ 

// export const goHome = () =>{
//     history.push('/');
// }

// export const toFinal = () =>{
//   }

// export const toSelect = () =>{
    
//   }