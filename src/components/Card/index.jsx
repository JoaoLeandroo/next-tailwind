
export default function Card(props) {
    return(
        <div className="w-40 h-40 bg-slate-900 rounded-md">
            <h2 className="text-white text-center w-full mt-2">{props.tittle}</h2>
        </div>
    )
}