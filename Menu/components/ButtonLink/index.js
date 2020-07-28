import React from 'react';


function ButtonLink(props) {
    //props = > {ClassName: "o que alguém passar", href:"/"}
    return(
        <nav href={props.href} className={props.className}>
            Novo Video
        </nav>
    );
}

export default ButtonLink;