import './loading_spinner.scss'

export default function LoadingSpinner() {
    return (
        <div className="loading-container">
            <h2>Loading data...</h2>
            <div className="loading-container__spinner"></div>
        </div>   
    )
}