
interface Type {
    svgPath: string,
}


export function Tecnology_Icon(  {svgPath  } : Type) {


    return (
        <div className="flex flex-col items-center m-10">
            <div className="icon" dangerouslySetInnerHTML={{ __html: svgPath }}></div>
        </div>

    )
}