export default function GreenSectionComponent() {
    return (
        <div className="green-section flex flex-col sm:flex-row bg-green-500 min-h-96">
<div
    className="container py-5 px-auto min-h-96 flex items-center justify-center overflow-hidden sm:block hidden"
    style={{
        backgroundColor: "#f4e9dd",
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/buttons.png)`,
        backgroundSize: "30%",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
    }}
>
    <img
        src={`${process.env.PUBLIC_URL}/images/222.webp`}
        alt="Decorative Image"
        className="w-2/3 h-auto object-contain  slide-top-alternate-reverse"
        style={{
            display: "block", // Ensures no inline space issues
            margin: "0 auto", // Centers horizontally (fallback for non-flexbox scenarios)
        }}
    />
</div>

            <div
                className="container py-5 min-h-96 flex flex-col items-center justify-center text-start"
                style={{ backgroundColor: "#44704D" }}
            >
                <h1 className="text-7xl font-bold text-white text-center">
                    Our love is
                    <span className="mx-3 text-amber-400">PIZZA </span>
                    shaped 🍕
                </h1>
                <h3 className="text-3xl mt-4 italic font-bold">
                    Won’t you have a slice ?
                </h3>
                <h2 className="heading-section-display text-3xl"></h2>
            </div>
        </div>
    );
}
