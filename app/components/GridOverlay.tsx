



export default function GridOverlay(){
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Background */}
            <div
                className="absolute inset-0
                bg-[radial-gradient(circle_at_30%_40%,rgba(5,150,105,0.09),transparent_55%),radial-gradient(circle_at_75%_65%,rgba(30,64,175,0.07),transparent_45%),radial-gradient(circle_at_55%_10%,rgba(127,29,29,0.06),transparent_40%)]
                "
            />

            {/* Grid Overlay */}
            <div
                className="absolute inset-0
                    bg-[linear-gradient(rgba(16,185,129,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.028)_1px,transparent_1px)]
                    bg-[size:52px_52px]
                "
            />
        </div>
    )
}