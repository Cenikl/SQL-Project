

export default function Cards({ className, title, children }) {
    return (
        <div className={className + " rounded-3 bg-light"}>
            <p className="w-100 text-center fs-5 alert alert-dark">{title}</p>
            <div className="container">
                {children}
            </div>
        </div>
    );
}