

export default function Cards({ className, title, children, color }) {
    return (
        <div className={className + " rounded-3 bg-light"}>
            <p className={"w-100 text-center fs-5 alert " + color}>{title}</p>
            <div className="container">
                {children}
            </div>
        </div>
    );
}