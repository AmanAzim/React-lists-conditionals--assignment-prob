import React from 'react'

const ValidationComponent=(props)=>{
    const inputLen=props.inputLen;
    var jugmentOnLen=null;
    if(inputLen<5)
    {
        jugmentOnLen=(
            <p>Text to short</p>
        );
    }else if(inputLen>12){
        jugmentOnLen=(
            <p>Text too long</p>
        );
    }else{
        jugmentOnLen=(
            <p>Text size perfect</p>
        );
    }

    return(
        <div>
            {jugmentOnLen}
        </div>
    );
};

export default ValidationComponent;
