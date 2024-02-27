import App from "../App"
// import results from App

const Answerdata = ({ results }) => {
    return(
        <div className="w-full bg-red-200 p-3 border border-2 rounded">
            <h1 className="">Results</h1>
            <div className="flex flex-colunm gap-2 items-center">
                <div>
                    <p>{JSON.stringify(results)}.</p>
                </div>
             </div>
        </div>
)

}

export default Answerdata;